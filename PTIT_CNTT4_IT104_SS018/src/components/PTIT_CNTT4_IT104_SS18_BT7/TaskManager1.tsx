import React, { useReducer, useEffect, useState } from "react";

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "REMOVE_TODO"; payload: number }
  | { type: "SET_TODOS"; payload: string[] };

const todoReducer = (state: string[], action: Action): string[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((_, index) => index !== action.payload);
    case "SET_TODOS":
      return action.payload;
    default:
      return state;
  }
};

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      dispatch({ type: "SET_TODOS", payload: JSON.parse(storedTodos) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: inputValue });
      setInputValue("");
    }
  };
  const handleRemoveTodo = (index: number) => {
    dispatch({ type: "REMOVE_TODO", payload: index });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />
      <button
        onClick={handleAddTodo}
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        Thêm
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              border: "1px solid #ddd",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            {todo}
            <button
              onClick={() => handleRemoveTodo(index)}
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
