import React from "react";

const FollowCard = () => {
  return (
    <div>
      <div class='bg-white rounded-md shadow-md sm:w-96 bg-coolGray-900 text-coolGray-100 px-3 w-fit m-1 mb-2'>
        <div className='flex items-center justify-between py-2'>
          <div className='flex items-center space-x-2'>
            <img
              src='https://friendkit.cssninja.io/assets/img/avatars/dan.jpg'
              alt=''
              className='object-cover object-center w-12 h-12 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700'
            />
            <div className='-space-y-1'>
              <h2 className=' font-semibold leading-none text-base mr-1'>
                Unknown_
              </h2>
            </div>
          </div>
          <button
            type='button'
            class='text-white bg-lg  focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-1 mb-1 m-2'>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowCard;
