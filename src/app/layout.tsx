import type { Metadata } from "next";
import Script from "next/script"; // Importar next/script
import { lato } from "@/config/fonts";
import "./globals.css";
import { TopMenu } from "@/components/ui/top-menu/TopMenu";
import { SideBar } from "@/components/ui/top-menu/SideBar";

export const metadata: Metadata = {
  title: "Collectif Engineering",
  description: "MEP Engineering Company",
  icons: {
    icon: "/favicons.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       <!-- Google tag (gtag.js) --> 
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16929754367"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-16929754367'); 
      </script>
      </head>
      <body className={`${lato.className}`}>
        <TopMenu />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
