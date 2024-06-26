// export default function Cart

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorModeValue as mode,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../components/CartItem";
import { CartOrderSummary } from "../../components/CartOrderSummary";
import { cartData } from "../../components/_data";
import CartCard from "../../components/Card";

const Cart = () => {
  const { userData, token, isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const BackToPRoductPage = () => {
    navigate("/products");
  };

  const BackToHomePage = () => {
    navigate("/");
  };

  let totalPurchase = 0;
  userData.purchase.map((el) => (totalPurchase += +el.price));

  // const { data } = useSelector((store) => store.cart);

  {
    if (userData.cart.length === 0) {
      return (
        <Stack
          bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
          w="100%"
          alignItems="center"
          p={15}
          direction={{ base: "column", md: "row" }}
          justify="center"
        >
          <Image src="https://img.pikbest.com/png-images/20191028/little-boy-pushing-a-shopping-cart-to-buy-things-gif_2515305.png!c1024wm0" />

          <VStack spacing={30}>
            <Text fontSize="3xl" color={"white"}>
              Nothing In The Bag{" "}
            </Text>

            <Divider />
            <Button
              onClick={() => BackToPRoductPage()}
              fontSize="x-large"
              padding={8}
              color="white"
              bg="#f45f02"
              _hover={{
                color: "#f45f02",
                bg: "white",
                border: "1px solid #f45f02",
              }}
            >
              Continue Shopping
            </Button>
          </VStack>
        </Stack>
      );
    }
  }

  return (
    <Box minH={"80vh"} bg={"#151515"} w="100%">
      <Box
        bg={"#151515"}
        w="100%"
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading color={"white"} fontSize="2xl">
              Total Product in Cart {userData.cart.length}
            </Heading>

            <Stack spacing="6">
              {userData.cart?.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </Stack>
          </Stack>
          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary />
            <HStack mt="6" fontWeight="semibold">
              <Text color={"white"}>or</Text>
              <Link
                color="#f45f02"
                _hover={{ color: "white" }}
                onClick={() => BackToHomePage()}
              >
                Go back to Home Page
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};

export default Cart;
