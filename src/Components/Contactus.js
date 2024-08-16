import React from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  Text,
  Checkbox,
  Image,
  Icon
} from "@chakra-ui/react";

import img1 from "../Images/basan.png";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";




const Contactus = () => {
  return (
    <Box bg="#1D0B8D"  h="70vh" display="flex" justifyContent="center" alignItems="center">
      <Box border="1px solid white" w="70%" h="97%" display="flex" justifyContent="space-between">
        <Box border="1px solid white" w="50%" p={6}>
          <Text color="white" fontSize="50px" fontWeight="800" fontFamily="Playfair Display" mb={6}>
            Get started <br /> with a free <Text as="span" color="rgb(176, 248, 36)">quotation</Text>
          </Text>
          <Box bg="#1D0B8D" borderRadius="md" maxW="100%">
            <Text fontFamily="Graphik" color="white" fontWeight="600" fontSize="23px" mb={2}>
              Your Name
            </Text>
            <Input
              type="text"
              bg="white"
              placeholder="Enter your Name"
              _placeholder={{ color: 'black', fontWeight: 'bold' }}  // Placeholder text color and weight
              mb={4}
            />

            <Text fontFamily="Graphik" color="white" fontWeight="600" fontSize="23px" mb={2}>
              Your Email
            </Text>
            <Input
              type="email"
              bg="white"
              placeholder="Enter your Email"
              _placeholder={{ color: 'black', fontWeight: 'bold' }}
              mb={4}
            />

            <Text fontFamily="Graphik" color="white" fontWeight="600" fontSize="23px" mb={2}>
              Your Message
            </Text>
            <Textarea
              bg="white"
              placeholder="Enter your Message"
              _placeholder={{ color: 'black', fontWeight: 'bold' }}
              mb={4}
            />

            <Checkbox colorScheme="orange" color="white" mb={4}>
              I accept the
              <Text as="span" color="rgb(255,154,2)" ml={1}>
                Terms of Service
              </Text>
            </Checkbox>
            <Button
              _hover={{ backgroundColor: 'rgba(255,154,2,0.8)' }}
              color="black"
              fontWeight="bold"
              bg="linear-gradient(90deg, rgba(255,154,2,1) 0%, rgba(254,212,4,1) 100%)"
              size="md"
              w="100%"
            >
              Contact us
            </Button>
          </Box>
        </Box>

        <Box border="1px solid white" w="50%"   >
          <Image src={img1} alt="Contact Us Image" ml={'12%'} />
          <Text color="white" display="flex" alignItems="center" fontFamily="Graphik" fontSize={'22px'} fontWeight="600" ml={'4%'}>
        <Icon
          as={IoCall}
          color="#1D0B8D"  // Change icon color
          bg="linear-gradient(90deg, rgba(255,154,2,1) 0%, rgba(254,212,4,1) 100%)"          // Change icon background
          p={1}               // Padding inside the background
          borderRadius="20%"  // Make the background circular
          mr={4}  
          boxSize={'7%'}          // Margin-right for spacing
        />
        +91 93106 01573, +91 99900 11351
      </Text>
      <br/>
      <Text color="white" display="flex" alignItems="center" fontFamily="Graphik" fontSize={'22px'} fontWeight="600" ml={'4%'}>
      <Icon
          as={FaEnvelope}
          color="rgb(255,154,2)"  // Change icon color
                  // Change icon background
               // Padding inside the background
          borderRadius="20%"  // Make the background circular
          mr={4}  
          boxSize={'8%'}          // Margin-right for spacing
        />
        info@arvmultimediacom
        </Text>
        <br/>
        <Text color="white" display="flex" alignItems="center" fontFamily="Graphik" fontSize={'22px'} fontWeight="600" ml={'4%'}>
        <Icon
          as={IoLocation }
          color="#1D0B8D"  // Change icon color
          bg="linear-gradient(90deg, rgba(255,154,2,1) 0%, rgba(254,212,4,1) 100%)"          // Change icon background
          p={1}               // Padding inside the background
          borderRadius="20%"  // Make the background circular
          mr={5}  
          boxSize={'7%'}          // Margin-right for spacing
        />
        BP-13,3rd Floor West Patel Nagar, Delhi-110008
      </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Contactus;
