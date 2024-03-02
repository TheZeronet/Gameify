import "./App.css";
import Navbar from "./pages/sufiyan/pages/Navbar";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./pages/sufiyan/pages/Footer";
import { Box, Image, VStack } from "@chakra-ui/react";
import { useState, useEffect, React } from "react";
import Logo from "./assets/Logo.png";

function App() {
  const [Starting, setStarting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStarting(false);
    }, 2000);
  }, []);

  if (Starting) {
    return (
      <VStack
        overflow={"hidden"}
        bg="black"
        position={"relative"} // bgImage={women}     bgSize={"80%"}
        minH="100vh"
        justify="center"
        align="center"
      >
        <Image
          position={"absolute"}
          minW={{ base: "800px", md: "none" }}
          h="100%"
          src="https://i.pinimg.com/originals/72/0c/c4/720cc43d757ee638ad5054a05220fafe.gif"
        />
        <Image
          position={"absolute"}
          // sizes="20% 20%"
          minW={{ base: "800px", md: "none" }}
          h="100%"
          src={Logo}
        />
      </VStack>
    );
  }

  return (
    <Box>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;

// npm i @chakra-ui/icons
