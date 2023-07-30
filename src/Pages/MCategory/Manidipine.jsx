import { Box,Text,ListItem,UnorderedList,HStack, } from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Manidipine = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-40px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : MANIDIPINE </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 2</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px'>
        <UnorderedList margin="2px" spacing="10px">
          <Link to='/Manidipine'><ListItem>Manidipine</ListItem></Link>
          <Link to='/Metformin1'><ListItem>Metformin 1</ListItem></Link>
          <Link to='/Metformin2'> <ListItem>Metformin 2</ListItem></Link>

          <Link to='/Memantine1'><ListItem>Memantine 1</ListItem></Link>
          <Link to='/Memantine2'> <ListItem>Memantine 2</ListItem></Link>

          
          <Link to='/Mirabegrone'>   <ListItem>Mirabegrone</ListItem></Link>
          <Link to='/Metoprolol'>  <ListItem>Metoprolol</ListItem></Link>
          <Link to='/Mebeverine'> <ListItem>Mebeverine</ListItem></Link> 
           <Link to='/Metoclopramide'> <ListItem>Metoclopramide</ListItem></Link>
          <Link to='/Mesalazine'>  <ListItem>Mesalazine</ListItem></Link>
           <Link to='/Mephalan'> <ListItem>Mephalan</ListItem></Link>

           <Link to='/Medetomidine'> <ListItem>medetomidine</ListItem></Link>
           <Link to='/Meloxic'><ListItem>Meloxic</ListItem></Link> 
          <Link to='/Metronidazole1'> <ListItem>Metronidazole 1</ListItem></Link> 
           <Link to='/Metronidazole2'> <ListItem>Metronidazole 2</ListItem></Link>
           <Link to='/Meropenem'> <ListItem> Meropenem</ListItem></Link> 
           <Link to='/Methylnaltrexone'> <ListItem>Methylnaltrexone </ListItem></Link> 
           <Link to='/Metamizole'> <ListItem>Metamizole</ListItem></Link>  
           <Link to='/Metoprolol'> <ListItem>Metoprolol</ListItem></Link>  
           <Link to='/Metolazone'> <ListItem>Metolazone</ListItem></Link> 
           <Link to='/Meclazine'> <ListItem>Meclazine</ListItem></Link> 
           <Link to='/Mevastatin'> <ListItem>Mevastatin</ListItem></Link> 
           <Link to='/Macitentan'> <ListItem>Macitentan</ListItem></Link> 
           <Link to='/Midazolam'> <ListItem>Midazolam</ListItem></Link> 
           <Link to='/Minocycline'> <ListItem> Minocycline</ListItem></Link> 
           <Link to='/Mirtazepine'> <ListItem>Mirtazepine</ListItem></Link>
           <Link to='/Montelukast1'> <ListItem>Montelukast 1</ListItem></Link>
           <Link to='/Montelukast2'> <ListItem>Montelukast 2</ListItem></Link> 
 
           <Link to='/Mycophenolicacid'> <ListItem>Mycophenolic Acid</ListItem></Link>  
           
 

 
 
             
        </UnorderedList>
        </Box>
      </Box>
  


<Box>
         <Box marginLeft="10px">
            <Box marginLeft="100px"  padding="10px"><Heading >Pharmaceuticals Reference Standards</Heading></Box></Box>
         <Box margin="10px" marginLeft="20px">
            <VStack>
                <HStack>

                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Manidipine Di Hydrochloride </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : 124646-10-2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 2484719-11-9</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C26H33NO3</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 407.5</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>
 
         <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Mandipine Bis Analog </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : 89268-62-2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 2484719-26-6</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C26H33NO3</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 407.6</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>  

           
        </HStack>

                
            </VStack>
         </Box>
  
    </Box>

        </HStack>
        
      </Box>
    </div>
  )
}

export default Manidipine

