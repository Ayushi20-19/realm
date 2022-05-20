import React from "react";

const Tab = () => {
  return (
    <div className='container main-post-container mx-auto  '>
      <div className='main-post-container p-3 px-6 min-h-48 flex justify-center items-center'>
        <div className='rounded-md shadow-md sm:wp-90 w-96 bg-coolGray-900 text-coolGray-100'>
          <ul class=' text-sm w-full font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow flex dark:divide-gray-700 dark:text-gray-400'>
            <li class='w-full'>
              <a
                href='#'
                class='inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white'
                aria-current='page'>
                Latest
              </a>
            </li>
            <li class='w-full'>
              <a
                href='#'
                class='inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'>
                Trending
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
