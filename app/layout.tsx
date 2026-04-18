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
  description: "Integration Engineer & Full Stack Developer portfolio.",
  other: {
    // Prevents the browser from leaking the full URL when navigating to external sites
    referrer: "strict-origin-when-cross-origin",
  },
};

const csp = [
  "default-src 'self'",
  // Next.js requires unsafe-inline for its runtime hydration scripts
  "script-src 'self' 'unsafe-inline' https://js.hcaptcha.com https://newassets.hcaptcha.com",
  "style-src 'self' 'unsafe-inline'",
  // Geist font is self-hosted at build time by next/font — no external font CDN needed
  "font-src 'self'",
  "img-src 'self' data: blob:",
  // Allow fetching only the services this site actually uses
  "connect-src 'self' https://api.web3forms.com https://hcaptcha.com https://*.hcaptcha.com",
  // hCaptcha renders inside an iframe
  "frame-src https://hcaptcha.com https://*.hcaptcha.com",
  // Block Flash, Java, and all legacy plugin types entirely
  "object-src 'none'",
  // Prevent base-tag injection attacks
  "base-uri 'self'",
].join("; ");

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
      </head>
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
