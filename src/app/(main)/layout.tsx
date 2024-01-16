import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import localFont from "next/font/local";
import Provider from "@/components/layout/Provider";
import DarkModeBtn from "@/components/layout/DarkModeBtn";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "/manifest.json", // we are accessing our manifest file here
};

const iranSans = localFont({
  src: [
    {
      path: "../../../public/fonts/IRANSansX-Regular.woff",
      weight: "400",
    },
    {
      path: "../../../public/fonts/IRANSansX-Bold.woff",
      weight: "700",
    },
    {
      path: "../../../public/fonts/IRANSansXFaNum-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-iranSans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`relative ${iranSans.variable} font-sans overscroll-none`}
    >
      <Provider>
        <DarkModeBtn />
        <body className={`sm:px-5 h-screen overflow-hidden`}>{children}</body>
      </Provider>
    </html>
  );
}
