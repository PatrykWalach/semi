"use client";

import { ComponentPropsWithoutRef } from "react";
import { className } from "./Input";

export function Textarea({
  children,
  ...props
}: ComponentPropsWithoutRef<"textarea">) {
  return (
    <div className={className}>
      <textarea
        onChange={(e) => {
          e.currentTarget.style.height = "";
          e.currentTarget.style.height = `max(${props.cols}em, ${e.currentTarget.scrollHeight}px)`;
        }}
        {...props}
        className={`bg-transparent flex-1 border-0 caret-inverse-on-surface outline-none focus:!ring-0 ${props.className}`}
      />
    </div>
  );
}
