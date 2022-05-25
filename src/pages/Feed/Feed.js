import React, { useEffect, useState } from "react";
import PostCard from "../../components/Posts/PostCard";
import CreatePost from "./CreatePost";
import FollowCard from "./FollowCard";
import Tab from "./Tab";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../reducers/postSlice";
import { getAllUsers } from "../../reducers/userSlice";
import Loader from "../../components/Loader/Loader";

const Feed = () => {
  const { posts } = useSelector((store) => store.posts);
  const { users } = useSelector((store) => store.users);
  const { user } = useSelector((store) => store.auth);
  const [feedPosts, setFeedPosts] = useState("");
  const [feedPostsMode, setFeedPostsMode] = useState("latest");

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user);
    const userFilterPost = [...posts].filter(
      (posts) =>
        posts.username === user.username ||
        user.following.some((user) => posts.username === user.username)
    );
    console.log(
      "🚀 ~ file: Feed.js ~ line 21 ~ useEffect ~ userFilterPost",
      userFilterPost
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
  }, [posts, feedPostsMode, user]);

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
        {users ? (
          users?.map(
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
