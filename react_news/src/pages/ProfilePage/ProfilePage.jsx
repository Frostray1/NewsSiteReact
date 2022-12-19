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
            <AddPosts/>
        </div>
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
};
export default ProfilePage;
