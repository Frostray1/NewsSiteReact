import React, { useEffect, useState } from 'react'
import { UserOutlined } from "@ant-design/icons";
import { posts } from './Posts';
import readDocument from 'hooks/read-data-user';
import { useAuth } from 'hooks/use-auth';
import BlogCard from './BlogCard';

const BlogContent = () => {
    const { isAuth, email } = useAuth();
    const [userInfo, setUserInfo] = useState("");
    useEffect(() => {
      readDocument(email)
        .then((result) => {
          if (result) {
            setUserInfo(result);
          }
        })
        .catch((err) => {
          console.warn("Something went wrong!", err);
        });
    }, [email]);
    const blogPosts = posts.map((item)=>{
        return(
            <BlogCard
            key={item.id}
            avatar={userInfo.urlAvatar}
            username={userInfo.username}
            description = {item.description}

            />
        )
    })



  return (
    <div>{blogPosts}</div>
  )
}

export default BlogContent