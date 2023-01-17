import { FC } from "react";
import React from "react";
import TextArea from "antd/es/input/TextArea";
import { Button, Input } from "antd";
import { IPost, TypeSetState } from "types";
import { users } from "components/Posts/UsersItem";
import { KeyboardEvent, EventHandler } from "react";

interface IAddpost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPosts: FC<IAddpost> = ({ setPosts }) => {
  const [content, setContent] = React.useState<string>("");

  const addPostHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key)
    if (e.key === 'Enter'){
      
      setPosts((prev) => [
        
        {
          author: users[0],
           content,
          createdAt: "5 минут",
        },
        ...prev,
        
      ]);
      console.log('Сработало условие')
    }
  };

  return (
    <div className="posts__block">
      
        <TextArea placeholder="Autosize height based on content lines" autoSize />
        <Button className="postsBtn__create" type="primary">
          Создать пост
        </Button>
  
    </div>
  );
};

export default AddPosts;
