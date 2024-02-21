const Image = "img";
import { Link } from "@remix-run/react";
import { ComponentPropsWithoutRef } from "react";
import { ArticleData } from "./Article";
import { Chip, ChipIcon } from "./Chip";

export type BigArticleData = Omit<ArticleData, "id"> &
  Partial<Pick<ArticleData, "id">>;

import * as stylex from "@stylexjs/stylex";
import { colors } from "../app/tokens.stylex";

const styles = stylex.create({
  root: {
    color: colors.onSurface,
    display: "grid",
    gridTemplateColumns: {
      default: null,
      "@media (min-width: 768px)": "repeat(2, minmax(0, 1fr))",
    },

    gap: {
      default: null,
      "@media (min-width: 768px)": "2.5rem ",
      "@media (min-width: 1024px)": "4rem",
    },
  },
  author: { marginInline: "0.25rem" },
  details: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "1.5rem ",
    paddingBottom: "1.5rem ",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    gridRowStart: { default: "2", "@media (min-width: 768px)": "1" },
    marginBottom: { default: "1.5rem", "@media (min-width: 768px)": 0 },
    rowGap: { default: "0.75rem", "@media (min-width: 768px)": "1.25rem " },
  },
  header: { maxWidth: "100%" },
  headerTitle: {
    fontSize: {
      default: "2.25rem ",
      "@media (min-width: 1024px)": "3rem",
      "@media (min-width: 1280px)": "3.75rem",
    },
    lineHeight: {
      default: 1, //"2.5rem ",
      "@media (min-width: 1024px)": 1,
    },
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: 700,
  },
  img: {
    objectFit: "cover",
    borderRadius: "0.5rem",
    maxHeight: { default: "16rem", "@media (min-width: 640px)": "24rem" },
    width: "100%",
    height: "100%",
  },
  footer: { paddingTop: "0.5rem" },
  footerItem: {
    marginInline: "0.25rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    fontWeight: 500,
    marginInlineStart: {
      default: null,
      ":first-child": 0,
    },
  },
  footerItemAccent: { color: "rgb(var(--on-surface) / 0.38)" },
  underline: { textDecorationLine: "underline" },
});

export function BigArticle({ article }: { article: BigArticleData }) {
  return (
    <article {...stylex.props(styles["root"])}>
      <div {...stylex.props(styles["details"])}>
        {article.category && (
          <Link to={`/search?tag=${article.category}`}>
            <Chip>
              <ChipIcon>
                <svg
                  className="w-3.5 h-3.5 -ms-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
              00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
              1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
              0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </ChipIcon>
              <span className="">{article.category}</span>
            </Chip>
          </Link>
        )}
        <div {...stylex.props(styles["header"])}>
          <ConditionalLink
            className=""
            to={article.id ? `/article/${article.id}` : ""}
          >
            <p {...stylex.props(styles["headerTitle"])}>{article.title}</p>
          </ConditionalLink>
        </div>
        <div {...stylex.props(styles["footer"])}>
          <span {...stylex.props(styles["footerItem"])}>author:</span>
          <Link
            {...stylex.props(styles["footerItem"], styles["underline"])}
            to={`/user/${article.author.id}`}
          >
            {article.author.name}
          </Link>

          <span {...stylex.props(styles["footerItem"])}>
            ·{" "}
            {new Intl.DateTimeFormat("en", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(article.releasedAt))}{" "}
            ·
          </span>
          <span
            {...stylex.props(styles["footerItem"], styles["footerItemAccent"])}
          >
            {article.length}. read
          </span>
        </div>
      </div>
      <div className="">
        <div className="">
          <Image
            width={500}
            height={500}
            alt=""
            src={article.img}
            {...stylex.props(styles["img"])}
          />
        </div>
      </div>
    </article>
  );
}

function ConditionalLink(props: ComponentPropsWithoutRef<typeof Link>) {
  if (!props.to) {
    return <>{props.children}</>;
  }
  return <Link {...props}></Link>;
}
