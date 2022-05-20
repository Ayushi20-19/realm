import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Posts/PostCard";
import { updateUser } from "../../reducers/authSlice";
import { getUserPosts } from "../../reducers/postSlice";
import { getAllUsers } from "../../reducers/userSlice";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  const userHandle = useParams();
  const { users } = useSelector((store) => store.users);
  const { userPosts } = useSelector((store) => store.posts);
  const [userData, setUserData] = useState("");
  // const [profilePost, setProfilePost] = useState(userPosts);
  // const dispatch = useDispatch();

  useEffect(() => {
    const user = users.find((user) => user.username === userHandle.profileID);
    setUserData(user);
    // dispatch(getUserPosts(userData?.username));
    // setProfilePost(
    //   [userPosts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    // );
    // console.log(profilePost);
  }, [userHandle.profileID, users]);

  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      <ProfileCard {...userData} />
      {/* {console.log(profilePost.lenght)}

      {profilePost.lenght === undefined
        ? null
        : profilePost?.map((posts) => <PostCard {...posts} />)} */}
    </div>
  );
};

export default Profile;
