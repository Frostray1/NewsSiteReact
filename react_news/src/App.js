
import React from 'react';
import { Layout } from 'antd';
import './scss/app.scss';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Sider from './components/Sider/Sider';
// import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='mainContent'>
        <Sider/>
      {/* <Content/> */}
      
      
      </div>
     
     



    </div>
  );
}

export default App;
