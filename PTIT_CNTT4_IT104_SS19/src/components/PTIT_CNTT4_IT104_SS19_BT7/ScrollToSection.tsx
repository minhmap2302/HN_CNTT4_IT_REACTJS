import { useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <button onClick={handleScroll}>
          Đi tới phần nội dung
        </button>
      </div>
      <div>
        <h2>Nội dung phía trên</h2>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        <p>
          Đây là nội dung giả lập để tạo khoảng trống dài, giúp bạn có thể cuộn
          xuống. Hãy thử 
          kéo trang hoặc nhấn nút để đến phần nội dung bên dưới.
        </p>
        
      </div>
      <div ref={sectionRef}>
        Đây là phần nội dung mục tiêu 
      </div>
    </div>
  );
}
