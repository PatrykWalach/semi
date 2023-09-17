import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BigArticle } from "~/components/BigArticle";
import api from "~/lib/api.server";



export const loader = (async ({ params }) => {
  return {
    article: await api.getArticle(Number(params.id)),
  };
}) satisfies LoaderFunction;

export default function ArticlePage() {
  const { article } = useLoaderData<typeof loader>();

  return (
    <main className="bg-surface text-on-surface">
      <div className="container mx-auto py-4 grid gap-8">
        <header>
          <BigArticle article={article}></BigArticle>
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: article.content,
          }}
          className="prose py-4 lg:prose-2xl dark:prose-invert"
        ></section>{" "}
      </div>
    </main>
  );
}
