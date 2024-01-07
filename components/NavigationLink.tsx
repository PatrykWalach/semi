"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";

import './NavigationLink.css';

export default function NavigationLink({
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const active = pathname.startsWith(props.href);

  return (
    <li>
      <Link
        className={`${
          active
            ? "navigation-link--active"
            : ""
        } navigation-link`}
        aria-current={active ? "page" : undefined}
        {...props}
      ></Link>
    </li>
  );
}
