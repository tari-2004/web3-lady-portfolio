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
  title: "Bio Francis | Web3 Growth Strategist & Technical Writer",
  description: "Scaling Web3 protocols through organic lead generation, technical writing, and human-centric content strategy.",
  keywords: ["Web3 Marketing", "Technical Writing", "Blockchain Strategy", "Organic Lead Gen", "Bio Francis"],
  authors: [{ name: "Bio Francis" }],
  openGraph: {
    title: "Bio Francis | Web3 Growth Strategist",
    description: "Architecting narratives for the next billion users in the blockchain space.",
    url: "https://biofrancis.com", // Replace with her actual domain
    siteName: "Bio Francis Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630px image with her name and title
        width: 1200,
        height: 630,
        alt: "Bio Francis Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bio Francis | Web3 Growth Strategist",
    description: "Scaling Web3 ecosystems with intelligence and empathy.",
    // creator: "@yourtwitterhandle", // Add her handle here
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white selection:bg-indigo-500/30`}
      >
        {children}
      </body>
    </html>
  );
}