import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Dextromethorphan = () => {
  return (
    <div>
      <Box>
        <HStack>
        <Box position="relative">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : DEXTROMETHORPHAN </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Total Products : 1</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px'>
        <UnorderedList margin="2px" spacing="10px">
            <Link to='/Dapagliflozin'><ListItem>Dapagliflozin</ListItem></Link>
            <Link to='/Dasatinib'> <ListItem>Dasatinib</ListItem> </Link>
            <Link to='/Dabigatran'><ListItem>Dabigatran</ListItem></Link>
            <Link to='/Darunavir'><ListItem>Darunavir</ListItem></Link>
            <Link to='/Deferasirox'><ListItem>Deferasirox</ListItem></Link>
            <Link to='/Desacetyl'><ListItem>Desacetyl</ListItem></Link>
            <Link to='/Dextromethorphan'><ListItem>Dextromethorphan</ListItem></Link>
            <Link to='/Dexamethasone'><ListItem>Dexamethasone</ListItem></Link>
            <Link to='/Desoxo'><ListItem>Desoxo</ListItem></Link>
            <Link to='/Dexketoprofen'><ListItem>Dex ketoprofen</ListItem></Link>
            <Link to='/Diaveridine'><ListItem>Diaveridine</ListItem></Link>
            <Link to='/Diltiazem'><ListItem>Diltiazem</ListItem></Link>         
            <Link to='/Dicyclomine '><ListItem> Dicyclomine </ListItem></Link>
            <Link to='/Dipyridomol'><ListItem> Dipyridomol </ListItem></Link>
            <Link to='/Diclofenac'><ListItem> Diclofenac </ListItem></Link>
            <Link to='/Digoxin'><ListItem> Digoxin </ListItem></Link>
            <Link to='/DiphenylHydramine'><ListItem> Diphenyl Hydramine </ListItem></Link>
            <Link to='/DihydroDutasteride'><ListItem> Dihydro Dutasteride </ListItem></Link>
            <Link to='/Diazepam'><ListItem> Diazepam </ListItem></Link>
            <Link to='/DimethylFumarate'><ListItem> Dimethyl Fumarate </ListItem></Link>
            <Link to='/Diosmin'><ListItem> Diosmin </ListItem></Link>
            <Link to='/Dolutegravir'><ListItem> Dolutegravir </ListItem></Link>
            <Link to='/Doxazosin'><ListItem> Doxazosin </ListItem></Link>
            <Link to='/Doxycycline'><ListItem> Doxycycline </ListItem></Link>
            <Link to='/Docetaxel'><ListItem> Docetaxel </ListItem></Link>
            <Link to='/Droxidopa'><ListItem> Droxidopa </ListItem></Link>
            <Link to='/Doxercalciferol'><ListItem> Doxercalciferol </ListItem></Link>
            <Link to='/Doxylamine'><ListItem> Doxylamine </ListItem></Link>
            <Link to='/Domperidone'><ListItem> Domperidone </ListItem></Link>
            <Link to='/Dutasteride'><ListItem> Dutasteride </ListItem></Link>
            <Link to='/Duloxetine'><ListItem> Duloxetine </ListItem></Link>
        </UnorderedList>
        </Box>
      </Box>
  


<Box>
         <Box marginLeft="10px">
            <Box marginLeft="100px"  padding="10px"><Heading >Pharmaceuticals Reference Standards </Heading></Box></Box>
         <Box margin="10px" marginLeft="20px">
            <VStack>
                <HStack>

                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Dextromethorphan  Hydrobromide Monohydrate </Text>
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
        </HStack>
        <HStack>        
                </HStack>
    <HStack>
</HStack>          
            </VStack>
         </Box>
    </Box>
        </HStack>
        <Box marginTop="10px" paddingTop="10px">
        </Box>
      </Box>
    </div>
  )
}

export default Dextromethorphan

