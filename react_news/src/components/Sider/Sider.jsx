import React from 'react';
import { FireOutlined, FieldTimeOutlined,CarryOutOutlined,SaveOutlined } from '@ant-design/icons';
  

function Sider() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  }

    return (
        


        <div className="sider__container">
        <ul className="nav">
          <li onClick={()=>{onClickCategory(0)}}className={activeIndex === 0 ? 'active': ''}><FireOutlined /><a href='##'>Популярное</a></li>
          <li onClick={()=>{onClickCategory(1)}}className={activeIndex === 1 ? 'active': ''}><FieldTimeOutlined /><a href='##'>Свежее</a></li>
          <li onClick={()=>{onClickCategory(2)}}className={activeIndex === 2 ? 'active': ''}><CarryOutOutlined /><a href='##'>Подписки</a></li>
          <li onClick={()=>{onClickCategory(3)}}className={activeIndex === 3 ? 'active': ''}><SaveOutlined /><a href='##'>Сохраненное</a></li>

        </ul>
        

        </div> 
    );
}

export default Sider;