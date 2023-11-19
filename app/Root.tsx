import { Header } from "@/components/Header";
import Navigation from "@/components/Navigation";
import NavigationLink from "@/components/NavigationLink";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

import './Root.css';

export default function Root(props: PropsWithChildren<{}>) {
  return (
    <div className={`root ${inter.className}`}>
      <div className="root__container">
        <Header>
          <Navigation>
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/about">About</NavigationLink>
            <NavigationLink href="/eula">Eula</NavigationLink>
            <NavigationLink href="/contact">Contact</NavigationLink>
          </Navigation>
        </Header>
        {props.children}
      </div>
    </div>
  );
}
