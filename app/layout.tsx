import { Inter } from "next/font/google";

import "./globals.css";
import Root from "./Root";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
