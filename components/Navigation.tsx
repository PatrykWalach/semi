import { ReactNode } from "react";

import './Navigation.css';

export default function Navigation(props: { children: ReactNode }) {
  return (
    <ul className="navigation">
      {props.children}
    </ul>
  );
}
