
import './App.css';

import React from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import { Route, Routes } from 'react-router-dom';
import Textform from './Components/Textform';
// import Login from './Components/Login';






function App() {





  return (
    <>
      
      <Navbar siteName='TextUtils' />
      <Home />
      <Textform />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/textform' element={<Textform />} />
        <Route path='/login' element={<Login title='TextUtils' />} />
      </Routes> */}






    </>

  );
}

export default App;
