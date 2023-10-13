"use client";
import Form from "@/components/Form";
import { ComponentPropsWithoutRef } from "react";

export default function OnChangeSubmitForm(
  props: ComponentPropsWithoutRef<typeof Form>
) {
  return (
    <Form
      {...props}
      onChange={(e) => {
        e.currentTarget.dispatchEvent(
          new Event("submit", {
            cancelable: true,
            bubbles: true,
          })
        );
      }}
    />
  );
}
