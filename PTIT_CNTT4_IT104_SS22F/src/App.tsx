import React, { useState, useEffect } from "react";
import "./App.css";


type Bill = {
  id: number;
  owner: string;
  amount: number;
  status: "Đã thanh toán" | "Chưa thanh toán";
  
};

function App() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBill, setEditingBill] = useState<Bill | null>(null);


  useEffect(() => {
    const stored = localStorage.getItem("bills");
    if (stored) {
      setBills(JSON.parse(stored));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("bills", JSON.stringify(bills));
  }, [bills]);

  const addOrUpdateBill = (bill: Bill) => {
    if (editingBill) {
      setBills(bills.map((b) => (b.id === bill.id ? bill : b)));
      setEditingBill(null);
    } else {
      setBills([...bills, bill]);
    }
  };

  const deleteBill = (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa hóa đơn này không?")) {
      setBills(bills.filter((b) => b.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quản lý Hóa đơn tiền điện</h2>
      <button
        onClick={() => {
          setShowForm(true);
          setEditingBill(null);
        }}
      >
        Thêm hóa đơn
      </button>

      <table border={1} cellPadding={8} style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Chủ hộ</th>
            <th>Số tiền</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.id}</td>
              <td>{bill.owner}</td>
              <td>{bill.amount.toLocaleString()} VNĐ</td>
              <td
                style={{
                  color: bill.status === "Đã thanh toán" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {bill.status}
              </td>
              <td>
                <button
                  onClick={() => {
                    setEditingBill(bill);
                    setShowForm(true);
                  }}
                >
                  Sửa
                </button>
                <button onClick={() => deleteBill(bill.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "12px" }}>
        <button disabled>1</button>
        <button>2</button>
        <button>3</button>
      </div>

      {showForm && (
        <BillForm
          initialData={editingBill || undefined}
          onSubmit={addOrUpdateBill}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

function BillForm({
  initialData,
  onSubmit,
  onClose,
}: {
  initialData?: Bill;
  onSubmit: (bill: Bill) => void;
  onClose: () => void;
}) {
  const [owner, setOwner] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [status, setStatus] = useState<"Đã thanh toán" | "Chưa thanh toán">(
    "Chưa thanh toán"
  );

  useEffect(() => {
    if (initialData) {
      setOwner(initialData.owner);
      setAmount(initialData.amount);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as "Đã thanh toán" | "Chưa thanh toán");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!owner || !amount) {
      alert("Vui lòng nhập đủ thông tin!");
      return;
    }
    const newBill: Bill = {
      id: initialData ? initialData.id : Date.now(),
      owner,
      amount: Number(amount),
      status,
    };
    onSubmit(newBill);
    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>{initialData ? "Cập nhật hóa đơn" : "Thêm hóa đơn mới"}</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Tên chủ hộ"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <input
            placeholder="Số tiền"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <select value={status} onChange={handleChangeStatus}>
            <option value="Chưa thanh toán">Chưa thanh toán</option>
            <option value="Đã thanh toán">Đã thanh toán</option>
          </select>
          <div style={{ marginTop: "12px" }}>
            <button type="submit">{initialData ? "Cập nhật" : "Thêm"}</button>
            <button type="button" onClick={onClose}>
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalStyle: React.CSSProperties = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
};

export default App;
