import { fromFormData } from "@/app/URLSearchParams";
import {  } from "@/app/write/ArticlePreview";
import { ARTICLES } from "@/components/Article";
import { NextResponse } from "next/server";
import { getArticle } from "./write";

export async function POST(request: Request) {

  const formData = await request.formData();

  const article = {
    id: crypto.randomUUID(),
    ...getArticle(fromFormData(formData)),
  };
  ARTICLES.push(article);
  return NextResponse.redirect(new URL(`/article/${article.id}`, request.url));

}
