import React, {useState} from 'react'
import { useEffect } from 'react'

export default function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")

    useEffect(() => {
        if(!name.trim()){
            setNameError("Lenh nay la bat buoc");
        } else {
            setName("");
        }
    },[name]);

    useEffect(() => {
        if (!email.trim()) {
            setEmailError("Trường này là bắt buộc");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Email không hợp lệ");
        } else {
            setEmailError("");
        }
    },[email]);

    const isFormValid = !nameError && !emailError && name && email;
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if (isFormValid){
            alert("Gui thanh cong");
        }
    };
      return (
    <div>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "20px" }}>
      <h2>Form Đăng ký</h2>
      <div style={{ marginBottom: "15px" }}>
        <label>Họ tên:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "5px" }}
        />
        {nameError && <span style={{ color: "red" }}>{nameError}</span>}
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: "block", width: "100%", marginTop: "5px" }}
        />
        {emailError && <span style={{ color: "red" }}>{emailError}</span>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Gửi
      </button>
      </form>
    </div>
  )
}
