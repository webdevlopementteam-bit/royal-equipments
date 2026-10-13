import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Floating";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Commercial Kitchen Equipment Manufacturers in Delhi",
  description:
    "Royal Equipments – Leading Commercial Kitchen Equipment Manufacturers in Delhi. We offer durable, high-performance kitchen solutions for hotels, restaurants & bakeries. Get a free quote today!",
  keywords: [
    "Commercial Kitchen Equipment Manufacturers",
    "Commercial Kitchen Equipment Manufacturers in Delhi",
    "Royal Equipments",
  ],
  icons: {
    icon: "/logo.png",
  },

  alternates: {
    canonical: "https://www.royalequipments.in/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
