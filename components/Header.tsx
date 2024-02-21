"use client";
const Image = "img";
import { Link } from "@remix-run/react";
import { useState } from "react";

import * as stylex from "@stylexjs/stylex";
import { colors } from "../app/tokens.stylex";
const styles = stylex.create({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem  0",
  },
  link: { display: "flex", justifyItems: "center" },
  title: {
    fontSize: "1.5rem ",
    lineHeight: "2rem ",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  logo: { height: "2rem ", marginInlineEnd: "0.75rem " },
  button: {
    display: { default: "inline-flex", "@media (min-width: 768px)": "none" },
    alignItems: "center",
    padding: "0.5rem ",
    marginInlineStart: "0.75rem ",
    fontSize: "0.875rem ",
    lineHeight: "1.25rem ",
    borderRadius: "0.5rem ",
    color: colors.onPrimaryContainer,
    backgroundColor: {
      default: null,
      ":hover": colors.primaryContainer,
    },
    outline: {
      default: null,
      ":focus": "2px solid transparent",
    },
    outlineOffset: {
      default: null,
      ":focus": "2px",
    },
    boxShadow: {
      default: null,
      ":focus":
        "var(--tw-ring-offset-shadow), var(--tw-ring-shadow),\n    var(--tw-shadow, 0 0 #0000)",
    },
    "--tw-ring-offset-shadow":
      "var(--tw-ring-inset) 0 0 0\n    var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow":
      "var(--tw-ring-inset) 0 0 0\n    calc(2px + var(--tw-ring-offset-width)) rgb(var(--on-primary-container))",
  },

  svg: { width: "1.5rem ", height: "1.5rem " },
  container: {
    width: { default: "100%", "@media (min-width: 768px)": "auto" },
    display: {
      default: null,
      "@media (min-width: 768px)": "block",
    },
  },
  "hidden": { display: "none" },
  srOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0",
  },
});

export function Header({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="">
      <div className="">
        <div {...stylex.props(styles["root"])}>
          <Link to="/" {...stylex.props(styles["link"])}>
            <Image
              width={32}
              height={32}
              src="https://flowbite.com/docs/images/logo.svg"
              {...stylex.props(styles["logo"])}
              alt="Logo"
            />
            <span {...stylex.props(styles["title"])}>Top Blog</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            {...stylex.props(styles["button"])}
            aria-controls="navbar-solid-bg"
            aria-expanded={open}
          >
            <span {...stylex.props(styles["srOnly"])}>
              Open main menu
            </span>
            <svg
              {...stylex.props(styles["svg"])}
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            {...stylex.props(
              styles["container"],
              open && styles["hidden"]
            )}
            id="navbar-solid-bg"
          >
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
}
