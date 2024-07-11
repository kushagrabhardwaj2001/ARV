import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Link,
  Button,
  Spacer,
  useColorMode,
  Image,
  Text,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import img1 from "../Images/ARV.png";
import img2 from "../Images/design.png";
import img3 from "../Images/Intel.webp";
import img4 from "../Images/h1.png";
import img5 from "../Images/h2.png";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="#424571" h="100vh" position="relative">
      <Image
        src={img2}
        alt="Background"
        position="absolute"
        w="24%"
        h="70%"
        zIndex={0}
      />
      <Box bgGradient="linear(#424571, #12153A)" h="100vh" w="50vw">
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-around"
          w="99vw"
        >
          <Box display="flex" alignItems="center "> 
            <Image src={img1} alt="ARV Multimedia" h={10} />
          </Box>
          <Flex alignItems="center">
            <Link href="#" color="yellow.400" m="30px" fontSize="15px">
              Home
            </Link>
            <Link href="#" color="white" m="30px" fontSize="15px">
              About us
            </Link>
            <Link href="#" color="white" m="30px" fontSize="15px">
              Technologies
            </Link>
            <Box>
              <Button
                as="div"
                color="white"
                m="30px"
                bg="blue.900"
                _hover={{ bg: "blue.700" }}
              >
                Services
              </Button>
              {/* Dropdown content can be added here */}
            </Box>
            <Spacer />
            <Button bg="#FED404" m="30px">
              Contact us
            </Button>
            <Button onClick={toggleColorMode} ml={4}>
              <MoonIcon />
            </Button>
          </Flex>
        </Flex>

        <Box></Box>
      </Box>
      <Flex alignItems="center" justifyContent="center" mt="-50%">
        <Box p={4} w="52vw">
          <Text
            fontSize="70px"
            fontFamily="Graphik"
            fontStyle="italic"
            fontWeight="bold"
            color="#FFFFFF"
            textAlign="center"
          >
            Lorem ipsum dolor sit amet,
            <Text mt="-4%"> consectetur</Text>
          </Text>
          <Text color="#FFCA9D" fontSize="18px" textAlign="center">
            It is a long established fact that a reader will be distracted by the <br />readable content of a page when looking at its layout.
          </Text>
        </Box>
      </Flex>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src={img4} h="61vh" w="9vw" m="2" />
        <Image src={img3} h="61vh" w="58vw" />
        <Image src={img5} h="61vh" w="9vw" m="2"/>
      </Box>
    </Box>
  );
}

export default Header;
