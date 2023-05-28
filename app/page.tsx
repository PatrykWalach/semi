import { Articles } from "./Articles";

export default async function Home() {
  const articles = await new Promise<Article[]>((resolve) =>
    setTimeout(resolve, Math.random() * 1000, ARTICLES)
  );

  return (
    <main className="pt-12 pb-14 bg-white">
      <div className="divide-y container mx-auto">
        <Articles articles={articles.slice(0, 4)}></Articles>
        <Articles articles={articles.slice(4)}></Articles>
      </div>
    </main>
  );
}

export interface Article {
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
] as const satisfies readonly Article[];
