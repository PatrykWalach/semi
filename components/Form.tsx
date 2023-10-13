"use client";

import { fromFormData } from "@/app/URLSearchParams";
import { usePathname, useRouter } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

export default function Form(
  props: ComponentPropsWithoutRef<"form"> & {
    replace?: boolean;
  }
) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <form
      {...props}
      onSubmit={(e) => {
        props.onSubmit?.(e);
        if (e.defaultPrevented) {
          return;
        }

        if (props.action instanceof Function) {
          return;
        }

        if (
          typeof props.method === "string" &&
          props.method.toLocaleLowerCase() !== "get"
        ) {
          return;
        }

        e.preventDefault();

        (props.replace ? router.replace : router.push)(
          `${props.action || pathname}?${fromFormData(
            new FormData(e.currentTarget)
          )}`
        );
      }}
    ></form>
  );
}
