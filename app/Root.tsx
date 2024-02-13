import { Inter } from "next/font/google";


import Root from "./.Root";
import { Meta, Links, Outlet, ScrollRestoration, Scripts, MetaFunction } from "@remix-run/react";

import "./globals.css";

export const links = ()=>[
  { rel:"preconnect" ,href:"https://fonts.googleapis.com"},
{ rel:"preconnect" ,href:"https://fonts.gstatic.com" ,crossOrigin:''},
{ href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" ,rel:"stylesheet"},
]

export const meta = (()=>[{
  title: "Create Next App",
  description: "Generated by create next app",
}]) satisfies MetaFunction;

export default function Layout() {
  return (
    <html lang="en" dir="ltr">
      <head>
          <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Meta />
				<Links />
   </head>

      <body>
        <Root>  <Outlet></Outlet></Root>
      
  <ScrollRestoration />
  <Scripts />
      </body>
    </html>
  );
}
