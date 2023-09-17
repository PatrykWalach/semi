import { Link } from "@remix-run/react";
import Image from "next/image";

export default function Article({ article }: { article: ArticleData }) {
  return (
    <article className="text-on-surface flex flex-col items-start col-span-12 gap-y-3 sm:col-span-6 xl:col-span-4">
      <Image
        width={500}
        height={500}
        alt=""
        src={article.img}
        className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
      />
      <p
        className="bg-secondary-container flex items-center leading-none text-sm font-medium text-on-secondary-container pt-1.5 pr-3 pb-1.5 pl-3
    rounded-full uppercase "
      >
        {article.category}
      </p>
      <Link
        className="text-lg font-bold sm:text-xl md:text-2xl"
        to={`/article/${article.id}`}
      >
        {article.title}
      </Link>
      <p className="text-sm">{article.description}</p>
      <div className="pt-2 pr-0 pb-0 pl-0">
        <Link
          className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline"
          to={`/user/${article.author.id}`}
        >
          {article.author.name}
        </Link>
        <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
          · {article.releasedAt} ·
        </p>
        <p className="inline text-xs font-medium text-on-surface/[.38] mt-0 mr-1 mb-0 ml-1">
          {article.length}. read
        </p>
      </div>
    </article>
  );
}
