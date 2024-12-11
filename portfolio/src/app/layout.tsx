import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const lexend = Lexend({
  variable: "--font-lexend",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"]
})
export const metadata: Metadata = {
  title: "Sami Syed",
  description: "A Web Developer's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} antialiased`}
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
