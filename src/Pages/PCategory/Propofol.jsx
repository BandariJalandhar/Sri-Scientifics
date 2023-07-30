import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'

import '../../App.css' ;
 
import { Link } from 'react-router-dom'

const Propofol= () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-40px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : PROPOFOL </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 6 </Text></Box>
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
           <Link to='/Paroxetine'> <ListItem >Paroxetine</ListItem></Link>
           <Link to='/Pazopanib'> <ListItem >Pazopanib</ListItem></Link>
           <Link to='/Perperazine'> <ListItem >Perperazine</ListItem></Link>
           <Link to='/Perindopril'> <ListItem   >Perindopril</ListItem></Link>
           <Link to='/pentoxyfyline'> <ListItem >Pentoxyfyline</ListItem></Link>
           <Link to='/Pemetrexed'> <ListItem >Pemetrexed</ListItem></Link>
           <Link  to='/Permethrin'><ListItem >Permethrin</ListItem></Link>
           <Link to='/Pilocarpine'> <ListItem >Pilocarpine</ListItem></Link> 
           <Link to='/Pioglitazone1'> <ListItem >Pioglitazone 1</ListItem></Link>
           <Link to='/Pioglitazone2'> <ListItem >Pioglitazone 2</ListItem></Link>

           <Link to='/Pirfenidone'><ListItem >Pirfenidone</ListItem></Link>
           <Link to='/Phloroglucinol'><ListItem >Phloroglucinol</ListItem></Link> 
           <Link to= '/Phenyllephrine'><ListItem >Phenyllephrine</ListItem></Link>
           <Link to='/PhenoxyBenzamine'><ListItem >Phenoxy Benzamine</ListItem></Link>
           <Link to='/Prasugrel1'> <ListItem >Prasugrel 1</ListItem></Link>
           <Link to='/prasugrel2'> <ListItem >prasugrel 2</ListItem></Link>

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
            <Text align="justify" textAlign="center" fontSize="20px"> Propofol Related Compound-A (OR) impurity E</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-P052010 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 2416-95-7 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C24H34O2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 354.5</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> Propofol Related Compound-B<br></br> (or) impurity J</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-P052015</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 1988-11-0</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C12H16O2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 192.3 </Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> Propofol-Impurity-G (or) RC-C</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> :  SZ-P052012 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 141214-18-8</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C15H24O </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 220.4</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card> 
        </HStack>

        <HStack>
                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Propofol-Impurity-K</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-P052016</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 14366-59-7 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C12H18O </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 178.3 </Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> Propofol-Impurity-O</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-P052017 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 201166-22-5</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C12H16O2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 192.3</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Propofol Resolution Mixture </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : 000 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : NA</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : 000</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 000</Text> 
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

export default  Propofol;
; 