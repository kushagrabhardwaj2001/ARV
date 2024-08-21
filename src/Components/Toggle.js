import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import img1 from "../Images/ARVb.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" px={4} display={{ lg: "none" }} w={isOpen ? "100%" : "100%"}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box w={"22%"}>
          <Image src={img1} />
        </Box>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon boxSize={6} /> : <HamburgerIcon boxSize={6} />}
          aria-label="Toggle Menu"
          onClick={isOpen ? onClose : onOpen}
          bg={isOpen ? "red.500" : "blue.600"}
          color="white"
          _hover={{ bg: isOpen ? "red.600" : "blue.700" }}
          _active={{ bg: isOpen ? "red.700" : "blue.800" }}
          borderRadius="md"
          padding="0.5rem"
          transition="background-color 0.2s"
        />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }} textAlign={"right"}>
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
