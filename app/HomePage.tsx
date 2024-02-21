import { ArticleData } from "@/components/Article";
import { Articles } from "@/components/Articles";
import * as stylex from "@stylexjs/stylex";
 

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "1px",
  },
});

export default function HomePage({
  articles,
}: {
  articles: readonly ArticleData[];
}) {
  return (
    <main {...stylex.props(styles.root)}>
      {Array.from({ length: Math.ceil(articles.length / 4) }, (_, i) => {
        return (
          <Articles
            key={i}
            articles={articles.slice(i * 4, (i + 1) * 4)}
          ></Articles>
        );
      })}
    </main>
  );
}
