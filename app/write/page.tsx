import { normalizeSearchParams } from "../URLSearchParams";
import WritePage from "./WritePage";

export default function Page(props: {
  searchParams: Record<string, string | string[]>;
}) {
  const searchParams = normalizeSearchParams(props.searchParams);



  return <WritePage searchParams={searchParams}></WritePage>;
}
