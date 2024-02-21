"use client";
import { NavLink } from "@remix-run/react";
import { colors } from "../app/tokens.stylex";

import * as stylex from "@stylexjs/stylex";
import { ComponentPropsWithoutRef } from "react";
const styles = stylex.create({
  root: {
    display: "block",
    padding: { default: "0.5rem  0.75rem ", "@media (min-width: 768px)": 0 },
    borderRadius: "0.25rem ",
    backgroundColor: {
      default: null,
      ":hover": {
        default: colors.surfaceVariant,
        "@media (min-width: 768px)": colors.primary,
      },
    },
    color: {
      default: null,
      ":hover": {
        default: colors.onSurfaceVariant,
        "@media (min-width: 768px)": 'transparent',
      },
    },
  },
  active: {
    backgroundColor: {
      default: colors.primary,
      "@media (min-width: 768px)": 'transparent',
    },
    color: {
      default: colors.surface,
      "@media (min-width: 768px)": colors.primary,
    },
  },
});

export default function NavigationLink({
  ...props
}: ComponentPropsWithoutRef<typeof NavLink>) {
  return (
    <li>
      <NavLink
        {...props}
        {...stylex.props(styles["root"])}
        style={({ isActive }) =>
          stylex.props(styles["root"], isActive && styles.active).style
        }
        className={({ isActive }) =>
          stylex.props(styles["root"], isActive && styles.active).className
        }
      ></NavLink>
    </li>
  );
}
