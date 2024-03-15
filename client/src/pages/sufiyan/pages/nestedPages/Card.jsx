import {
  Button,
  chakra,
  SimpleGrid,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  useToast,
  VStack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "../../../../redux/auth/auth.actions";
import { Link } from "react-router-dom";
import { MOVE_FROM_WISHLIST_TO_CART } from "../../../../redux/cart/cart.actions";

const CartCard = ({ name, price, _id, imgURL, producerID }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  const toast = useToast();

  const moveToCart = () => {
    // console.log(_id)

    let token = JSON.parse(localStorage.getItem("token"));

    let data = {
      email: token.email,
      id: _id,
    };

    dispatch(MOVE_FROM_WISHLIST_TO_CART(data)).then((res) => {
      dispatch(getUserData(token.email));
      toast({
        title: "Product Moved to cart",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    });
  };

  return (
    <VStack maxW="1400px" m="auto">
      <SimpleGrid p={5} w="100%">
        <VStack
          position={"relative"}
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          borderRadius="10px"
          maxW="xs"
          bg="whiteAlpha.300"
          shadow="lg"
          rounded="lg"
          z-index={-1}
          h="100%"
        >
          <Box h="350px" w="100%">
            <Image fit="cover" src={imgURL} alt="NIKE AIR" w="100%" h="100%" />
          </Box>
          <Spacer />
          <Box p={{ base: "2", md: "2", lg: "3" }}>
            <chakra.h1
              color="white"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
              fontSize={{ base: "xl", md: "xl", lg: "3xl" }}
              textTransform="uppercase"
              textAlign={"center"}
            >
              {name}
            </chakra.h1>
          </Box>
          {/* make button for move from wishlist to cart function */}
          {/* <Button
            px={4}
            py={3}
            fontSize="xs"
            color="white"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              border: "1px solid #f45f02",
              bg: "#151515",
              color: "#f45f02;",
            }}
            bg="#f45f02;"
            onClick={moveToCart}
          >
            {" "}
            Move to Cart
          </Button> */}

          <HStack
            w="100%"
            alignSelf={"flex-end"}
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            roundedBottom="lg"
          >
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              ₹{price}
            </chakra.h1>
          </HStack>
          <Link to={`/products/${producerID}`}>
            <Button
              px={4}
              py={3}
              fontSize="xs"
              color="white"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                border: "1px solid #f45f02",
                bg: "#151515",
                color: "#f45f02;",
              }}
              bg="#f45f02;"
              onClick={handleClick}
            >
              View
            </Button>{" "}
          </Link>
        </VStack>
      </SimpleGrid>
      <br />
    </VStack>
  );
};

export default CartCard;
