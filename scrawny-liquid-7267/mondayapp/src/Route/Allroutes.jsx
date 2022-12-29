import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

import PrivateRoute from "./PrivateRoute";


const Allroutes = () => {
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
      
       
       
      </Routes>
    </div>
  );
};

export default Allroutes;
