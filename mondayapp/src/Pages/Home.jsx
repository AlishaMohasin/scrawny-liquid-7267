import React from "react";
import Cart from "../Components/Cart";
import Logocom from "../Components/Logocom";
import Rating from "../Components/Rating";
import Supportings from "../Components/Supportings";
import Topsec from "../Components/Topsec";
import Video from "../Components/Video";
import Workflowimage from "../Components/Workflowimage";
import Navbar from "../Route/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Topsec />
      <Logocom />
      <Workflowimage />
      <Video />
      <Supportings />
      <Rating />
      <Cart />
    </div>
  );
};

export default Home;
