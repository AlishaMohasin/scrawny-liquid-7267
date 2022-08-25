import { Box, Flex, Image, Button } from "@chakra-ui/react";
import React from "react";
import style from "./Supporting.module.css";

const Supportings = () => {
  return (
    <div className={style.main}>
      <Box>
        <Image
          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/support_globe.png"
          w="400px"
          h="400px"
          marginLeft="60px"
        />
      </Box>
      <Box>
        <h1 className={style.h1}>
          <span className={style.span}>Supporting</span> your growth
          <br />
          every step of the way
        </h1>
        <h1 className={style.h11}>
          Our support superheroes are a click away to help you get the most
          <br />
          out of monday.com, so you can focus on working without limits.
        </h1>

        <Flex>
          <Box style={{ marginLeft: "30px" }}>
            <Flex marginTop={"40px"}>
              <Image
                src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/phone.png"
                w={"60px"}
                h="40px"
              />

              <Box>
                <h1 className={style.span}>
                  24/7 <br />
                </h1>
                <span>
                  support anytime,
                  <br />
                  anywhere
                </span>
              </Box>
            </Flex>
          </Box>
          <Box style={{ marginLeft: "30px" }}>
            <Flex marginTop={"40px"}>
              <Image
                src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/heart.png"
                w={"60px"}
                h="40px"
              />

              <Box>
                <h1 className={style.span}>
                  Voted #1
                  <br />
                </h1>
                <span>
                  Most Loved by
                  <br />
                  customers on G2
                </span>
              </Box>
            </Flex>
          </Box>
          <Box style={{ marginLeft: "30px" }}>
            <Flex marginTop={"40px"}>
              <Image
                src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/fast.png"
                w={"60px"}
                h="40px"
              />

              <Box>
                <h1 className={style.span}>
                  2 hour
                  <br />
                </h1>
                <span>
                  average
                  <br />
                  response time
                </span>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Button
          w="200px"
          bg="#6a6dff"
          borderRadius="2rem"
          marginTop="20px"
          _hover={{ bg: "#6e71cc" }}
          color="white"
        >
          Get in touch{" "}
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
    </div>
  );
};

export default Supportings;
