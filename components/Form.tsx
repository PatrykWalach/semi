"use client";

import { fromFormData } from "@/app/URLSearchParams";
import { usePathname, useRouter } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

export default function Form({
  replace,
  ...props
}: ComponentPropsWithoutRef<"form"> & {
  replace?: boolean;
}) {
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

        const submitter = (e.nativeEvent as SubmitEvent).submitter;
        const action =
          submitter?.getAttribute("formaction") || props.action || pathname;

        console.log(submitter);

        if (action instanceof Function) {
          return;
        }

        const method =
          submitter?.getAttribute("formmethod") || props.method || "get";
        e.preventDefault();

        if (method.toLocaleLowerCase() === "get") {
          console.log("replace");

          (replace ? router.replace : router.push)(
            `${action}?${fromFormData(new FormData(e.currentTarget))}`
          );
          return;
        }

        fetch(action, {
          method,
          body: new FormData(e.currentTarget),
        })
          .then(console.log)
          .catch(console.error);
      }}
    ></form>
  );
}
