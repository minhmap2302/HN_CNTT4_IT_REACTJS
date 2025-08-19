import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoTabs from "./TodoTabs";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoListIndex() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Cras justo odio", completed: true },
    { id: 2, text: "Cras justo odio", completed: false },
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const editTodo = (id: number) => {
    const newText = prompt("Sửa công việc:");
    if (newText) {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: "40px" }}>Quản lý công việc</h3>

                <TodoForm onAdd={addTodo} />
                <TodoTabs />
                <TodoList todos={todos} onToggle={toggleTodo} onEdit={editTodo} onDelete={deleteTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
