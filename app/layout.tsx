import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Poppins ({
  weight: ["100","300","400","500","700","900","200","800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leol Landing Page | Next 15",
  description: "App Landing Page using Next Js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
