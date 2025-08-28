import React, { useReducer, useState } from "react";

export default function LoginForm() {
  const initialState = {
    loading: false,
    success: false,
    error: null,
  };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "LOGIN_START":
        return { loading: true, success: false, error: null };
      case "LOGIN_SUCCESS":
        return { loading: false, success: true, error: null };
      case "LOGIN_ERROR":
        return { loading: false, success: false, error: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({ type: "LOGIN_ERROR", payload: "Sai tài khoản hoặc mật khẩu!" });
      }
    }, 1500);
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={state.loading}>
          {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      {state.success && <p>Đăng nhập thành công!</p>}
      {state.error && <p>{state.error}</p>}
    </div>
  );
}
