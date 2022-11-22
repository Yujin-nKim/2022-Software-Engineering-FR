import logo from './logo.svg';
import './App.css';

import {Header} from "./component/header";
import {Login} from "./page/login";
import {Main} from "./page/main";


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
     <BrowserRouter>
        <Routes>
           <Route exact path="/main" element ={<Main/>} />
           <Route exact path="/login" element ={<Login/>} />
        </Routes>
     </BrowserRouter>
  );
 
}

const App = () => {
  return Router();
};

export default App;
