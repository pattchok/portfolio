import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader, Geist_Mono, Lato } from "next/font/google";
import localFont from "next/font/local";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

// Graphik look-alike: free, open-source neo-grotesque with similar proportions.
const graphik = Hanken_Grotesk({
  variable: "--font-graphik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Display serif for headlines: soft, warm, screen-readable old-style serif.
const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Lato — used for footer text.
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lomaThin = localFont({
  src: "../public/fonts/LomaThin.ttf",
  variable: "--font-loma",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Patt — Product Manager",
    template: "%s — Patt",
  },
  description:
    "Hi, I'm Patt. I make AI products into experiences anyone can use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${graphik.variable} ${serif.variable} ${geistMono.variable} ${lomaThin.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Nav />
        <main className="flex-1 pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
