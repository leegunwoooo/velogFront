
import React, { useEffect, useState } from "react";
import { fetchPostById } from "../api/postApi";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await fetchPostById(id);
        setPost(res.data);
      } catch {
        alert("글 불러오기 실패");
      }
    };
    loadPost();
  }, [id]);

  if (!post) return <div>로딩중...</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>작성자: {post.author}</p>
      <div>{post.content}</div>
    </article>
  );
};

export default PostDetail;
