import React from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  VStack,
  Divider,
  Image,
} from "@chakra-ui/react";

const AboutUsPage = () => {
  return (
    <Box bg="#282c34" color="white">
      <Container maxW="container.xl" py={12}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          About Us
        </Heading>
        <Divider mb={8} borderColor="white" />
        <VStack spacing={8} alignItems="center">
          <Box textAlign="center">
            <Heading as="h2" size="lg" mb={4}>
              Our Mission
            </Heading>
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sodales ligula et mauris pulvinar, sit amet molestie risus
              vulputate. Vivamus nec lorem sed elit finibus viverra ut ut
              tellus.
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h2" size="lg" mb={4}>
              Our Vision
            </Heading>
            <Text fontSize="xl">
              Nullam sit amet varius turpis. In interdum commodo tortor, eu
              consequat purus. Integer mattis mauris eget odio cursus, vitae
              facilisis mi dapibus. Nam ut ligula varius, pretium ligula et,
              rhoncus lorem.
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h2" size="lg" mb={4}>
              Our Team
            </Heading>
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sodales ligula et mauris pulvinar, sit amet molestie risus
              vulputate. Vivamus nec lorem sed elit finibus viverra ut ut
              tellus.
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading as="h2" size="lg" mb={4}>
              Our Location
            </Heading>
            <Text fontSize="xl">
              Nullam sit amet varius turpis. In interdum commodo tortor, eu
              consequat purus. Integer mattis mauris eget odio cursus, vitae
              facilisis mi dapibus. Nam ut ligula varius, pretium ligula et,
              rhoncus lorem.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
