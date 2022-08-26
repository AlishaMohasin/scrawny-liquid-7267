import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Taskpage from "../Pages/Taskpage";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/task" element={<Taskpage />} />
        <Route path="/task/:id" element={<Taskpage  editmode={true}/>}/>
       
      </Routes>
    </div>
  );
};

export default Allroutes;
