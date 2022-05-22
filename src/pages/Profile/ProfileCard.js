import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { followUnfollowUser } from "../../reducers/userSlice";
import ProfileModal from "./ProfileModal";

const ProfileCard = ({ postsLength, userData }) => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const userId = userData._id;
  const isFollowed = user.following?.some((id) => id._id === userId);
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div key={userData._id}>
      <div className='font-sans leading-tight bg-grey-lighter p-8'>
        <div className='max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg'>
          <div>
            <img
              className='bg-cover h-40 w-full'
              src='https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80'
              alt=''
            />
          </div>
          <div className='border-b px-4 pb-6'>
            <div className='text-center sm:text-left sm:flex mb-4'>
              <img
                className='h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4'
                src='https://randomuser.me/api/portraits/women/21.jpg'
                alt=''
              />
              <div className='py-2'>
                <h3 className='font-bold text-2xl mb-1'>
                  {userData.firstName} {userData.lastName}
                </h3>
                <div className='inline-flex text-grey-dark sm:flex items-center'>
                  @{userData.username}
                </div>
              </div>
            </div>
            <div className=' flex my-2 w-full  text-grey-dark  sm:flex items-center'>
              {userData.bio}
            </div>
            <div className='flex w-full'>
              <div
                className='wp-60 flex items-center mr-1 '
                title={userData.link}>
                <a
                  className='text-teal-400 truncate overflow-hidden ... '
                  href={userData.link}>
                  {userData.link}
                </a>
              </div>
              {user.username !== userData.username ? (
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
                  className='text-white bg-lg flex-1 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-1 mb-1 m-2'>
                  {isFollowed ? "Unfollow" : "Follow"}
                </button>
              ) : (
                <button
                  onClick={() => setShowProfileModal(true)}
                  className='relative flex-end inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-lg group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-teal-200 dark:focus:ring-green-800'>
                  <span className='relative px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                    Edit Profile
                  </span>
                </button>
              )}
            </div>
          </div>
          <div className='px-4 py-4'>
            <div className='flex items-center text-grey-darker mb-4 w-full bg-gray-70'>
              <div className='w-full uppercase text-center tracking-wide flex justify-around'>
                <div className='posts'>
                  <p className='text-gray-400 text-sm'>Posts</p>
                  <p className='text-lg font-semibold text-teal-600'>
                    {postsLength}
                  </p>
                </div>
                <div className='followers'>
                  <p className='text-gray-400 text-sm'>Followers</p>
                  <p className='text-lg font-semibold text-teal-600'>
                    {userData.followers?.length}
                  </p>
                </div>
                <div className='following'>
                  <p className='text-gray-400 text-sm'>Following</p>
                  <p className='text-lg font-semibold text-teal-600'>
                    {userData.following?.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showProfileModal && (
        <ProfileModal
          setShowProfileModal={setShowProfileModal}
          defaultData={userData}
        />
      )}
    </div>
  );
};

export default ProfileCard;
