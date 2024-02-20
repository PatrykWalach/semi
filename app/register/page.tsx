import { ClientActionFunction } from "@remix-run/react";
import { register } from "../actions";
import RegisterLayout from "../register/RegisterLayout";
import RegisterPage from "./RegisterPage";

export const action = (async ({request})=> {
  return register( await request.formData())
}) satisfies ClientActionFunction


export default function Page() {
  return (
    <RegisterLayout>
      <RegisterPage></RegisterPage>
    </RegisterLayout>
  );
}
