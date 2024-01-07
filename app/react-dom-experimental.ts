import { useState } from "react";
import {
  useFormState as experimental_useFormState,
  useFormStatus as experimental_useFormStatus,
} from "react-dom";

export let useFormState =
  typeof experimental_useFormState === "function"
    ? experimental_useFormState
    : <State, Payload>(
        action: (state: State, payload: Payload) => Promise<State>,
        initialState: State,
        permalink?: string
      ): [state: State, dispatch: (payload: Payload) => void] => {
        const [state, setState] = useState(initialState);

        return [
          state,
          (payload) => {
            action(state, payload).then(setState);
          },
        ];
      };

export let useFormStatus: typeof experimental_useFormStatus =
  typeof experimental_useFormStatus === "function"
    ? experimental_useFormStatus
    : () => ({ pending: false, data: null, method: null, action: null });
