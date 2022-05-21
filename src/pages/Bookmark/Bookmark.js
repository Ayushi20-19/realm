import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import PostCard from "../../components/Posts/PostCard";

const Bookmark = () => {
  const { posts, bookmarks } = useSelector((store) => store.posts);
  const { user, token } = useSelector((state) => state.auth);
  const [bookmark, setBookmarks] = useState([]);

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
  }, [posts, token, user, bookmarks]);

  const bookmarkedPosts = posts.filter((post) =>
    bookmark.some((bookmark) => bookmark === post._id)
  );

  return (
    <div>
      {bookmarkedPosts.length > 0 ? (
        bookmarkedPosts.map((post) => <PostCard key={post._id} {...post} />)
      ) : (
        <div className='text-center w-full my-3 text-xl'>
          <h2> No Post is bookmmarked yet</h2>
        </div>
      )}
    </div>
  );
};

export { Bookmark };
