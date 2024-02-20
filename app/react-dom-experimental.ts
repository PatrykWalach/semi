import { useNavigation } from "@remix-run/react";
import { useState } from "react";
import { } from "react-dom";

export let useFormState = <State, Payload>(
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

export function useFormStatus(){
  const {state} = useNavigation()
  const pending = state === 'submitting'
  return {pending}
}  
