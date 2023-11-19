import { ComponentPropsWithoutRef } from "react";

import "./Input.css";

export default function Input({
  children,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <div className="input">
      <input
        type="text"
        {...props}
        className={`input__input ${props.className}`}
      />
      {children}
    </div>
  );
}
