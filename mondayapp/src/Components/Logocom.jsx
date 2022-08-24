import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const Logocom = () => {
  const first = [
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png",
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png",
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png",
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png",
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png",
  ];

  const second = [
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png",
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png",
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png",
    "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png",
  ];
  return (
    <div>
      <h1
        style={{
          color: "#5c5c5c",
          fontSize: "24px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
      >
        Trusted by 152,000+ customers worldwide
      </h1>
      <Flex w="50%" margin="auto" marginTop="40px" gap="2rem">
        {first.map((ele) => (
          <Image key={ele} src={ele} w="118px" h="51px" />
        ))}
      </Flex>
      <Flex w="40%" margin="auto" marginTop="40px" gap="2rem">
        {second.map((ele) => (
          <Image key={ele} src={ele} w="118px" h="51px" />
        ))}
      </Flex>
    </div>
  );
};

export default Logocom;
