"use client";

import { NavLink } from "@remix-run/react";
import { ComponentProps } from "react";

export default function NavigationLink({
  ...props
}: ComponentProps<typeof NavLink>) {
  return (
    <li>
      <NavLink
        className={({ isActive }) =>
          `block py-2 px-3 ${
            isActive
              ? "md:text-primary bg-primary text-surface md:bg-transparent"
              : "hover:md:text-primary hover:bg-surface-variant md:hover:bg-transparent hover:text-on-surface-variant"
          } rounded md:p-0`
        }
        {...props}
      ></NavLink>
    </li>
  );
}
