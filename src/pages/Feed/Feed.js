import React from "react";
import PostCard from "../../components/Posts/PostCard";
import CreatePost from "./CreatePost";
import FollowCard from "./FollowCard";
import Tab from "./Tab";

const Feed = () => {
  return (
    <div className='flex m-auto w-full justify-center '>
      <div className='hidden wp-20 sm:block'></div>
      <div className=' wp-42'>
        <CreatePost />
        <Tab />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className='hidden sm:block '>
        <FollowCard />
        <FollowCard />
        <FollowCard />
      </div>
    </div>
  );
};

export default Feed;
