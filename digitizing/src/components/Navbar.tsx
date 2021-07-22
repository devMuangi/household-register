import { ReactNode } from "react";
import  Link   from 'next/link';

import Image from "next/image";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = [
  {to:'/dashboard',
    name:'Dashboard'},
    {to:'/CHUS',
      name:'CHUS'},
      {to:'/CHVS',
    name:'CHVS'},
    {to:'/HOUSEHOLDS',
  name:'HOUSEHOLDS'}
]
 
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{position:'fixed',width:'100vw',zIndex:'10'}}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              {" "}
              <span >
                <Image
                  src="/logo1.png"
                  alt="Logo"
                  objectFit="contain"
                  width={70}
                  height={50}
                  Link={'/'}
                />
              </span>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link key={link} href={link.to}>{link.name}</Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar size={"sm"} />
              </MenuButton>
              <MenuList>
                <MenuItem>Logout</MenuItem>

              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}
