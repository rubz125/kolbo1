import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "כלבו לקבלן | ציוד בנייה, חשמל, אינסטלציה ותאורה - אשדוד",
  description: "כלבו לקבלן - כל מה שהקבלן צריך במקום אחד. ציוד בנייה, חשמל, אינסטלציה, צבע, כלי עבודה ותאורה. 51 רחוב כנרת, אשדוד. 053-523-9103",
  keywords: "כלבו לקבלן, ציוד בנייה, חשמל, אינסטלציה, כלי עבודה, תאורה, אשדוד, קבלן, חומרי בניין",
  openGraph: {
    title: "כלבו לקבלן | ציוד מקצועי לקבלנים",
    description: "כל מה שהקבלן צריך במקום אחד. ציוד בנייה, חשמל, אינסטלציה, תאורה ועוד.",
    locale: "he_IL",
    type: "website",
  },
  alternates: {
    canonical: "https://kolbokablan.co.il",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-heebo)] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
