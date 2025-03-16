import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinVision - AI-Powered Financial Trading Platform",
  description: "A comprehensive financial trading platform with AI capabilities, dark mode support, and multi-user management.",
  keywords: "finance, trading, AI, dark mode, dashboard, market data, portfolio management",
  authors: [{ name: "FinVision Team" }],
  creator: "FinVision",
  publisher: "FinVision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}