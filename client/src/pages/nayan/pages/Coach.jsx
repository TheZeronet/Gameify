import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  VStack,
  chakra,
  SimpleGrid,
  Link,
  Image,
  IconButton,
  useToast,
  Spacer,
  HStack,
  Box,
} from "@chakra-ui/react";
import { VscHeart } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_ADD_PRODUCT,
  ACTION_DELETE_PRODUCT,
} from "../../../redux/admin/admin.actions";
import Filter from "./FilterA";

function ProductPage() {
  const [accessories, setAccesories] = useState([]);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/accessories", {
          params: {
            sort,
            category,
            priceRange,
          },
        });
        setAccesories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };

    fetchAccessories();
  }, [sort, category, priceRange]);

  const product = useSelector((store) => store.product);
  const { userData, isAuth, AdminIsAuth } = useSelector((store) => store.auth);

  const DeleteProduct = (id) => {
    dispatch(ACTION_DELETE_PRODUCT(id)).then((res) => {
      dispatch(ACTION_ADD_PRODUCT);
      toast({
        title: "Product Deleted Successful",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    });
  };

  return (
    <Box
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      w="100%"
    >
      <br />
      {/* <Filter /> */}
      <Filter
        setSort={setSort}
        setCategory={setCategory}
        setPriceRange={setPriceRange}
      />
      <Box>
        <VStack maxW="1400px" m="auto">
          <SimpleGrid
            p={5}
            w="100%"
            spacing={{ base: "3", md: 5, lg: "10" }}
            columns={{ base: 2, md: 3, lg: 4 }}
          >
            {accessories.map((accessories) => (
              <VStack
                position={"relative"}
                key={accessories.producerID}
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
                  {" "}
                  {/* Set a fixed height for the image container */}
                  <Link to={`/products/${accessories.producerID}`}>
                    <Image
                      fit="cover"
                      src={accessories.imgURL}
                      alt="NIKE AIR"
                      w="100%"
                      h="100%" // Set the image height to fill the container
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
                    {accessories.name}
                  </chakra.h1>
                  <chakra.h1 color="gray.400" textAlign="center">
                    {accessories.category}
                  </chakra.h1>
                </Box>

                <HStack
                  w="100%"
                  alignSelf={"flex-end"}
                  alignItems="center"
                  justifyContent="space-between"
                  px={4}
                  py={2}
                  // bg="gray.900"
                  roundedBottom="lg"
                >
                  <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                    ${accessories.price}
                    <IconButton
                      _hover={{ color: "orange.500" }}
                      fontSize="25px"
                      borderRadius={50}
                      variant="link"
                      //onClick={toggleColorMode}
                      icon={<VscHeart />}
                      left="110px"
                      bottom="-5px"
                    />
                  </chakra.h1>

                  {AdminIsAuth ? (
                    <IconButton
                      p="0px 20px"
                      // bg="white"
                      fontSize="3xl"
                      onClick={() => DeleteProduct(accessories.producerID)}
                      color="white"
                      fontWeight="bold"
                      rounded="lg"
                      textTransform="uppercase"
                      _hover={{
                        bg: "white",
                        color: "#f45f02;",
                      }}
                      // _focus={{
                      //   bg: "gray.400",
                      // }}
                      bg="#f45f02;"
                      icon={<RiDeleteBinLine />}
                    />
                  ) : (
                    <Link to={`/products/${accessories.producerID}`}>
                      <chakra.button
                        px={4}
                        py={3}
                        // bg="white"
                        fontSize="xs"
                        color="white"
                        fontWeight="bold"
                        rounded="lg"
                        textTransform="uppercase"
                        _hover={{
                          bg: "white",
                          color: "#f45f02;",
                        }}
                        // _focus={{
                        //   bg: "gray.400",
                        // }}
                        bg="#f45f02;"
                      >
                        View
                      </chakra.button>{" "}
                    </Link>
                  )}
                </HStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  );
}

export default ProductPage;
