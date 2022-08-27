import { Box, Button, Input } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import style from "./Dashboard.module.css";
import Nav from "../Components/Nav"
import Taskbutton from "../Components/Taskbutton";
import axios from "axios";
import Tabular from "../Components/Tabular";

const Dashboard = () => {
  const { state } = useContext(Authcontext);
  const [data, setdata] = useState([]);
  const[text,settext]=useState("")



  const getdata = () => {
    return axios.get("https://alishapi.herokuapp.com/tickets")
    .then((res)=>setdata(res.data))
  }
  useEffect(() => {
    getdata()
    
  }, [])
  
  function handledelete(id) {
    return axios.delete(`https://alishapi.herokuapp.com/tickets/${id}`)
    .then(()=>getdata())
}
 
  
  return <div>
    <Box className={style.firstblock}>
      <h4 className={style.h3}>Please confirm your email address:{state.token}</h4>



    </Box>
    <Box display={"flex"}>
      <Nav/>
     <Box  w="100%" h="80vh">
        <Taskbutton />
        <Input placeholder="search" w="40%" margin={"auto"} onChange={(e) => settext(e.target.value)} value={text}/> <Button bg="#6e71cc" color="white">Search</Button>
       
        <div>
          <Tabular data={data} handledelete={handledelete }/>


    
        </div>
        </Box>
      </Box>
   


   



  </div>;
};

export default Dashboard;
