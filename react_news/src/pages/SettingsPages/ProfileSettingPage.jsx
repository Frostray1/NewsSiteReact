import Header from 'components/Header/Header'
import ProfileSetting from 'components/ProfileSettings/ProfileSetting'
import Sider from 'components/Sider/Sider'
import React from 'react'

const ProfileSettingPage = () => {
  return (
    <div>
        <Header/>
        <div className="navContent__block">
        <Sider/>
        <div className="posts__block">
          <div className="wrapper">
            <ProfileSetting/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettingPage