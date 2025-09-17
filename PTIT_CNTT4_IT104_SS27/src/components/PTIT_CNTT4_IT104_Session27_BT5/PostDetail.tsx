// import React from 'react';
import { useParams } from "react-router-dom";
import { posts } from "./Posts";
export default function PostDetail() {
  const { id } = useParams();

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <h2>Không tìm thấy bài viết</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
