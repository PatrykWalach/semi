import { ReactNode } from "react";

export default function Navigation(props: { children: ReactNode }) {
  return (
    <ul className="flex flex-col font-medium mt-4 rounded-lg md:flex-row md:gap-8 md:mt-0 md:border-0 gap-1">
      {props.children}
    </ul>
  );
}
