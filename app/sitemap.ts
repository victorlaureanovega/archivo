import { ENTRADAS } from "@/data/Blog";

export default function sitemap() {
  return Object.values(ENTRADAS).flat().map((entrada) => ({
    url: `https://victorlaureanovega.com/blog/${entrada.enlace}`,
    lastModified: new Date()
  }));
}
