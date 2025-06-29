
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PostList from "./pages/PostList";
import PostWrite from "./pages/PostWrite";
import PostEdit from "./pages/PostEdit";
import PostDetail from "./pages/PostDetail";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/write" element={<PostWrite />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
