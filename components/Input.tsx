import { ComponentPropsWithoutRef } from "react";

export default function Input({ children, ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <div
      className="rounded-full bg-inverse-surface px-3 py-2
  has-[input:focus]:ring ring-primary-container text-inverse-on-surface flex"
    >
      <input
        type="text"
        {...props}
        className={`bg-transparent flex-1 border-0 caret-inverse-on-surface outline-none focus:!ring-0 ${props.className}`}
      />
      {children}
    </div>
  );
}
