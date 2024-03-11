import { useState, useEffect } from "react";
import { Box, VStack, Text, Tag, Img, Flex, Spacer } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Clive from "../Assets/Clive16.png";

const UserDashboard = () => {
  const { userData } = useSelector((store) => store.auth);
  const { details } = userData;

  // State to hold the selected image URL
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  // Effect to load previously selected image from local storage on initial render
  useEffect(() => {
    const storedImage = localStorage.getItem("userSelectedImage");
    if (storedImage && storedImage.startsWith("blob:")) {
      setSelectedImage(storedImage);
    }
  }, []);

  // Effect to update local storage when the selected image changes
  useEffect(() => {
    if (selectedImage && selectedImage.startsWith("blob:")) {
      localStorage.setItem("userSelectedImage", selectedImage);
    }
  }, [selectedImage]);

  return (
    <Box
      minH="100vh"
      position={"relative"}
      maxW="auto"
      overflow="hidden"
      backgroundColor="#151515"
    >
      <Box>
        <Img
          w="700px"
          opacity="1"
          src={Clive}
          alt="userBody"
          position="absolute"
          right={-50}
          top={-200}
        />
      </Box>

      <Box
        border="1px solid black"
        maxW="xl"
        marginTop="40px"
        marginLeft="50px"
      >
        <Box
          bg="whiteAlpha.100"
          left={{ base: "50", sm: "0", md: "150", lg: "50" }}
          p="10px"
          display={{ base: "grid", sm: "grid", md: "grid", lg: "flex" }}
          gap="20px"
          maxW="600px"
        >
          <Box
            w={{ base: "100%", sm: "40%", md: "50%", lg: "40%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {selectedImage && (
              <Img
                src={selectedImage}
                border={"5px solid #151515"}
                borderRadius="full"
                w="200px"
                h="200px"
                alt="userImage"
              />
            )}
            <input
              type="file"
              onChange={handleImageChange}
              style={{ marginTop: "10px", marginLeft: "230px" }}
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
                {"Product Name"} {"   "}
              </Text>
              <Spacer />
              <Text color={"white"} fontWeight="medium">
                {"Price"}
              </Text>
            </Flex>
            {userData.purchase.map((el, index) => (
              <Flex key={index} w="full" bg={"whiteAlpha.200"} p={3}>
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
