import { useLoaderData } from "@remix-run/react";

export const loader = (async () => {
  return {
    articles: await api.getArticles(),
  };
}) satisfies LoaderFunction;

import { LoaderFunction } from "@remix-run/node";
import { Articles } from "~/components/Articles";
import api from "~/lib/api.server";

export default function Home() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <main className="divide-y">
      <Articles articles={articles.slice(0, 4)}></Articles>
      <Articles articles={articles.slice(4)}></Articles>
    </main>
  );
}
