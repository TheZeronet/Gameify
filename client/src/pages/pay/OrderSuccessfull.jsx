import { Button, VStack, Text, Image, HStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
//import pay from "../Styles/pay.png"

import img from "../../assets/Loader.gif";
import img2 from "../../assets/thumb.png";

const OrderSuccessfull = () => {
  const navigate = useNavigate();

  return (
    <div>
      <VStack
        margin="auto"
        justify={"center"}
        align={"center"}
        spacing={10}
        position={"relative"}
        overflow="hidden"
        bgColor={"#151515"}
        style={{ width: "100%", height: "90vh" }}
      >
        <div>
          <Text
            style={{ color: "#f45f02", fontSize: "2.5rem", fontWeight: "bold" }}
          >
            Hurray !! Order Successful
          </Text>
        </div>
        <div>
          <img src={img2} width="500px" alt="img" />
        </div>

        <Button
          width="30%"
          height="50px"
          onClick={() => navigate("/")}
          fontSize="x"
          padding={3}
          w="30%"
          colorScheme="orange"
        >
          {" "}
          CONTINUE SHOPPING{" "}
        </Button>
      </VStack>
    </div>
  );
};

export default OrderSuccessfull;
