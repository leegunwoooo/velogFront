
import React, { useEffect, useState } from "react";
import { fetchAllPosts, deletePost } from "../api/postApi";
import { Link, useNavigate } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const loadPosts = async () => {
    try {
      const res = await fetchAllPosts();
      setPosts(res.data);
    } catch {
      alert("글 목록 불러오기 실패");
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const onDelete = async (id) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    try {
      await deletePost(id);
      alert("삭제 완료");
      loadPosts();
    } catch {
      alert("삭제 실패");
    }
  };

  return (
    <div>
      <h2>글 목록</h2>
      {posts.length === 0 && <p>등록된 글이 없습니다.</p>}
      <ul>
        {posts.map(({ id, title, author }) => (
          <li key={id}>
            <Link to={`/posts/${id}`}>{title}</Link> by {author}{" "}
            <button onClick={() => navigate(`/posts/edit/${id}`)}>수정</button>{" "}
            <button onClick={() => onDelete(id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
