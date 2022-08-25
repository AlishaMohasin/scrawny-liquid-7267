import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Button,
  Input,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import { getsignindata } from "./Api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [signincred, setsignincred] = useState({
    email: "",
    password: "",
    fullname: "",
    Accountname: "",
  });
  function handlechange(e) {
    const { name, value } = e.target;
    setsignincred({
      ...signincred,
      [name]: value,
    });
  }
  function handlesubmit(e) {
    e.preventDefault();
    axios.post("https://alishapi.herokuapp.com/Signup", signincred).then(() => {
      getsignindata();
      navigate("/login");
    });
  }

  return (
    <Box>
      <Button
        w="120px"
        h="40px"
        bg="#6a6dff"
        borderRadius="2rem"
        marginTop="10px"
        marginLeft={"2px"}
        _hover={{ bg: "#6e71cc" }}
        color="white"
        onClick={onOpen}
      >
        Sign up{" "}
        <svg
          width="10"
          height="14"
          viewBox="0 0 9 7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.628.616a.5.5 0 1 0-.64.768L6.203 3.23H.5a.5.5 0 0 0 0 1h5.612L3.988 6a.5.5 0 1 0 .64.769l3.23-2.693a.5.5 0 0 0 0-.768L4.628.616z"
          ></path>
        </svg>
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#534d4f" margin={"auto"}>
            Sign up for Free
          </ModalHeader>
          <p style={{ color: "gray", margin: "auto" }}>
            Full access. No credit card needed.
          </p>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Input
                placeholder="Enter your work Email"
                borderRadius={"2rem"}
                onChange={handlechange}
                value={signincred.email}
                type="email"
                name="email"
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Enter Full Name"
                borderRadius={"2rem"}
                marginTop={"10px"}
                onChange={handlechange}
                value={signincred.fullname}
                type="text"
                name="fullname"
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Create a password"
                borderRadius={"2rem"}
                marginTop={"10px"}
                onChange={handlechange}
                value={signincred.password}
                type="password"
                name="password"
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Account name"
                borderRadius={"2rem"}
                marginTop={"10px"}
                onChange={handlechange}
                name="Accountname"
                type="text"
                value={signincred.Accountname}
              />
            </FormControl>
            <Checkbox>
              I agree to the Terms of Service and Privacy Policy
            </Checkbox>
            <FormControl>
              <Button
                colorScheme="blue"
                mr={3}
                w="400px"
                borderRadius={"2rem"}
                marginTop={"20px"}
                onClick={handlesubmit}
              >
                Continue
              </Button>
              <hr marginTop={"20px"} />
              <p style={{ color: "gray", textAlign: "center" }}>or</p>
              <Button
                mr={3}
                w="400px"
                borderRadius={"2rem"}
                marginTop={"20px"}
                color="gray"
              >
                Sign up with{" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                  width="20px"
                  marginLeft={"20px"}
                />
              </Button>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Signup;
