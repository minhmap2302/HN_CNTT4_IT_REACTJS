import React, { useState, useEffect } from "react";
import EditFilm from "./EditFilm";
import DeleteFilm from "./DeleteFilm";

export type Film = {
  id: number;
  name: string;
  createdAt: string;
};

export default function Film() {
  const [films, setFilms] = useState<Film[]>([]);
  const [newFilm, setNewFilm] = useState("");
  const [editingFilm, setEditingFilm] = useState<Film | null>(null);
  const [deletingFilm, setDeletingFilm] = useState<Film | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("films");
    if (stored) {
      setFilms(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
  }, [films]);

  const handleAdd = () => {
    if (!newFilm.trim()) return;
    const film: Film = {
      id: Date.now(),
      name: newFilm.trim(),
      createdAt: new Date().toLocaleString(),
    };
    setFilms([...films, film]);
    setNewFilm("");
  };

  const handleUpdate = (film: Film) => {
    setFilms(films.map((f) => (f.id === film.id ? film : f)));
    setEditingFilm(null);
  };

  const handleDelete = (id: number) => {
    setFilms(films.filter((f) => f.id !== id));
    setDeletingFilm(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-800 to-purple-900 py-10">
      <div className="max-w-2xl mx-auto p-8 bg-white bg-opacity-10 rounded-xl shadow-lg backdrop-blur-sm space-y-8">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold flex items-center justify-center gap-3 mb-2">
            <span className="bg-white bg-opacity-20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h18M3 16h18M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            Quản lý phim chiếu
          </h1>
          <p className="text-indigo-200 text-lg">Thêm, sửa và quản lý các bộ phim chuẩn bị chiếu</p>
        </div>
        <div className="bg-white bg-opacity-15 p-6 rounded-lg shadow-inner">
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            Tên phim
          </h2>
          <div className="flex gap-3">
            <input
              className="border border-indigo-300 bg-white bg-opacity-20 text-white placeholder-indigo-200 px-4 py-2 flex-1 rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200"
              placeholder="Nhập tên phim chuẩn bị chiếu..."
              value={newFilm}
              onChange={(e) => setNewFilm(e.target.value)}
            />
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md shadow-lg disabled:bg-gray-500 disabled:shadow-none transition duration-200 flex items-center gap-1"
              onClick={handleAdd}
              disabled={!newFilm.trim()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Thêm phim
            </button>
          </div>
        </div>

        <div className="bg-white bg-opacity-15 p-6 rounded-lg shadow-inner">
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Danh sách phim
          </h2>
          <p className="text-indigo-200 text-sm mb-4">{films.length} phim</p>
          {films.length === 0 ? (
            <div className="p-6 bg-white bg-opacity-10 rounded-lg text-center border border-indigo-400 border-dashed">
              <p className="font-medium text-white text-lg mb-2">Chưa có phim nào</p>
              <p className="text-indigo-200 text-sm">
                Hãy thêm phim đầu tiên để bắt đầu quản lý!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {films.map((film) => (
                <div
                  key={film.id}
                  className="bg-white bg-opacity-10 rounded-lg p-4 flex flex-col justify-between border border-indigo-400 shadow-md"
                >
                  <div>
                    <p className="font-semibold text-white text-lg">{film.name}</p>
                    <p className="text-indigo-200 text-sm">
                      Thêm lúc: {film.createdAt}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white font-medium transition duration-200"
                      onClick={() => setEditingFilm(film)}
                    >
                      Sửa
                    </button>
                    <button
                      className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium transition duration-200"
                      onClick={() => setDeletingFilm(film)}
                    >
                      Xóa
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {editingFilm && (
        <EditFilm
          film={editingFilm}
          onCancel={() => setEditingFilm(null)}
          onSave={handleUpdate}
        />
      )}
      {deletingFilm && (
        <DeleteFilm
          film={deletingFilm}
          onCancel={() => setDeletingFilm(null)}
          onConfirm={() => handleDelete(deletingFilm.id)}
        />
      )}
    </div>
  );
}