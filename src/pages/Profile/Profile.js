import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Posts/PostCard";
import { updateUser } from "../../reducers/authSlice";
import { getAllPosts } from "../../reducers/postSlice";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const userHandle = useParams();
  const url = userHandle.profileID;
  const { users } = useSelector((store) => store.users);
  const { user } = useSelector((store) => store.auth);
  const { comments, posts } = useSelector((store) => store.posts);
  const [userPosts, setUserPosts] = useState([]);
  const [userData, setUserData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const res = await axios(`/api/users/${url}`);
      setUserData(res.data.user);
    };
    const getPosts = async () => {
      const res = await axios(`/api/posts/user/${url}`);
      setUserPosts(res.data.posts);
    };
    getUser();
    getPosts();
    dispatch(getAllPosts());
  }, [userHandle.profileID, comments, posts, user]);

  useEffect(() => {
    const user = users.find((user) => user.username === userHandle.profileID);
    setUserData(user);
  }, [userHandle.profileID, users]);

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      {userData && (
        <ProfileCard postsLength={userPosts.length} userData={userData} />
      )}

      {userPosts.length > 0 &&
        userPosts?.map((posts) => <PostCard {...posts} />)}
    </div>
  );
};

export default Profile;
