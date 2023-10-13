import { Chip, ChipIcon } from "@/components/Chip";
import Input from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import Link from "next/link";
import { URLSearchParamsDelete } from "../URLSearchParams";
import ArticlePreview from "./ArticlePreview";
import { OnChangeStopPropagation } from "./OnChangeStopPropagation";
import OnChangeSubmitForm from "./OnChangeSubmitForm";

export default function WritePage(props: { searchParams: URLSearchParams }) {
  const tags = Array.from(new Set(props.searchParams.getAll("tag"))).filter(
    Boolean
  );

  return (
    <div>
      <ArticlePreview searchParams={props.searchParams}></ArticlePreview>
      <div>
        <OnChangeSubmitForm className="grid gap-2">
          <Input
            name="title"
            required
            defaultValue={props.searchParams.get("title") || ""}
          ></Input>
          <OnChangeStopPropagation className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              return (
                <Chip key={tag}>
                  <span className="">{tag}</span>
                  <input type="hidden" name="tag" value={tag} />
                  <ChipIcon>
                    <Link
                      href={`/write?${URLSearchParamsDelete(
                        props.searchParams,
                        "tag",
                        tag
                      )}`}
                      replace
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
                  </ChipIcon>
                </Chip>
              );
            })}
            <input
              type="text"
              name="tag"
              placeholder="Enter categories..."
              className={`bg-transparent flex-1 border-0 caret-on-surface text-on-surface outline-none focus:!ring-0`}
            />
          </OnChangeStopPropagation>
          <Textarea
            required
            cols={6}
            name="content"
            defaultValue={props.searchParams.get("content") || ""}
          ></Textarea>
          <input type="submit" className="hidden" formNoValidate></input>
          <button type="submit" formMethod="post" formAction="/api/write">
            write
          </button>
        </OnChangeSubmitForm>
      </div>
    </div>
  );
}
