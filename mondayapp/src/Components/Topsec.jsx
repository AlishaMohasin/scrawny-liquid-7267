import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Iconblock from "./Iconblock";
import style from "./Topsec.module.css";

const Topsec = () => {
  return (
    <>
      <Box className={style.first}>
        <h1 className={style.h1}>
          A platform built for a <br />
          new way of working
        </h1>
        <h3 className={style.h3}>
          What would you like to manage with monday.com Work OS?
        </h3>
        <Iconblock />
<Box className={style.position}>
        <Button
          w="200px"
          bg="#6a6dff"
          borderRadius="2rem"
          marginTop="20px"
          _hover={{ bg: "#6e71cc" }}
        
        >
          Get started{" "}
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
          </Box>

        <p style={{marginTop:"8px"}}>No credit card needed ✦ Unlimited time on Free plan</p>
      </Box>
      <Image
        className={style.img}
        src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png"
      />
    </>
  );
};

export default Topsec;
