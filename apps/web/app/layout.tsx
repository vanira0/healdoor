import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heal Door \u2013 Home Physiotherapy & Oxygen Equipment Rental in Delhi",
  description:
    "Best home physiotherapy in Delhi NCR. Certified BPT/MPT physiotherapists at your doorstep. Oxygen concentrator, BiPAP & CPAP machine rental and purchase in Delhi. Same day service.",
  keywords: "Home Physiotherapy in Delhi, Best Physiotherapist at Home in Delhi, Physiotherapy Services Delhi NCR, Home Healthcare Services in Delhi, Oxygen Concentrator Rental in Delhi, BiPAP Machine Rental Delhi, CPAP Machine Rental Delhi, Medical Equipment Rental Delhi, Post Surgery Physiotherapy Delhi, Stroke Rehabilitation Delhi, Elderly Care Physiotherapy Delhi, Respiratory Support Equipment Delhi"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
