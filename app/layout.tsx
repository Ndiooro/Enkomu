import type { Metadata } from "next";
import "./globals.css";

const publicUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const pageTitle = "Enkomu — Agir et transformer notre communauté ensemble";
const pageDescription =
  "Enkomu est la première plateforme collaborative qui connecte les citoyens, organisations et projets locaux pour bâtir ensemble un Sénégal plus uni et solidaire.";

export const metadata: Metadata = {
  metadataBase: new URL(publicUrl),
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    type: "website",
    title: pageTitle,
    description: pageDescription,
    locale: "fr_SN",
    images: [
      {
        url: "/enkomu/img6.png",
        width: 2070,
        height: 2070,
        alt: "Une famille réunie, symbole de la communauté Enkomu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/enkomu/img6.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
