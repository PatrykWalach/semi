'use client'

import { ComponentPropsWithoutRef } from "react";
import { useFormStatus } from "../react-dom-experimental";
 

export function FieldsetPendingDisabled(
  props: ComponentPropsWithoutRef<"fieldset">
) {
  const { pending } = useFormStatus();
  return <fieldset {...props} disabled={pending}></fieldset>;
}
