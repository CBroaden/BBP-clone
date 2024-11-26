import type { Metadata } from "next";
import { Merienda, Poppins, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Head from "next/head";
import Header from "./components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
  display: 'swap',
  variable: '--font-poppins'
})

const roboto = Roboto_Serif({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-roboto'
})

const merienda = Merienda({
  subsets: ["latin"] ,
  variable: '--font-merienda',
  display: 'swap'
})


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

      <body className={`${poppins.variable} ${merienda.variable} ${roboto.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
