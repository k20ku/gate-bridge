import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "k20ku Blog",
    template: "%s | k20ku Blog"
  },
  description: "Personal Blog"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body
        className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="flex min-h-screen flex-col">
          <Header title="k20ku Site" />
          <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
