import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import img1 from "../Images/Group.png";

function Uibanner() {
  return (
    <Box
      bg="#1D0B8D"
      h={'100vh'}
      display={'flex'}
      alignItems="center"
      justifyContent="center"
     
    >
      <Box w="45%" >
        <Image src={img1} />
      </Box>
      <Box w="55%" p={8}>
        <Text
          fontSize="59px"
          color="white"
          fontFamily="Playfair Display"
          fontWeight="700"
        >
          Purpose of Intuitive{' '}
          <Text  color="rgb(176, 248, 36)">
            UI/UX <space/>
            <Text as="span" color="white">
            Design
          </Text>
          </Text> 
         
        </Text>
        <Text
          color="white"
          fontFamily="Graphik"
          fontSize="20px"
          fontWeight="500"
          mt={4}
        >
          Our approach to UI/UX focuses on creating intuitive and visually
          appealing <br/>interfaces that enhance user engagement. By prioritizing
          user needs and <br/> behaviors, we design seamless, responsive experiences
          that make interaction <br/> simple and enjoyable. From wireframes to final
          designs, our goal is to deliver a<br/> product that not only looks great
          but also works effortlessly.
        </Text>
      </Box>
    </Box>
  );
}

export default Uibanner;
