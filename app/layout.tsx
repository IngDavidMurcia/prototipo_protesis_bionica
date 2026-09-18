
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prótesis Biónicas | Semillero SITAI",
  description:
    "Micrositio informativo del proyecto Diseño y desarrollo progresivo de un prototipo de brazo biónico de bajo costo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
