import React, { useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import img1 from "../Images/D2.png";
import Ball from "../Components/Ball";
import img2 from "../Images/Mobile.png";
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
    <Box bg="#1D0B8D" h="70vh" flexDirection={{base:'column'}}>
      <Box display="flex" justifyContent="flex-end" alignItems="flex-start" p={4}>
        <Box margin="auto" ml="15%" mt="2%">
          <Ball />
        </Box>
        <Image src={img1} />
      </Box>
      <Box display="flex" h="30%" position="relative" >
        <Box
          bgImage={`url(${img3})`}
          bgSize="cover"
          bgPosition="center"
          w={{ base:"83%",  sm:"33%", xl:"53%"}}
          h={{ base:"36vh",  sm:"33%", xl:"103vh"}}
          position="absolute"
          top={{  base:"-78%" ,sm:"", xl:"-277%"}}
          left="50px"
           // Ensures background image does not overlap content
        >
          {/* Empty Box to ensure bgImage covers full area */}
        </Box>
        <Ball2/>
        <Image src={img2} mt="-21%" zIndex={1} /> {/* Adjust zIndex if needed */}
        <Box 
  w={{ base: "90%", md: "80%", lg: "36%" }} 
  margin="auto" 
  mt={{ base: "10%", lg: "-15%" }} 
  zIndex={1}
>
  <Text 
    color="white" 
    fontSize={{ base: "24px", md: "40px", lg: "60px" }} 
    fontFamily="Playfair Display" 
    fontWeight="bold"
  >
    Lorem ipsum dolor sit amet, consectetur
  </Text>
  <Text 
    fontFamily="Graphik" 
    color="#FFCA9D" 
    fontSize={{ base: "14px", md: "18px", lg: "20px" }} 
    fontWeight="500"
  >
    It is a long established fact that a reader will be distracted by <br />
    the readable content of a page when looking at its layout.
  </Text>
  <Box 
    display="flex" 
    flexDirection={{ base: "column", md: "row" }} 
    p={2}
  >
    <Box
      margin={{ base: "10px", md: "20px" }}
      w={{ base: "150px", sm: "180px", lg: "200px" }}
      h={{ base: "100px", sm: "120px", lg: "130px" }}
      bg="#0678F0"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Text color="white" fontSize="2rem" marginRight="5px">+</Text>
        <Text 
          color="white" 
          className="value" 
          data-value="350" 
          fontSize={{ base: "36px", sm: "45px", lg: "54px" }} 
          fontWeight="800" 
          fontFamily="Graphik"
        >
          0
        </Text>
      </Box>
      <Text 
        color="white" 
        fontSize={{ base: "16px", sm: "20px", lg: "24px" }} 
        fontFamily="Graphik" 
        textAlign="center" 
        mt="-10px"
      >
        Happy Clients
      </Text>
    </Box>

    <Box 
      margin={{ base: "10px", md: "20px" }} 
      w={{ base: "150px", sm: "180px", lg: "200px" }} 
      h={{ base: "100px", sm: "120px", lg: "130px" }} 
      bg="#088C85" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Text color="white" fontSize="2rem" marginRight="5px">+</Text>
        <Text 
          color="white" 
          className="value" 
          data-value="5" 
          fontSize={{ base: "36px", sm: "45px", lg: "54px" }} 
          fontWeight="800" 
          fontFamily="Graphik"
        >
          0
        </Text>
      </Box>
      <Text 
        color="white" 
        fontSize={{ base: "16px", sm: "20px", lg: "24px" }} 
        fontFamily="Graphik" 
        textAlign="center" 
        mt="-10px"
      >
        Years of Experience
      </Text>
    </Box>

    <Box display="flex" justifyContent="flex-end">
      <Ball />
    </Box>
  </Box>

  <Box 
    display="flex" 
    flexDirection={{ base: "column", md: "row" }} 
    p={2}
  >
    <Box
      margin={{ base: "10px", md: "20px" }}
      w={{ base: "150px", sm: "180px", lg: "200px" }}
      h={{ base: "100px", sm: "120px", lg: "130px" }}
      bg="#EDE485"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Text color="black" fontSize="2rem" marginRight="5px">+</Text>
        <Text 
          color="black" 
          className="value" 
          data-value="20" 
          fontSize={{ base: "36px", sm: "45px", lg: "54px" }} 
          fontWeight="800" 
          fontFamily="Graphik"
        >
          0
        </Text>
      </Box>
      <Text 
        color="black" 
        fontSize={{ base: "16px", sm: "20px", lg: "24px" }} 
        fontFamily="Graphik" 
        textAlign="center" 
        mt="-10px"
      >
        Team Members
      </Text>
    </Box>

    <Box
      margin={{ base: "10px", md: "20px" }}
      w={{ base: "150px", sm: "180px", lg: "200px" }}
      h={{ base: "100px", sm: "120px", lg: "130px" }}
      bg="#DD3869"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box display="flex" alignItems="center">
        <Text 
          color="white" 
          className="value" 
          data-value="100" 
          fontSize={{ base: "36px", sm: "45px", lg: "54px" }} 
          fontWeight="800" 
          fontFamily="Graphik"
        >
          0
        </Text>
        <Text color="white" fontSize="2rem" marginLeft="5px">%</Text>
      </Box>
      <Text 
        color="white" 
        fontSize={{ base: "16px", sm: "20px", lg: "24px" }} 
        fontFamily="Graphik" 
        textAlign="center" 
        mt="-10px"
      >
        Successful Projects
      </Text>
    </Box>
  </Box>

  <Box display="flex" justifyContent="flex-end">
    <Ball2 />
  </Box>
</Box>

      </Box>
    </Box>
  );
};

export default Established;
