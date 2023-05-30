import Image from "next/image";
import { ArticleData } from "./Article";

export function BigArticle({ article }: { article: ArticleData }) {
  return (
    <article className="text-on-surface flex flex-col-reverse items-center md:flex-row">
      <div className="flex flex-col items-start justify-center w-full h-full py-6 mb-6 md:mb-0 md:w-1/2">
        <div
          className="flex flex-col items-start justify-center h-full gap-y-3 transform md:pr-10 lg:pr-16
      md:gap-y-5"
        >
          <div
            className="bg-secondary-container flex items-center leading-none rounded-full pt-1.5 pr-3 pb-1.5 pl-2
        uppercase "
          >
            <p className="inline">
              <svg
                className="w-3.5 h-3.5 mr-1"
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
            </p>
            <p className="inline text-xs font-medium">{article.category}</p>
          </div>
          <a
            className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl"
            href={`/article/${article.id}`}
          >
            {article.title}
          </a>
          <div className="pt-2 pr-0 pb-0 pl-0">
            <p className="text-sm font-medium inline">author:</p>
            <a
              className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline"
              href={`/user/${article.author.id}`}
            >
              {article.author.name}
            </a>
            <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">
              · {article.releasedAt} ·
            </p>
            <p className="text-on-surface/[.38] text-sm font-medium inline mt-0 mr-1 mb-0 ml-1">
              {article.length}. read
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="block">
          <Image
            width={500}
            height={500}
            alt=""
            src={article.img}
            className="object-cover rounded-lg max-h-64 sm:max-h-96 w-full h-full"
          />
        </div>
      </div>
    </article>
  );
}
