import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Details = () => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!mobile) {
      newErrors.mobile = "Mobile number is required";
    }
    if (!address1) {
      newErrors.address1 = "Address 1 is required";
    }
    if (!address2) {
      newErrors.address2 = "Address 2 is required";
    }
    if (!pincode) {
      newErrors.pincode = "Pincode is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitting payment information...");
    }
  };

  return (
    <Box p={6} bg="#151515">
      <Heading as="h1" mb={6} color="#D3D6CE" textAlign="center">
        Details
      </Heading>

      <br />

      <form onSubmit={handleSubmit}>
        <VStack spacing={4} color="#D3D6CE">
          <FormControl id="Mobile-Number" isRequired>
            <FormLabel>Mobile Number:</FormLabel>
            <Input
              type="number"
              placeholder="Enter mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && (
              <Text color="red.500" fontSize="sm">
                {errors.mobile}
              </Text>
            )}
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
            {errors.address1 && (
              <Text color="red.500" fontSize="sm">
                {errors.address1}
              </Text>
            )}
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
            {errors.address2 && (
              <Text color="red.500" fontSize="sm">
                {errors.address2}
              </Text>
            )}
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
            {errors.pincode && (
              <Text color="red.500" fontSize="sm">
                {errors.pincode}
              </Text>
            )}
          </FormControl>

          <br />

          <Button
            type="submit"
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

export default Details;
