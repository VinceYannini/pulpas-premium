import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VerdeSer® | Pulpa 100% Natural — Calidad Responsable",
  description:
    "Pulpas de fruta 100% natural, sin conservadores ni colorantes. Surtimos a más de 50 negocios en Querétaro. Envíos nacionales en frío.",
  keywords: "pulpa de fruta, pulpa natural, mango, maracuyá, guanábana, betabel, jugos, mayoreo, Querétaro",
  openGraph: {
    title: "VerdeSer® | Pulpa 100% Natural",
    description: "Pulpa de fruta natural sin conservadores. Surtimos negocios en QRO y toda la república.",
    siteName: "VerdeSer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
