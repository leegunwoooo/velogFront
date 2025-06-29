import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

export const signIn = (data) => API.post("/users/signin", data);
export const signUp = (data) => API.post("/users/signup", data);