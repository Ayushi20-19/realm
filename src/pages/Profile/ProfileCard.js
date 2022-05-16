import { BookmarkIcon } from "@heroicons/react/outline";
import React from "react";

const ProfileCard = () => {
  return (
    <div>
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
                <h3 class='font-bold text-2xl mb-1'>Cait Genevieve</h3>
                <div class='inline-flex text-grey-dark sm:flex items-center'>
                  <svg
                    class='h-5 w-5 text-grey mr-1'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width='24'
                    height='24'>
                    <path
                      class='heroicon-ui'
                      d='M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
                    />
                  </svg>
                  New York, NY
                </div>
              </div>
            </div>
            <div class='flex w-full'>
              <div class='wp-60 flex items-center mr-1 '>
                <a class='truncate overflow-hidden ... ' href='#'>
                  Link nnnnnnnnnn jdfn fef jef feefn fndf mdfd fjdfnmd fjfn md
                  jdfn dnfnn
                </a>
              </div>

              <button
                type='button'
                class='text-white bg-lg flex-1 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center mr-1 mb-1 m-2'>
                Follow
              </button>
            </div>
          </div>
          <div class='px-4 py-4'>
            <div class='flex items-center text-grey-darker mb-4 w-full bg-gray-70'>
              <div class='w-full uppercase text-center tracking-wide flex justify-around'>
                <div class='posts'>
                  <p class='text-gray-400 text-sm'>Posts</p>
                  <p class='text-lg font-semibold text-blue-300'>76</p>
                </div>
                <div class='followers'>
                  <p class='text-gray-400 text-sm'>Followers</p>
                  <p class='text-lg font-semibold text-blue-300'>964</p>
                </div>
                <div class='following'>
                  <p class='text-gray-400 text-sm'>Following</p>
                  <p class='text-lg font-semibold text-blue-300'>34</p>
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
