import React from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  Spacer,
  useColorMode,
  Image,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Ball from "../Components/Ball";
import Ball2 from "../Components/Ball2";
import img1 from "../Images/ARV.png";
import img2 from "../Images/design.png";
import img3 from "../Images/Intel.webp";
import img4 from "../Images/h1.png";
import img5 from "../Images/h2.png";
import Toggle from "../Components/Toggle";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Box
      bg={isDark ? "#424571" : "#f0f0f5"}
      h="100vh"
      position="relative"
    >
      <Image
        src={img2}
        alt="Background"
        position="absolute"
        w="24%"
        h="70%"
        zIndex={0}
        opacity={isDark ? 0.6 : 1}
      />
      <Toggle />
      <Box
        bgGradient={isDark 
          ? "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,19,69,1) 100%)" 
          : "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%)"}
        h="100vh"
        w={{ base: "100vw", md: "80vw" }}
        display={{ base: "none", lg: "flex" }}
      >
        <Flex h={16} alignItems="center" justifyContent="center" w="100vw">
          <Box display="flex" alignItems="center" mr={'20%'}>
            <Image src={img1} alt="ARV Multimedia" h={10} />
          </Box>
          <Flex alignItems="center">
            <Link href="#" color={isDark ? "yellow.400" : "blue.600"} mx={4} fontSize="15px">
              Home
            </Link>
            <Link href="#" color={isDark ? "white" : "black"} mx={4} fontSize="15px">
              About us
            </Link>
            <Link href="#" color={isDark ? "white" : "black"} mx={4} fontSize="15px">
              Technologies
            </Link>
            <Box mx={4}>
              <Button
                as="div"
                color={isDark ? "white" : "black"}
                bg={isDark ? "blue.900" : "blue.400"}
                _hover={{ bg: isDark ? "blue.700" : "blue.300" }}
              >
                Services
              </Button>
            </Box>
            <Spacer />
            <Button bg={isDark ? "#FED404" : "#FFD700"} mx={4}>
              Contact us
            </Button>
            <Button onClick={toggleColorMode} ml={4}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Flex alignItems="center" justifyContent="center" mt={{ base: "0", lg: "-50%" }}>
        <Box p={4} w={{ base: "90vw", md: "52vw" }}>
          <Text
            fontSize="70px"
            fontFamily="Graphik"
            fontStyle="italic"
            fontWeight="bold"
            color={isDark ? "#FFFFFF" : "#333333"}
            textAlign="center"
          >
            Lorem ipsum dolor sit amet,
            <Text mt="-4%"> consectetur</Text>
          </Text>
          <Text color={isDark ? "#FFCA9D" : "#FFA07A"} fontSize="18px" textAlign="center">
            It is a long established fact that a reader will be distracted by the <br />readable content of a page when looking at its layout.
          </Text>
        </Box>
        <Ball />
      </Flex>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src={img4} h="61vh" w="9vw" m="2" />
        <Image src={img3} h="61vh" w="58vw" />
        <Image src={img5} h="61vh" w="9vw" m="2" />
        <Ball2 />
      </Box>
    </Box>
  );
}

export default Header;
