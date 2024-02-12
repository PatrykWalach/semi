import { ClientActionFunction } from "@remix-run/react";
import RegisterLayout from "../register/RegisterLayout";
import LoginPage from "./LoginPage";
import { login } from "../actions";

export const action = (async ({request})=> {
  return login( await request.formData())
}) satisfies ClientActionFunction

export default function Page() {
  return (
    <RegisterLayout>
      <LoginPage></LoginPage>
    </RegisterLayout>
  );
}
