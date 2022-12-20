import Header from "components/Header/Header";
import Sider from "components/Sider/Sider";
import React from 'react';
import { Button, Result } from 'antd';
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="NotFound">
      <Header />
      <div className="navContent__block">
        <Sider />
        <div className="posts__block">
          <div className="wrapper">
            <Result
              status="404"
              title="404"
              subTitle="Страница не найдена"
              extra={ <Link to ="/"><Button type="primary">Вернуться</Button></Link> }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
