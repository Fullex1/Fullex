import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Fullex",
  description: "The Official Fullex Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<div>Loading...</div>}>
        <body
          className={`${kanit.variable} antialiased`}
        >
          {children}
        </body>
      </Suspense>
     
    </html>
  );
}
