import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Sider from '../../components/Sider/Sider';
import AddPosts from 'components/Posts/AddPosts';
import { IPost } from 'types';
import { useState } from 'react';
import Posts from 'components/Posts/Posts';

const HomePage =()  => {
  const [posts,setPosts] = useState<IPost[]>([])
    return (
      <div className="HomePage">
        <Header/>
        <div className='mainContent'>
            <Sider/>
            <div className="posts">
              <AddPosts />
              <Posts posts={posts}/>
              </div>
            
        </div>
      </div> 
    );
  }
  
  export default HomePage;