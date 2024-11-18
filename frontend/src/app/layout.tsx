import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { APP_DESCRIPTION, APP_NAME } from "./utils/constants";

const roboto = localFont({
  src: "./fonts/Roboto/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
