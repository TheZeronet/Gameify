// Checkout.js
import React from "react";
import { Flex, Heading, Text, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      direction="column"
      bg="#151515"
    >
      <Heading as="h1" size="xl" mb={4} textColor="#D3D6CE">
        Thank <span style={{ color: "#f45f02" }}>You!</span>
      </Heading>
      <Text fontSize="lg" textColor="#D3D6CE">
        Your message has been successfully sent.
      </Text>
      <br />
      <HStack mt="6" fontWeight="semibold">
        <Text color={"white"}>or</Text>
        <Link to={"/"}>
          <Text color="#f45f02" _hover={{ color: "white" }}>
            Go back to Home Page
          </Text>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Checkout;
