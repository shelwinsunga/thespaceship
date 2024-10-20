import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Grain from "@/components/grain";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const pressStart2P = localFont({
  src: "./fonts/PressStart2P-regular.ttf",
  variable: "--font-press-start-2p",
});

export const metadata: Metadata = {
  title: "The Spaceship",
  description: "Multi-cultural hackerhouse, based in SF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart2P.variable} antialiased`}
      >
        <Grain />
        {children}
      </body>
    </html>
  );
}
