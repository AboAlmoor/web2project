import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar1 from './Component/MainPage/MainNavbar1';
import MainFooter from './Component/MainPage/MainFooter';
import MainIcons from './Component/MainPage/MainIcons';
import MainCards from './Component/MainPage/MainCards';
import MainFeatures1 from './Component/MainPage/MainFeatures1';

import MainPage from './Component/Places/card/Card';
import FooterPlaces from './Component/Places/footer/Footer';
import FreePlanComponent from './Component/Places/freePlanComponent/FreePlanComponent';
import Header from './Component/Places/header/Header';
import Navbar from './Component/Places/navbar/Navbar';




const App = () => {
  return (
    <div>
      <MainNavbar1/>
      <div className='bg'>
        <MainIcons/>
        <MainCards/>
       <MainFeatures1/>
      </div>
      <MainFooter/>
      <Navbar/>
      <Header/>
      <MainPage/>
      <FreePlanComponent/>
      <FooterPlaces/>
    </div>
  );
}

export default App;


