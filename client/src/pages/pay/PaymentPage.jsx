import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/auth/auth.actions";
import { NavLink } from "react-router-dom";
import { ACTION_PURCHASE } from "../../redux/cart/cart.actions";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData, token } = useSelector((store) => store.auth);

  const validateForm = () => {
    const newErrors = {};
    if (!cardNumber) {
      newErrors.cardNumber = "Card number is required";
    }
    if (!expiry) {
      newErrors.expiry = "Expiry date is required";
    }
    if (!cvv) {
      newErrors.cvv = "CVV is required";
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

  const PaymentDone = () => {
    // prompt()

    dispatch(ACTION_PURCHASE(token.email)).then((res) => {
      dispatch(getUserData(token.email));

      toast({
        title: "Payment Successfull.",
        description: "Thank You For Shopping.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/OrderSuccessfull");
    });
  };

  return (
    <Box p={6} bg="#151515">
      <Heading as="h1" mb={6} color="#D3D6CE" textAlign="center">
        Payment Details
      </Heading>

      <br />

      <form onSubmit={handleSubmit}>
        <VStack spacing={4} color="#D3D6CE">
          <FormControl id="cardNumber" isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="number"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            {errors.cardNumber && (
              <Text color="red.500" fontSize="sm">
                {errors.cardNumber}
              </Text>
            )}
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
            {errors.expiry && (
              <Text color="red.500" fontSize="sm">
                {errors.expiry}
              </Text>
            )}
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
            {errors.cvv && (
              <Text color="red.500" fontSize="sm">
                {errors.cvv}
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
            onClick={PaymentDone}
          >
            <NavLink to="/OrderSuccessfull">
              <Text _hover={{ color: "#f45f02" }}>checkout</Text>
            </NavLink>
          </Button>
        </VStack>
        <br />
        <br />
      </form>
    </Box>
  );
};

export default PaymentPage;
