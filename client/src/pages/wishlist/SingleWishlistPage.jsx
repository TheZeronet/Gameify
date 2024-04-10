import {
  Box,
  Button,
  HStack,
  IconButton,
  Img,
  Tag,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";

import { VscHeart } from "react-icons/vsc";
import { FaTruckMoving } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getUserData } from "../../redux/auth/auth.actions";
import {
  ACTION_ADD_ITEM_TO_CART,
  ACTION_ADD_ITEM_TO_WISHLIST,
  ACTION_GET_CART,
} from "../../redux/cart/cart.actions";
import { ACTION_GET_PRODUCTS } from "../../redux/products/product.actions";
import Loading from "../Loading";
import { MOVE_FROM_WISHLIST_TO_CART } from "../../redux/cart/cart.actions";

import { AiOutlineHeart } from "react-icons/ai";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const SingleProductPage = (_id) => {
  const [quant, setQuant] = useState(1);
  const toast = useToast();

  const dispatch = useDispatch();
  const { userData, isAuth } = useSelector((store) => store.auth);

  const [LoadingT, setLoading] = useState(true);
  const [SingleData, setSingle] = useState({});
  const [games, setGames] = useState([]);
  const [accessories, setAccessories] = useState([]);

  const { producerID } = useParams();
  const NavigatKaro = useNavigate();

  const moveToCart = () => {
    // console.log(_id)
  };

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("http://localhost:8080/games", {});
        setGames(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();

    const fetchAccessories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/accessories",
          {}
        );
        setAccessories(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching accessories:", error);
      }
    };
    fetchAccessories();
  }, [producerID]);

  useEffect(() => {
    const selectedGame = games.find((game) => game.producerID === producerID);
    console.log(selectedGame);
    if (selectedGame) {
      setSingle(selectedGame);
      console.log(SingleData);
    }
  }, [producerID, games]);

  useEffect(() => {
    const selectedAccessory = accessories.find(
      (accessories) => accessories.producerID === producerID
    );
    console.log(selectedAccessory);
    if (selectedAccessory) {
      setSingle(selectedAccessory);
      console.log(SingleData);
    }
  }, [producerID, accessories]);

  const handleCart = () => {
    if (!isAuth) {
      toast({
        title: "You Need Login first",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return NavigatKaro("/login");
    }

    let check = true;

    userData.cart.map((el) => {
      if (el.productName === SingleData.name) {
        check = false;

        return toast({
          title: "Product Already in Cart",
          status: "warning",
          duration: 4000,
          isClosable: true,
        });
      }
    });

    if (check) {
      let token = JSON.parse(localStorage.getItem("token"));

      let Product = {
        email: token.email,
        data: {
          ...SingleData,
          qty: quant,
          image: SingleData.imgURL,
          productName: SingleData.name,
        },
      };

      dispatch(ACTION_ADD_ITEM_TO_CART(Product)).then((res) =>
        dispatch(getUserData(token.email))
      );
      toast({
        title: "Product Added to cart",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const AddWishlist = () => {
    if (!isAuth) {
      toast({
        title: "You Need Login first",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
      return NavigatKaro("/login");
    }

    let updatedWishlist = [];
    let check = true;

    // Check if userData and wishlist are defined
    if (userData && userData.wishlist) {
      userData.wishlist.forEach((el) => {
        if (el.productName === SingleData.name) {
          check = false;
          // Product found, so do not add it again, effectively removing it from wishlist
          toast({
            title: "Product Removed from Wishlist",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        } else {
          updatedWishlist.push(el);
        }
      });
    }

    if (check) {
      // Add the product to the wishlist
      updatedWishlist.push({
        ...SingleData,
        qty: quant,
        image: SingleData.imgURL,
        productName: SingleData.name,
      });

      toast({
        title: "Product Added to Wishlist",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }

    // Update the wishlist in user data only if it's defined
    if (userData) {
      let token = JSON.parse(localStorage.getItem("token"));
      dispatch(
        ACTION_ADD_ITEM_TO_WISHLIST({
          email: token.email,
          data: updatedWishlist,
        })
      ).then((res) => dispatch(getUserData(token.email)));
    }
  };

  if (LoadingT) {
    return <Loading />;
  }

  return (
    <Box
      // bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      bg={"#151515"}
      minH="100vh"
    >
      <Box
        display={{ base: "grid", md: "grid", sm: "grid", lg: "flex" }}
        w={{ base: "100%", md: "100%", sm: "100%", lg: "90%" }}
        m="auto"
        maxW="1400px"
        alignContent="center"
        color={"white"}
      >
        <Link to="/wishlist" style={{ marginTop: "60px" }}>
          <IconButton
            alignSelf="flex-start"
            bg={"#151515"}
            color={"#f45f02"}
            _hover={{
              color: "#151515",
              bg: "#f45f02;",
            }}
          >
            <IoChevronBackCircleSharp size={48} />
          </IconButton>
        </Link>
        <VStack
          mt="20px"
          h="100%"
          p={5}
          align={"center"}
          justify="center"
          w={"100%"}
          spacing={5}
        >
          {/* New container for the product name */}
          <Box
            bg={"whiteAlpha.100"}
            p={3}
            borderRadius={10}
            textAlign="center"
            w="80%"
          >
            <Text fontSize="2xl" fontWeight="500" color="gray.300">
              Name : {SingleData.name}
            </Text>

            <Text fontSize="1xl" fontWeight="500" color="gray.400">
              Price :: ₹{SingleData.price}
            </Text>
          </Box>

          {/* Existing Img component */}
          <Img
            bg={"whiteAlpha.200"}
            borderRadius={10}
            mt="10px"
            ml={"100px"}
            maxW={{ md: "400px", lg: "400px", xl: "400px" }}
            maxH={{ md: "400px", lg: "400px", xl: "400px" }}
            src={SingleData.imgURL}
            alt="singleProduct"
            // Set the height of the image dynamically based on the height of the adjacent VStack
            h="100%"
            maxHeight="600px" // Set a max height to avoid stretching the image too much
          />
        </VStack>

        <VStack
          p={5}
          bg={"whiteAlpha.100"}
          mt="30px"
          mr="0px"
          w={"40%"}
          spacing={3}
          align={"flex-start"}
        >
          <VStack
            spacing={5}
            w="80%"
            textAlign={{
              base: "left",
              md: "left",
              sm: "left",
              lg: "left",
            }}
          >
            <Text>{"-----------------------"}</Text>

            <Text fontSize="2xl" fontWeight={"500"} color="gray.200">
              Description:
            </Text>

            <Text fontSize="1xl" fontWeight={"300"} color="gray.300">
              {SingleData.info}
            </Text>
          </VStack>

          <br />

          <HStack
            m={{ base: "0px", sm: "0px", lg: "20px", md: "10px" }}
            mt="20px"
            w={{ base: "100%", sm: "60%", md: "70%", lg: "50%" }}
          >
            <HStack
              maxW={"120px"}
              alignItems="center"
              display="flex"
              justifyContent="space-between"
            >
              <Button
                bg="#f36100"
                color={"gray.200"}
                _hover={{
                  bg: "#151515",
                  color: "#f45f02;",
                }}
                disabled={quant < 1}
                onClick={() => setQuant((prev) => prev - 1)}
              >
                -
              </Button>
              <Text color={"gray.200"}>{quant}</Text>
              <Button
                bg="#f36100"
                color={"gray.200"}
                _hover={{
                  bg: "#151515",
                  color: "#f45f02;",
                }}
                onClick={() => setQuant((prev) => prev + 1)}
              >
                +
              </Button>
            </HStack>
          </HStack>

          <HStack>
            <Button
              bg="#f36100"
              onClick={handleCart}
              color={"gray.200"}
              _hover={{
                bg: "#151515",
                color: "#f45f02;",
              }}
            >
              Add to Cart
            </Button>
          </HStack>

          <br />

          <VStack align={"flex-start"} color={"gray.300"}>
            <Text borderBottom={"1px solid gray"}>
              Genre: {SingleData.category}
            </Text>
            <Text borderBottom={"1px solid gray"}>
              Studio: {SingleData.maker}
            </Text>
            <Text borderBottom={"1px solid gray"}>
              Release Date: {SingleData.release_date}
            </Text>
            <Text borderBottom={"1px solid gray"}>
              Rating: {SingleData.rating}
            </Text>
            <Text>Platform: {SingleData.platform_available}</Text>
          </VStack>
        </VStack>
      </Box>

      <br />
      <br />

      <Box
        bg={"whiteAlpha.100"}
        p={3}
        mr={"100px"}
        borderRadius={10}
        textAlign="center"
        w="80%"
        ml={"100px"}
        display="flex"
        justifyContent="center"
      >
        <Box mr={6}>
          <IconButton
            _hover={{ color: "orange.500", bg: "#151515" }}
            bg={"#f45f02"}
            color={"#151515"}
            fontSize="25px"
            borderRadius={50}
            icon={<VscHeart />}
          />
          <Text
            fontSize="1xl"
            fontWeight={"300"}
            color="gray.300"
            textAlign="left"
          >
            Trusted by all studios
          </Text>
        </Box>
        <Box mr={6}>
          <IconButton
            _hover={{ color: "orange.500", bg: "#151515" }}
            bg={"#f45f02"}
            color={"#151515"}
            fontSize="25px"
            borderRadius={50}
            icon={<FaTruckMoving />}
          />
          <Text fontSize="1xl" fontWeight={"300"} color="gray.300">
            Fast Delivery
          </Text>
        </Box>
        <Box mr={6}>
          <IconButton
            _hover={{ color: "orange.500", bg: "#151515" }}
            bg={"#f45f02"}
            color={"#151515"}
            fontSize="25px"
            borderRadius={50}
            icon={<IoShieldCheckmarkSharp />}
          />
          <Text fontSize="1xl" fontWeight={"300"} color="gray.300">
            10 Days Replacement
          </Text>
        </Box>
        <Box>
          <IconButton
            _hover={{ color: "orange.500", bg: "#151515" }}
            bg={"#f45f02"}
            color={"#151515"}
            fontSize="25px"
            borderRadius={50}
            icon={<FaLock />}
          />
          <Text fontSize="1xl" fontWeight={"300"} color="gray.300">
            100% Secure Payment
          </Text>
        </Box>
      </Box>
      <br />
    </Box>
  );
};

export default SingleProductPage;
