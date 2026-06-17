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

    // 2) Navigateur headless
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

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
  console.error("Échec du pré-rendu :", err);
  process.exit(1);
});
