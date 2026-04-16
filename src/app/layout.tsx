import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaia Mutfak | Doğanın Tadı, Mutfağınızda",
  description:
    "Tarladan tabağa, her bir içerik özenle seçilmiş, mevsimin en taze çiçekleri ve otlarıyla harmanlanmış bir hikaye anlatıyor.",
  keywords: [
    "Gaia Mutfak",
    "botanik mutfak",
    "organik salata",
    "İstanbul restoran",
    "sağlıklı yemek",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${newsreader.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
