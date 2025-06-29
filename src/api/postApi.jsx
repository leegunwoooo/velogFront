import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

const getToken = () => localStorage.getItem("token");

const authHeader = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const fetchAllPosts = () => API.get("/posts/all");
export const fetchPostById = (id) => API.get(`/posts/${id}`);

export const createPost = (data) => API.post("/posts", data, authHeader());
export const updatePost = (data) => API.put("/posts", data, authHeader());
export const deletePost = (id) => API.delete(`/posts/${id}`, authHeader());