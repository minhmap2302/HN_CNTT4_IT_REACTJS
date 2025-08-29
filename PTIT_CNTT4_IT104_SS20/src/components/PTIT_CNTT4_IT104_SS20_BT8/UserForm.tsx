import { useReducer } from "react";

type State = {
  name: string;
  email: string;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "RESET" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET":
      return { name: "", email: "" };
    default:
      return state;
  }
}

export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, { name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tên: ${state.name}\nEmail: ${state.email}`);
  };

  return (
    <div>
      <h2>Thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên"
          value={state.name}
          onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
        />
        <input
          type="email"
          placeholder="Nhập email"
          value={state.email}
          onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
        />
        <button type="submit">Gửi</button>
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </form>
      <div>
        <p><strong>Tên:</strong> {state.name}</p>
        <p><strong>Email:</strong> {state.email}</p>
      </div>
    </div>
  );
}
