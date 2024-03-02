import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
const basicBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  textShadow: "0 0 20px black",
  fontWeight: "bold",
  fontSize: "20px",
  px: 4,
};

const Girl = () => {
  return (
    <Box bg={"#151515"} pt="40">
      <Box
        sx={basicBoxStyles}
        filter="auto"
        pos={"relative"}
        maxW={"full"}
        h="90vh"
        margin={"auto"}
      >
        <Box
          pos={"absolute"}
          transform="translate(-50%, 0)"
          filter="brightness(150%)"
          left={"50%"}
        >
          <Heading color="#fff" fontSize={["20", "24", "26", "30"]} mb="10">
            REGISTRATION NOW TO GET MORE DEALS
          </Heading>
          <Text color="#363738" mb="10" fontSize={["20", "24", "26", "30"]}>
            WHERE HEALTH, BEAUTY AND FITNESS MEET.
          </Text>
          <button className="oggu">Appointment</button>
        </Box>
      </Box>
    </Box>
  );
};

export default Girl;
