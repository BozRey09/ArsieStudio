import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arsie Studio | Desain Arsitektur Masjid Modern",

  description:
    "Arsie Studio adalah studio desain arsitektur yang berfokus pada perancangan masjid modern, visualisasi 3D, gambar kerja konstruksi, dan masterplan kawasan islami.",

  keywords: [
    "desain masjid",
    "arsitek masjid",
    "jasa desain masjid",
    "desain masjid modern",
    "arsitektur masjid",
    "render masjid 3D",
    "gambar kerja masjid",
  ],

  authors: [
    {
      name: "Arsie Studio",
    },
  ],

  creator: "Arsie Studio",

  openGraph: {
    title: "Arsie Studio",
    description: "Spesialis desain arsitektur masjid modern.",
    url: "https://arsiestudio.id",
    siteName: "Arsie Studio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
