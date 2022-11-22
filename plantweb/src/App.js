import logo from './logo.svg';
import './App.css';

import {Header} from "./component/header";
import {Login} from "./page/login";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
     <BrowserRouter>
        <Routes>
           <Route exact path="/" element ={<Header/>} />
           <Route exact path="/login" element ={<Login/>} />
        </Routes>
     </BrowserRouter>
  );
 
}

const App = () => {
  return Router();
};

export default App;
