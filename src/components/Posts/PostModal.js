import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserPost } from "../../reducers/postSlice";

const PostModal = ({ setShowPostModal, defaultData, postId }) => {
  const [postData, setPostData] = useState(defaultData);
  const { token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setPostData(e.target.value);
  };
  const updateHandler = async (e) => {
    e.preventDefault();

    dispatch(
      editUserPost({
        postId,
        postData: { content: postData },
        token,
      })
    );

    setShowPostModal(false);
  };
  return (
    <div>
      <div class='fixed z-10 overflow-y-auto top-3 w-full left-0 ' id='modal'>
        <div class='flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div class='fixed inset-0 transition-opacity'>
            <div
              class='absolute inset-0 bg-gray-900 opacity-75'
              onClick={() => setShowPostModal(false)}
            />
          </div>
          <span class='hidden sm:inline-block sm:align-middle sm:h-screen'>
            &#8203;
          </span>
          <div
            class='inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-headline'>
            <div class='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <label>Post</label>
              <textarea
                name='bio'
                value={postData}
                onChange={(e) => inputHandler(e)}
                type='text'
                class='w-full bg-teal-100 p-2 mt-2 mb-3 min-h-40 h-40 focus:outline-none'></textarea>
            </div>
            <div class='bg-teal-200 px-2 py-2 text-right'>
              <button
                onClick={() => setShowPostModal(false)}
                type='button'
                class='py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2'
                onclick='toggleModal()'>
                Cancel
              </button>
              <button
                onClick={updateHandler}
                type='button'
                class='py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-700 mr-2'>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
