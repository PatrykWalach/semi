
import { BigArticle } from "@/components/BigArticle";
import { getArticle } from "../api/write/write";

export default function ArticlePreview(props: {
  searchParams: URLSearchParams;
}) {
  const searchParams = props.searchParams;

  const article = getArticle(searchParams);

  return (
    <div className="">
      <div className="">
        <div>
          <header>
            <BigArticle article={article}></BigArticle>
          </header>
          <section
            dangerouslySetInnerHTML={{
              __html: article.content,
            }}
            className="prose py-4 lg:prose-2xl dark:prose-invert"
          ></section>
        </div>
      </div>
    </div>
  );
}
