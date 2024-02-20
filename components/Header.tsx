"use client";
const Image = "img"
import { Link } from "@remix-run/react";
import { useState } from "react";

import * as stylex from "@stylexjs/stylex";
const styles = stylex.create({});

export function Header({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="">
      <div className="">
        <div className="header">
          <Link to="/" className="header__link">
            <Image
              width={32}
              height={32}
              src="https://flowbite.com/docs/images/logo.svg"
              className="header__logo"
              alt="Logo"
            />
            <span className="header__title">Top Blog</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="header__button"
            aria-controls="navbar-solid-bg"
            aria-expanded={open}
          >
            <span className="button__name">Open main menu</span>
            <svg
              className="header__svg"
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
            className={`${
              open ? "" : "header__container--hidden "
            }header__container`}
            id="navbar-solid-bg"
          >
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
}
