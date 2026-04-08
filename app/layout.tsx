import type { Metadata } from "next";
import { DynaPuff, Playfair_Display, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dynapuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dynapuff",
  display: "swap",
});

const lomaThin = localFont({
  src: "./fonts/LomaThin.ttf",
  variable: "--font-loma",
  display: "swap",
});


export const metadata: Metadata = {
  title: "patt chokchainant",
  description: "PM with 6+ years building across AI and data. Based in Seattle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dynapuff.variable} ${lomaThin.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
