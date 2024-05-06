import React from 'react';

import MainPage from './Component/Places/card/Card';
import FooterPlaces from './Component/Places/footer/Footer';
import FreePlanComponent from './Component/Places/freePlanComponent/FreePlanComponent';
import Header from './Component/Places/header/Header';
import Navbar from './Component/Places/navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <MainPage/>
      <FreePlanComponent/>
      <FooterPlaces/>
    </>
  );
};

export default App;


