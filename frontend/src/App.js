
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Component/LogIn/LogIn';
import CreateAcount from './Component/CreateAcount/CreateAcount';
import FindAccount from './Component/ForgetPassword/ForgetPassword';
import Guidesearch from './Component/Guidepage/Guidesearch';
import GuideProfile from './Component/GuideProfile/gideprofile';
import ImageCarousel from "./Component/KnowTheUnknown/KnowTheUnknown";

// abood
import FooterRestaurant from './Component/Restaurant/Footer_res/Footer';
import Footnotes from './Component/Restaurant/Footnotes/Footnotes';
import DataCard from './Component/Restaurant/card_all_restaurants/Card_group';
import MultipleCards from './Component/Restaurant/card_supporter/MultipleCards';
import HeaderRes from './Component/Restaurant/Header_res/Header_res';


// ahmad 
import FreePlanComponent from './Component/Places/FreePlanComponent';
import FooterPlaces from './Component/Places/Footer';
import MainPage from './Component/Places/Card';
import Header from './Component/Places//Header';
import Navbar from './Component/Places/P_Button_places';
// saleh
import MainNavbar1 from './Component/MainPage/MainNavbar1';
import MainIcons from './Component/MainPage/MainIcons';
import MainCards from './Component/MainPage/MainCards';
import MainFeatures1 from './Component/MainPage/MainFeatures1';
import MainFooter from './Component/MainPage/MainFooter';
// ameer
import ProfileCover from "./Component/UserProfile/ProfileCover"; 
import ProfileEdit from "./Component/EditProfile/ProfileEdit";


import EmailVerification from './Component/EnterEmailVerification/EmailVerification';
import ChangePassword from './Component/Changepss/ChangePassword';

function RestaurantRoute(){
  return(
    <>
      <HeaderRes/>
      <MultipleCards/>
      <Footnotes/>
      <DataCard/>
      <FooterRestaurant/>
    </>
  );
}
function HomePageRoute() {
  return (
    <>
      <MainNavbar1 />
      <MainIcons />
      <MainCards />
      <MainFeatures1 />
      <MainFooter />
    </>
  );
}
function PlacesRoute() {
  return (
    <>
      <Header />
      <Navbar />
      <MainPage />
      <FreePlanComponent />
      <FooterPlaces />
    </>
  );
}

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route index path="/LogIn" element={<LogIn />} />
          <Route index path="/CreateAcount" element={<CreateAcount />} />
          <Route index path="/ForgetPassword" element={<FindAccount />} />
          <Route index path="/email-verification" element={<EmailVerification />} />
          <Route index path="/changePassword" element={<ChangePassword />} />

          <Route path="/guidesearch" element={<Guidesearch />} />
          <Route path="/guideprofile" element={<GuideProfile />} />
          <Route path="/KnowTheUnknown" element={<ImageCarousel />} />
          {/* -------------------------------------------------------------------------- */}

          <Route path="/Restaurant" element={<RestaurantRoute/>} />
          

          {/* ahmad */}
          <Route path="/Places" element={<PlacesRoute />} />

          {/* saleh */}
          <Route path="/" element={<HomePageRoute />} />

          {/* ameer */}
          <Route path="/ProfileComponents" element={<ProfileCover />} />
            <Route path="/editProfile" element={<ProfileEdit />} />
            <Route path="/Login" element={<LogIn />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;