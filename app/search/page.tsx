import { ARTICLES, ArticleData } from "@/components/Article";

import { ClientLoaderFunctionArgs, json, useLoaderData, useSearchParams } from "@remix-run/react";
import SearchPage from "./SearchPage";

export async function loader({request}:ClientLoaderFunctionArgs) {
  const {searchParams} = new URL(request.url)
  const args = {
    tags: searchParams.getAll('tags')
  }

  let articles = [...ARTICLES];

  if (args.tags.length) {
    articles = articles.filter((article) =>
      args.tags
        .map((tag) => tag.toLocaleLowerCase().trim())
        .every(
          (tag) =>
            article.category?.toLocaleLowerCase().includes(tag) ||
            article.content.toLocaleLowerCase().includes(tag) ||
            article.description.toLocaleLowerCase().includes(tag) ||
            article.title.toLocaleLowerCase().includes(tag) ||
            article.author.name.toLocaleLowerCase().includes(tag)
        )
    );
  }

  return json(await new Promise<ArticleData[]>((resolve) =>
    setTimeout(resolve, Math.random() * 1000, articles)
  ));
}

export default  function Page() {
  const [searchParams] = useSearchParams()


  const articles = useLoaderData<typeof loader>()

  return (
    <SearchPage articles={articles} searchParams={searchParams}></SearchPage>
  );
}
