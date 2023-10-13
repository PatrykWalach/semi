"use client";

import { ComponentPropsWithoutRef } from "react";

export function OnChangeStopPropagation(
  props: ComponentPropsWithoutRef<"div">
) {
  return <div onChange={(e) => e.stopPropagation()} {...props}></div>;
}
