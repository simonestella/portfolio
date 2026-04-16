import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist"
});

export const metadata: Metadata = {
  title: "Portfolio | Apple-Like",
  description: "Portfolio one-page con stile Apple-like."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body className={`${geist.variable} mesh-bg antialiased`}>{children}</body>
    </html>
  );
}
