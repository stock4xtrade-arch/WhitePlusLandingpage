import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

import { ContactDialog } from "@/components/contact-dialog";
import { ContactProvider } from "@/components/contact-provider";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { VideoTeaser } from "@/components/video-showcase";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { site } from "@/content/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <ContactProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFab />
          <VideoTeaser />
          <ContactDialog />
        </ContactProvider>
      </body>
    </html>
  );
}
