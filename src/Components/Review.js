import React, { useState } from 'react';
import { Box, Image, Text, VStack , HStack,IconButton } from '@chakra-ui/react';
import img1 from '../Images/Vector.png';
import img2 from '../Images/Madan.png';
import StarRating from '../Components/StarRating'; // Correct the path if needed
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import img3 from "../Images/M1.png";
import Message from "../Components/Message";


function Review() {
  const [rating, setRating] = useState(0); // Manage star rating state

  return (
    <Box
      bg="#1D0B8D"
      h="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        backgroundImage="linear-gradient(90deg, #003399, #8A2BE2)"
        w="84%"
        h="70%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        position="relative" // Ensure absolute positioning works
      >
        <Box w="45%" h="40%" display="flex" position="relative">
        <Box
        position="absolute"
        top="35px"
        left="15px"
        width="30%"
        height="23vh"
        bg="white"
        rounded="md"
        boxShadow="xl"
      />

          <Box
            w="210px"
            h="232px"
            bg="#141470"
            ml="4%"
            borderRadius="md"
            zIndex={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
          >
            <Image src={img2} boxSize="229px" objectFit="cover" />
          </Box>
          <Box mt="-12%" w="55%">
            <Image src={img1} />
          </Box>
        </Box>
        <Box  w="50%" h="100%">
          <Text
            textAlign="center"
            fontFamily="Playfair Display"
            fontStyle="normal"
            fontWeight="500"
            fontSize="60px"
            color="#FED404"
          >
            What our users say
          </Text>
          <Text
            textAlign="center"
            fontFamily="Playfair Display"
            fontStyle="normal"
            fontWeight="500"
            fontSize="18px"
            color="white"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <Text>
              {' '}
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Text>
          <Box  h="50%" display="flex" ml={'20%'}>
            <Box
              border="1px solid white"
              w="18%"
              h="60%"
              borderRadius="62%"
              bg="gray.200" // Use predefined gray color or custom color
              overflow="hidden"
            >
              <Image
                src={img2}
                objectFit="cover"
                w="100%"
                h="100%"
              />
            </Box>
            <VStack spacing={2} mt={4} align="center">
              <Text 
              ml={'15px'}
                color="white" 
                fontSize="25px" 
                fontFamily="Graphik" 
                fontWeight="500"
              >
                Madan Gopal Sharma
              </Text>
              <Text 
                color="white"
                fontSize="20px" 
                fontFamily="Graphik" 
                fontWeight="500"
              >
              Mern Stack Developer
              </Text>
              <Box p={5}>
                <StarRating rating={rating} onRatingChange={setRating} />
              </Box>
            </VStack>
            <Box 
  position="absolute" 
  right="-8%" 
  bottom="-20%" 
  w="250px"  
  overflow="hidden" 
>
  <Message />
</Box>
          </Box>
          <HStack spacing={4} justify="center" mt={'5%'}>
        <IconButton
          aria-label="Previous"
          icon={<FaLongArrowAltRight />
          }
           bg="linear-gradient(90deg, rgba(255,154,2,1) 35%, rgba(254,212,4,1) 100%)"
          color="1D0B8D"
          rounded="full"
          boxSize="50px"
        />
        <IconButton
          aria-label="Next"
          icon={<FaLongArrowAltLeft />}
          bg="White"
          color="1D0B8D"
          rounded="full"
          boxSize="50px"
        />
        
      </HStack> 
   
        </Box>
       
      </Box>
     
    </Box>
  );
}

export default Review;
