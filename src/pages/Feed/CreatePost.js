import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../reducers/postSlice";
const CreatePost = () => {
  const [postData, setPostData] = useState("");
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const inputPostHandler = (e) => {
    setPostData(e.target.value);
  };
  return (
    <div className='container main-post-container mx-auto w-full  '>
      <div>
        <div className='main-post-container p-3 px-6 min-h-48 flex justify-center items-center'>
          <div className='rounded-md shadow-md sm:w-96 bg-coolGray-900 text-coolGray-100'>
            <div className='flex items-center justify-between p-3'>
              <div className='flex items-center space-x-2'>
                <img
                  src='https://friendkit.cssninja.io/assets/img/avatars/dan.jpg'
                  alt=''
                  className='object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700'
                />
                <div className='-space-y-1'>
                  <h2 className='text-sm font-semibold leading-none'>Adarsh</h2>
                </div>
              </div>
            </div>
            <textarea
              placeholder='create a post'
              value={postData}
              className='bg-cyan p-3 px-6 text-xl'
              onChange={(e) => inputPostHandler(e)}></textarea>
            <div className='  p-3 px-6 '>
              <button
                onClick={() =>
                  dispatch(createPost({ postData, token }), setPostData(""))
                }
                type='button'
                class='text-white bg-lg focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-1 mb-1 m-2'>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
