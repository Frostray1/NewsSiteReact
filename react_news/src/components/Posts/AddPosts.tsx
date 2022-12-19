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
      <div className="wrapper">
        <Input // TextArea нужно использовать
          className="content__textInput"
          placeholder="Что нового?"
          // rows={10}
          onKeyPress={addPostHandler}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <Button className="postsBtn__create" type="primary">
          Создать пост
        </Button>
      </div>
    </div>
  );
};

export default AddPosts;
