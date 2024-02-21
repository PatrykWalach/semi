import { ArticleData } from "@/components/Article";
import { Articles } from "@/components/Articles";
import { Chip, ChipIcon } from "@/components/Chip";
import Input from "@/components/Input";
import { Form, Link } from "@remix-run/react";
import * as stylex from "@stylexjs/stylex";
import { URLSearchParamsDelete } from "../URLSearchParams";

const styles = stylex.create({
  search: { display: "grid", gap: "0.25rem " },
  searchButton: {
    cursor: "default",
    padding: "0.25rem ",
    margin: "-0.25rem ",
    borderRadius: "9999px",
  },
  searchIcon: { width: "1.5rem ", height: "1.5rem " },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem ",
    alignItems: "center",
  },
  tagsIcon: {
    width: "1.25rem ",
    height: "1.25rem ",
    display: {
      default: null,
      ":last-child": "none",
    },
  },
  tagRemoveIcon: { width: "0.75rem ", height: "0.75rem " },
});

export default function SearchPage(props: {
  articles: readonly ArticleData[];
  searchParams: URLSearchParams;
}) {
  const tags = props.searchParams.getAll("tag");

  return (
    <div>
      <Form role="search" method="get">
        <div {...stylex.props(styles.search)}>
          <Input
            placeholder="Search..."
            type="search"
            className=""
            required
            name="tag"
          >
            <button type="submit" {...stylex.props(styles.searchButton)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                {...stylex.props(styles.searchIcon)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </Input>
          <div {...stylex.props(styles.tags)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              {...stylex.props(styles["tagsIcon"])}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6z"
              />
            </svg>
            {tags.map((tag) => {
              return (
                <Chip key={tag}>
                  <span className="">{tag}</span>
                  <input type="hidden" name="tag" value={tag} />

                  <ChipIcon>
                    <Link
                      to={`/search?${URLSearchParamsDelete(
                        props.searchParams,
                        "tag",
                        tag
                      )}`}
                      replace
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        {...stylex.props(styles["tagRemoveIcon"])}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Link>
                  </ChipIcon>
                </Chip>
              );
            })}
          </div>{" "}
        </div>
      </Form>

      <main className="">
        <Articles articles={props.articles}></Articles>
      </main>
    </div>
  );
}
