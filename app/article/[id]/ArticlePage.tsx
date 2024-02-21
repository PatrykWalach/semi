import { ArticleData } from "@/components/Article";
import { BigArticle } from "@/components/BigArticle";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../app/tokens.stylex";

const styles = stylex.create({
  root: {
    backgroundColor: colors.surface,
    color: colors.onSurface,
  },
  container: {
    width: "100%",
    margin: "0 auto",
    padding: "1rem  0",
    display: "grid",
    gap: "2rem",
    maxWidth: {
      default: null,
      "@media (min-width: 640px)": "640px",
      "@media (min-width: 768px)": "768px",
      "@media (min-width: 1024px)": "1024px",
      "@media (min-width: 1280px)": "1280px",
      "@media (min-width: 1536px)": "1536px",
    },
  },
  prose: { paddingTop: "1rem", paddingBottom: "1rem" },
});

export default function ArticlePage({ article }: { article: ArticleData }) {
  return (
    <main {...stylex.props(styles["root"])}>
      <div {...stylex.props(styles["container"])}>
        <header>
          <BigArticle article={article}></BigArticle>
        </header>
        <section {...stylex.props(styles["prose"])}>
          <div
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
            className="prose lg:prose-2xl dark:prose-invert"
          ></div>
        </section>{" "}
      </div>
    </main>
  );
}
