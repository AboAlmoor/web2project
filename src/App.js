import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './Component/LogIn/LogIn';
import CreateAcount from './Component/CreateAcount/CreateAcount';
import FindAccount from './Component/ForgetPassword/ForgetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/LogIn" element={<LogIn />} />
        <Route index path="/CreateAcount" element={<CreateAcount/>} />
        <Route index path="/ForgetPassword" element={<FindAccount/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;