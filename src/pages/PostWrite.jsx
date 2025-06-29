
import React, { useState } from "react";
import { createPost } from "../api/postApi";
import { useNavigate } from "react-router-dom";

const PostWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, content });
      alert("글 작성 성공");
      navigate("/posts");
    } catch {
      alert("글 작성 실패");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">작성</button>
    </form>
  );
};

export default PostWrite;
