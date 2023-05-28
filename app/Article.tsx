

export interface ArticleData {
  id: number;
  author: { id: number; name: string };
  category: string;
  title: string;
  description: string;
  img: string;
  length: string;
  releasedAt: string;
}

export const ARTICLES = [
  {
    id: 1,
    category: "New",
    img: "https://images.unsplash.com/photo-1626314928277-1d373ddb6428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Write anything. Be creative.",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: "23rd, April 2021",
    length: "1hr 20min",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1626318305863-bb23d0297c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Improving your day to the MAX",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: "23rd, March 2021",
    length: "1hr 20min",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Improving your day to the MAX",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: "23rd, March 2021",
    length: "1hr 20min",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1626197031507-c17099753214?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Improving your day to the MAX",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: "23rd, March 2021",
    length: "1hr 20min",
  },
  {
    id: 5,
    img: "https://plus.unsplash.com/premium_photo-1684952849219-5a0d76012ed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Improving your day to the MAX",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: "23rd, March 2021",
    length: "1hr 20min",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Entertainment",
    title: "Improving your day to the MAX",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam,`,
    author: {
      id: 1,
      name: "Jack Sparrow",
    },
    releasedAt: "23rd, March 2021",
    length: "1hr 20min",
  },
] as const satisfies readonly ArticleData[];


export function Article({ article }: { article: ArticleData; }) {
  return (
    <article className="text-on-surface flex flex-col items-start col-span-12 gap-y-3 sm:col-span-6 xl:col-span-4">
      <img
        src={article.img}
        className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56" />
      <p
        className="bg-secondary-container flex items-center leading-none text-sm font-medium text-on-secondary-container pt-1.5 pr-3 pb-1.5 pl-3
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
      <p className="text-sm">{article.description}</p>
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
        <p className="inline text-xs font-medium text-on-surface/[.38] mt-0 mr-1 mb-0 ml-1">
          {article.length}. read
        </p>
      </div>
    </article>
  );
}
