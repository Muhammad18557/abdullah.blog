import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "../components/navbar/NavBar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah's Digital Playground",
  description:
    "Discover the journey of Muhammad Abdullah in the world of software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="p-2 bg-gray-900 font-mono">{children}</main>
        {/* <footer className="p-4 bg-gray-900 dark:bg-gray-900 text-center text-white">
          © 2024 Abdullah. All rights reserved.
        </footer> */}
        <Analytics />
      </body>
    </html>
  );
}
