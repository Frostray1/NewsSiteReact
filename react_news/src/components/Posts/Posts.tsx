import React, { FC } from "react";
import { IPost } from "types";

interface IPosts {
  posts: IPost[];
}

const Posts: FC<IPosts> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div>
            <h1>{post.author._id}</h1>
             <p>{post.content}</p>
        </div>
       
      ))}
    </>
  );
};

export default Posts;
