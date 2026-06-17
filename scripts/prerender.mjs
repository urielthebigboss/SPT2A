// Pré-rendu post-build : ouvre chaque page dans un navigateur headless,
// attend le rendu complet (React, Leaflet, images) et enregistre le HTML
// final dans dist/. Google reçoit ainsi une page pleine, pas un <div> vide.
//
// Lancé automatiquement après "npm run build" (script "postbuild").

import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

// Sur Vercel / Lambda, le Chrome de Puppeteer ne démarre pas (libs système
// manquantes). On utilise alors @sparticuz/chromium, conçu pour le serverless.
// En local, on garde le Chrome embarqué par Puppeteer.
const IS_SERVERLESS =
  !!process.env.VERCEL ||
  !!process.env.AWS_LAMBDA_FUNCTION_NAME ||
  !!process.env.AWS_REGION;

async function launchBrowser() {
  if (IS_SERVERLESS) {
    const chromium = (await import("@sparticuz/chromium")).default;
    return puppeteer.launch({
      args: [...chromium.args, "--no-sandbox", "--disable-setuid-sandbox"],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }
  return puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
}

// Doit correspondre aux <Route> de src/App.tsx
const ROUTES = ["/", "/sante", "/apropos", "/contact", "/activites"];
const PORT = 4185;
const ORIGIN = `http://localhost:${PORT}`;

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        /* pas encore prêt */
      }
      if (Date.now() - start > timeoutMs) return reject(new Error("Le serveur de preview n'a pas démarré à temps."));
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  // 1) Sert le dossier dist avec fallback SPA
  const preview = spawn(
    `npx vite preview --port ${PORT} --strictPort`,
    { cwd: join(__dirname, ".."), stdio: "ignore", shell: true }
  );

  let browser;
  try {
    await waitForServer(ORIGIN);

    // 2) Navigateur headless (serverless sur Vercel, local sinon)
    browser = await launchBrowser();

    for (const route of ROUTES) {
      const page = await browser.newPage();
      await page.goto(`${ORIGIN}${route}`, {
        waitUntil: "networkidle0",
        timeout: 60000,
      });
      // Laisse un instant aux animations / cartes pour se stabiliser
      await new Promise((r) => setTimeout(r, 800));

      const html = "<!doctype html>\n" + (await page.content());
      const outFile =
        route === "/"
          ? join(distDir, "index.html")
          : join(distDir, route.replace(/^\//, ""), "index.html");

      await mkdir(dirname(outFile), { recursive: true });
      await writeFile(outFile, html, "utf8");
      console.log(`✓ pré-rendu : ${route} -> ${outFile.replace(distDir, "dist")}`);
      await page.close();
    }
  } finally {
    if (browser) await browser.close();
    preview.kill();
  }
}

main().catch((err) => {
  // Non-bloquant : même si le pré-rendu échoue, le site se déploie quand même
  // (l'index.html statique contient déjà le SEO essentiel : titre, meta, JSON-LD).
  console.warn(
    "⚠️  Pré-rendu ignoré, le déploiement continue. Raison :",
    err?.message || err
  );
  process.exit(0);
});
