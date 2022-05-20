import React, { useEffect, useState } from "react";
import PostCard from "../../components/Posts/PostCard";
import CreatePost from "./CreatePost";
import FollowCard from "./FollowCard";
import Tab from "./Tab";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../reducers/postSlice";
import { getAllUsers } from "../../reducers/userSlice";

const Feed = () => {
  const { posts, status, error, bookmarks, comments } = useSelector(
    (store) => store.posts
  );
  const { users } = useSelector((store) => store.users);
  const { user } = useSelector((store) => store.auth);
  const [feedPosts, setFeedPosts] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (posts) {
      setFeedPosts(
        [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    }
  }, [posts]);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, bookmarks, comments]);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className='flex m-auto w-full justify-center '>
      <div className='hidden wp-20 sm:block'></div>
      <div className='sm:42'>
        <CreatePost />
        <Tab />
        {status !== "idle" || error ? (
          feedPosts?.map((post) => <PostCard {...post} />)
        ) : (
          <p>{status}</p>
        )}
      </div>
      <div className='hidden sm:block'>
        {users?.map(
          (data) => user.username !== data.username && <FollowCard {...data} />
        )}
      </div>
    </div>
  );
};

export default Feed;
