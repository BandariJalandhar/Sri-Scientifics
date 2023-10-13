import React, { useEffect } from 'react'
import "./../App.css"
import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header3() {

  useEffect(() =>{
    fetchProducts();
  },[])
const [buttons, setButtons] = useState([]);

const navigate = useNavigate();

const fetchProducts = async() => {
  try {
    const response = await axios.get("http://localhost:5000/api/buttons");
    setButtons(response.data.buttons);
    console.log(response.data.buttons);

  } catch (error) {
    console.error("Error fetching buttons:", error);
  }
}

const handleClick  = () =>{
  navigate(`/categories/`)
}

  const [isSticky, setIsSticky] = useState(false);
  useEffect(()=>{
      const handleScroll =()=>{
          setIsSticky(window.scrollY >= 110);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
        };
  },[]);
  const [menuData, setMenuData] = React.useState([
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' },
    {
      label: 'Products Category',
      url: '/categories',
      subItems: [
        // { label: 'Impurities Synthesis', url: '/categories' },
        {
          label: 'Laboratory Chemicals & solvents',
          url: '/Labaratoriesandchemicalsolvents',
        },
        { label: 'Microbiology Agar Media', url: '/MicrobiologyAgarmedia' },
        { label: 'Resins & Metal scavengers', url: '/Resignsandmetalscavangers' },
        { label: 'HPLC Columns', url: '/HPCLColumns' },
        { label: 'Supply of ApIs & Intermediates', url: '/Apiintermediates' },
      ],
    },
    { label: 'Technical Support', url: '/Technicalsupport' },
    { label: 'Contact Us', url: '/contact' },

    
  ]);

  return (
    
      <Center>
        <Flex
        className={`navbar ${isSticky ? 'sticky' : ''}`}
          as="nav"
          align="center"
          justify="center" 
          padding={{ base: 2, lg: 4 }}
          bg="#0157AC"
          color="white"
          h="70px"
          w={{base:"100%",xl:"1226px"}}
          fontSize="18px"
          fontWeight="600"
          zIndex="1"
          borderRadius="5px 5px 5px 5px"
          boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.2)"
          display={{ base: "none", lg: "flex" }}
          
        >
          {menuData.map((item, index) => (
            <React.Fragment key={item.label}>
              {index > 0 && <Box ml={4} mr={4} /> }
              {item.subItems ? (
                <Menu>
                  <MenuButton
                  p="10px"
                    variant="link"
                    fontWeight={'600'}
                    _hover={{
                      color: '#0157AC',
                      background: 'white',
                      borderRadius: '5px',
                    }}
                  >
                    {item.label}
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList
                    bg="white"
                    color="#0157AC"
                  >
                    {buttons.map((button) =>(
                    <Box key={button._id} 
                    
                    >
                      <MenuItem onClick={handleClick} 
                      _hover={{
                        background: '#0157AC',
                        color: 'white',
                      }}
                          >
                        {button.name}
                      </MenuItem>
                      </Box>
                      ))}
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.label} to={subItem.url} p="10px">
                        <MenuItem
                        bg="white"
                        color="#0157AC"
                          _hover={{
                            background: '#0157AC',
                            color: 'white',
                          }}
                        >
                          {subItem.label}
                        </MenuItem>
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Link to={item.url}>
                  <Text
                  p="10px"
                    _hover={{
                      color: '#0157AC',
                      background:"white",
                      borderRadius: '5px'
                    }}
                  >
                    {item.label}
                  </Text>
                </Link>
              )}
            </React.Fragment>
          ))}
        </Flex>
      </Center>
    
  );
}

export default Header3;
