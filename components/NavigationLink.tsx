"use client";
import { usePathname } from "next/navigation";
import Link from 'next/link'

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
        className={`block py-2 px-3 ${
          active
            ? "md:text-primary bg-primary text-surface md:bg-transparent"
            : "hover:md:text-primary hover:bg-surface-variant md:hover:bg-transparent hover:text-on-surface-variant"
        } rounded md:p-0`}
        aria-current={active ? "page" : undefined}
        {...props}
      ></Link>
    </li>
  );
}
