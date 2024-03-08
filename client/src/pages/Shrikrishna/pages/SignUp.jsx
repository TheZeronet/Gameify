import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  option,
  useToast,
  Image,
  Checkbox,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/auth/auth.actions";
import { registerUser } from "../../../redux/register/register.actions";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    password: "",
  };

  const [user, setUser] = useState(defaultValues);

  // console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const click = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.email ||
      !user.password ||
      !user.age ||
      !user.gender
    ) {
      toast({
        title: "All fields are mandatory",
        description: "Please fill all the details",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } else {
      dispatch(registerUser(user));
      setUser(defaultValues);
      toast({
        title: "Your account is created",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      position={"relative"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"black"}
    >
      <Stack zIndex={2} spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading color={"white"} fontSize={"4xl"}>
            Sign up
            {""}
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg="whiteAlpha.400" // The colour for the box thingy
          boxShadow={"lg"}
          p={8}
          zIndex={100}
        >
          <Image
            opacity={{ base: "30%", md: "50%" }}
            display={{ base: "none", md: "block" }}
            top="0"
            left="0"
            width="100%"
            height="100%"
            position={"absolute"}
            src="https://i.pinimg.com/originals/db/cd/7f/dbcd7fda35282cb6992062f770a90833.gif"
          />
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color={"#f45f02"}>First Name</FormLabel>
                  <Input
                    value={user.firstName}
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    color={"gray.300"}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel color={"#f45f02"}>Last Name</FormLabel>
                  <Input
                    value={user.lastName}
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                    color={"gray.300"}
                  />
                </FormControl>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <FormControl id="age" isRequired>
                  <FormLabel color={"#f45f02"}>Age</FormLabel>
                  <Input
                    value={user.age}
                    onChange={handleChange}
                    type="number"
                    name="age"
                    color={"gray.300"}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="gender" bg="none">
                  <FormLabel color={"#f45f02"}>Gender</FormLabel>
                  <Select
                    value={user.gender}
                    _hover={{ color: "black" }}
                    type="text"
                    name="gender"
                    onChange={handleChange}
                    color={"gray.300"}
                  >
                    <option value="">select gender</option>
                    <option value="Male">male</option>
                    <option value="Female">female</option>
                    <option value="Others">Custom</option>
                  </Select>
                </FormControl>
              </Box>
            </HStack>
            <HStack></HStack>
            <FormControl id="email" isRequired>
              <FormLabel color={"#f45f02"}>Email address</FormLabel>
              <Input
                value={user.email}
                onChange={handleChange}
                type="email"
                name="email"
                color={"gray.300"}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel color={"#f45f02"}>Password</FormLabel>
              <InputGroup>
                <Input
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                  color={"gray.300"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Checkbox color={"#f45f02"}>
              I have read all the terms and conditions
            </Checkbox>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#f45f02"}
                color={"white"}
                _hover={{
                  border: "1px solid #f45f02",
                  bg: "#151515",
                  color: "#f45f02",
                }}
                onClick={handleClick}
              >
                Sign up
              </Button>

              <Stack spacing={10} pt={2}>
                <Link to="/login" align={"center"}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"transparent"}
                    color={"white"}
                    _hover={{
                      bg: "transparent",
                      color: "#f45f02",
                    }}
                    onClick={click}
                  >
                    Already a user? login
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
