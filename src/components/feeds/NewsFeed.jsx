import React from "react";
import Post from "./Post";
import Test from "./Test";
import PostForm from "./PostForm";

function NewsFeed() {
  return (
    <div>
      <div className="w-[600px] px-3 h-full bg-white flex-col justify-start items-start inline-flex overflow-y-auto scroll-smooth">
          <PostForm/>
          <Test />
          <Test />
          <Test />
          <Test />
      </div>
    </div>
  );
}

export default NewsFeed;
