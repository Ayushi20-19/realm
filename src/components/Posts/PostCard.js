import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  likeDislikePost,
  addRemoveBookmark,
  addComment,
} from "../../reducers/postSlice";
import { useEffect } from "react";
import PostModal from "./PostModal";
import { useLocation } from "react-router-dom";

const PostCard = ({ ...post }) => {
  const postId = post._id;
  const dispatch = useDispatch();
  const urlPath = useLocation();

  const [isOpenDropdown, setOpenDropdown] = useState(false);
  const [commentData, setCommentData] = useState("");
  const [showPostModal, setShowPostModal] = useState(false);
  const [commentsList, setCommentsLists] = useState(post.comments || []);
  const [currentUser, setCurrentUser] = useState("");

  const { token, user } = useSelector((store) => store.auth);
  const { users } = useSelector((store) => store.users);

  const { bookmarks, comments } = useSelector((store) => store.posts);

  const isLiked = post.likes.likedBy?.some(
    (like) => like.username === user.username
  );

  const isBookmarked = bookmarks.bookmarks?.some((id) => id === postId);

  useEffect(() => {
    if (post.comments) {
      setCommentsLists(
        [...post.comments].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      );
    }
  }, [post.comments, comments.comments]);

  useEffect(() => {
    const findUser = [...users].filter(
      (name) => name.username === post.username
    );

    setCurrentUser(findUser[0].profilePic);
  }, [post]);

  return (
    <div key={post._id}>
      <div className='container main-post-container  mx-auto w-full'>
        <div>
          <div className='main-post-container p-3 px-6 flex justify-center items-center'>
            <div className='rounded-md shadow-md sm:wp-90 w-96 bg-coolGray-900 text-coolGray-100'>
              <div className='flex items-center justify-between p-3'>
                <div className='flex items-center space-x-2'>
                  <img
                    src={currentUser}
                    alt=''
                    className='object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700'
                  />
                  <div className='-space-y-1'>
                    <h2 className='text-sm font-semibold leading-none'>
                      {post.username}
                    </h2>
                  </div>
                </div>
                {user.username === post.username && (
                  <div
                    className='rounded-full px-3 py-0.5 cursor-pointer relative duration-200'
                    onClick={() => setOpenDropdown(!isOpenDropdown)}>
                    <button title='Open options' type='button'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        className='w-5 h-5 fill-current $'>
                        <path d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z'></path>
                        <path d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z'></path>
                        <path d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z'></path>
                      </svg>
                    </button>

                    {isOpenDropdown && (
                      <ul className='dropdown absolute text-sm px-1 py-2 rounded-lg  m-0 bg-teal-100 top-8 right-4 w-36 gap-1'>
                        {/* {urlPath.pathname === `/profile/${user.username}` && ( */}
                        <li
                          onClick={() => setShowPostModal(true)}
                          className='hover:bg-white flex items-center  px-3 py-1 rounded-lg'>
                          Edit
                        </li>
                        {/* )} */}
                        <li
                          className='hover:bg-white flex items-center px-3 py-1 rounded-lg'
                          onClick={() =>
                            dispatch(deletePost({ postId, token }))
                          }>
                          Delete
                        </li>
                      </ul>
                    )}
                  </div>
                )}
              </div>
              <div className='p-3  '>
                <p className='text-sm mb-1'>{post.content}</p>
              </div>

              <div className='p-3'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-3'>
                    <button
                      onClick={() =>
                        dispatch(
                          likeDislikePost({ postId, isLiked, token, dispatch })
                        )
                      }
                      type='button'
                      title='Like post'
                      className='flex items-center justify-center'>
                      {isLiked ? (
                        <i class='fas fa-heart  mr-1 hover:text-red-400 text-red-500 text-xl'></i>
                      ) : (
                        <i class='fal fa-heart  mr-1 hover:text-red-400 text-xl'></i>
                      )}
                    </button>
                    {post.likes.likeCount}
                    <button
                      type='button'
                      title='Add a comment'
                      className='flex items-center justify-center'>
                      <i class='fal fa-comment  mr-1 hover:text-teal-400 text-xl'></i>
                    </button>
                    {post.comments.length}
                    {/* <button
                      type='button'
                      title='Share post'
                      className='flex items-center justify-center'>
                      <i class='fal fa-light fa-paper-plane hover:text-teal-400  text-xl'></i>
                    </button> */}
                  </div>
                  <button
                    onClick={() =>
                      dispatch(
                        addRemoveBookmark({ postId, isBookmarked, token })
                      )
                    }
                    type='button'
                    title='Bookmark post'
                    className='flex items-center justify-center'>
                    {isBookmarked ? (
                      <i className='fas fa-bookmark mr-1 text-teal-500 hover:text-teal-400 text-xl'></i>
                    ) : (
                      <i className='fal fa-bookmark mr-1 hover:text-teal-400 text-xl'></i>
                    )}
                  </button>
                </div>
                <div className='flex flex-wrap items-center pt-3 pb-1'>
                  <div className='flex items-center space-x-2'>
                    <div className='flex -space-x-1'></div>
                  </div>
                </div>
                <div className='space-y-3'>
                  {commentsList?.slice(0, 4)?.map((val) => (
                    <>
                      <p className='text-sm'>
                        <span className='text-base font-semibold mr-1'>
                          {val.username}
                        </span>
                        {val.text}
                      </p>
                    </>
                  ))}

                  <input
                    onChange={(e) => setCommentData(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      dispatch(
                        addComment({ postId, commentData, token }),
                        setCommentData("")
                      )
                    }
                    value={commentData}
                    type='text'
                    placeholder='Add a comment...'
                    className='w-full py-0.5  bg-transparent border-none rounded text-sm pl-1 text-coolGray-100'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPostModal && (
        <PostModal
          setShowPostModal={setShowPostModal}
          postId={post._id}
          defaultData={post.content}
        />
      )}
    </div>
  );
};

export default PostCard;
