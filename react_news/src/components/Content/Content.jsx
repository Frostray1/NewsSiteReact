import React from 'react';
import { Card } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

function Content() {
  return (
    <div className="content__container">
      <div className="wrapper">
        <div className="site-card-border-less-wrapper">
          <Card
            title="Card title"
            bordered={false}
            style={{
              width: 800,
              
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            
            <div className="likes">
            <div className="btn__likes active">
            <LikeOutlined />
            <p>34</p>
            </div>
            <div className="btn__dislikes">
            <DislikeOutlined /> 
            <p>16</p>
            </div>
            </div>
            
          </Card>
          
        </div>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Card title"
            bordered={false}
            style={{
              width: 800,
              
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <div className="likes">
            <div className="btn__likes active">
            <LikeOutlined />
            <p>28</p>
            </div>
            <div className="btn__dislikes">
            <DislikeOutlined /> 
            <p>7</p>
            </div>
            </div>
          </Card>
        </div>
        <div className="site-card-border-less-wrapper">
          <Card
            title="Card title"
            bordered={false}
            style={{
              width: 800,
              
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
            <div className="likes">
            <div className="btn__likes ">
            <LikeOutlined />
            <p>2</p>
            </div>
            <div className="btn__dislikes active">
            <DislikeOutlined /> 
            <p>15</p>
            </div>
            </div>
          </Card>
          
        </div>
      </div>
    </div>
  );
}

export default Content;
