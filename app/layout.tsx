import type React from "react";
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor Gonzalez (VictorGXN) - Programador y Creador de Contenido",
  description:
    "Portfolio de Victor Gonzalez (VictorGXN) - Programador, creador de contenido y fundador de CodeGXN. Proyectos de desarrollo web, tutoriales de programación y recursos para desarrolladores.",
  keywords: [
    "VictorGXN",
    "Victor Gonzalez",
    "CodeGXN",
    "programación",
    "desarrollo web",
    "tutoriales",
    "BlitzShare",
    "portfolio",
    "desarrollador",
  ],
  authors: [{ name: "Victor Gonzalez", url: "https://victorgxn.com" }],
  creator: "Victor Gonzalez (VictorGXN)",
  publisher: "Victor Gonzalez",
  robots: "index, follow",
  alternates: {
    canonical: "https://victorgxn.com",
  },
  openGraph: {
    title: "Victor Gonzalez (VictorGXN) - Programador y Creador de Contenido",
    description:
      "Portfolio oficial de Victor Gonzalez (VictorGXN) - Programador, creador de contenido y fundador de CodeGXN.",
    url: "https://victorgxn.com",
    siteName: "Victor Gonzalez Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Gonzalez (VictorGXN)",
    description: "Programador, Creador de contenido y fundador de CodeGXN",
    creator: "@victorgxn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className}`}>
      <head>
        <link rel="canonical" href="https://victorgxn.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
