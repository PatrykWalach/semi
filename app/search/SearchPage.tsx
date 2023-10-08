import { ArticleData } from "@/components/Article";
import { Articles } from "@/components/Articles";
import { Chip } from "@/components/Chip";
import Input from "@/components/Input";
import Link from "next/link";

function URLSearchParamsDelete(
  searchParams: URLSearchParams,
  name: string,
  value: string
) {
  const next = new URLSearchParams();
  for (const [name1, value1] of searchParams.entries()) {
    if (name1 !== name || value1 !== value) {
      next.append(name1, value1);
    }
  }

  return next;
}
export default function SearchPage(props: {
 
  articles: readonly ArticleData[];
  searchParams: URLSearchParams;
}) {
  const tags = props.searchParams.getAll('tag')

  return (
    <div>
      <form action="" method="get">
        <div className="grid gap-1">
          <Input placeholder="Search..." className="" required name="tag">
            <button
              type="submit"
              className="cursor-default p-1 -m-1 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </Input>
          <div className=" flex flex-wrap gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 last:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6z"
              />
            </svg>

            {tags.map((tag) => {
              return (
                <Chip key={tag}>
                  <span className="">{tag}</span>
                  <input type="hidden" name="tag" value={tag} />
                  <Link
                    href={`/search?${URLSearchParamsDelete(
                      props.searchParams,
                      "tag",
                      tag
                    )}`}
                    replace
                    className="-me-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Link>
                </Chip>
              );
            })}
          </div>{" "}
        </div>
      </form>

      <main className="divide-y">
        <Articles articles={props.articles}></Articles>
      </main>
    </div>
  );
}
