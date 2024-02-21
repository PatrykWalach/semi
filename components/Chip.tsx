import * as stylex from "@stylexjs/stylex";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { colors } from "../app/tokens.stylex";

const styles = stylex.create({
  root: {
    backgroundColor: colors.secondaryContainer,
    display: "inline-flex",
    alignItems: "center",
    lineHeight: 1,
    fontSize: "0.875rem ",
    fontWeight: 500,
    color: colors.onSecondaryContainer,
    padding: "0.375rem  0.75rem ",
    borderRadius: "9999px",
    textTransform: "uppercase",
    gap: "0.5rem ",
  },
  icon: {
    marginInlineEnd: { default: null, ":last-child": "-0.25rem" },
    marginInlineStart: { default: null, ":first-child": "-0.25rem" },
  },
});

export const Chip = (props: PropsWithChildren<{}>) => {
  return <span {...stylex.props(styles["root"])}>{props.children}</span>;
};

export const ChipIcon = (props: ComponentPropsWithoutRef<"div">) => {
  return <div {...props} {...stylex.props(styles["icon"])}></div>;
};
