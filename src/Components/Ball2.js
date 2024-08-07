// Ball.js
import React from 'react';
import { Box, keyframes } from '@chakra-ui/react';

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

const Ball = () => {
  return (
    <div>
         
    <Box
      // Apply the animation
      animation={`${moveUpAndDown} 2s ease-in-out infinite`}
      // Style the ball
      bg="linear-gradient(180deg, rgba(236,99,217,1) 0%, rgba(255,190,0,1) 100%)"
      w="80px"
      h="80px"
      borderRadius="full"
    />
    
    </div>
  );
};

export default Ball;