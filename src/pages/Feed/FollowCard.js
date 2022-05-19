import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUnfollowUser } from "../../reducers/userSlice";

const FollowCard = ({ ...data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = data._id;
  const { token, user } = useSelector((store) => store.auth);
  const isFollowed = user.following.some((id) => id._id === userId);

  return (
    <div key={data._id}>
      <div className='bg-white rounded-md shadow-md sm:w-96 bg-coolGray-900  text-coolGray-100 px-3 w-fit m-1 mb-2'>
        <div className='flex items-center justify-between py-2'>
          <div className='flex items-center space-x-2 '>
            <img
              src='https://friendkit.cssninja.io/assets/img/avatars/dan.jpg'
              alt=''
              className='object-cover object-center w-12 h-12 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700'
            />

            <div className='-space-y-1 w-16  overflow-hidden cursor-pointer'>
              <p
                onClick={() => navigate(`/profile/${userId}`)}
                title={data.username}
                className=' font-semibold leading-none text-base mr-1 truncate  overflow-hidden  ...'>
                {data.username}
              </p>
            </div>
          </div>
          <button
            onClick={() =>
              dispatch(
                followUnfollowUser({ userId, dispatch, isFollowed, token })
              )
            }
            type='button'
            className='text-white bg-lg  focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-1 mb-1 m-2'>
            {isFollowed ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowCard;
