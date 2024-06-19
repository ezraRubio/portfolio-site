import React from "react";
import Navigator from "@/components/NavBar/Navigator";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigator />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
