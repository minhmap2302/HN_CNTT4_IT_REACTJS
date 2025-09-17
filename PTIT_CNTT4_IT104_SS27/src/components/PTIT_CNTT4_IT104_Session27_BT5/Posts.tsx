import { Link } from "react-router-dom";
export const posts = [
  {
    id: 1,
    title: "Bài viết 1",
    content:
      "Đây là nội dung chi tiết bài viết 1. Nó có thể dài 3-4 câu. Câu thứ hai mô tả thêm chi tiết. Câu thứ ba mô tả tiếp nội dung. Câu thứ tư kết thúc.",
  },
  {
    id: 2,
    title: "Bài viết 2",
    content:
      "Nội dung bài viết 2. Đây là câu thứ hai. Câu thứ ba tiếp tục mô tả nội dung. Câu thứ tư thêm thông tin.",
  },
  {
    id: 3,
    title: "Bài viết 3",
    content: "Nội dung bài viết 3. Câu thứ hai. Câu thứ ba. Câu thứ tư.",
  },
  {
    id: 4,
    title: "Bài viết 4",
    content: "Nội dung bài viết 4. Câu thứ hai. Câu thứ ba. Câu thứ tư.",
  },
  {
    id: 5,
    title: "Bài viết 5",
    content: "Nội dung bài viết 5. Câu thứ hai. Câu thứ ba. Câu thứ tư.",
  },
];

export default function Posts() {
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <h3>
              <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
