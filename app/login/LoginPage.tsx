"use client";

import Input from "@/components/Input";

import { experimental_useFormState as useFormState } from "react-dom";
import { login } from "../actions";
import { FieldsetPendingDisabled } from "../write/FieldsetPendingDisabled";

export default function LoginPage(props: { searchParams: [string, string][] }) {
  const [state, action] = useFormState(login, {
    fields: { username: "" },
  });

  return (
    <div className="flex flex-1 items-center justify-center">
      <form
        action={action}
        className=""
      >
        <FieldsetPendingDisabled className="grid gap-5">
          <h1 className="text-4xl font-semibold">Login</h1>
          <label htmlFor="" className="text-xl">
            Username
            <Input
              name="username"
              aria-invalid={state.errors?.username ? "true" : "false"}
              required
              defaultValue={state.fields.username || ""}
            ></Input>
            <span className="text-error text-sm">{state.errors?.username}</span>
          </label>
          <label htmlFor="" className="text-xl">
            Password
            <Input
              type="password"
              name="password"
              aria-invalid={state.errors?.password ? "true" : "false"}
              required
            ></Input>
            <span className="text-error text-sm">{state.errors?.password}</span>
          </label>
          <button
            type="submit"
            className="bg-secondary-container disabled:opacity-50 px-4 py-2 text-on-secondary-container uppercase font-medium rounded-[1.25rem]"
          >
            login
          </button>
        </FieldsetPendingDisabled>
      </form>
    </div>
  );
}
