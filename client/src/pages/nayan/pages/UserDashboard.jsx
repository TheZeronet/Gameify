import { Box, Flex, Img, Spacer, Tag, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Clive from "../Assets/Clive16.png";

const UserDashboard = () => {
  const { userData, token, isAuth, AdminIsAuth } = useSelector(
    (store) => store.auth
  );

  const { details } = userData;

  return (
    <Box minH="100vh" position={"relative"} maxW="1400vh">
      <Box bg={"#151515"} minH="100vh">
        <Img
          w="700px"
          opacity="0.5"
          src={Clive}
          alt="userBody"
          position="absolute"
          right={-70}
          top={-200}
          //  transform={"scaleX(-1)"}
        />
      </Box>

      <Box border="2px solid white" maxW="xl">
        <Box
          bg="whiteAlpha.100"
          position="absolute"
          top={20}
          left={{ base: "50", sm: "0", md: "150", lg: "50" }}
          p="10px"
          display={{ base: "grid", sm: "grid", md: "grid", lg: "flex" }}
          gap="20px"
          //   borderRadius="20px"
          maxW="600px"
        >
          <Box w={{ base: "100%", sm: "40%", md: "50%", lg: "40%" }}>
            <Img
              src="https://i.pinimg.com/564x/81/8a/1b/818a1b89a57c2ee0fb7619b95e11aebd.jpg"
              border={"5px solid #151515"}
            />
          </Box>
          <VStack align={"flex-start"} color="white">
            <Text fontSize="2xl">{details.username}</Text>
            <Tag bg="#f45f02" color="white" mb="10px">
              @{details.username}
            </Tag>
            <Text>Age: {details.age}</Text>
            <Text>Gender: {details.gender}</Text>
            <Text>Email: {details.email}</Text>
          </VStack>
        </Box>
        <VStack left="680" top="20" position={"absolute"} w="400px">
          <Text fontSize={"2xl"} color="white" fontWeight={"semibold"}>
            PURCHASE HISTORY
          </Text>
          <VStack w="100%" spacing={5} overflowY="scroll">
            <Flex bg="rgb(244,95,2)" position={"sticky"} w="full" p={3}>
              <Text color={"white"} fontWeight="medium">
                {" "}
                {"Poduct Name"} {"   "}
              </Text>
              <Spacer />
              <Text color={"white"} fontWeight="medium">
                {"Price"}
              </Text>
            </Flex>
            {userData.purchase.map((el) => (
              <Flex w="full" bg={"whiteAlpha.200"} p={3}>
                <Text color={"white"} fontWeight="medium">
                  {" "}
                  {el.productName} {"   "}
                </Text>
                <Spacer />
                <Text color={"white"} fontWeight="medium">
                  {"   "} $ {el.price}
                </Text>
              </Flex>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default UserDashboard;
