import React from 'react';

import Footnotes from './Component/Restaurant/Footnotes/Footnotes'


import FooterPlaces from './Component/Restaurant/Footer_res/Footer';
import MultipleCards from './Component/Restaurant/card_supporter/MultipleCards';
import DataCard from './Component/Restaurant/card_all_restaurants/Card_group';
import Header_res from './Component/Restaurant/Header_res/Header_res';


function App() {
  return (
    <div className="all_of_proj">

     <Header_res/>
      
      <MultipleCards/>
      <DataCard/>

      
      <Footnotes/>
      <FooterPlaces/>
      
      
    </div>
  );
}

export default App;
