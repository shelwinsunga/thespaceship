import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Grain from "@/components/grain";
import AnimatedFavicon from "@/components/favicon";

const pressStart2P = localFont({
  src: "./fonts/PressStart2P-Regular.ttf",
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
      <head>
        <AnimatedFavicon />
      </head>
      <body
        className={`${pressStart2P.variable} antialiased`}
      >
        <Grain />
        {children}
      </body>
    </html>
  );
}
