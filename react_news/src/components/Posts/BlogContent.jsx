import React, { useEffect, useState } from 'react'
import { UserOutlined } from "@ant-design/icons";
import { posts } from './Posts';
import readDocument from 'hooks/read-data-user';
import { useAuth } from 'hooks/use-auth';

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
            <div className="posts__window">
              <div className="posts__info">
                <img src={userInfo.urlAvatar} alt="" />
                <h1>{userInfo.username}</h1>
              </div>
              <div className="posts__data">
                <p>
                  {item.description}
                </p>
              </div>
            </div>
        )
    })



  return (
    <div>{blogPosts}</div>
  )
}

export default BlogContent