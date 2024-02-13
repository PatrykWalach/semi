import { ARTICLES, ArticleData } from "@/components/Article";
import {
  ClientLoaderFunctionArgs,
  json,
  useLoaderData,
} from "@remix-run/react";
import ArticlePage from "./ArticlePage";

export async function loader({ params }: ClientLoaderFunctionArgs) {
  const article = ARTICLES.find((article) => Number(params.id) === article.id);
  if (!article) {
    throw new Response(null, { status: 404 });
  }

  return json(
    await new Promise<ArticleData>((resolve) =>
      setTimeout(() => {
        return resolve(article);
      }, Math.random() * 1000)
    )
  );
}

export default function Page() {
  const article = useLoaderData<typeof loader>();

  return <ArticlePage article={article}></ArticlePage>;
}
