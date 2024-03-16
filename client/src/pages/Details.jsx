import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  VStack,
  Text,
  form,
} from "@chakra-ui/react";
// import "./PaymentPage.css";

import { NavLink } from "react-router-dom";

const PaymentPage = () => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitting payment information...");
  };

  return (
    <Box p={6} bg="#151515">
      <Heading as="h1" mb={6} textColor="#D3D6CE" textAlign="center">
        Details
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} textColor="#D3D6CE">
          <FormControl id="Mobile-Number" isRequired>
            <FormLabel>Mobile Number:</FormLabel>
            <Input
              type="number"
              placeholder="Enter mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </FormControl>

          <br />

          <FormControl id="Add1" isRequired>
            <FormLabel>Address 1:</FormLabel>
            <Input
              type="text"
              placeholder="Enter Address 1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </FormControl>

          <br />

          <FormControl id="Add2" isRequired>
            <FormLabel>Address 2:</FormLabel>
            <Input
              type="text"
              placeholder="Enter Address 2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </FormControl>

          <br />

          <FormControl id="Pin" isRequired>
            <FormLabel>Pincode:</FormLabel>
            <Input
              type="number"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </FormControl>

          <br />

          <Button
            variant="solid"
            bg="#f45f02"
            color="#D3D6CE"
            _hover={{ bg: "#151515", color: "#f45f02" }}
          >
            <NavLink to="/payment">
              <Text _hover={{ color: "#f45f02" }}>Proceed to Payment</Text>
            </NavLink>
          </Button>
        </VStack>
      </form>
      <br />
      <br />
    </Box>
  );
};

export default PaymentPage;
