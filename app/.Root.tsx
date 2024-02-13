import { Header } from "@/components/Header";
import Navigation from "@/components/Navigation";
import NavigationLink from "@/components/NavigationLink";
import * as stylex from "@stylexjs/stylex";


import { colors } from "./tokens.stylex";

const styles = stylex.create({
  root: {
    backgroundColor: colors.surface,
    minHeight: "100vh",
    color: colors.onSurface,
    'fontFamily': "'Inter', sans-serif"
  },
  container: {
    margin: "0 auto",
    maxWidth: { default: "48rem ", "@media (min-width: 1280px)": "64rem " },
    padding: {
      default: "0 1rem ",
      "@media (min-width: 640px)": "0 1.5rem ",
      "@media (min-width: 1280px)": 0,
    },
  },
});

export default function Root({ children }: { children: React.ReactNode }) {
  return (
   

<div {...stylex.props(styles.root)}>
<div {...stylex.props(styles.container)}>
  <Header>
    <Navigation>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/about">About</NavigationLink>
      <NavigationLink to="/eula">Eula</NavigationLink>
      <NavigationLink to="/contact">Contact</NavigationLink>
    </Navigation>
  </Header>
  { children }
</div>
</div>
  );
}
