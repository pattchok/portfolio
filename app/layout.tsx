import type { Metadata } from "next";
import { Calistoga, Quicksand, DynaPuff } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-calistoga",
  weight: ["400"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600"],
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
  title: "𐔌՞. ✿ patt",
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
      className={`${calistoga.variable} ${quicksand.variable} ${dynapuff.variable} ${lomaThin.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
