import axios from "axios";

export const getAllUserService = () => axios.get("/api/users");

export const followUserService = (userId, token) =>
  axios.post(
    `/api/users/follow/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );

export const unfollowUserService = (userId, token) =>
  axios.post(
    `/api/users/unfollow/${userId}`,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
