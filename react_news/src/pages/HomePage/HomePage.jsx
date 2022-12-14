import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import Sider from '../../components/Sider/Sider';

const HomePage =()  => {
    return (
      <div className="HomePage">
        <Header/>
        <div className='mainContent'>
            <Sider/>
            <Content/>
        </div>
      </div>
    );
  }
  
  export default HomePage;