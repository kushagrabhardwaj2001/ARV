import React from "react";
import { Box, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import img1 from "../Images/D2.png";
import img2 from "../Images/CS.png";
import img3 from "../Images/Html.png";
import img4 from "../Images/CSS.png";
import img5 from"../Images/JS.png";
import img6 from "../Images/Mask group.png";
import img7 from "../Images/Redux.png";
import img8 from "../Images/Python.png";
import img9 from "../Images/Net.png";
import img10 from "../Images/Plus.png";



function Language() {
  return (
    <Box bg="#1D0B8D" h="100vh">
      <Box display="flex" alignItems="center" justifyContent="center" mr={'14%'} p={4}>
        <Box >
          <Text
            color="white"
            fontSize="80px"
            fontFamily="unset"
            fontStyle="italic"
            fontWeight="bold"
          >
            Lorem ipsum
            <Text mt="-8%">amet, consecte</Text>
          </Text>
          <Text fontSize="22px" color="#FFCA9D">
            It is a long established fact that a reader will be{" "}
            <Text> distracted by the readable content of a page when</Text> looking at its layout.
          </Text>
        </Box>
        <Image src={img1} mt={'2%'} />
      </Box>
      <Grid
      w={'85vw'}
        h="30vh"
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        p={6}
        ml={'7%'}
        mt={'-3%'}
      >
        <GridItem rowSpan={2} colSpan={1} bg="white" w={'28vw'} h={'42vh'}>
            <Image src={img2} h={'53vh'}/>
        </GridItem>
        <GridItem colSpan={1} bg="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image src={img3} h="5vh" />
          <Text mt={2} fontFamily={'Graphik'} fontSize={'18px'} fontWeight={'700'}>
            HTML
          </Text>
          </GridItem>
          <GridItem colSpan={1} bg="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image src={img4} h="5vh" />
          <Text mt={2} fontFamily={'Graphik'} fontSize={'18px'} fontWeight={'700'}>
            CSS
          </Text>
          </GridItem>
          <GridItem colSpan={1} bg="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image src={img6} h="5vh" />
          <Text mt={2} fontFamily={'Graphik'} fontSize={'18px'} fontWeight={'700'}>
            React
          </Text>
          </GridItem>
          <GridItem colSpan={1} bg="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image src={img7} h="5vh" />
          <Text mt={2} fontFamily={'Graphik'} fontSize={'18px'} fontWeight={'700'}>
            Redux
          </Text>
          </GridItem>
          <GridItem colSpan={1} bg="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image src={img5} h="5vh" />
          <Text mt={2} fontFamily={'Graphik'} fontSize={'18px'} fontWeight={'700'}>
            Node.JS
          </Text>
          </GridItem>
          <GridItem colSpan={1} bg="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image src={img8} h="5vh" />
          <Text mt={2} fontFamily={'Graphik'} fontSize={'18px'} fontWeight={'700'}>
python
          </Text>
          </GridItem>
          <GridItem colSpan={1} bg="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image src={img9} h="3vh" />
          <Text mt={2} fontFamily={'Graphik'} fontSize={'18px'} fontWeight={'700'}>
            .Net
          </Text>
          </GridItem>
          <GridItem colSpan={1} bg="white" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Image src={img10} h="5vh" />
          <Text mt={2} fontFamily={'Graphik'} fontSize={'18px'} fontWeight={'700'}>
            All all
          </Text>
          </GridItem>
      </Grid>
      <br/>
    
    </Box>
  );
}

export default Language;
