'use client'

import { ComponentPropsWithoutRef } from "react";
import { experimental_useFormStatus } from "react-dom";

export function FieldsetPendingDisabled(
  props: ComponentPropsWithoutRef<"fieldset">
) {
  const { pending } = experimental_useFormStatus();
  return <fieldset {...props} disabled={pending}></fieldset>;
}
