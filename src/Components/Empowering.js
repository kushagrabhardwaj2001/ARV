import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import img1 from "../Images/OBJECTS.png";

function Empowering() {
  return (
    <Box
      bg="#1D0B8D"
      h="70vh"
      display="flex"
    >
      <Box
        h="100%"
        w="60%"
        p={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        margin={'auto'}
        ml={'12%'}
      >
        <Text
          fontSize="59px"
          color="white"
          fontFamily="Playfair Display"
          fontWeight="700"
         
        >
          Empowering Growth ,
          <Text color="rgb(176, 248, 36)">
            Transforming
            <Text as="span" color="white">
              {" "}Lives
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
          Our Development section is focused on driving sustainable growth through <br />
          strategic initiatives and innovative projects. We are committed to fostering <br />
          progress that benefits communities, enhances infrastructure, and improves <br />
          quality of life. By integrating cutting-edge technology, eco-friendly practices, <br />
          and community engagement, we aim to create lasting impact and pave the way <br />
          for future advancements. Our approach is holistic, ensuring that every project <br />
          we undertake contributes to a more resilient and prosperous society.
        </Text>
      </Box>
      <Box
        h="100%"
        w="40%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
      >
        <Image src={img1} alt="Empowering Image" />
      </Box>
    </Box>
  );
}

export default Empowering;
