import { ARTICLES, ArticleData } from "@/components/Article";

import { ComponentPropsWithoutRef } from "react";
import SearchPage from "./SearchPage";
import { normalizeSearchParams } from "../URLSearchParams";

function getArticles(args: { tags: string[] }) {
  let articles = [...ARTICLES];

  if (args.tags.length) {
    articles = articles.filter((article) =>
      args.tags
        .map((tag) => tag.toLocaleLowerCase().trim())
        .every(
          (tag) =>
            article.category.some((category) =>
              category.toLocaleLowerCase().includes(tag)
            ) ||
            article.content.toLocaleLowerCase().includes(tag) ||
            article.description.toLocaleLowerCase().includes(tag) ||
            article.title.toLocaleLowerCase().includes(tag) ||
            article.author.name.toLocaleLowerCase().includes(tag)
        )
    );
  }

  return new Promise<ArticleData[]>((resolve) =>
    setTimeout(resolve, Math.random() * 1000, articles)
  );
}

export default async function Page(props: {
  searchParams: Record<string, string | string[]>;
}) {
  const searchParams = normalizeSearchParams(props.searchParams);
  const tags = searchParams.getAll("tag");

  const articles = await getArticles({
    tags,
  });

  return (
    <SearchPage articles={articles} searchParams={searchParams}></SearchPage>
  );
}
