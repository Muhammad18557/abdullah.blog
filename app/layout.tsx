import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from '../components/navbar/NavBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah's Portfolio",
  description: "This is the portfolio of Muhammad Abdullah",
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
        {/* <footer className="p-4 bg-gray-100 dark:bg-gray-900 text-center">
          © 2024 Your Name. All rights reserved.
        </footer> */}
      </body>
    </html>
  );
}
