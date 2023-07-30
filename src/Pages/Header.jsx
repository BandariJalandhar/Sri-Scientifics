// import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, HStack, Stack, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { SearchBar } from './Searchbar';
// import styled from '@emotion/styled';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Header = () => {
  return (

    <Box px={4} height="60px" pt="10px">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack alignItems={'center'} >
          <Link to="/"><Text> <Image src="/logo.png"></Image> </Text></Link>
          <Box pl="130px">
            <HStack spacing="8" color="#565454" paddingBottom="10px" className='Poppins'>
              <Link to="/"><Text _hover={{ color: "#215878", borderRadius: "10px" }}>Home</Text></Link>
              <Box _hover={{ color: "#215878", borderRadius: "5px" }} w="150px">
                <Menu>
                  <MenuButton as={Link} rightIcon={<ChevronDownIcon />}>
                    Products Category
                  </MenuButton>
                  <MenuList>
                    <Link to='/Products'><MenuItem>Impurities Synthesis</MenuItem></Link>
                    <Link to='/Labaratoriesandchemicalsolvents' >
                      <MenuItem>Laboratory Chemicals & solvents</MenuItem>
                    </Link>
                    <Link to='/MicrobiologyAgarmedia' > <MenuItem>Microbiology Agar Media</MenuItem></Link>
                    <Link to="/Resignsandmetalscavangers ">
                      {' '}
                      <MenuItem>Resigns & Metal scavengers</MenuItem>
                    </Link>
                    <Link to="/HPCLColumns">
                      {' '}
                      <MenuItem>HPLC Columns</MenuItem>
                    </Link>
                    <Link to='/Apiintermediates'>
                      <MenuItem>Supply of ApIs & Intermediates</MenuItem>
                    </Link>
                  </MenuList>
                </Menu>

              </Box>
              <Link to="/Technicalsupport"><Text _hover={{ color: "#215878", borderRadius: "10px" }}>Technical Support</Text></Link>
              <Link to="/About"><Text _hover={{ color: "#215878", borderRadius: "10px" }}>About</Text></Link>
              <Link to="/Contact"><Text _hover={{ color: "#215878", borderRadius: "10px" }}>Contact</Text></Link>
              {/* <Button variant='outline' _hover={{ color: "#215878", }} borderRadius="15px"> <Link to="/Requestaquote"><Text as="b">Request a Quote</Text></Link> </Button> */}
              <SearchBar />
            </HStack>
          </Box>
        </HStack>
      </Flex>
      <Box pb={4} display={{ md: 'none' }}>
        <Stack as={'nav'} spacing={4}>
        </Stack>
      </Box>
    </Box>

  )
}

export default Header
