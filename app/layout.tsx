import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyvoriq.pl"),

  title: {
    default: "KYVORIQ — Strony internetowe dla ambitnych firm",
    template: "%s | KYVORIQ",
  },

  description:
    "Projektujemy nowoczesne strony internetowe, które budują profesjonalny wizerunek i pomagają firmom zdobywać klientów.",

  keywords: [
    "strony internetowe",
    "projektowanie stron",
    "tworzenie stron internetowych",
    "landing page",
    "web design",
    "strony dla firm",
    "Warszawa",
    "KYVORIQ",
  ],

  authors: [
    {
      name: "KYVORIQ",
      url: "https://kyvoriq.pl",
    },
  ],

  creator: "KYVORIQ",
  publisher: "KYVORIQ",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://kyvoriq.pl",
    siteName: "KYVORIQ",
    title: "KYVORIQ — Strony internetowe dla ambitnych firm",
    description:
      "Projektujemy strony internetowe, które robią profesjonalne pierwsze wrażenie i pomagają firmom zdobywać klientów.",
  },

  twitter: {
    card: "summary_large_image",
    title: "KYVORIQ — Strony internetowe dla ambitnych firm",
    description:
      "Projektujemy strony internetowe, które robią profesjonalne pierwsze wrażenie i pomagają firmom zdobywać klientów.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] font-sans text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}