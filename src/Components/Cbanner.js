import React from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react';
import img1 from "../Images/imgae.png"; // Ensure the correct path
import img2 from "../Images/Image2.png"; // Ensure the correct path
import img3 from "../Images/Image3.png"; // Ensure the correct path
import img4 from "../Images/Image4.png"; // Ensure the correct path

const Cbanner = () => {
  return (
    <Box bg={'#1D0B8D'} p={4}>
      <Flex wrap="wrap" justifyContent="Center">
      <Box
          position="relative"
          overflow="hidden"
          borderRadius="md"
          w="20vw"
          h="26vw"
          m={2}
          cursor="pointer"
          transition="transform 2.9s ease-in-out" 
          _hover={{
            
            '& .image-overlay': {
              transform: 'scale(1.5)', // Zoom effect on hover
            },
            '& .hover-slide': {
              transform: 'scale(1)',
            },
          }}
        >
          <Box
            className="image-overlay"
            position="relative"
            w="100%"
            h="100%"
            overflow="hidden"
            borderRadius="md"
          >
            <Image
              src={img1}
              alt="Case Study"
              objectFit="cover"
              w="100%"
              h="100%"
            />
            
          </Box>
          <Box bg="rgba(0, 0, 0, 0.7)"
            opacity={0.9} mt={'-130%'}  h={'11vh'} >
<Text textAlign={'left'} color={'#FFBC03'} fontFamily={'Graphik'} fontSize={'24px'} fontStyle={'initial'} fontWeight={'700'} ml={'5%'} > 
    Case Study
</Text>
<Text textAlign={'left'} color={'#FFFFFF'} fontFamily={'Graphik'} fontSize={'20px'} fontStyle={'initial'} fontWeight={'500'} ml={'5%'}> 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Text>

          </Box>
          <Box
            position="absolute"
            top="22%" // Adjust position from top
            right="0"
            w="20vw"
            h="45vh"
            bg="rgba(0, 0, 0, 0.7)"
            opacity={0.9} // Adjust opacity directly
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            textAlign="center"
            transform="translateX(100%)"
            transition="transform 0.5s ease-in-out"
            className="hover-slide"
          >
            <Box textAlign="center">
              <Text fontSize="2xl" mt="2">Fighting poverty with technology and humanity: Gerando Falcões</Text>
            </Box>
          </Box>
        </Box>
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="md"
          w="20vw"
          h="26vw"
          m={2}
          cursor="pointer"
          transition="transform 2.9s ease-in-out" 
          _hover={{
            
            '& .image-overlay': {
              transform: 'scale(1.5)', // Zoom effect on hover
            },
            '& .hover-slide': {
              transform: 'scale(1)',
            },
          }}
        >
          <Box
            className="image-overlay"
            position="relative"
            w="100%"
            h="100%"
            overflow="hidden"
            borderRadius="md"
          >
            <Image
              src={img2}
              alt="Case Study"
              objectFit="cover"
              w="100%"
              h="100%"
            />
            
          </Box>
          <Box bg="rgba(0, 0, 0, 0.7)"
            opacity={0.9} mt={'-130%'}  h={'11vh'} >
<Text textAlign={'left'} color={'#FFBC03'} fontFamily={'Graphik'} fontSize={'24px'} fontStyle={'initial'} fontWeight={'700'} ml={'5%'} > 
    Case Study
</Text>
<Text textAlign={'left'} color={'#FFFFFF'} fontFamily={'Graphik'} fontSize={'20px'} fontStyle={'initial'} fontWeight={'500'} ml={'5%'}> 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Text>

          </Box>
          <Box
            position="absolute"
            top="22%" // Adjust position from top
            right="0"
            w="20vw"
            h="45vh"
            bg="rgba(0, 0, 0, 0.7)"
            opacity={0.9} // Adjust opacity directly
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            textAlign="center"
            transform="translateX(100%)"
            transition="transform 0.5s ease-in-out"
            className="hover-slide"
          >
            <Box textAlign="center">
              <Text fontSize="2xl" mt="2">Fighting poverty with technology and humanity: Gerando Falcões</Text>
            </Box>
          </Box>
        </Box>
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="md"
          w="20vw"
          h="26vw"
          m={2}
          cursor="pointer"
          transition="transform 2.9s ease-in-out" 
          _hover={{
            
            '& .image-overlay': {
              transform: 'scale(1.5)', // Zoom effect on hover
            },
            '& .hover-slide': {
              transform: 'scale(1)',
            },
          }}
        >
          <Box
            className="image-overlay"
            position="relative"
            w="100%"
            h="100%"
            overflow="hidden"
            borderRadius="md"
          >
            <Image
              src={img3}
              alt="Case Study"
              objectFit="cover"
              w="100%"
              h="100%"
            />
            
          </Box>
          <Box bg="rgba(0, 0, 0, 0.7)"
            opacity={0.9} mt={'-130%'}  h={'11vh'} >
<Text textAlign={'left'} color={'#FFBC03'} fontFamily={'Graphik'} fontSize={'24px'} fontStyle={'initial'} fontWeight={'700'} ml={'5%'} > 
    Case Study
</Text>
<Text textAlign={'left'} color={'#FFFFFF'} fontFamily={'Graphik'} fontSize={'20px'} fontStyle={'initial'} fontWeight={'500'} ml={'5%'}> 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Text>

          </Box>
          <Box
            position="absolute"
            top="22%" // Adjust position from top
            right="0"
            w="20vw"
            h="45vh"
            bg="rgba(0, 0, 0, 0.7)"
            opacity={0.9} // Adjust opacity directly
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            textAlign="center"
            transform="translateX(100%)"
            transition="transform 0.5s ease-in-out"
            className="hover-slide"
          >
            <Box textAlign="center">
              <Text fontSize="2xl" mt="2">Fighting poverty with technology and humanity: Gerando Falcões</Text>
            </Box>
          </Box>
        </Box>
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="md"
          w="20vw"
          h="26vw"
          m={2}
          cursor="pointer"
          transition="transform 2.9s ease-in-out" 
          _hover={{
            
            '& .image-overlay': {
              transform: 'scale(1.5)', // Zoom effect on hover
            },
            '& .hover-slide': {
              transform: 'scale(1)',
            },
          }}
        >
          <Box
            className="image-overlay"
            position="relative"
            w="100%"
            h="100%"
            overflow="hidden"
            borderRadius="md"
          >
            <Image
              src={img4}
              alt="Case Study"
              objectFit="cover"
              w="100%"
              h="100%"
            />
            
          </Box>
          <Box bg="rgba(0, 0, 0, 0.7)"
            opacity={0.9} mt={'-130%'}  h={'11vh'} >
<Text textAlign={'left'} color={'#FFBC03'} fontFamily={'Graphik'} fontSize={'24px'} fontStyle={'initial'} fontWeight={'700'} ml={'5%'} > 
    Case Study
</Text>
<Text textAlign={'left'} color={'#FFFFFF'} fontFamily={'Graphik'} fontSize={'20px'} fontStyle={'initial'} fontWeight={'500'} ml={'5%'}> 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Text>

          </Box>
          <Box
            position="absolute"
            top="22%" // Adjust position from top
            right="0"
            w="20vw"
            h="45vh"
            bg="rgba(0, 0, 0, 0.7)"
            opacity={0.9} // Adjust opacity directly
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            textAlign="center"
            transform="translateX(100%)"
            transition="transform 0.5s ease-in-out"
            className="hover-slide"
          >
            <Box textAlign="center">
              <Text fontSize="2xl" mt="2">Fighting poverty with technology and humanity: Gerando Falcões</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
 
);
};

export default Cbanner;
