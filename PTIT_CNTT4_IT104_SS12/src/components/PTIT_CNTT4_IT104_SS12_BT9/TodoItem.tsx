import React from "react";

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ id, text, completed, onToggle, onEdit, onDelete }: TodoItemProps) {
  return (
    <li
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <div>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        {completed ? <s>{text}</s> : text}
      </div>
      <div>
        <button className="btn btn-link text-info me-3" onClick={() => onEdit(id)}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button className="btn btn-link text-danger" onClick={() => onDelete(id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
}
