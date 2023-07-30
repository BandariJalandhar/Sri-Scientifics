import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react';
import '../../App.css' ;


import { Link } from 'react-router-dom'

const Perindopril = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-40px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : PERINDOPRIL</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 2</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px' >
        <UnorderedList margin="2px" spacing="10px">
            
            <Link to='/Paliperidone'> <ListItem> Paliperidone</ListItem></Link>
           <Link to='/Paclitaxel'> <ListItem>Paclitaxel</ListItem> </Link>
           <Link to='/Palonosetron'> <ListItem >Palonosetron </ListItem></Link>
           <Link to='/Pantoprazole1'> <ListItem >Pantoprazole1 </ListItem></Link>
           <Link to='/Pantoprazole2'> <ListItem >Pantoprazole2</ListItem></Link>

           <Link to='/Paracetamol'> <ListItem >Paracetamol</ListItem></Link>
           <Link to='/Paroxetoine'> <ListItem >Paroxetoine</ListItem></Link>
           <Link to='/Pazopanib'> <ListItem >Pazopanib</ListItem></Link>
           <Link to='/Perperazine'> <ListItem >Perperazine</ListItem></Link>
           <Link to='/Perindopril'> <ListItem   >Perindopril</ListItem></Link>
           <Link to='/pentoxyfyline'> <ListItem >Pentoxyfyline</ListItem></Link>
           <Link to='/Pemetrexed'> <ListItem >Pemetrexed</ListItem></Link>
           <Link  to='/Permethrin'><ListItem >Permethrin</ListItem></Link>
           <Link to='/Pioglitazone1'><ListItem >Pioglitazone 1</ListItem></Link>
           <Link to='/Pioglitazone2'> <ListItem >Pioglitazone 2</ListItem></Link>

           <Link to='/Pilocarpine'> <ListItem >Pilocarpine</ListItem></Link> 
           <Link to='/Pirfenidone'><ListItem >Pirfenidone</ListItem></Link>
           <Link to='/Phloroglucinol'><ListItem >Phloroglucinol</ListItem></Link> 
           <Link to= '/Phenyllephrine'><ListItem >Phenyllephrine</ListItem></Link>
           <Link to='/Phenoxybenzamine'><ListItem >Phenoxy Benzamine</ListItem></Link>
           <Link to='/Prasugrel1'> <ListItem >Prasugrel 1</ListItem></Link>
           <Link to='/Prasugrel2'> <ListItem >Prasugrel 2</ListItem></Link>

           <Link  to='/Pregabaline'>  <ListItem>Pregabaline</ListItem></Link>
           <Link to='/Prazosin'> <ListItem >Prazosin</ListItem></Link>
           <Link to='/Prednisalone'><ListItem >Prednisalone</ListItem></Link>
           <Link to='/Propofol'><ListItem >Propofol</ListItem></Link>
           <Link to='/Pregablin'> <ListItem >pregablin</ListItem></Link>
           <Link to='/Pimavanserin'><ListItem >pimavanserin</ListItem></Link>
           <Link to='/Prazepam'><ListItem >Prazepam</ListItem></Link>
           <Link to='/Pravastatin'><ListItem >Pravastatin</ListItem></Link>
           <Link to='/Propranolol'>  <ListItem >Propranolol</ListItem></Link>
           <Link to='/Propafenone'> <ListItem >propafenone</ListItem></Link>
           <Link to='/Posaconazole'> <ListItem>Posaconazole</ListItem></Link>
            
            <Link to='/Pomalidomide'> <ListItem > pomalidomide</ListItem> </Link>  
            <Link to='/Potassiumclavulanate'><ListItem>Potassium Clavulanate</ListItem></Link>
            <Link to='/Povidone' ><ListItem>Povidone</ListItem></Link>
            <Link to='/Pyridoxine'><ListItem>Pyridoxine</ListItem></Link>
            <Link to='/Pyridostigmine'><ListItem>Pyridostigmine</ListItem></Link>
            <Link to='/Pyrimethamine'><ListItem>Pyrimethamine</ListItem></Link>
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
            <Text align="justify" textAlign="center" fontSize="20px"> Perindopril  Arginine </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-P018018</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 612548-45-5</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C19H32N2O5 : C6H14N4O2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 368.5 : 174.2</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Perindopril t-Butylamine</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-P018001 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 107133-36-8</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C19H32N2O5 : C4H11N </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 368.5 : 73.1</Text> 
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

export default  Perindopril; 