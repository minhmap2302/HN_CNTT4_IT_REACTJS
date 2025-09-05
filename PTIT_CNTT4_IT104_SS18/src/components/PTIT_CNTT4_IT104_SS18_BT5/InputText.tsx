import { useReducer } from "react";
export default function InputText() {
    type State = {
        text: string;
    };

    type Action = {
        type: "SET_TEXT";
        payload: string;
    };

    const initialState: State = {
        text: "",
    };

    function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_TEXT":
            return { ...state, text: action.payload };
        default:
            return state;
    }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "SET_TEXT", payload: e.target.value });
    };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Nhập chuỗi của bạn</h2>
      <input
        type="text"
        value={state.text}
        onChange={handleChange}
        style={{ padding: "5px", width: "250px" }}
      />
      <p>Kết quả hiển thị: {state.text}</p>
    </div>
  );
}
