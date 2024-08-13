import React, { useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import img1 from "../Images/D2.png";
import Ball from "../Components/Ball";
import img2 from "../Images/System.png";
import img3 from "../Images/Rectangle.png";
import Ball2 from "../Components/Ball2";
const Established = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.value');
    const speed = 100;

    counters.forEach(counter => {
      const animate = () => {
        const value = +counter.getAttribute('data-value');
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        } else {
          counter.innerText = value;
        }
      };

      if (counter) {
        animate();
      } else {
        console.error('Counter element not found:', counter);
      }
    });
  }, []);

  return (
    <Box bg="#1D0B8D" h="70vh">
      <Box display="flex" justifyContent="flex-end" alignItems="flex-start" p={4}>
        <Box margin="auto" ml="15%" mt="2%">
          <Ball />
        </Box>
        <Image src={img1} />
      </Box>
      <Box display="flex" h="30%" position="relative">
        <Box
          bgImage={`url(${img3})`}
          bgSize="cover"
          bgPosition="center"
          w="33%"
          h="280%"
          position="absolute"
          top="-300px"
          left="50px"
           // Ensures background image does not overlap content
        >
          {/* Empty Box to ensure bgImage covers full area */}
        </Box>
        <Ball2/>
        <Image src={img2} mt="-21%" zIndex={1} /> {/* Adjust zIndex if needed */}
        <Box w="36%" margin="auto" mt="-15%" zIndex={1}>
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
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box display="flex" alignItems="center">
                <Text color="white" fontSize="3rem" marginRight="5px">+</Text>
                <Text color="white" className="value" data-value="350" fontSize="54px" fontWeight="800" fontFamily="Graphik">
                  0
                </Text>
              </Box>
              <Text color="white" fontSize="24px" fontFamily="Graphik" textAlign="center" mt="-20px">
                Happy Clients
              </Text>
            </Box>
            <Box margin="20px" w="200px" h="130px" bg="#088C85" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Box display="flex" alignItems="center">
                <Text color="white" fontSize="3rem" marginRight="5px">+</Text>
                <Text color="white" className="value" data-value="5" fontSize="54px" fontWeight="800" fontFamily="Graphik">
                  0
                </Text>
              </Box>
              
              <Text color="white" fontSize="24px" fontFamily="Graphik" textAlign="center" mt="-20px">
                Years of Experience
              </Text>
            </Box>
            <Box  justifyContent="flex-end"  >
            <Ball/>
            </Box>
          </Box>
          <Box display="flex" p={2}>
            <Box margin="20px" w="200px" h="130px" bg="#EDE485" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Box display="flex" alignItems="center">
                <Text color="black" fontSize="3rem" marginRight="5px">+</Text>
                <Text color="black" className="value" data-value="20" fontSize="54px" fontWeight="800" fontFamily="Graphik">
                  0
                </Text>
              </Box>
              <Text color="black" fontSize="24px" fontFamily="Graphik" textAlign="center" mt="-20px">
                Team Members
              </Text>
            </Box>
            <Box margin="20px" w="200px" h="130px" bg="#DD3869" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Box display="flex" alignItems="center">
                <Text color="white" className="value" data-value="100" fontSize="54px" fontWeight="800" fontFamily="Graphik">
                  0
                </Text>
                <Text color="white" fontSize="3rem" marginLeft="5px">%</Text>
              </Box>
              <Text color="white" fontSize="24px" fontFamily="Graphik" textAlign="center" mt="-20px">
                Successful Projects
              </Text>
            
            </Box>
            
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Ball2/>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Established;
