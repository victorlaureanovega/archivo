import { BLOG } from "@/data/Blog";

export default function sitemap() {
  return Object.values(BLOG).flat().map((entrada) => ({
    url: `https://victorlaureanovega.com${entrada.enlace}`,
    lastModified: new Date()
  }));
}
