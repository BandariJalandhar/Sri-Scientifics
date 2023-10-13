import React from 'react'

import { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  VStack,
  Collapse,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon, ChevronDownIcon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const [menuData, setMenuData] = useState([
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    {
      label: "Products Category",
      url: "/Products",
      subItems: [
        // product items...
        { label: "Impurities Synthesis", url: "/Products" },
        { label: "Laboratory Chemicals & solvents", url: "/Labaratoriesandchemicalsolvents" },
        { label: "Microbiology Agar Media", url: "/MicrobiologyAgarmedia" },
        { label: "Resins & Metal scavengers", url: "/Resignsandmetalscavangers" },
        { label: "HPLC Columns", url: "/HPCLColumns" },
        { label: "Supply of ApIs & Intermediates", url: "/Apiintermediates" },
      ],
    },
    { label: "Technical Support", url: "/Technicalsupport" },
    
    { label: "Contact Us", url: "/contact" },
  ]);

  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={{ base: 2, lg: 4 }}
        bg="white"
        color="#215878"
        h="70px"
        // position="fixed"
        top="0"
        left="0"
        right="0"
        fontSize="15px"
        fontWeight="600"
        // zIndex="1"
      >
        {/* Logo ------- */}
        <Flex align="center">
          <img src="Final logo 1.png" alt="Logo" />
        </Flex>

        {/* Hamburger Icon for mobile --------- */}
        <IconButton
          display={{ base: "flex", lg: "none" }}
          icon={isOpen ? <CloseIcon color={"#215878"}/> : <HamburgerIcon color={"#215878"} />}
          onClick={onToggle}
          variant="outline"
          color="white"
        />

         {/* Search Bar */}
         <InputGroup w="300px" display={{ base: "none", lg: "flex" }}>
            <Input type="text" placeholder="Search..." />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                variant="ghost"
                colorScheme="#215878"
              />
            </InputRightElement>
          </InputGroup>
        {/* Desktop Navigation Links */}
        <Flex display={{ base: "none", lg: "flex" }} alignItems="center">

          {menuData.map((item) => (
            <React.Fragment key={item.label}>
              {item.subItems ? (
                <Menu>
                  <MenuButton
                  mr={8}
                    // as={Button}
                    // rightIcon={<ChevronDownIcon/>}
                    variant="link"
                    fontWeight={"600"}
                    _hover={{ color: "#215878", borderRadius: "10px" }}
                  >
                    {item.label}<ChevronDownIcon/>
                  </MenuButton>
                  <MenuList >
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.label} to={subItem.url}>
                        <MenuItem>{subItem.label}</MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Link to={item.url}>
                  <Text _hover={{ color: "#215878", borderRadius: "10px" }} mr={8} >
                    {item.label}
                  </Text>
                </Link>
              )}
            </React.Fragment>
          ))}
          
        </Flex>
      </Flex>

      {/* Mobile and Tablet Dropdown Menu */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          display={{ base: isOpen ? "flex" : "none", lg: "none" }}
          alignItems="center"
          bg="white"
          color="#215878"
          fontSize="15px"
          fontWeight="600"
          py={1}
        >
          {menuData.map((item) => (
            <React.Fragment key={item.label}>
              {item.subItems ? (
                <Menu>
                  <MenuButton
                    // as={Button}
                    // rightIcon={<ChevronDownIcon/>}
                    variant="link"
                    _hover={{ color: "#215878", borderRadius: "10px" }}
                    mb={4}
                    fontSize="15px"
                    fontWeight="600"
                  >
                    {item.label}<ChevronDownIcon/>
                  </MenuButton>
                  <MenuList>
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.label} to={subItem.url}>
                        <MenuItem>{subItem.label}</MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Link to={item.url}>
                  <Text
                    variant="link"
                    onClick={onToggle} 
                    _hover={{ color: "#215878", borderRadius: "10px" }}
                    mb={1}
                    color={"#215878"}
                  >
                    {item.label}
                  </Text>
                </Link>
              )}
            </React.Fragment>
          ))}
          {/* Search Bar */}
          <InputGroup w="180px">
            <Input type="text" placeholder="Search..." />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                variant="ghost"
                colorScheme="#215878"
              />
            </InputRightElement>
          </InputGroup>
        </VStack>
      </Collapse>
    </Box>
  );
}

export default Header;

