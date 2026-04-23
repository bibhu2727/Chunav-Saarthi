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
  title: "Chunav Saarthi - Your Indian Election Guide | चुनाव सारथी",
  description: "An intelligent, multi-lingual AI assistant that helps you understand the Indian election process, voter registration, timelines, and voting steps in an interactive way.",
  keywords: "Indian elections, voter registration, ECI, election process, NOTA, EVM, VVPAT, Lok Sabha 2024, chunav saarthi",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
