import React from "react";

const BlogCard = (props) => {
   
  return (
    <div  className="posts__window">
      <div className="posts__info">
        <img src={props.avatar} alt="" />
        <h1>{props.username}</h1>
      </div>
      <div className="posts__data">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
