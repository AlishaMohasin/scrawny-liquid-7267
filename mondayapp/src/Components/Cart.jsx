import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

import style from "./Cart.module.css";
import styled from "./Topsec.module.css";

const Cart = () => {
  return (
    <div className={style.blue}>
      <Flex margin={"auto"} marginLeft="80px" gap="2rem" marginTop={"-200px"}>
        <Box w="250px" h="350px" boxShadow={"md"} borderRadius="2xl" bg="white">
          <Image
            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/trust.png"
            w="100px"
            margin={"auto"}
            marginTop="20px"
          />
          <h1 className={style.h1}>
            Voted best feature set,
            <br />
            relationship and value
          </h1>

          <h1 className={style.h11}>
            “This is the best no-code
            <br />
            platform I've ever seen.”
          </h1>
        </Box>
        <Box w="250px" h="350px" boxShadow={"md"} borderRadius="2xl" bg="white">
          <Image
            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/forrester.png"
            w="100px"
            h="71px"
            margin={"auto"}
            marginTop="20px"
          />
          <h1 className={style.h1}>345% uplift in ROI</h1>

          <h1 className={style.h11}>
            The Total Economic
            <br />
            Impact™ Report
          </h1>
        </Box>
        <Box w="250px" h="350px" boxShadow={"md"} borderRadius="2xl" bg="white">
          <Image
            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/capterra.png"
            w="100px"
            margin={"auto"}
            marginTop="20px"
          />
          <h1 className={style.h1}>
            Shortlisted in over 8,
            <br />
            software categories
          </h1>

          <h1 className={style.h11}>
            “The perfect organizer and
            <br />
            team builder.”
          </h1>
        </Box>
        <Box w="250px" h="350px" boxShadow={"md"} borderRadius="2xl" bg="white">
          <Image
            src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/g2.png"
            w="100px"
            margin={"auto"}
            marginTop="20px"
          />
          <h1 className={style.h1}>
            Market leader across 18
            <br />
            categories
          </h1>

          <h1 className={style.h11}>
            "Flexible product with near
            <br />
            endless possibilities."
          </h1>
        </Box>
      </Flex>
      <h1 className={style.h21}>
        Deliver your best work{" "}
        <span className={style.span}>with monday.com</span>
      </h1>
      <h1 className={style.h31}>
        No credit card needed ✦ Unlimited time on Free plan
      </h1>
    </div>
  );
};

export default Cart;
