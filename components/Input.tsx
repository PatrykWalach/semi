
import { ComponentPropsWithoutRef } from "react";

export const className =
  "rounded-[1.25rem] bg-inverse-surface px-3 py-2 has-[input:focus]:ring has-[:invalid]:ring has-[:invalid]:ring-error ring-primary-container text-inverse-on-surface flex";

export default function Input({
  children,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <div className={className}>
      <input
        type="text"
        {...props}
        className={`bg-transparent flex-1 border-0 caret-inverse-on-surface outline-none focus:!ring-0 ${props.className}`}
      />
      {children}
    </div>
  );
}


