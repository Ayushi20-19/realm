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
export const deletePostService = (postId, token) =>
  axios.delete(`/api/posts/${postId}`, {
    headers: {
      authorization: token,
    },
  });

export const likePostService = (postId, token) =>
  axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const dislikePostService = (postId, token) =>
  axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const addToBookmarkService = (postId, token) =>
  axios.post(
    `/api/users/bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const removeFromBookmarkService = (postId, token) =>
  axios.post(
    `/api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const addCommentService = (postId, commentData, token) => {
  const res = axios.post(
    `/api/comments/add/${postId}`,
    {
      commentData,
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  console.log(
    "🚀 ~ file: posts.service.js ~ line 82 ~ addCommentService ~ res",
    res
  );
  return res;
};
// axios.post(
//   `/api/comments/add/${postId}`,
//   {
//     commentData,
//   },
//   {
//     headers: {
//       authorization: token,
//     },
//   }
// );
