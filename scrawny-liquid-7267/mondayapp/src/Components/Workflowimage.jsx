import { Box, Button } from "@chakra-ui/react";
import React from "react";
import style from "./Workflow.module.css";

const Workflowimage = () => {
  return (
    <div className={style.main}>
      <Box marginLeft="50px" marginTop="100px">
        <h1 className={style.h1}>
          The Work OS that lets you
          <br />
          shape workflows,<span className={style.span}>your way</span>
        </h1>
      </Box>
      <Box marginLeft="100px" marginTop="100px" justifyContent="left">
        <h1 className={style.h11}>
          Boost your team’s alignment, efficiency, and productivity
          <br /> by customizing any workflow to fit your needs.
        </h1>
        <Button
          w="200px"
          bg="#6a6dff"
          borderRadius="2rem"
          marginTop="20px"
          color="white"
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
          
          
    </div>
  );
};

export default Workflowimage;
