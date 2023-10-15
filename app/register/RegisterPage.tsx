"use client";

import { RegisterState, register } from "../actions";
import { FieldsetPendingDisabled } from "../login/FieldsetPendingDisabled";
import { PendingHidden } from "../login/LoginPage";
import { useFormState } from "../react-dom-experimental";

export default function RegisterPage() {
  const [state, action] = useFormState(register, {
    fields: { username: "", email: "" },
  });

  return (
    <form action={action} className="w-full">
      <FieldsetPendingDisabled>
        <p className="w-full text-4xl font-medium text-center leading-snug">
          Sign up for an account
        </p>
        <div className="w-full mt-6 me-0 mb-0 ms-0 relative space-y-8">
          <div className="relative">
            <input
              required
              aria-invalid={state.errors?.username ? "true" : "false"}
              name="username"
              defaultValue={state.fields.username}
              placeholder="John"
              type="text"
              className="border peer disabled:border-on-surface/40 aria-[invalid=true]:disabled:border-on-surface/40 disabled:text-on-surface/40  placeholder-on-surface focus:outline-none aria-[invalid=true]:border-error
                focus:border-on-surface-variant w-full pt-4 pe-4 pb-4 ps-4 mt-2 me-0 mb-0 ms-0 text-base block bg-surface
                border-on-surface rounded-md"
            />
            <p
              className="bg-surface pt-0 peer-aria-[invalid=true]:text-error pe-2 pb-0 ps-2 top-0 -mt-3 me-0 mb-0 ms-2 font-medium peer-disabled:text-on-surface/40  peer-aria-[invalid=true]:peer-disabled:text-on-surface/40 text-on-surface
              absolute"
            >
              Username
            </p>
          </div>
          <PendingHidden>
            <span className="text-error text-sm">{state.errors?.username}</span>
          </PendingHidden>
          <div className="relative">
            <input
              required
              aria-invalid={state.errors?.email ? "true" : "false"}
              name="email"
              defaultValue={state.fields.email}
              placeholder="123@xy.com"
              type="email"
              className="border peer disabled:border-on-surface/40 aria-[invalid=true]:disabled:border-on-surface/40 disabled:text-on-surface/40  placeholder-on-surface focus:outline-none aria-[invalid=true]:border-error
                focus:border-on-surface-variant w-full pt-4 pe-4 pb-4 ps-4 mt-2 me-0 mb-0 ms-0 text-base block bg-surface
                border-on-surface rounded-md"
            />
            <p
              className="bg-surface pt-0 peer-aria-[invalid=true]:text-error pe-2 pb-0 ps-2 top-0 -mt-3 me-0 mb-0 ms-2 font-medium peer-disabled:text-on-surface/40  peer-aria-[invalid=true]:peer-disabled:text-on-surface/40 text-on-surface
              absolute"
            >
              Email
            </p>
          </div>
          <PendingHidden>
            <span className="text-error text-sm">{state.errors?.email}</span>
          </PendingHidden>
          <div className="relative">
            <input
              required
              aria-invalid={state.errors?.password ? "true" : "false"}
              name="password"
              placeholder="Password"
              type="password"
              className="border peer disabled:border-on-surface/40 aria-[invalid=true]:disabled:border-on-surface/40 disabled:text-on-surface/40  placeholder-on-surface focus:outline-none aria-[invalid=true]:border-error
                focus:border-on-surface-variant w-full pt-4 pe-4 pb-4 ps-4 mt-2 me-0 mb-0 ms-0 text-base block bg-surface
                border-on-surface rounded-md"
            />
            <p
              className="bg-surface pt-0 peer-aria-[invalid=true]:text-error pe-2 pb-0 ps-2 top-0 -mt-3 me-0 mb-0 ms-2 font-medium peer-disabled:text-on-surface/40  peer-aria-[invalid=true]:peer-disabled:text-on-surface/40 text-on-surface
              absolute"
            >
              Password
            </p>
          </div>
          <PendingHidden>
            <span className="text-error text-sm">{state.errors?.password}</span>
          </PendingHidden>
          <div className="relative">
            <button
              type="submit"
              className="w-full disabled:opacity-50 disabled:hover:bg-primary   inline-block pt-4 pe-5 pb-4 ps-5 text-xl font-medium text-center text-on-primary bg-primary
                rounded-lg transition duration-200 hover:bg-on-primary-container ease"
            >
              Submit
            </button>
          </div>
        </div>
      </FieldsetPendingDisabled>
    </form>
  );
}
