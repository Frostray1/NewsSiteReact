import Header from '../../components/Header/Header';
import { useAuth } from "hooks/use-auth";
import { Navigate} from "react-router-dom";
import Sider from 'components/Sider/Sider';
import {Input } from 'antd';
import { useEffect, useState } from "react";
import readDocument from "../../hooks/read-data-user";
import AddPosts from 'components/Posts/AddPosts';
import { IPost } from "types";
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
            <div className="wrapper">
              <div className="dataUser">
              <img className='userImg' src={userInfo.urlAvatar} alt="" />
              <div className="profileUser__block">
                <h1>{userInfo.username}</h1>
                <p>{userInfo.aboutUser}</p>
              </div>
              </div>
              {/* <TextArea className='inputPosts' placeholder="Что у вас нового??" autoSize /> */}
              <AddPosts/>
             </div>
             
            </div>
            
        </div>
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
};
export default ProfilePage;
