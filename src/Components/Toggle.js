import {
    Box,
    Button,
    Flex,
    Icon,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
  } from '@chakra-ui/react';
  import { HamburgerIcon } from '@chakra-ui/icons';
  
  function Toggle() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box py={4} px={4} bg="gray.50" boxShadow="md">
        <Flex justify="space-between" align="center">
          <Link to="/" fontSize="lg" fontWeight="bold">
            Logo
          </Link>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Toggle navigation"
            onClick={onOpen}
            display={{ base: 'block', md: 'none' }}
          />
          <Menu isOpen={isOpen} onClose={onClose}>
            <MenuButton
              as={Button}
              variant="outline"
              colorScheme="teal"
              size="sm"
              display={{ base: 'none', md: 'block' }}
            >
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/about">
                About
              </MenuItem>
              <MenuItem as={Link} to="/contact">
                Contact
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    );
  }
  
  export default Toggle;