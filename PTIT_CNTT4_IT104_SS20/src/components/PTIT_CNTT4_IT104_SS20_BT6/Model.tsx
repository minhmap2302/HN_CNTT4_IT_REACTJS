import { useEffect, useRef, useState } from "react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Mở Modal</button>
      {isOpen && (
        <div>
          <div>
            <h2>Nhập thông tin</h2>
            <input ref={inputRef} type="text" placeholder="Nhập gì đó..."/>
            <div>
              <button onClick={() => setIsOpen(false)}>Đóng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
