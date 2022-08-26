import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import style from "./Dashboard.module.css";
import Nav from "../Components/Nav"

const Dashboard = () => {
  const { state } = useContext(Authcontext);
  const [data, setdata] = useState([]);
  useEffect(() => {
    
  })
  
  return <div>
    <Box className={style.firstblock}>
      <h4 className={style.h3}>Please confirm your email address:{state.token}</h4>



    </Box>
    <Box display={"flex"}>
      <Nav/>
     <Box overflow={"scroll"} w="100%" h="80vh">
    <h1>My products</h1>
      <div>
    
        </div>
        </Box>
      </Box>
   


   



  </div>;
};

export default Dashboard;
