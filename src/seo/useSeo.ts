import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description: string;
  /** Chemin de la page, ex: "/contact". Sert à l'URL canonique. */
  path?: string;
};

// ⚠️ Remplace par ton vrai domaine (sans slash final)
const SITE_URL = "https://www.spt2a.com";

function setMeta(attr: "name" | "property", key: string, content: string) {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Met à jour le <title>, la meta description, le canonical et les balises
 * Open Graph à chaque changement de page. Améliore le référencement de
 * chaque route individuellement.
 */
export function useSeo({ title, description, path = "/" }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta("name", "description", description);
    setCanonical(url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
  }, [title, description, path]);
}
