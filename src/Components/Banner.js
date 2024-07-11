import React from "react";
import { Box, Image, Text,Button } from "@chakra-ui/react";
import img1 from "../Images/Focus.png";

function Banner() {
  return (
    <Box
      bgGradient="linear(to-b, #FF9A02, #FED404)"
      h="40vh"
      display="flex"
      justifyContent="space-between"  // Adjusted justifyContent to space-between
      alignItems="center"
      p={'4%'}
      
    >
      <Box >
        <Text color="#1D0B8D" fontSize="54px" textAlign="left" fontStyle={'italic bold'} fontFamily={'Graphik'} fontWeight={'700'} >
          "Lorem ipsum dolor sit amet"
        </Text>
        <Button bg={'#1D0B8D'} color={'white'} w={'14vw'} h={'7vh'} ml={'2%'}>
Request a call 
        </Button>
      </Box>
      <Image src={img1} w="32vw" />
    </Box>
  );
}

export default Banner;
