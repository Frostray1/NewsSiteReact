import { UserOutlined } from '@ant-design/icons';
import { Avatar , Input } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';
import React from 'react'

import { Link } from 'react-router-dom';
import { useAuth, token } from 'hooks/use-auth';


function Header() {
    const {isAuth, email} = useAuth();
    
   console.log(isAuth);

    return isAuth ? (
        <>
        <div className="header__container">
        <div className="logo">
            <h1>News Info</h1>
        </div>
        <Input className="search__input" placeholder="Поиск" />
        <div className="profile">
            <NotificationOutlined className='profile__notification' style={{ fontSize:'24px'}} />
            <Link to = "/profile" ><Avatar  className="profile__icon" style={{ backgroundColor: '#fff', color: '#000'}} shape="square" size="large" icon={<UserOutlined />} /></Link>
            </div>
       
        </div> 

        </>

    ): (
        <>
        <div className="header__container">
        <div className="logo">
            <h1>News Info</h1>
        </div>
        <Input className="search__input" placeholder="Поиск" />
        <div className="profile">
            {/* <NotificationOutlined className='profile__notification' style={{ fontSize:'24px'}} /> */}
            <Link to = "/login" ><Avatar  className="profile__icon" style={{ backgroundColor: '#fff', color: '#000'}} shape="square" size="large" icon={<UserOutlined />} /></Link>
            </div>
       
        </div> 
         
         </>
    )
        
                // {/* isAuth ?
                
                // {/* <Link to = "/login" ><Avatar  className="profile__icon" style={{ backgroundColor: '#fff', color: '#000'}} shape="square" size="large" icon={<UserOutlined />} /></Link> */}
           
    
}

export default Header;