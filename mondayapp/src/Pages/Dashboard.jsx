import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import Nav from "../Components/Nav";
import Taskcard from "../Components/Taskcard";
import { Authcontext } from "../Context/Authcontext";
import style from "./Dashboard.module.css";

const Dashboard = () => {
  const { state } = useContext(Authcontext);
  return <div  className={style.main}>
    <Box className={style.firstblock}>
      <h4 className={style.h3}>Please confirm your email address:{state.token}</h4>
     


    </Box>
    <Box display={"flex"}>
      <Nav />
     <Box overflow={"scroll"} w="100%" h="80vh">
    <h1>My products</h1>
      <div>
        <Taskcard/>
        </div>
        </Box>
      </Box>
   



  </div>;
};

export default Dashboard;
