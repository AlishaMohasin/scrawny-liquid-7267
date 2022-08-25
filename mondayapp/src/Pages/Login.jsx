import React, { useEffect, useState } from "react";
import style from "../Route/Navbar.module.css";
import {
  Flex,
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";

import styled from "./Login.module.css";

import Signup from "./Signup";
import { getsignindata } from "./Api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //   const [data, setdata] = useState([]);
  const [Logincred, setlogincred] = useState({ email: "", password: "" });
    const navigate = useNavigate();
 

  //   useEffect(() => {
  //     getsignindata().then((res) => setdata(res.data));
  //   }, []);
  function handlechange(e) {
    const { name, value } = e.target;
    setlogincred({
      ...Logincred,
      [name]: value,
    });
  }

  function handlesubmit(e) {
    e.preventDefault();
    getsignindata().then((res) =>
      res.data.forEach((item) => {
        // console.log(item.email,Logincred.email)
        if (
          item.password === Logincred.password &&
          item.email === Logincred.email
        ) {
           
                
                alert("Login successfull");
          navigate("/dashboard");
                 
            
          
          }
          
      })
    );
  }

  return (
    <div className={styled.emailcom}>
      {" "}
      <Box className={style.main}>
        <a href="/">
          <Image
            src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
            className={style.logo}
          />
        </a>
      </Box>
      <Box>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Log in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                Enter your work email address
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Example@Company.com"
                    value={Logincred.email}
                    name="email"
                    onChange={handlechange}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={Logincred.password}
                    name="password"
                    onChange={handlechange}
                  />
                </FormControl>

                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  ></Stack>
                  <FormControl>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={handlesubmit}
                    >
                   Login 
                    </Button>
                  </FormControl>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
      <Box className={styled.signup}>
        <h1>Don't have an account yet?</h1>
        <Button bg="white" _hover={{ bg: "white" }}>
          <Signup />
        </Button>
      </Box>
    </div>
  );
};

export default Login;
