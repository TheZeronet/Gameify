import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
// import "./PaymentPage.css";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitting payment information...");
  };

  return (
    <Box p={6} bg="#151515">
      <Heading as="h1" mb={6} textColor="#D3D6CE" textAlign="center">
        Payment Details
      </Heading>
      <br />
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} textColor="#D3D6CE">
          <FormControl id="cardNumber" isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="number"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </FormControl>

          <br />

          <FormControl id="expiry" isRequired>
            <FormLabel>Expiry Date</FormLabel>
            <Input
              type="text"
              placeholder="MM-YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </FormControl>

          <br />

          <FormControl id="cvv" isRequired>
            <FormLabel>CVV</FormLabel>
            <Input
              type="number"
              placeholder="Enter CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </FormControl>

          <br />

          <Button
            variant="solid"
            bg="#f45f02"
            color="#D3D6CE"
            _hover={{ bg: "#151515", color: "#f45f02" }}
          >
            <NavLink to="/checkout">
              <Text _hover={{ color: "#f45f02" }}>checkout</Text>
            </NavLink>
          </Button>
          <br />
          <br />
        </VStack>
      </form>
    </Box>
  );
};

export default PaymentPage;
