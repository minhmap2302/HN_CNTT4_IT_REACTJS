import React, { useEffect, useState } from "react";

type Warehouse = {
  id: string;
  name: string;
  address: string;
  status: "active" | "inactive";
};

const LOCAL_KEY = "warehouses_v1";

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function useLocalWarehouses() {
  const [items, setItems] = useState<Warehouse[]>(() => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      if (!raw) return sampleData();
      return JSON.parse(raw) as Warehouse[];
    } catch {
  return sampleData();
}

  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
  }, [items]);

  return { items, setItems };
}

function sampleData(): Warehouse[] {
  return [
    {
      id: uid(),
      name: "Kho Hà Nội",
      address: "123 Đường Láng, Đống Đa, Hà Nội",
      status: "active",
    },
    {
      id: uid(),
      name: "Kho TP.Hồ Chí Minh",
      address: "456 Lê Lợi, Quận 1, TP.HCM",
      status: "active",
    },
    {
      id: uid(),
      name: "Kho Đà Nẵng",
      address: "789 Nguyễn Văn Linh, Hải Châu, Đà Nẵng",
      status: "inactive",
    },
  ];
}

const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"/>
  </svg>
);

const IconEdit = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

const IconTrash = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
  </svg>
);

export default function App() {
  const { items, setItems } = useLocalWarehouses();
  const [showAdd, setShowAdd] = useState(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState<Warehouse["status"]>("active");
  const [error, setError] = useState("");
  const [editing, setEditing] = useState<Warehouse | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Tên kho không được để trống");
      return;
    }
    if (editing) {
      const updated = items.map((it) => (it.id === editing.id ? { ...it, name: name.trim(), address: address.trim(), status } : it));
      setItems(updated);
      setEditing(null);
      setName("");
      setAddress("");
      setStatus("active");
      return;
    }
    const newOne: Warehouse = { id: uid(), name: name.trim(), address: address.trim(), status };
    setItems([newOne, ...items]);
    setName("");
    setAddress("");
    setStatus("active");
  }

  function startEdit(w: Warehouse) {
    setEditing(w);
    setName(w.name);
    setAddress(w.address);
    setStatus(w.status);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function confirmDelete(id: string) {
    setConfirmDeleteId(id);
  }

  function doDelete() {
    if (!confirmDeleteId) return;
    setItems(items.filter((it) => it.id !== confirmDeleteId));
    setConfirmDeleteId(null);
  }

  function cancelDelete() {
    setConfirmDeleteId(null);
  }

  function cancelEdit() {
    setEditing(null);
    setName("");
    setAddress("");
    setStatus("active");
    setError("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="bg-teal-600 text-white rounded-lg shadow p-6 flex items-center gap-4 mb-6">
          <div className="bg-teal-700 p-2 rounded-md">
            <IconHome />
          </div>
          <h1 className="text-2xl font-semibold">Quản Lý Kho</h1>
        </header>
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">{editing ? "Cập nhật kho" : "Thêm kho mới"}</h2>
            <button className="text-gray-500 text-sm" onClick={() => setShowAdd((s) => !s)}>
              {showAdd ? "Ẩn" : "Hiện"}
            </button>
          </div>
          {showAdd && (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-3 items-center">
              <div className="md:col-span-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tên kho"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-200"
                />
              </div>
              <div className="md:col-span-3">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Địa chỉ"
                  className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-200"
                />
              </div>
              <div className="md:col-span-1 flex items-center gap-2">
                <select value={status} onChange={(e) => setStatus(e.target.value as Warehouse["status"])} className="border border-gray-200 rounded px-3 py-2 text-sm">
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Ngừng hoạt động</option>
                </select>
                <div className="flex gap-2">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                    {editing ? "Lưu" : "Thêm"}
                  </button>
                  {editing && (
                    <button type="button" onClick={cancelEdit} className="border border-gray-300 px-3 py-2 rounded text-sm">
                      Huỷ
                    </button>
                  )}
                </div>
              </div>
              {error && <div className="text-red-500 text-sm md:col-span-6">{error}</div>}
            </form>
          )}
        </section>
        <section className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-4">Danh sách kho</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-sm">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="p-3 border-b">Tên kho</th>
                  <th className="p-3 border-b">Địa chỉ</th>
                  <th className="p-3 border-b">Trạng thái</th>
                  <th className="p-3 border-b">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {items.map((w) => (
                  <tr key={w.id} className="align-top hover:bg-gray-50">
                    <td className="p-3 border-b">
                      <button className="text-blue-500 hover:underline text-sm" onClick={() => startEdit(w)}>
                        {w.name}
                      </button>
                    </td>
                    <td className="p-3 border-b text-gray-600">{w.address}</td>
                    <td className="p-3 border-b">
                      {w.status === "active" ? (
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-100">Hoạt động</span>
                      ) : (
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-50 text-red-700 border border-red-100">Ngừng hoạt động</span>
                      )}
                    </td>
                    <td className="p-3 border-b">
                      <div className="flex gap-2">
                        <button onClick={() => startEdit(w)} className="flex items-center gap-2 border border-blue-300 text-blue-600 px-3 py-1 rounded text-sm">
                          <IconEdit />
                          Sửa
                        </button>
                        <button onClick={() => confirmDelete(w.id)} className="flex items-center gap-2 border border-red-300 text-red-600 px-3 py-1 rounded text-sm">
                          <IconTrash />
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr>
                    <td colSpan={4} className="p-6 text-center text-gray-500">
                      Không có kho nào
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex item-center justify-between text-sm text-gray-600">
            <div>
              Hiển thị 1 - {items.length} trong {items.length} bản ghi
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border rounded">&lt;</button>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1 border rounded bg-white">1</button>
                <button className="px-3 py-1 border rounded">2</button>
                <button className="px-3 py-1 border rounded">3</button>
                <span className="px-3">...</span>
                <button className="px-3 py-1 border rounded">100</button>
              </div>
              <button className="px-3 py-1 border rounded">&gt;</button>
            </div>
          </div>
        </section>
      </div>
      {confirmDeleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h4 className="font-semibold mb-2">Xác nhận xóa</h4>
            <p className="text-sm text-gray-600 mb-4">Bạn có chắc muốn xóa kho này? Hành động không thể hoàn tác.</p>
            <div className="flex justify-end gap-3">
              <button onClick={cancelDelete} className="px-4 py-2 border rounded">Huỷ</button>
              <button onClick={doDelete} className="px-4 py-2 bg-red-600 text-white rounded">Xóa</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
