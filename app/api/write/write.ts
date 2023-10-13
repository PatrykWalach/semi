import { BigArticleData } from "@/components/BigArticle";

export function getArticle(params: URLSearchParams): BigArticleData {
  return {
    author: { id: 1, name: "foo" },
    category: Array.from(new Set(params.getAll("tag").filter(Boolean))),
    content: params.get("content") || "",
    releasedAt: new Date(),
    title: params.get("title") || "",
    img: "",
    description: "",
    length: "" + Math.floor((params.get("content")?.length || 0) / 30) + "min",
  };
}
