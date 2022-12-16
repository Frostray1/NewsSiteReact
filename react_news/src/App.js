
import React from 'react';

import './scss/app.scss';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import {Routes, Route} from 'react-router-dom'
import ProfilePage from 'pages/ProfilePage/ProfilePage';

function App() {
  return (
    // <HomePage/>
    
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
  );
}

export default App;
