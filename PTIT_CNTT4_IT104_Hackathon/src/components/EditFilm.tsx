import React, { useState } from "react";
import { Film } from "./Film";

type Props = {
  film: Film;
  onCancel: () => void;
  onSave: (film: Film) => void;
};

export default function EditFilm({ film, onCancel, onSave }: Props) {
  const [name, setName] = useState(film.name);

  const handleSave = () => {
    if (!name.trim()) return;
    onSave({ ...film, name: name.trim() });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-bold mb-4">Chỉnh sửa phim</h2>
        <input
          className="border rounded px-3 py-2 w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1 rounded bg-gray-400 text-white" onClick={onCancel}>
            Hủy
          </button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white" onClick={handleSave}>
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
