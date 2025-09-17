import { useLocation, useNavigate } from "react-router-dom";

export default function CustomLink() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const currentURL = window.location.href;
    console.log(currentURL);

    if (location.pathname === "/home-page") {
      navigate("/home-page");
    } else {
      navigate("/not-found");
    }
  };

  return <button onClick={handleClick}>Đi tới trang chủ (kiểm tra URL)</button>;
}
