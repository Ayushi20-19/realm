import axios from "axios";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import PostCard from "../../components/Posts/PostCard";
import { getAllPosts } from "../../reducers/postSlice";

const Bookmark = () => {
  const { posts, status, bookmarks, comments } = useSelector(
    (store) => store.posts
  );
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
  }, [bookmarks]);

  const bookmarkedPosts = posts.filter((post) =>
    bookmark.some((bookmark) => bookmark === post._id)
  );

  return (
    <div>
      {bookmark ? (
        bookmarkedPosts.length > 0 ? (
          <>
            <div className='text-center w-full my-3 text-2xl font-semibold'>
              <p>{bookmarkedPosts.length} posts in bookmark </p>
            </div>
            {bookmarkedPosts.map((post) => (
              <PostCard key={post._id} {...post} />
            ))}
          </>
        ) : (
          <div className='text-center w-full my-3 text-xl'>
            <h2> No Post is bookmarked yet</h2>
          </div>
        )
      ) : (
        <div className='w-full min-h-screen flex items-center justify-center'>
          <Loader />
        </div>
      )}
    </div>
  );
};

export { Bookmark };
