import React, { useState,useEffect } from "react";
import {
  FormControl,
  FormLabel,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { Box, Center, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { getCsrfToken, signIn } from "next-auth/client";
import Router from "next/router";
import { useSession } from "next-auth/client";

const SignIn = ({ csrfToken }) => {
      const [session, loading] = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
   const { colorMode } = useColorMode();
     const bgColor = {
       light: "white",
       dark: "#1c1c1c",
     };
     const color = {
       light: "#171717",
       dark: "#171717 ",
     };

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
  
    

    if (response.status === 401) {
      return toast({
        title: "Incorrect credentails.",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
  
    } else {
      console.log('accepted',response)
      return await Router.push("/dashboard");
    }
  };

  return (
    <div>
      <Center height="100vh">
        <Box
          p={8}
          my={"15"}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={4} textAlign="left">
            <form style={{ color: color[colorMode] }} onSubmit={onSubmit}>
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <FormControl isRequired mt={6}>
                <FormLabel>Email</FormLabel>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                ></span>
              </FormControl>
              <FormControl isRequired mt={6}>
                <FormLabel>Password</FormLabel>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                />
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                ></span>
              </FormControl>

              <Button
                type="submit"
                variantcolor="teal"
                variant="outline"
                width="full"
                mt={4}
              >
                Login
              </Button>
            </form>
          </Box>
          <Box textAlign="center">
            <div className="bg-gray-100">
              <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
                © codesmithsAfrica. All rights reserved
              </div>
            </div>
          </Box>
        </Box>
      </Center>
    </div>
  );
};
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default SignIn;
