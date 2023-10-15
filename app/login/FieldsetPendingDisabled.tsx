'use client'

import { ComponentPropsWithoutRef } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export function FieldsetPendingDisabled(
  props: ComponentPropsWithoutRef<"fieldset">
) {
  const { pending } = useFormStatus();
  return <fieldset {...props} disabled={pending}></fieldset>;
}
