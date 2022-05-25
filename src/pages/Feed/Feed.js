import React, { useEffect, useState } from "react";
import PostCard from "../../components/Posts/PostCard";
import CreatePost from "./CreatePost";
import FollowCard from "./FollowCard";
import Tab from "./Tab";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../reducers/postSlice";
import { getAllUsers } from "../../reducers/userSlice";
import Loader from "../../components/Loader/Loader";
import { updateUser } from "../../reducers/authSlice";

const Feed = () => {
  const { posts } = useSelector((store) => store.posts);
  const { users } = useSelector((store) => store.users);
  const { user } = useSelector((store) => store.auth);
  const [feedPosts, setFeedPosts] = useState("");
  const [feedPostsMode, setFeedPostsMode] = useState("latest");
  const [unfollowedUsers, setUnfollowedUsers] = useState([]);

  const dispatch = useDispatch();
  const currUser = users.filter((item) => item.username === user.username);
  const currentuser = Object.assign({}, ...currUser);

  useEffect(() => {
    const filterCurrentUser = users.filter(
      (item) => item.username !== user.username
    );
    const filterUsers = filterCurrentUser.filter((userToFilter) =>
      currentuser.following.every(
        (item) => item.username !== userToFilter.username
      )
    );

    setUnfollowedUsers(filterUsers);
  }, [users]);

  useEffect(() => {
    if (posts) {
      const userFilterPost = [...posts].filter(
        (posts) =>
          posts.username === currentuser.username ||
          currentuser.following.some((user) => posts.username === user.username)
      );

      if (userFilterPost && feedPostsMode === "latest") {
        setFeedPosts(
          [...userFilterPost].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        );
      } else if (userFilterPost && feedPostsMode === "trending") {
        setFeedPosts(
          [...userFilterPost].sort(
            (a, b) =>
              parseInt(b.likes.likeCount) +
              b.comments.length -
              parseInt(a.likes.likeCount + a.comments.length)
          )
        );
        console.log("first");
      }
    }
  }, [posts, feedPostsMode, users]);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, []);

  return (
    <div className='flex m-auto w-full justify-center '>
      <div className='hidden wp-20 sm:block'></div>
      <div className='sm:42'>
        <CreatePost />
        <Tab
          setFeedPostsMode={setFeedPostsMode}
          feedPostsMode={feedPostsMode}
        />
        {feedPosts.length > 0 ? (
          feedPosts?.map((post) => <PostCard {...post} />)
        ) : (
          <div className='w-full  flex items-center justify-center'>
            <Loader />
          </div>
        )}
      </div>
      <div className='hidden sm:block'>
        {unfollowedUsers ? (
          unfollowedUsers?.map(
            (data) =>
              user.username !== data.username && <FollowCard {...data} />
          )
        ) : (
          <div className='w-full  flex items-center justify-center'>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
