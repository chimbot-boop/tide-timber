import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceCode = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Contract Smoke Test | York Bookbinder",
  description:
    "A compact letterpress-inspired site for a fictional independent York bookbinder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${sourceCode.variable}`}
    >
      <body className="min-h-screen bg-bg font-body text-text antialiased">
        {children}
      </body>
    </html>
  );
}
