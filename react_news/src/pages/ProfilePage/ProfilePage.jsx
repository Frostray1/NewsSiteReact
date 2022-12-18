import Header from '../../components/Header/Header';
import { useAuth } from "hooks/use-auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Sider from 'components/Sider/Sider';
import { Button, Input } from 'antd';

const { TextArea } = Input;

const ProfilePage = () => {
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div className='profilePage_profile'>
        <Header/>
        <div className="navContent__block">
            <Sider/>
            <div className="posts__block">
                <div className="wrapper">
                    <TextArea className='content__textInput' rows={10} />
                    <Button className='postsBtn__create' type="primary">Создать пост</Button>
                </div>

                
            </div>
        </div>
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
};
export default ProfilePage;
