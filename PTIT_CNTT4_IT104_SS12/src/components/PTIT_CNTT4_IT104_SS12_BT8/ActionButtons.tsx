import React from "react";

type ActionButtonsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function ActionButtons({ onEdit, onDelete }: ActionButtonsProps) {
  return (
    <div>
      <button
        style={{
          marginRight: "8px",
          padding: "5px 10px",
          background: "rgb(108,117,125)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={onEdit}
      >
        Sửa
      </button>
      <button
        style={{
          padding: "5px 10px",
          background: "rgb(220,53,69)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={onDelete}
      >
        Xóa
      </button>
    </div>
  );
}
