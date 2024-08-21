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
import { MoonIcon } from "@chakra-ui/icons";
import Ball from "../Components/Ball"
import Ball2 from "../Components/Ball2"
import img1 from "../Images/ARV.png";
import img2 from "../Images/design.png";
import img3 from "../Images/Intel.webp";
import img4 from "../Images/h1.png";
import img5 from "../Images/h2.png";
import Toggle from "../Components/Toggle";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="rgb(59,64,130)" h={{base: "44vh", sm :'20px' , md: "52vw" ,lg:'70px' , xl:'100vh' }} position="relative">
      <Image
        src={img2}
        alt="Background"
        position="absolute"
        w="24%"
        h="70%"
        
      />
      <Toggle />
      <Box
        bgGradient="linear-gradient(90deg, rgba(18,21,58,1) 0%, rgba(66,69,113,1) 100%)"
        h="100vh"
        w={{ base: "100vw", md: "70vw" }}
        display={{ base: "none", lg: "flex" }}
      >
     <Flex h={16} alignItems="center" justifyContent="center" w="100vw">
          <Box display="flex" alignItems="center" mr={'20%'}>
            <Image src={img1} alt="ARV Multimedia" h={10} />
          </Box>
          <Flex alignItems="center">
            <Link href="#" color="yellow.400" mx={4} fontSize="15px">
              Home
            </Link>
            <Link href="#" color="white" mx={4} fontSize="15px">
              About us
            </Link>
            <Link href="#" color="white" mx={4} fontSize="15px">
              Technologies
            </Link>
            <Box mx={4}>
              <Button
                as="div"
                color="white"
                bg="blue.900"
                _hover={{ bg: "blue.700" }}
              >
                Services
              </Button>
              {/* Dropdown content can be added here */}
            </Box>
            <Spacer />
            <Button bg="#FED404" mx={4}>
              Contact us
            </Button>
            <Button onClick={toggleColorMode} ml={4}>
              <MoonIcon />
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Flex alignItems="center" justifyContent="center"   mt={{ base: "0", sm: "0", md: "23%", lg: "-25%", xl: "-50%" }}
      >
        <Box p={4} w={{ base: "90vw", sm :'' , md: "52vw" ,lg:'' , xl:'100vw'  }} mt={{ base: "0", sm: "0", md: "23%", lg: "-25%", xl: "6%" }} >
          <Text
            fontSize={{base: "18px", sm :'20px' , md: "52vw" ,lg:'70px' , xl:'70px' }}
            fontFamily="Graphik"
            fontStyle="italic"
            fontWeight="bold"
            color="#FFFFFF"
            textAlign={{base: "center", sm :'20px' , md: "52vw" ,lg:'70px' , xl:'center' }}
          >
           
            Lorem ipsum dolor sit amet,
            <Text mt="-4%" color="rgb(255,255,80)"> consectetur</Text>
          </Text>
          <Text color="#FFCA9D" fontSize={{base: "6px", sm :'20px' , md: "52vw" ,lg:'70px' , xl:'18px' }} textAlign="center">
            It is a long established fact that a reader will be distracted by the <br />readable content of a page when looking at its layout.
            
          </Text>
        
        </Box>
        <Ball/>
      </Flex>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Image src={img4} h={{base: "20vh", sm :'20px' , md: "52vw" ,lg:'70px' , xl:'61vh' }} w="9vw" m="2" />
        <Image src={img3} h={{base: "22vh", sm :'20px' , md: "52vw" ,lg:'70px' , xl:'61vh' }} w="58vw" />
        <Image src={img5} h={{base: "20vh", sm :'20px' , md: "52vw" ,lg:'70px' , xl:'61vh' }} w="9vw" m="2" />
       <Ball2 />
      </Box>
    </Box>
  );
}

export default Header;