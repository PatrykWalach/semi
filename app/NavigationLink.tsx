"use client";
import { usePathname } from "next/navigation";

export default function NavigationLink({
  pathname,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  pathname?: string;
}) {
  const route = usePathname();
  pathname ??= route ?? "/";
  const active = pathname.startsWith(props.href);

  return (
    <li>
      <a
        className={`block py-2 px-3 ${
          active
            ? "md:text-primary bg-primary text-surface md:bg-transparent"
            : "hover:md:text-primary hover:bg-surface-variant md:hover:bg-transparent hover:text-on-surface-variant"
        } rounded md:p-0`}
        aria-current={active ? "page" : undefined}
        {...props}
      ></a>
    </li>
  );
}
