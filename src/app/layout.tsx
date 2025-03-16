import type { Metadata } from "next";
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
      <body
        className={`${lato.className}`}
      >
        <TopMenu />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
