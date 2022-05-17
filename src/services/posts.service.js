import axios from "axios";

export const getAllPostService = () => axios.get("/api/posts");
