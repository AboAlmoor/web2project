
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar1 from './Component/MainPage/MainNavbar1';
import MainFooter from './Component/MainPage/MainFooter';
import MainIcons from './Component/MainPage/MainIcons';
import MainCards from './Component/MainPage/MainCards';
import MainFeatures1 from './Component/MainPage/MainFeatures1';


function App() {
  return (
    <div>
      <MainNavbar1/>
      <div className='bg'>
        <MainIcons/>
        <MainCards/>
       <MainFeatures1/>
       
      </div>
     
      <MainFooter/>
    </div>
  );
}

export default App;

