import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Component/LogIn/LogIn';
import CreateAcount from './Component/CreateAcount/CreateAcount';
import FindAccount from './Component/ForgetPassword/ForgetPassword';
import Guidesearch from './Component/Guidepage/Guidesearch';
import GuideProfile from './Component/GuideProfile/gideprofile'; 
import ImageCarousel from "./Component/KnowTheUnknown/KnowTheUnknown";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route index path="/LogIn" element={<LogIn />} />
          <Route index path="/CreateAcount" element={<CreateAcount/>} />
          <Route index path="/ForgetPassword" element={<FindAccount/>} />
          <Route path="/guidesearch" element={<Guidesearch />} />
          <Route path="/guideprofile" element={<GuideProfile />} />
        </Routes>
      </Router>
      <ImageCarousel/>
    </div>
  );
}

export default App;