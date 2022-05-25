import React from "react";

const Tab = ({ setFeedPostsMode, feedPostsMode }) => {
  return (
    <div className='container main-post-container mx-auto  '>
      <div className='main-post-container p-3 px-6 min-h-48 flex justify-center items-center'>
        <div className='rounded-md shadow-md sm:wp-90 w-96 bg-coolGray-900 text-coolGray-100'>
          <ul class=' text-sm w-full font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow flex dark:divide-gray-700 dark:text-gray-400'>
            <li class='w-full'>
              <button
                onClick={() => setFeedPostsMode("latest")}
                style={
                  feedPostsMode === "latest"
                    ? { backgroundColor: "#99f6e4" }
                    : { backgroundColor: "white" }
                }
                class='curson-pointer inline-block p-4 w-full text-gray-900 rounded-l-lg  active focus:outline-none dark:bg-gray-700 dark:text-white'
                aria-current='page'>
                Latest
              </button>
            </li>
            <li class='w-full'>
              <button
                style={
                  feedPostsMode === "trending"
                    ? { backgroundColor: "#99f6e4" }
                    : { backgroundColor: "white" }
                }
                onClick={() => setFeedPostsMode("trending")}
                class='curson-pointer inline-block p-4 w-full rounded-r-lg hover:text-gray-700 hover:bg-gray-50  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'>
                Trending
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
