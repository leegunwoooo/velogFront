
import React, { useState, useEffect } from "react";
import { fetchPostById, updatePost } from "../api/postApi";
import { useParams, useNavigate } from "react-router-dom";

const PostEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await fetchPostById(id);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch {
        alert("글 불러오기 실패");
      }
    };
    loadPost();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost({ id: Number(id), title, content });
      alert("수정 성공");
      navigate(`/posts/${id}`);
    } catch {
      alert("수정 실패");
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
      <button type="submit">수정</button>
    </form>
  );
};

export default PostEdit;
