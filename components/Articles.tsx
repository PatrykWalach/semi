import { Article, ArticleData } from "./Article";
import { BigArticle } from "./BigArticle";

import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  articles: {
    width: "100%",
    paddingTop: {
      default: "1rem",
      "@media (min-width: 640px)": "2rem ",
      "@media (min-width: 768px)": "3rem ",
    },

    paddingBottom: {
      default: "1.5rem",
      "@media (min-width: 640px)": "2rem ",
      "@media (min-width: 768px)": "3rem ",
    },

    rowGap: {
      default: "1.25rem",
      "@media (min-width: 640px)": "2rem ",
      "@media (min-width: 768px)": "4rem ",
    },
    display: "grid",
    marginInline: "auto",
    maxWidth: "80rem ",
  },
  articles__empty: {
    display: { default: "none", ":first-child": "block" },
    gridColumn: "1 / -1",
  },
  articles__list: {
    display: "grid",
    gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
    gap: "4rem  2rem ",
  },
});

export function Articles({ articles }: { articles: readonly ArticleData[] }) {
  return (
    <div {...stylex.props(styles["articles"])}>
      {articles[0] && <BigArticle article={articles[0]}></BigArticle>}
      <p {...stylex.props(styles["articles__empty"])}>No articles</p>

      <div {...stylex.props(styles["articles__list"])}>
        {articles.slice(1).map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </div>
  );
}
