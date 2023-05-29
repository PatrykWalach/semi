export function HeaderLink({
  children,
  href,
  active,
}: {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        className={`block py-2 pl-3 pr-4 ${
          active
            ? "md:text-inverse-primary bg-inverse-primary text-inverse-surface md:bg-transparent"
            : "hover:md:text-inverse-primary hover:bg-surface md:hover:bg-transparent hover:text-on-surface"
        } rounded md:p-0`}
        aria-current="page"
      >
        {children}
      </a>
    </li>
  );
}
