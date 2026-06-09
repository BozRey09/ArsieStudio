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
  title: "Arsie Studio | Jasa Desain Arsitektur Masjid",
  description:
    "Konsultan desain arsitektur masjid profesional. Melayani desain masjid modern, visualisasi 3D rendering, gambar kerja konstruksi, renovasi masjid, dan masterplan kawasan islami.",

  keywords: [
    "desain masjid",
    "arsitek masjid",
    "jasa desain masjid",
    "desain masjid modern",
    "arsitektur masjid",
    "render masjid 3D",
    "gambar kerja masjid",
    "renovasi masjid",
    "masterplan kawasan islami",
    "konsultan arsitektur masjid",
  ],

  authors: [
    {
      name: "Arsie Studio",
    },
  ],

  creator: "Arsie Studio",

  metadataBase: new URL("https://arsiestudio.vercel.app"),

  openGraph: {
    title: "Arsie Studio | Spesialis Desain Arsitektur Masjid",
    description:
      "Desain masjid modern, visualisasi 3D, gambar kerja konstruksi, dan masterplan kawasan islami.",
    url: "https://arsiestudio.vercel.app",
    siteName: "Arsie Studio",
    locale: "id_ID",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
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
