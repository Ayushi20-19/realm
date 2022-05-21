import React, { useEffect, useState } from "react";
import PostCard from "../../components/Posts/PostCard";

import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../reducers/postSlice";
import { getAllUsers } from "../../reducers/userSlice";

const Explore = () => {
  const { posts, status, error, bookmarks, comments } = useSelector(
    (store) => store.posts
  );
  const [feedPosts, setFeedPosts] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    if (posts) {
      setFeedPosts(
        [...posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    } else if (posts) {
      console.log("object", posts);
      setFeedPosts(
        [...posts].sort(
          (a, b) =>
            parseInt(b.likes.likeCount) +
            b.comments.length -
            parseInt(a.likes.likeCount + a.comments.length)
        )
      );
    }
  }, [posts]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, bookmarks, comments, posts.likes]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className='flex m-auto w-full justify-center '>
      <div className='sm:42'>
        {status !== "idle" || error ? (
          feedPosts?.map((post) => <PostCard {...post} />)
        ) : (
          <p>{status}</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
