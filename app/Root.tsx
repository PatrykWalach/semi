import { Header } from "@/components/Header";
import Navigation from "@/components/Navigation";
import NavigationLink from "@/components/NavigationLink";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Root(props: PropsWithChildren<{}>) {
  return (
    <div className={`bg-surface min-h-screen text-on-surface ${inter.className}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
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
