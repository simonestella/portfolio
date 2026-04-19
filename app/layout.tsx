import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { AppProviders } from "@/providers/app-providers";
import { CustomCursor } from "@/components/shared/custom-cursor";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist"
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://simonestella.github.io/portfolio"),
  title: "Portfolio | Simone Stella",
  description: "Integration Engineer & Full Stack Developer portfolio.",
  icons: {
    icon: `${basePath}/images/avatar.png`,
    apple: `${basePath}/images/avatar.png`,
  },
  openGraph: {
    title: "Portfolio | Simone Stella",
    description: "Integration Engineer & Full Stack Developer portfolio.",
    images: [{ url: "/images/avatar.png", width: 400, height: 400, alt: "Simone Stella" }],
  },
  twitter: {
    card: "summary",
    title: "Portfolio | Simone Stella",
    description: "Integration Engineer & Full Stack Developer portfolio.",
    images: ["/images/avatar.png"],
  },
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
  "frame-ancestors 'none'",
].join("; ");

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/images/avatar.png`} />
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
