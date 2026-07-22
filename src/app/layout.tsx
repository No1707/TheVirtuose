import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Grain from "@/components/Grain";
import Cursor from "@/components/Cursor";
import Frame from "@/components/Frame";
import Nav from "@/components/Nav";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE = "https://the-virtuose.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "The Virtuose — Your Video Production Partner",
    template: "%s — The Virtuose",
  },
  description:
    "A boutique video production studio. French Made, based in Andorra. Ads, social, brand films and long-form for brands that want to look inevitable.",
  keywords: [
    "video production",
    "video editing",
    "brand films",
    "advertising video",
    "social media reels",
    "Andorra",
    "The Virtuose",
    "Alec Zigic",
  ],
  authors: [{ name: "The Virtuose" }],
  openGraph: {
    title: "The Virtuose — Your Video Production Partner",
    description:
      "A boutique video production studio. French Made, based in Andorra.",
    url: SITE,
    siteName: "The Virtuose",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Virtuose — Your Video Production Partner",
    description:
      "A boutique video production studio. French Made, based in Andorra.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>
          <Frame />
          <Nav />
          {children}
        </SmoothScroll>
        <Grain />
        <Cursor />
      </body>
    </html>
  );
}
