import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import RazorPay from "../pages/pay/Payment";
import { formatPrice } from "./PriceTag";
import PaymentForm from "../pages/pay/PaymentForm";
import PaymentPage from "../pages/pay/PaymentPage";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color="white">
        {label}
      </Text>
      {value ? (
        <Text color={"white"} fontWeight="medium">
          {value}
        </Text>
      ) : (
        children
      )}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const { userData, token, isAuth } = useSelector((store) => store.auth);
  const total = userData.cart.reduce((a, b) => a + +b.price, 0);

  const PaymentKaro = () => {};

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md" color={"white"}>
        Order Summary
      </Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal">
          <Text color={"white"} fontWeight="semibold">
            <span style={{ marginLeft: "70px" }}>{formatPrice(total)}</span>
          </Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Shipping">
          <Text color={"white"} fontWeight="semibold">
            ₹300
          </Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Tax">
          <Text color={"white"} fontWeight="semibold">
            ₹250
          </Text>
        </OrderSummaryItem>

        <Text borderBottom={"1px solid white"}> </Text>

        <Flex justify="space-between">
          <Text fontSize="xl" color={"white"} fontWeight="extrabold">
            Total
            <span style={{ marginLeft: "155px" }}>
              {formatPrice(total + 550)}
            </span>
          </Text>
        </Flex>
      </Stack>

      <NavLink to="/details">
        <Button
          bg="#f45f02"
          color="#D3D6CE"
          _hover={{ bg: "#151515", color: "#f45f02" }}
          marginLeft={"120px"}
        >
          <Text variant="solid" _hover={{ color: "#f45f02" }}>
            Pay
          </Text>
        </Button>
      </NavLink>
    </Stack>
  );
};
