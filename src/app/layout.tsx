import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Playfair_Display } from "next/font/google";
import { profile, seo, siteUrl } from "@/lib/site";
import "./globals.css";

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${profile.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: seo.shortTitle,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: "Human Resources",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: seo.shortTitle,
    title: seo.title,
    description: seo.description,
    locale: "en_US",
    firstName: "Rafia",
    lastName: "Eman",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  formatDetection: {
    telephone: false,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a0e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable} antialiased`}
    >
      <body className="noise min-h-full overflow-x-clip">{children}</body>
    </html>
  );
}
