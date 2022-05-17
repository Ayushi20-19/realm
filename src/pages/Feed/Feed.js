import React, { useEffect } from "react";
import PostCard from "../../components/Posts/PostCard";
import CreatePost from "./CreatePost";
import FollowCard from "./FollowCard";
import Tab from "./Tab";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../reducers/postSlice";

const Feed = () => {
  const { posts, status, error, bookmarks } = useSelector(
    (store) => store.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, bookmarks]);

  return (
    <div className='flex m-auto w-full justify-center '>
      <div className='hidden wp-20 sm:block'></div>
      <div className='wp-90 sm:wp-42'>
        <CreatePost />
        <Tab />
        {status !== "idle" || error ? (
          posts?.map((post) => <PostCard {...post} />)
        ) : (
          <p>{status}</p>
        )}
      </div>
      <div className='hidden sm:block'>
        <FollowCard />
        <FollowCard />
        <FollowCard />
      </div>
    </div>
  );
};

export default Feed;
