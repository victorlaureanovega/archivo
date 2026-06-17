import { Entradas } from "@/data/Entradas";

export default function sitemap() {
  return Entradas.map((entrada) => ({
    url: `https://victorlaureanovega.com/blog/${entrada.enlace}`,
    lastModified: new Date(),
  }));
}
