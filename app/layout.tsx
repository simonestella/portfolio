import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AppProviders } from "@/providers/app-providers";
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

const isDev = process.env.NODE_ENV === "development";

const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "img-src 'self' data: blob:",
  "connect-src 'self' https://api.web3forms.com",
  "object-src 'none'",
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
            {children}
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
