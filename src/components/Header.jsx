import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <nav>
        <Link to="/">벨로그</Link>
        <Link to="/posts">글 목록</Link>
        {isLoggedIn ? (
          <>
            <Link to="/posts/write">글 작성</Link>
            <button onClick={onLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;