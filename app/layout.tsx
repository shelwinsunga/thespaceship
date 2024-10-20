import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Grain from "@/components/grain";
 
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
