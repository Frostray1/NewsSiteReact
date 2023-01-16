import Header from '../../components/Header/Header';
import { useAuth } from "hooks/use-auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Sider from 'components/Sider/Sider';
import { Button, Input } from 'antd';
import AddPosts from 'components/Posts/AddPosts';

const { TextArea } = Input;

const ProfilePage = () => {
  const { isAuth, email } = useAuth();



  
  return isAuth ? (
    <div className='profilePage_profile'>
        <Header/>
        <div className="navContent__block">
            <Sider/>
            
            <div className="profile__block">
            <div className="wrapper" style={{display:'flex'}}>
              
              <img className='userImg' src="" alt="" />
              <div className="profileUser__block">
                <h1>Nick</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum eius quia deserunt dolorem! Cum soluta deserunt harum voluptate repellendus distinctio praesentium debitis aliquid nihil, amet eaque, asperiores, ullam voluptatum. Voluptatum?</p>
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
