import { useReducer } from "react";
import { AppReducer } from "./Reducer";
import { initialState } from "./Reducer/data";

function Reducer() {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <div>
      <h1>{state.title} {state.counter}</h1>
      <button onClick={() => dispatch({ type: 'AddCounter' })}>Click</button>
    </div>
  );
}

export default Reducer;