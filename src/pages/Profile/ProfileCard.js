import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { followUnfollowUser } from "../../reducers/userSlice";

const ProfileCard = ({ ...userData }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const userId = userData._id;
  const isFollowed = user.following.some((id) => id._id === userId);

  return (
    <div key={userData._id}>
      <div class='font-sans leading-tight min-h-screen bg-grey-lighter p-8'>
        <div class='max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg'>
          <div>
            <img
              class='bg-cover h-40 w-full'
              src='https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80'
              alt=''
            />
          </div>
          <div class='border-b px-4 pb-6'>
            <div class='text-center sm:text-left sm:flex mb-4'>
              <img
                class='h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4'
                src='https://randomuser.me/api/portraits/women/21.jpg'
                alt=''
              />
              <div class='py-2'>
                <h3 class='font-bold text-2xl mb-1'>
                  {userData.firstName} {userData.lastName}
                </h3>
                <div class='inline-flex text-grey-dark sm:flex items-center'>
                  @{userData.username}
                </div>
              </div>
            </div>
            <div class='flex w-full'>
              <div class='wp-60 flex items-center mr-1 '>
                <a class='truncate overflow-hidden ... ' href='#'>
                  Link Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </a>
              </div>
              {user._id !== userData._id ? (
                <button
                  onClick={() =>
                    dispatch(
                      followUnfollowUser({
                        userId,
                        dispatch,
                        isFollowed,
                        token,
                      })
                    )
                  }
                  type='button'
                  class='text-white bg-lg flex-1 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-1 mb-1 m-2'>
                  {isFollowed ? "Unfollow" : "Follow"}
                </button>
              ) : (
                <button class='relative flex-end inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-lg group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-green-800'>
                  <span class='relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                    Edit Profile
                  </span>
                </button>
              )}
            </div>
          </div>
          <div class='px-4 py-4'>
            <div class='flex items-center text-grey-darker mb-4 w-full bg-gray-70'>
              <div class='w-full uppercase text-center tracking-wide flex justify-around'>
                <div class='posts'>
                  <p class='text-gray-400 text-sm'>Posts</p>
                  <p class='text-lg font-semibold text-teal-600'>76</p>
                </div>
                <div class='followers'>
                  <p class='text-gray-400 text-sm'>Followers</p>
                  <p class='text-lg font-semibold text-teal-600'>
                    {userData.followers?.length}
                  </p>
                </div>
                <div class='following'>
                  <p class='text-gray-400 text-sm'>Following</p>
                  <p class='text-lg font-semibold text-teal-600'>
                    {userData.following?.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
