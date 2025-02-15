import clsx from "clsx";
import type { Viewport } from "next";
import { Inter, Yanone_Kaffeesatz } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const yanone = Yanone_Kaffeesatz({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-yanone-kaffeesatz",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export async function generateMetadata() {
  return {
    title: {
      default: "sciwork",
      template: "sciwork - %s",
    },
    description: "Science, code, and open source.",
    metadataBase: process.env.SITEURL && new URL(process.env.SITEURL),
    openGraph: {
      title: "sciwork",
      description: "science, code, and open source.",
      url: process.env.SITEURL,
      siteName: "sciwork",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "sciwork",
      description: "science, code, and open source.",
    },
    icons: {
      icon: [
        {
          url: "/icons/favicon.ico",
          sizes: "any",
        },
        {
          url: "/icons/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
        {
          url: "/icons/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "relative flex min-h-screen w-full flex-col overscroll-none bg-white antialiased",
          inter.className,
          yanone.variable,
        )}
      >
        <Header />
        <main className="tw-grow text-gray-900">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
