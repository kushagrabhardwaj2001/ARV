import React from "react";
import { Image, Box, keyframes } from "@chakra-ui/react";
import img1 from "../Images/Floating.png";
import img2 from "../Images/SERVICES.png"

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

const Section = () => {
  return (
    <Box bg="#1D0B8D" h="50vh" display="flex" >
      <Image
        src={img1}
        alt="Floating"
        animation={`${moveUpAndDown} 3s ease-in-out infinite`}
      />
      <Box>
      <Image
        src={img2}
        alt=""
       mt={'28%'}
       ml={'32%'}
      />
      </Box>
    </Box>
  );
};

export default Section;
