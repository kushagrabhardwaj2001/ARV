import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" px={4} display={{lg:'none'}}>
      <Flex h={16} alignItems="center" justifyContent="space-between" >
        <Box color="black">Logo</Box>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Menu"
          display={{ md: "none"   }}
          onClick={isOpen ? onClose : onOpen}
        />  
        <HStack spacing={8} alignItems="center">
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex",lg:"none" }}
          >
            <Box>Home</Box>
            <Box>About</Box>
            <Box>Contact</Box>
          </HStack>
        </HStack>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Box>Home</Box>
            <Box>About</Box>
            <Box>Contact</Box>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
