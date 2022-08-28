import { Box, Button, Input, Spacer } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Context/Authcontext";
import style from "./Dashboard.module.css";
import Nav from "../Components/Nav";
import Taskbutton from "../Components/Taskbutton";
import axios from "axios";
import Tabular from "../Components/Tabular";
import { deletedata, getdata } from "./Api";

const Dashboard = () => {
  const { state } = useContext(Authcontext);
 
  const [data, setdata] = useState([]);
  const [text, settext] = useState("");
  const [sort, setsort] = useState("");

  const handlegetdata = (sort) => {
    getdata(text, sort)
      .then((res) => setdata(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  function sortby(val) {
    setsort(val);
  }
  useEffect(() => {
    handlegetdata(sort);
  }, [sort]);

  const handlesearch = (text) => {
    getdata(text).then((res) => setdata(res.data));
  };

  const handledelete = (id) => {
    deletedata(id).then(() => handlegetdata());
  };

  return (
    <div>
      <Box className={style.firstblock}>
        <h4 className={style.h3}>
          Please confirm your email address:{state.token}
        </h4>
      </Box>
      <Box display={"flex"}>
        <Nav />
        <Box w="100%" h="80vh">
          <Taskbutton />
          <div style={{ marginTop: "10px" }}>
            <Input
              placeholder="search"
              w="40%"
              margin={"auto"}
              onChange={(e) => settext(e.target.value)}
              value={text}
            />
            <Button
              bg="#6e71cc"
              color="white"
              onClick={() => handlesearch(text)}
            >
              Search
            </Button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button bg="#52c29d" color="white" onClick={() => sortby("ASC")}>
              low-high
            </Button>
            <Button
              marginLeft={"20px"}
              bg="#52c29d"
              color="white"
              onClick={() => sortby("DESC")}
            >
              high-low
            </Button>
          </div>
          <div>
            <Tabular data={data} handledelete={handledelete} />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
