import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Víctor Laureano Vega",
  description: "Archivo",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
