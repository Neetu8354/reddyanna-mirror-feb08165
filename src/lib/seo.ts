import { useEffect } from "react";

export const SITE_URL = "https://www.reddyannasite.live";

type SeoOptions = {
  title: string;
  description: string;
  path: string; // e.g. "/about"
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  keywords?: string; // comma-separated
};

const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
};

const setLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

const setCanonical = (href: string) => {
  const existing = document.querySelectorAll(`link[rel="canonical"]`);
  existing.forEach((el) => el.remove());
  const el = document.createElement("link");
  el.rel = "canonical";
  el.href = href;
  document.head.appendChild(el);
};

export const useSeo = ({ title, description, path, ogImage, jsonLd, keywords }: SeoOptions) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setCanonical(url);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "Reddyanaa", "property");
    if (ogImage) setMeta("og:image", ogImage, "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (ogImage) setMeta("twitter:image", ogImage);

    const scripts: HTMLScriptElement[] = [];
    if (jsonLd) {
      const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      items.forEach((data) => {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.text = JSON.stringify(data);
        document.head.appendChild(s);
        scripts.push(s);
      });
    }
    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, ogImage, keywords, JSON.stringify(jsonLd)]);
};

export const breadcrumbLd = (trail: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: trail.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.name,
    item: `${SITE_URL}${t.path}`,
  })),
});
