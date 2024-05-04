import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Guidesearch from './Component/Guidepage/Guidesearch';
import GuideProfile from './Component/GuideProfile/gideprofile'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/guidesearch" element={<Guidesearch />} />
        <Route path="/guideprofile" element={<GuideProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
