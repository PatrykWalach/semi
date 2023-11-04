import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { ArticleData } from "./Article";
import { Chip, ChipIcon } from "./Chip";

export type BigArticleData = Omit<ArticleData, "id"> &
  Partial<Pick<ArticleData, "id">>;

import "./Article.css";
import "./BigArticle.css";

export function BigArticle({ article }: { article: BigArticleData }) {
  return (
    <article className="article-big">
      <div className="article-big__details">
        {article.category && (
          <Link href={`/search?tag=${article.category}`}>
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
        <div className="article-big__title-wrapper">
          <ConditionalLink
            className=""
            href={article.id ? `/article/${article.id}` : ""}
          >
            <p className="article-big__title">{article.title}</p>
          </ConditionalLink>
        </div>
        <div className="article-footer">
          <span className="article-footer__item">author:</span>
          <Link className="article-footer__item" href={`/user/${article.author.id}`}>
            {article.author.name}
          </Link>

          <span className="article-footer__item">
            ·{" "}
            {new Intl.DateTimeFormat("en", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(article.releasedAt)}{" "}
            ·
          </span>
          <span className="article-footer__item article-footer__item--accent">{article.length}. read</span>
        </div>
      </div>
      <div className="">
        <div className="">
          <Image
            width={500}
            height={500}
            alt=""
            src={article.img}
            className="article-big__img"
          />
        </div>
      </div>
    </article>
  );
}

function ConditionalLink(props: ComponentPropsWithoutRef<typeof Link>) {
  if (!props.href) {
    return <>{props.children}</>;
  }
  return <Link {...props}></Link>;
}
