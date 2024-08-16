// Ball.js
import React from 'react';
import { Image, Box, keyframes } from "@chakra-ui/react";
import img1 from "../Images/M1.png";

// Define the animation
const moveUpAndDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Message = () => {
  return (
    <Box  h="50vh" display="flex" bottom={'32px'} >
      <Image
        src={img1}
        alt="Floating"
        animation={`${moveUpAndDown} 3s ease-in-out infinite`}
      />
     
    </Box>
  );
};

export default Message;