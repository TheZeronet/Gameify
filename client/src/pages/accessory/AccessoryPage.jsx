import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  VStack,
  chakra,
  SimpleGrid,
  Image,
  IconButton,
  useToast,
  Spacer,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { VscHeart } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import { VscGear } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import {
  ACTION_ADD_PRODUCT,
  ACTION_DELETE_PRODUCT,
} from "../../redux/admin/admin.actions";
import Filter from "../../components/FilterA";
import { useParams } from "react-router-dom";

function AccessoryPage({ search }) {
  const [accessories, setAccessories] = useState([]);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await axios.get("http://localhost:8080/accessories", {
          params: {
            category,
            priceRange,
          },
        });
        // setAccessories(response.data);

        const filteredAccessories = response.data.filter(acc =>
          acc.name.toLowerCase().includes(search.toLowerCase())
        );

        setAccessories(filteredAccessories);

        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
        console.log(response.data.length);
      } catch (error) {
        console.error("Error fetching Accessories:", error);
      }
    };

    fetchAccessories();
  }, [search, category, priceRange]);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToWish = (_id) => {
    console.log(_id);
  };

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
    <Box bg={"#151515"} w="100%">
      <br />
      <Filter setCategory={setCategory} setPriceRange={setPriceRange} />
      <Box>
        <VStack maxW="1400px" m="auto">
          <SimpleGrid
            p={5}
            w="100%"
            spacing={{ base: "3", md: 5, lg: "10" }}
            columns={{ base: 2, md: 3, lg: 4 }}
          >
            {accessories
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((accessories) => (
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
                    <Link to={`/accessory/${accessories.producerID}`}>
                      <Image
                        fit="cover"
                        src={accessories.imgURL}
                        alt="ACCESSORY IMAGE"
                        w="100%"
                        h="100%"
                        onClick={handleClick}
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
                    roundedBottom="lg"
                  >
                    <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                      ₹{accessories.price}
                      <IconButton
                        _hover={{ color: "orange.500" }}
                        fontSize="25px"
                        borderRadius={50}
                        variant="link"
                        onClick={addToWish}
                        icon={<VscHeart />}
                        left="100px"
                        bottom="-5px"
                      />
                    </chakra.h1>
                    {AdminIsAuth ? (
                      <IconButton
                        p="0px 20px"
                        fontSize="3xl"
                        color="white"
                        fontWeight="bold"
                        rounded="lg"
                        textTransform="uppercase"
                        _hover={{
                          bg: "black",
                          color: "#f45f02;",
                        }}
                        bg="#f45f02;"
                        icon={<VscGear />}
                      />
                    ) : (
                      <Link to={`/accessory/${accessories.producerID}`}>
                        <chakra.button
                          px={4}
                          py={3}
                          fontSize="xs"
                          color="white"
                          fontWeight="bold"
                          rounded="lg"
                          textTransform="uppercase"
                          _hover={{
                            bg: "#151515",
                            color: "#f45f02;",
                          }}
                          bg="#f45f02;"
                          onClick={handleClick}
                        >
                          View
                        </chakra.button>{" "}
                      </Link>
                    )}
                  </HStack>
                </VStack>
              ))}
          </SimpleGrid>
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
          <br />
        </VStack>
      </Box>
    </Box>
  );
}

export default AccessoryPage;
