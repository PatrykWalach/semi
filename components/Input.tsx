import { ComponentPropsWithoutRef } from "react";

import * as stylex from "@stylexjs/stylex";
import { colors } from "../app/tokens.stylex";
const styles = stylex.create({
  root: {
    borderRadius: "1.25rem ",
    backgroundColor: colors.inverseSurface,
    padding: "0.5rem  0.75rem ",
    color: colors.inverseOnSurface,
    display: "flex",
  },
  input: {
    backgroundColor: "transparent",
    flex: "1 1 0%",
    borderWidth: "0px",
    caretColor: colors.inverseOnSurface,
    outline: "2px solid transparent",
    outlineOffset: "2px",
  },
});

export default function Input({
  children,
  style,
  ...props
}: Omit<ComponentPropsWithoutRef<"input">, "style" | "className"> & {
  style?: stylex.StyleXStyles;
}) {
  return (
    <div {...stylex.props(styles["root"])}>
      <input type="text" {...props} {...stylex.props(styles["input"], style)} />
      {children}
    </div>
  );
}
