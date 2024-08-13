import React from "react";
import {
  Box,
  Flex,
  Input,
  Textarea,
  Button,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { MdLocationOn } from "react-icons/md";
import img1 from "../Images/bgimage.png";
import img2 from "../Images/blur.png";

const Contactus = () => {
  return (
    <Box bg="#1D0B8D">
      <Flex
        bgImage={`url(${img1})`}
        bgSize="cover"
        bgPosition="center"
        p={10}
        borderRadius="lg"
        boxShadow="lg"
        w="70%"
        mx="auto"
      // Adjusted to add spacing
        direction={{ base: "column", md: "row" }}
      >
        <Box
          flex="1"
          mr={{ base: 0, md: 10 }}
          mb={{ base: 8, md: 0 }}
          bg="linear-gradient(320deg, rgba(254,92,64,1) 0%, rgba(251,193,45,1) 100%)"
          borderRadius="lg" 
        >
          <Box
            w="89%"
            
            ml={'12%'}
            mt={'-12%'}
           
            
            bg="white" 
            backdropFilter="blur(10px)" 
            border="1px solid white"
            borderRadius="md"
          >
            <VStack spacing={5} >
              <Input placeholder="Your Name" size="lg" borderRadius="md" />
              <Input placeholder="Email" size="lg" borderRadius="md" />
              <Input placeholder="Mobile Number" size="lg" borderRadius="md" />
              <Textarea placeholder="Message" size="lg" borderRadius="md" />
              <Button colorScheme="purple" size="lg">
                Contact us
              </Button>
            </VStack>
          </Box>
        </Box>
        <Box flex="1">
          <Text fontSize="4xl" fontWeight="bold" mb={4} color="white">
            Let's{" "}
            <Text fontSize="34px" fontWeight="bold" mb={4} color="white">
              Make Something Great
            </Text>{" "}
          </Text>
          <Text mb={8} color="white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Text>
          <VStack align="start" spacing={4} color="white">
            <HStack spacing={3}>
              <Icon as={PhoneIcon} w={6} h={6} color="yellow.500" />
              <Text>91 93106 01573, +91 99900 11351</Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={EmailIcon} w={6} h={6} color="yellow.500" />
              <Text>info@arvmultimedia.com</Text>
            </HStack>
            <HStack spacing={3}>
              <Icon as={MdLocationOn} w={6} h={6} color="yellow.500" />
              <Text>BP-13, 3rd Floor West Patel Nagar, Delhi-110000</Text>
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contactus;
