import React from 'react'
import { Box,HStack,Center,} from '@chakra-ui/react'
// import '../Pages/ACategory/App.css'
import '../App.css';
import { Outlet } from 'react-router-dom'
import { Link, } from 'react-router-dom'

const Products = () => {
  return ( 
    
    <Box>
   <Box paddingTop="50px">
<Box bgColor="#215878" height="80px" paddingTop="25px">
<Center>
      <HStack spacing="25px"  color="white" as="b"> 
        <Link to="/Products/A">A</Link>
        <Link to="/Products/B">B</Link>
        <Link to="/Products/C">C</Link>
        <Link to="/Products/D">D</Link>
        <Link to="/Products/E">E</Link>
        <Link to="/Products/F">F</Link>
        <Link to="/Products/G">G</Link>
        <Link to="/Products/H"> H</Link>
        <Link to="/Products/I">I</Link>
        <Link to="/Products/J">J</Link>
        <Link to="/Products/K">K</Link>
        <Link to="/Products/L"> L</Link>
        <Link to="/Products/M">M</Link>
        <Link to="/Products/N">N</Link>
        <Link to="/Products/O">O</Link>
        <Link to="/Products/P">P</Link>
        <Link to="/Products/Q">Q</Link>
        <Link to="/Products/R">R</Link>
        <Link to="/Products/S">S</Link>
        <Link to="/Products/T">T</Link>
        <Link to="/Products/U">U</Link>
        <Link to="/Products/V">V</Link>
        <Link to="/Products/W">W</Link>
        <Link to="/Products/X">X</Link>
        <Link to="/Products/Y"> Y</Link>
        <Link to="/Products/Z">Z</Link>
      </HStack>
      </Center>
  </Box>
  </Box>      
   <p><Outlet/></p> 
  </Box>

  )
}

export default Products
