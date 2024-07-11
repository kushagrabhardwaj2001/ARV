import React from 'react';
import { ChakraProvider, Box, Flex, Link, Button, Spacer, useColorMode } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';
import img1 from "../Images/ARV.png"

function Header () {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="#424571" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Box as="img" src={img1} alt="ARV Multimedia" h={10}  />
          {/* <Box color="white" fontWeight="bold">ARV Multimedia</Box> */}
        </Box>
        <Flex alignItems="center">
          <Link href="#" color="yellow.400" mr={4}>Home</Link>
          <Link href="#" color="white" mr={4}>About us</Link>
          <Link href="#" color="white" mr={4}>Technologies</Link>
          <Box>
            <Button as="div" color="white" bg="blue.900" _hover={{ bg: 'blue.700' }}>
              Services
            </Button>
            {/* Dropdown content can be added here */}
          </Box>
          <Spacer />
          <Button colorScheme="yellow" ml={4}>Contact us</Button>
          <Button onClick={toggleColorMode} ml={4}>
            <MoonIcon />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};


export default Header;
