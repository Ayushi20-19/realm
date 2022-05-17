import axios from "axios";

export const getAllPostService = () => axios.get("/api/posts");

export const createPostService = (postData, token) =>
  axios.post(
    "/api/posts",
    {
      postData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
