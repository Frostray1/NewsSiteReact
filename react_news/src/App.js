
import React from 'react';

import './scss/app.scss';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import {Routes, Route} from 'react-router-dom'
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import NotFound from 'pages/NotFoundPage/NotFound';
import ProfileSettingPage from 'pages/SettingsPages/ProfileSettingPage';

function App() {
  return (
    // <HomePage/>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/profile-setting' element={<ProfileSettingPage/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
