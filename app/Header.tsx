"use client";
import { useState } from "react";

export function Header({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-inverse-surface text-inverse-on-surface">
      <div className="container mx-auto">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Top Blog
            </span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inverse-on-surface"
            aria-controls="navbar-solid-bg"
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
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
            className={`${open ? "" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-solid-bg"
          >
              {children}

          </div>
        </div>
      </div>
    </nav>
  );
}
