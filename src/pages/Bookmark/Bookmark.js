import axios from "axios";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/Posts/PostCard";
import { getAllPosts } from "../../reducers/postSlice";

const Bookmark = () => {
  const { posts, bookmarks, comments } = useSelector((store) => store.posts);

  const { user, token } = useSelector((state) => state.auth);
  const [bookmark, setBookmarks] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const getBookmarks = async () => {
        const response = await axios.get("/api/users/bookmark", {
          headers: { authorization: token },
        });
        setBookmarks(response.data.bookmarks);
      };
      getBookmarks();
    } catch (error) {
      console.log(error);
    }
  }, [posts, user, bookmarks, comments.comments]);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch, comments.comments]);

  const bookmarkedPosts = posts.filter((post) =>
    bookmark.some((bookmark) => bookmark === post._id)
  );

  return (
    <div>
      {bookmarkedPosts.length > 0 ? (
        <>
          <h1>Book mark Posts {bookmarkedPosts.length} </h1>
          {bookmarkedPosts.map((post) => (
            <PostCard key={post._id} {...post} />
          ))}
        </>
      ) : (
        <div className='text-center w-full my-3 text-xl'>
          <h2> No Post is bookmarked yet</h2>
        </div>
      )}
    </div>
  );
};

export { Bookmark };
