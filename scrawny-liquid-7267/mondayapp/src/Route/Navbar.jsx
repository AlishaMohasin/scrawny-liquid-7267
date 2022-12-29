import {
  Box,
  Button,
  Image,
  Spacer,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Signup from "../Pages/Signup";

const Navbar = () => {
 
  return (
    <Flex className={style.main}>
      <a href="/">
        {" "}
        <Image
          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png"
          className={style.logo}
        />
      </a>

      <Button bg="white" marginTop="15px" color="gray">
        <Link to="">Products</Link>
      </Button>
      <Button bg="white" marginTop="15px" color="gray">
        <Link to="">Use cases</Link>
      </Button>
      <Button bg="white" marginTop="15px" color="gray">
        <Link to="">Features</Link>
      </Button>
      <Button bg="white" marginTop="15px" color="gray">
        <Link to="">Resources</Link>
      </Button>
      <Spacer />

      <Box>
        <Button bg="white" marginTop="15px" color="gray">
          <Link to="">Pricing</Link>
        </Button>
        <Button bg="white" marginTop="15px" color="gray">
          <Link to="">Contact sales</Link>
        </Button>
        <Button bg="white" marginTop="15px" color="gray">
          <Link to="/login">Login</Link>
        </Button>
        <Button  bg="white"_hover={{bg:"white"}}>
        <Signup/>
     </Button>
      </Box>

      <Box className={style.hamberger}>
        <GiHamburgerMenu color="black" fontSize={"34px"} />
      </Box>
    </Flex>
  );
};

export default Navbar;
