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
    navigate("/product");
  };

  let totalPurchase = 0;
  userData.purchase.map((el) => (totalPurchase += +el.price));

  // const { data } = useSelector((store) => store.cart);

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
          h="100%"
          w="100%"
          direction={{
            base: "column",
            md: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <VStack
            p={5}
            minH="100%"
            spacing={{
              base: "5",
              md: "5",
            }}
            align={"left"}
          >
            <Heading color={"white"} fontSize="2xl">
              Total Product in Wishlist {userData.wishlist.length}
            </Heading>

            <SimpleGrid columns={[2, 3, 4, 4]} spacing="6">
              {userData.wishlist?.map((item) => (
                <CartCard key={item.id} {...item} />
              ))}
            </SimpleGrid>
          </VStack>

          <Spacer />
        </Stack>
      </Box>
    </Box>
  );
};

export default Cart;
