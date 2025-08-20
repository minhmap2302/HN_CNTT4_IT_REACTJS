import React, { Component } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type PropsType = {
  post: Post;
};

export default class DetailPost extends Component<PropsType> {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div style={{ marginBottom: "20px" }}>
        <p><strong>Id:</strong> {id}</p>
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Content:</strong> {content}</p>
        <p><strong>Author:</strong> {author}</p>
        <hr />
      </div>
    );
  }
}
