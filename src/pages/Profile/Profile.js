import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Posts/PostCard";
import { updateUser } from "../../reducers/authSlice";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const userHandle = useParams();
  const url = userHandle.profileID;
  const { users } = useSelector((store) => store.users);
  const { user } = useSelector((store) => store.auth);
  const { comments, posts } = useSelector((store) => store.posts);
  const [postss, setUserPosts] = useState([]);
  const [userData, setUserData] = useState("");

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
        <ProfileCard postsLength={postss.length} userData={userData} />
      )}

      {postss.length > 0 && postss?.map((posts) => <PostCard {...posts} />)}
    </div>
  );
};

export default Profile;
