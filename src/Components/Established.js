import React, { useState, useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import img1 from "../Images/D2.png";
import Ball from "../Components/Ball";
import img2 from "../Images/System.png";

function Established() {
  const [counter, setCounter] = useState(350);

  // Increment the counter by 1 every time the component mounts
  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setCounter(prevCounter => {
        if (prevCounter < 350) {
          return prevCounter + 1;
        }
        clearInterval(incrementInterval);
        return prevCounter;
      });
    }, 1000); // Increment every second

    // Clean up interval on component unmount
    return () => clearInterval(incrementInterval);
  }, []);

  return (
    <Box bg="#1D0B8D" h="100vh">
      <Box display="flex" justifyContent="flex-end" alignItems="flex-start" p={4}>
        <Box margin="auto" ml="15%" mt="2%">
          <Ball />
        </Box>
        <Image src={img1} />
      </Box>
      <Box display="flex" h="30%">
        <Image src={img2} mt="-25%" />
        <Box w="36%" margin="auto" mt="-15%">
          <Text color="white" fontSize="60px" fontFamily="Playfair Display" fontWeight="bold">
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Text fontFamily="Graphik" color="#FFCA9D" fontSize="20px" fontWeight="500">
            It is a long established fact that a reader will be distracted by <br />
            the readable content of a page when looking at its layout.
          </Text>
          <Box display="flex" p={2}>
            <Box
              margin="20px"
              w="200px"
              h="130px"
              bg="#0678F0"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="white" fontSize="54px" fontWeight="bold" textAlign="center">
                +{counter}
              </Text>
            </Box>
            <Box margin="20px" w="200px" h="130px" bg="#088C85">
              dfd
            </Box>
          </Box>
          <Box display="flex" p={2}>
            <Box margin="20px" w="200px" h="130px" bg="#EDE485">
              vfdv
            </Box>
            <Box margin="20px" w="200px" h="130px" bg="#DD3869">
              dfd
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Established;
