import * as stylex from "@stylexjs/stylex";
import { ReactNode } from "react";

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: { default: "column", "@media (min-width: 768px)": "row" },
    fontWeight: 500,
    marginTop: { default: "1rem ", "@media (min-width: 768px)": 0 },
    borderRadius: "0.5rem ",
    gap: { default: "0.25rem ", "@media (min-width: 768px)": "2rem" },
  },
});

export default function Navigation(props: { children: ReactNode }) {
  return <ul {...stylex.props(styles["root"])}>{props.children}</ul>;
}
