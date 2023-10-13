import Image from "next/image";
import Link from "next/link";
import { ArticleData } from "./Article";
import { Chip, ChipIcon } from "./Chip";

export type BigArticleData = Omit<ArticleData, "id"> &
  Partial<Pick<ArticleData, "id">>;

export function BigArticle({ article }: { article: BigArticleData }) {
  return (
    <article className="text-on-surface grid md:grid-cols-2 md:gap-10 lg:gap-16">
      <div
        className="flex flex-col py-6 mb-6 md:mb-0 items-start justify-center flex-1 gap-y-3
      md:gap-y-5"
      >
        <div className="flex flex-wrap gap-2">
          {article.category.map((category) => (
            <Link key={category} href={`/search?tag=${category}`}>
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
                <span className="">{category}</span>
              </Chip>
            </Link>
          ))}
        </div>
        <div className="max-w-full">
          <Link className="" href={article.id ? `/article/${article.id}` : ""}>
            <p className="text-4xl overflow-hidden text-ellipsis font-bold leading-none lg:text-5xl xl:text-6xl">
              {article.title}
            </p>
          </Link>
        </div>
        <div className="pt-2 pe-0 pb-0 ps-0">
          <p className="text-sm font-medium inline">author:</p>
          <Link
            className="inline text-sm font-medium mt-0 me-1 mb-0 ms-1 underline"
            href={`/user/${article.author.id}`}
          >
            {article.author.name}
          </Link>
          <p className="inline text-sm font-medium mt-0 me-1 mb-0 ms-1">
            ·{" "}
            {new Intl.DateTimeFormat('en', {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(article.releasedAt)}{" "}
            ·
          </p>
          <p className="text-on-surface/[.38] text-sm font-medium inline mt-0 me-1 mb-0 ms-1">
            {article.length}. read
          </p>
        </div>
      </div>
      <div className="">
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
