import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";

import globalsHref from "./globals.css";
import { Header } from "./components/Header";
import Navigation from "./components/Navigation";
import NavigationLink from "./components/NavigationLink";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalsHref },
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="bg-surface text-on-surface">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <Header>
              <Navigation>
                <NavigationLink to="/">Home</NavigationLink>
                <NavigationLink to="about">About</NavigationLink>
                <NavigationLink to="eula">Eula</NavigationLink>
                <NavigationLink to="contact">Contact</NavigationLink>
              </Navigation>
            </Header>
            
            <Outlet />
            <Scripts />
            <LiveReload />
          </div>
        </div>
      </body>
    </html>
  );
}
