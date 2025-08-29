import { useReducer } from "react";

type State = { count: number };
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Counter</h2>
      <p>Giá trị: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Giảm</button>
    </div>
  );
}
