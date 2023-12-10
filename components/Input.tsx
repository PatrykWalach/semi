
import { ComponentPropsWithoutRef } from "react";

export const className =
  "rounded-[1.25rem] bg-inverse-surface px-3 py-2 focus-within:ring has-[[aria-invalid=true]]:ring has-[[aria-invalid=true]]:ring-error ring-inverse-primary has-[:disabled]:hover:ring-0 hover:ring text-inverse-on-surface flex";

export default function Input({
  children,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <div className={className}>
      <input
        type="text"
        {...props}
        className={`bg-transparent disabled:opacity-50 flex-1 border-0 caret-inverse-on-surface outline-none focus:!ring-0 ${props.className}`}
      />
      {children}
    </div>
  );
}


