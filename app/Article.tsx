import { Article as ArticleT } from "./page";


export function Article({ article }: { article: ArticleT; }) {
  return (
    <article className="text-gray-900 flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
      <img
        src={article.img}
        className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" />
      <p
        className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
    rounded-full uppercase "
      >
        {article.category}
      </p>
      <a
        className="text-lg font-bold sm:text-xl md:text-2xl"
        href={`/article/${article.id}`}
      >
        {article.title}
      </a>
      <p className="text-sm text-black">{article.description}</p>
      <div className="pt-2 pr-0 pb-0 pl-0">
        <a
          className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline"
          href={`/user/${article.author.id}`}
        >
          {article.author.name}
        </a>
        <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
          · {article.releasedAt} ·
        </p>
        <p className="inline text-xs font-medium text-gray-400 mt-0 mr-1 mb-0 ml-1">
          {article.length}. read
        </p>
      </div>
    </article>
  );
}
