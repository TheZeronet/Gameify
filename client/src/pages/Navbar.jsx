import {
  Box,
  Button,
  Circle,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import {
  MdDynamicFeed,
  MdEco,
  MdEditNotifications,
  MdFeed,
  MdOutlineDarkMode,
} from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

import { BiSearch } from "react-icons/bi";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import SearchBar2 from "../components/SearchBar2";
import { VscHeart } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import logo from "../assets/Logo.png";
import { ActionLogout, getUserData } from "../redux/auth/auth.actions";
import { ACTION_GET_PRODUCTS } from "../redux/products/product.actions";
import { ACTION_GET_ADMIN } from "../redux/admin/admin.actions";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Games",
    path: "/products",
  },
  {
    name: "Accessories",
    path: "/accessory",
  },
  {
    name: "About Us",
    path: "/about",
  },
];

const Navbar = ({ handleOnSearch }) => {
  // const AdminIsAuth = true

  const dispatch = useDispatch();

  const { loading, error } = useSelector((store) => store.product);
  const { userData, isAuth, AdminIsAuth } = useSelector((store) => store.auth);
  const { data: cartData } = useSelector((store) => store.cart);

  let userName = userData && userData?.details?.username;

  console.log(userData);

  useEffect(() => {
    dispatch(ACTION_GET_PRODUCTS());

    //console.log(token)
    setTimeout(() => {
      if (isAuth) {
        let token = JSON.parse(localStorage.getItem("token"));

        dispatch(getUserData(token.email));
      }
    }, 3000);
  }, [isAuth]);

  useEffect(() => {
    setTimeout(() => {
      if (AdminIsAuth) {
        dispatch(ACTION_GET_ADMIN());
      }
    }, 3000);
  }, [AdminIsAuth]);

  //console.log(cartData.length);

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [OpenSearch, SetOpenSearch] = useState("none");

  const toast = useToast();

  const naviGate = useNavigate();

  const LogOutUser = () => {
    dispatch(ActionLogout());
    toast({
      title: "Logout Successfull",

      status: "success",
      duration: 4000,
      isClosable: true,
    });
    localStorage.clear();
    naviGate("/");
  };

  // borderBottom="1px solid #eeee"

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      zIndex={999}
      borderBottom={"4px solid #f45f02"}
      // bgGradient={
      //   "linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      // }
      bg={"#151515"}
      style={{ position: "sticky", top: 0, zIndex: "999" }}
    >
      <HStack
        style={{ position: "sticky", top: 0 }}
        p="0px 8%"
        justify="center"
        w="100%"
        h="64px"
      >
        <HStack
          w="full"
          maxW="1400px"
          p={{ base: "none", md: "0.6rem" }}
          spacing={8}
        >
          <HStack>
            <Link to="/">
              <Image
                w={{ base: "150px", md: "200px" }}
                minW="150px"
                dropShadow="2xl"
                style={{ position: "relative", left: "0px", zIndex: "1" }}
                top={{ base: "10px", md: "28px" }}
                src={logo}
              />
            </Link>
          </HStack>

          <HStack
            w={{ base: "full", md: "fit-content" }}
            style={{ paddingLeft: "110px" }}
          >
            <Box visibility={{ base: "hidden", md: "visible" }}>
              <SearchBar handleOnSearch={handleOnSearch} />
            </Box>
          </HStack>
          <Spacer display={{ base: "none", md: "block" }} />

          {!isAuth ? (
            <Box display={{ base: "none", md: "none", lg: "block" }}>
              <HStack>
                <NavLink to="/login">
                  <Button
                    _hover={{
                      border: "1px solid #f45f02",
                      bg: "#151515",
                      color: "orange.500",
                    }}
                    color="white"
                    bg="#f45f02"
                    variant="solid"
                    fontWeight="semibold"
                    left="100px"
                    top="27px"
                  >
                    Sign in
                  </Button>
                </NavLink>

                <NavLink to="/register">
                  <Button
                    _hover={{
                      border: "1px solid #f45f02",
                      bg: "#151515",
                      color: "orange.500",
                    }}
                    bg="#f45f02"
                    color="white"
                    variant="solid"
                    fontWeight="semibold"
                    left="100px"
                    top="27px"
                  >
                    Register
                  </Button>
                </NavLink>

                <NavLink to="/wishlist">
                  <IconButton
                    _hover={{ color: "orange.500" }}
                    fontSize="25px"
                    borderRadius={50}
                    variant="link"
                    //onClick={toggleColorMode}
                    icon={<VscHeart />}
                    left="100px"
                    top="27px"
                  />
                </NavLink>
                <NavLink to="/cart">
                  <IconButton
                    _hover={{ color: "orange.500" }}
                    fontSize="25px"
                    borderRadius={50}
                    variant="link"
                    //onClick={toggleColorMode}
                    icon={<IoBagOutline />}
                    left="100px"
                    top="27px"
                  />
                </NavLink>
              </HStack>
            </Box>
          ) : (
            <Box display={{ base: "none", md: "none", lg: "block" }}>
              <HStack spacing={25}>
                <HStack>
                  <Text color="whiteAlpha.900" fontSize="xl"></Text>
                  <Text fontWeight="semibold" color="whiteAlpha.900">
                    {userName}
                  </Text>
                </HStack>

                <Button
                  onClick={LogOutUser}
                  bg="#f45f02"
                  color="white"
                  variant="solid"
                  fontWeight="semibold"
                  _hover={{ bg: "#151515", color: "#f45f02" }}
                >
                  LogOut
                </Button>
                <NavLink to="/wishlist">
                  <Flex>
                    <IconButton
                      fontSize="25px"
                      borderRadius={50}
                      variant="link"
                      //onClick={toggleColorMode}
                      icon={<VscHeart />}
                    />
                    <Text>
                      {userData.wishlist?.length !== 0 ? (
                        <Circle minWidth={30} bg="white">
                          {userData.wishlist?.length}
                        </Circle>
                      ) : (
                        ""
                      )}
                    </Text>
                  </Flex>
                </NavLink>

                <NavLink to="/cart">
                  <Flex>
                    <IconButton
                      fontSize="25px"
                      borderRadius={50}
                      variant="link"
                      //onClick={toggleColorMode}
                      icon={<IoBagOutline />}
                    />
                    <Text>
                      {userData.cart?.length !== 0 ? (
                        <Circle minWidth={30} bg="white">
                          {userData.cart?.length}
                        </Circle>
                      ) : (
                        ""
                      )}
                    </Text>
                  </Flex>
                </NavLink>
              </HStack>
            </Box>
          )}

          <HStack
            display={{ base: "-webkit-inline-flex", md: "none", lg: "none" }}
          >
            <NavLink to="/cart">
              <IconButton
                fontSize="25px"
                borderRadius={50}
                variant="link"
                //onClick={toggleColorMode}
                icon={<IoBagOutline />}
              />
            </NavLink>

            <IconButton
              variant="link"
              fontSize="x-large"
              onClick={() =>
                SetOpenSearch(OpenSearch == "none" ? "block" : "none")
              }
              icon={<BiSearch />}
            ></IconButton>

            <IconButton
              onClick={() => onOpen()}
              icon={<AiOutlineMenu />}
            ></IconButton>
          </HStack>
        </HStack>

        <Drawer onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay />

          <DrawerContent
            color="white"
            bgGradient={
              "linear-gradient(0deg, rgba(0,0,0,1) 14%, rgba(64,64,64,1) 100%)"
            }
            placement="right"
          >
            <DrawerCloseButton />
            <DrawerHeader>
              <HStack alignItems="center" h="20px">
                <Image w="150px" position="absolute" bottom="20px" src={logo} />
              </HStack>
            </DrawerHeader>
            <DrawerBody>
              {isAuth && (
                <VStack>
                  <HStack>
                    <Text fontSize="xl"></Text>
                    <Text fontWeight="semibold">{userName}</Text>
                  </HStack>
                </VStack>
              )}
              <br />
              <Divider />
              <br />

              <VStack>
                {Links.map((el, key) => (
                  <VStack w={"80%"}>
                    <NavLink
                      key={el.path}
                      to={el.path}
                      w={"100%"}
                      onClick={() => {
                        onClose();
                        handleClick();
                      }}
                      end
                    >
                      <Text
                        w={"100%"}
                        fontSize="20px"
                        className={({ isActive }) =>
                          isActive ? "SmallactiveS" : "SmalldefaultS"
                        }
                        fontWeight={"semibold"}
                        p="10px 5px"
                      >
                        {el.name}
                      </Text>
                    </NavLink>
                    <Divider />
                  </VStack>
                ))}
                <VStack w={"80%"}>
                  <NavLink
                    key={"el.padsdth"}
                    to={"/cart"}
                    w={"100%"}
                    onClick={() => onClose()}
                    className={({ isActive }) =>
                      isActive ? "SmallactiveS" : "SmalldefaultS"
                    }
                    end
                  >
                    <Text
                      w={"100%"}
                      fontSize="20px"
                      fontWeight={"semibold"}
                      p="10px 5px"
                    >
                      Cart
                    </Text>
                  </NavLink>
                  <Divider />
                </VStack>
              </VStack>

              {!isAuth ? (
                <HStack marginTop="20px" justifyContent="space-around">
                  <NavLink to="/login">
                    <Button
                      onClick={() => onClose()}
                      colorScheme="orange"
                      variant="outline"
                    >
                      Log In
                    </Button>
                  </NavLink>
                  <NavLink onClick={() => onClose()} to="/register">
                    <Button colorScheme="orange" variant="solid">
                      Register
                    </Button>
                  </NavLink>
                </HStack>
              ) : (
                <HStack marginTop="20px" justifyContent="space-around">
                  <NavLink to="/login">
                    <Button
                      onClick={() => {
                        onClose();
                        LogOutUser();
                      }}
                      position={"absolute"}
                      bottom="35px"
                      right="25px"
                      bg="#f45f02"
                      variant="solid"
                      _hover={{ bg: "#151515", color: "#f45f02" }}
                    >
                      LOG OUT
                    </Button>
                  </NavLink>
                </HStack>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>

      <HStack
        justifyContent={{ sm: "flex-end", xl: "center" }}
        // style={{position:"sticky", top:0 }}
        p="0px 8%"
        justify="center"
        w="100%"
        h={{ base: "20px", md: "54px" }}
      >
        <Box display={{ base: "none", md: "block", lg: "block" }}>
          <HStack w={"fit-content"} gap={{ base: 10, md: "5px", lg: 50 }}>
            {Links.map((el) => (
              <NavLink
                key={el.path}
                to={el.path}
                onClick={handleClick}
                className={({ isActive }) =>
                  isActive ? "activeS" : "defaultS"
                }
                end
              >
                <Text fontSize="20px" fontFamily={"exo"} p="10px 10px">
                  {el.name}
                </Text>
              </NavLink>
            ))}

            {AdminIsAuth && isAuth && (
              <NavLink
                key={"el.path"}
                to={"/admin"}
                onClick={handleClick}
                className={({ isActive }) =>
                  isActive ? "activeS" : "defaultS"
                }
                end
              >
                <Text fontSize="20px" fontFamily={"exo"} p="10px 10px">
                  {"Admin"}
                </Text>
              </NavLink>
            )}

            {isAuth && AdminIsAuth == false && (
              <NavLink
                key={"el.path"}
                to={"/user-profile"}
                onClick={handleClick}
                className={({ isActive }) =>
                  isActive ? "activeS" : "defaultS"
                }
                end
              >
                <Text fontSize="20px" fontFamily={"exo"} p="10px 10px">
                  {"Profile"}
                </Text>
              </NavLink>
            )}
          </HStack>
        </Box>
      </HStack>

      <Box display={{ base: `${OpenSearch}`, md: "none" }}>
        <SearchBar2 OpenSearch={OpenSearch} SetOpenSearch={SetOpenSearch} />
      </Box>
    </Box>
  );
};
// OpenSearch
// SetOpenSearch
export default Navbar;
