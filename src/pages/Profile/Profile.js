import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Posts/PostCard";
import { getUserPosts } from "../../reducers/postSlice";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const userHandle = useParams();
  const { users } = useSelector((store) => store.users);
  const { userPosts } = useSelector((store) => store.posts);

  const [userData, setUserData] = useState(
    "" || JSON.parse(localStorage.getItem("user"))
  );
  const [profilePost, setProfilePost] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const user = users.find((user) => user.username === userHandle.profileID);

    setUserData(user || JSON.parse(localStorage.getItem("user")));

    dispatch(getUserPosts(userData?.username));
    setProfilePost(
      [...userPosts].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
    );
  }, [userHandle.profileID, userPosts]);

  useEffect(() => {}, [userData, userHandle]);

  return (
    <div>
      <ProfileCard {...userData} />
      {profilePost?.map((posts) => (
        <PostCard {...posts} />
      ))}
    </div>
  );
};

export default Profile;
