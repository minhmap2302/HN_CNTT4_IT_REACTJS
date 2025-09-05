import React from "react";
import { Film } from "./Film";

type Props = {
  film: Film;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function DeleteFilm({ film, onCancel, onConfirm }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-bold mb-2">Xác nhận xóa phim</h2>
        <p>
          Bạn có chắc muốn xóa phim{" "}
          <span className="font-semibold">{film.name}</span> không?
        </p>
        <p className="text-sm text-red-500 mb-4">
          Hành động này không thể hoàn tác.
        </p>
        <div className="flex justify-end gap-2">
          <button className="px-3 py-1 rounded bg-gray-400 text-white" onClick={onCancel}>
            Hủy
          </button>
          <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={onConfirm}>
            Xóa phim
          </button>
        </div>
      </div>
    </div>
  );
}
