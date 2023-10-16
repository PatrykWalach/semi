"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export function Header({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="">
      <div className="">
        <div className="flex flex-wrap items-center justify-between py-4">
          <Link href="/" className="flex items-center">
            <Image
              width={32}
              height={32}
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Top Blog
            </span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ms-3 text-sm rounded-lg md:hidden hover:bg-primary-container focus:outline-none focus:ring-2 focus:ring-on-primary-container text-on-primary-container"
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
