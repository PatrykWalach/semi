"use client";

import { ComponentPropsWithoutRef } from "react";
import "./Input.css";

export function Textarea({
  children,
  ...props
}: ComponentPropsWithoutRef<"textarea">) {
  return (
    <div className="input">
      <textarea
        onChange={(e) => {
          e.currentTarget.style.height = "";
          e.currentTarget.style.height = `max(${props.cols}em, ${e.currentTarget.scrollHeight}px)`;
        }}
        {...props}
        className={`input__input ${props.className}`}
      />
    </div>
  );
}
