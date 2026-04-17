import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AppProviders } from "@/providers/app-providers";
import { Navbar } from "@/components/layout/navbar";
import { CustomCursor } from "@/components/shared/custom-cursor";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist"
});

export const metadata: Metadata = {
  title: "Portfolio | Simone Stella",
  description: "Integration Engineer & Full Stack Developer portfolio."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        <AppProviders>
          <CustomCursor />
          {/* Ambient floating orbs */}
          <div className="bg-orb bg-orb-1" aria-hidden />
          <div className="bg-orb bg-orb-2" aria-hidden />
          <div className="bg-orb bg-orb-3" aria-hidden />
          <div className="mesh-bg">
            <Navbar />
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
