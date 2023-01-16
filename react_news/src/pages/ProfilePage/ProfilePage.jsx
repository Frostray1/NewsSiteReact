import Header from '../../components/Header/Header';
import { useAuth } from "hooks/use-auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Sider from 'components/Sider/Sider';
import { Button, Input } from 'antd';
import AddPosts from 'components/Posts/AddPosts';
import { useEffect, useState } from "react";
import readDocument from "../../hooks/read-data-user";
const { TextArea } = Input;

const ProfilePage = () => {
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


  return isAuth ? (
    <div className='profilePage_profile'>
        <Header/>
        <div className="navContent__block">
            <Sider/>
            
            <div className="profile__block">
            <div className="wrapper" style={{display:'flex'}}>
              
              <img className='userImg' src={userInfo.urlAvatar} alt="" />
              <div className="profileUser__block">
                <h1>{userInfo.username}</h1>
                <p>{userInfo.aboutUser}</p>
              </div>
             </div>
             <AddPosts/>
            </div>
            
        </div>
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
};
export default ProfilePage;
