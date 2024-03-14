import {
  Box,
  Button,
  Divider,
  Flex,
  chakra,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  IconButton,
  Text,
  useColorModeValue as mode,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../sudarshan/pages/CartComponents/CartItem";
import { CartOrderSummary } from "../../sudarshan/pages/CartComponents/CartOrderSummary";
import { cartData } from "../../sudarshan/pages/CartComponents/_data";
import CartCard from "../../sufiyan/pages/nestedPages/Card";
import { VscHeart } from "react-icons/vsc";
// import { addToWish } from "../../../redux/auth/auth.actions";

const Wishlist = () => {
  const { userData, token, isAuth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  let totalPurchase = 0;
  userData.purchase.map((el) => (totalPurchase += +el.price));

  console.log(userData.wishlist, "wishlist length");

  return (
    <Box bg={"#151515"} w="100%">
      <br />
      {/* <Filter setCategory={setCategory} setPriceRange={setPriceRange} /> */}
      <Box>
        <VStack maxW="1400px" m="auto">
          d
          <SimpleGrid
            p={5}
            w="100%"
            spacing={{ base: "3", md: 5, lg: "10" }}
            columns={{ base: 2, md: 3, lg: 4 }}
          >
            {userData.wishlist.map((wishlist) => (
              <VStack
                position={"relative"}
                key={wishlist.producerID}
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
                  <Link to={`/accessory/${wishlist.producerID}`}>
                    <Image
                      fit="cover"
                      src={wishlist.imgURL}
                      alt="NIKE AIR"
                      w="100%"
                      h="100%"
                    />
                  </Link>
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
                    {wishlist.name}
                  </chakra.h1>
                  <chakra.h1 color="gray.400" textAlign="center">
                    {wishlist.category}
                  </chakra.h1>
                </Box>
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
                    ₹{wishlist.price}
                    <IconButton
                      _hover={{ color: "orange.500" }}
                      fontSize="25px"
                      borderRadius={50}
                      variant="link"
                      // onClick={addToWish}
                      icon={<VscHeart />}
                      left="110px"
                      bottom="-5px"
                    />
                  </chakra.h1>
                </HStack>
              </VStack>
            ))}
          </SimpleGrid>
          {/* <Box onClick={handleClick}>
            <HStack mt={4} spacing={4}>
              <Button
                colorScheme="orange"
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
                _hover={{
                  bg: "#151515",
                  color: "#f45f02;",
                }}
              >
                Previous
              </Button>
              <Button
                colorScheme="orange"
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
                _hover={{
                  bg: "#151515",
                  color: "#f45f02;",
                }}
              >
                Next
              </Button>
            </HStack>
          </Box> */}
          <br />
        </VStack>
      </Box>
    </Box>
  );
};

export default Wishlist;
