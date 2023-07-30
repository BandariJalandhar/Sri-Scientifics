import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'
// import Footer from './Footer'
import '../../App.css'  
import { Link } from 'react-router-dom'


const Rupivacaine = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="0px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : RUPIVACAINE</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 2</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px'>
        <UnorderedList margin="2px" spacing="10px">
        <Link to="/Raloxifene"> <ListItem>RALOXIFENE</ListItem></Link>
         <Link to="/Raltagravir1"><ListItem>RALTAGRAVIR</ListItem></Link>
         <Link to="/Ranitidine"><ListItem>RANITIDINE</ListItem></Link>
         <Link to="/Ranolazine"> <ListItem>RANOLAZINE</ListItem></Link>
         <Link to="/Ramipril" > <ListItem>RAMIPRIL</ListItem> </Link>
         <Link to="/Raltagravir2">  <ListItem>RALTAGRAVIR</ListItem></Link>
         <Link to="/Riboflavin"> <ListItem>RIBOFLAVIN</ListItem></Link>
         <Link to="/Repaglinide"> <ListItem>REPAGLINIDE</ListItem></Link>
         <Link to="/Respindone"> <ListItem>RESPINDONE</ListItem> </Link>
         <Link to="/Rifaximin"> <ListItem>RIFAXIMIN</ListItem></Link>
         <Link to="/Rivastigmine"> <ListItem>RIVASTIGMINE</ListItem></Link>
         <Link to="/Riluzole"> <ListItem>RILUZOLE</ListItem></Link>
         <Link to="/Rivaroxaban1"> <ListItem>RIVAROXABAN</ListItem></Link>
         <Link to="/Rivaroxaban2" > <ListItem>RIVAROXABAN</ListItem></Link>
         <Link to="/Roflumilast"><ListItem>ROFLUMILAST</ListItem></Link>
         <Link to="/Rosuvastatincalcium"> <ListItem>ROSUVASTATIN CALCIUM</ListItem></Link>
         <Link to="/Rosuvastatin"><ListItem>ROSUVASTATIN </ListItem>  </Link>
         <Link><ListItem>RUPIVACAINE </ListItem>  </Link>
         <Link to="/Rufinamide"><ListItem>RUFINAMIDE </ListItem>  </Link>
  
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
            <Text align="justify" textAlign="center" fontSize="20px">Rupivacaine -2,6-Dimethylaniline Hydrochloride </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : 000000</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 21436-98-6</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : 000000</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 000000</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Rupivacaine -N-Oxide </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : 000000</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 1391053-59-0</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : 000000</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 000000</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>   

          {/* <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Ranolazine Related Compound 2 </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-A006011</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 76824-17-4</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C26H31NO3</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 405.5</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>     */}
        </HStack>


                
            </VStack>
         </Box>
  
    </Box>

        </HStack>
        
      </Box>
    </div>
  )
}

export default Rupivacaine

