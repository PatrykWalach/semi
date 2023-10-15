import { normalizeSearchParams } from "../URLSearchParams";
import LoginPage from "./LoginPage";

export default function Page(props: {
  searchParams: Record<string, string | string[]>;
}) {
  const searchParams = normalizeSearchParams(props.searchParams);

  return (
   
      <LoginPage searchParams={searchParams}></LoginPage>
  
  );
}
