import React, { useState } from "react";
import { AspectRatio, Image } from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ForgotPasswordForm from "./forgotPassword";
import LoginForm from "./LoginForm";
import ResetPasswordForm from "./ResetPassword";
import VerifyEmailForm from "./EmailCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ForegetPassword } from "../../../redux/auth/auth.actions";

const Login = () => {
  const [forgot, setForget] = useState(false);
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState(false);
  const [login, setLogin] = useState(true);

  const dispatch = useDispatch();

  const handleForgot = () => {
    setForget(true);
    setLogin(false);
  };
  const handleOtp = async () => {
    setVerify(true);
    setForget(false);
  };
  const handleVerify = () => {
    setOtp(true);
    setVerify(false);
  };
  const handleReset = () => {
    setOtp(false);
    setLogin(true);
  };
  return (
    <>
      <Box
        overflow={"hidden"}
        position={"relative"}
        bg="black"
        // bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
        w="100%"
        h="100vh"
        align={"center"}
        justify={"center"}
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
        {login && <LoginForm handleForgot={handleForgot}></LoginForm>}
        {forgot && <ForgotPasswordForm handleOtp={handleOtp} />}
        {otp && (
          <ResetPasswordForm handleReset={handleReset}></ResetPasswordForm>
        )}
        {verify && (
          <VerifyEmailForm handleVerify={handleVerify}></VerifyEmailForm>
        )}
      </Box>
    </>
  );
};

export default Login;
