import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Head from "next/head";
import Header from "./components/header";

const playfair = Playfair_Display({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "500"
});



export const metadata: Metadata = {
  title: "Bella Backdrops & Props",
  description: "Balloon Decoration service based in the Detroit Metropolitan Area",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
