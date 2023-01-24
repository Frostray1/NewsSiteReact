import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const AddPosts = (props) => {
  const [content, setContent] = React.useState('');
  

  const createPost = () => {

    const posts = {
      id: 4,
      username: "Test",
      description: content,
    }
    console.log(posts)
  };
  return (
    <div className="posts__block">
      <TextArea
        onChange={(e) => setContent(e.target.value)}
        // value={content}
        placeholder="Что нового?"
        autoSize
      />
      <Button onClick={()=>createPost()} className="postsBtn__create" type="primary">
        Создать пост
      </Button>
    </div>
  );
};

export default AddPosts;
