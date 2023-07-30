import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack} from '@chakra-ui/react'
import React from 'react'
// import Footer from './Footer'
import '../../App.css'  
import { Link } from 'react-router-dom' 

const Erythromycin = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-500px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : ERYTHROMYCIN </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px" paddingBottom="15px"> Sub Category : 8</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height="300px">
        <UnorderedList margin="2px" spacing="10px">

        <Link to="/Ebastine"><ListItem>EBASTINE</ListItem></Link>
            <Link to="/Edaravone"><ListItem>EDARAVONE</ListItem></Link>
            <Link to="/Efinaconazole"><ListItem>EFINACONAZOLE</ListItem></Link>
            <Link to="/Emtricitabine"><ListItem>EMTRICITABINE</ListItem></Link>
            <Link to="/Empagliflozin1"><ListItem>EMPAGLIFLOZIN</ListItem></Link>
            <Link to="/Empagliflozin2"><ListItem>EMPAGLIFLOZIN</ListItem></Link>
            <Link to="/Enrofloxacin"><ListItem>ENROFLOXACIN</ListItem></Link>
            <Link to="/Enzalutamide"><ListItem>ENZALUTAMIDE</ListItem></Link>
            <Link to="/Enalapril"><ListItem>ENALAPRIL</ListItem></Link>
            <Link to="/Eltrombopag"><ListItem>ELTROMBOPAG</ListItem></Link>
            <Link to="/Elagolix"><ListItem>ELAGOLIX</ListItem></Link>
            <Link to="/Eplerenone"><ListItem>EPLERENONE</ListItem></Link>
            <Link to="/Eszopiclonee"><ListItem>ESZOPICLONEE</ListItem></Link>
            <Link to="/Esmolol"><ListItem>ESMOLOL</ListItem></Link>
            <Link to="/Estradiol"><ListItem>ESTRADIOL</ListItem></Link>
            <Link to="/Etodolac"><ListItem>ETODOLAC </ListItem></Link>
            <Link to="/Etoposide"><ListItem>ETOPOSIDE</ListItem></Link>
            <Link to="/Etomidate"><ListItem>ETOMIDATE</ListItem></Link>
            <Link><ListItem>ERYTHROMYCIN</ListItem></Link>
            <Link to="/Exemestane"><ListItem>EXEMESTANE</ListItem></Link>
            <Link to="/Ezetimibe1"><ListItem>EZETIMIBE</ListItem></Link>
            <Link to="/Ezetimibe2"><ListItem>EZETIMIBE</ListItem></Link>
        </UnorderedList>
        </Box>
      </Box>
  


<Box>
         <Box marginLeft="10px">
            <Box marginLeft="100px" padding="10px"><Heading >Pharmaceuticals Reference Standards</Heading></Box></Box>
         <Box margin="10px" marginLeft="20px">
            <VStack>
                <HStack>

                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Erythromycin  </Text>
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
              <Text paddingLeft="0px"> : 114-07-8</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : 000000</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 00000</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Erythromycin-Impurity -A  </Text>
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
              <Text paddingLeft="0px"> : 82230-93-1</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> Erythromycin-Impurity -B</Text>
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
              <Text paddingLeft="0px"> : 992-62-1</Text> 
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
        </HStack>

          <HStack>
                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Erythromycin-Impurity-C </Text>
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
              <Text paddingLeft="0px"> : 41451-91-6</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> Erythromycin-Impurity -D  </Text>
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
              <Text paddingLeft="0px"> : 23893-13-2</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> Erythromycin-Impurity -E </Text>
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
              <Text paddingLeft="0px"> : 33396-29-1</Text> 
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
                </HStack>  
 
     <HStack>

<Card className='Subcard' boxShadow="dark-lg">              
<CardBody>
<Text align="justify" textAlign="center" fontSize="20px">Erythromycin-Impurity -F </Text>
<Divider marginTop="10px" paddingTop="5px"/>
<Box padding="10px">
<Image src="/phy.png" className='Image'></Image>
</Box>
<Box margin="5px" paddingTop="30px" >
<HStack>
<Box> <Text>CAT NO </Text> </Box>
<Text paddingLeft="0px"> : 00000</Text> 
</HStack>
<HStack>
<Box> <Text>CAS NO</Text> </Box>
<Text paddingLeft="0px"> : 105882-69-7</Text> 
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
<Text align="justify" textAlign="center" fontSize="20px"> Erythromycin-Impurity -H</Text>
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
<Text paddingLeft="0px"> :00000</Text> 
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
<Text align="justify" textAlign="center" fontSize="20px"> Benzhydrol </Text>
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
<Text paddingLeft="0px"> : 91-01-0</Text> 
</HStack>
<HStack>
<Box> <Text>Mol.F.</Text> </Box>
<Text paddingLeft="15px"> : 000000</Text> 
</HStack>
<HStack>
<Box> <Text>Mol.Wt.</Text> </Box>
<Text paddingLeft="5px"> : 00000</Text> 
</HStack>
<HStack>
<Box> <Text color="blue">lnv.Staus</Text> </Box>
<Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
</HStack>
</Box>
</CardBody>
        </Card>  */}
</HStack> 
                
            </VStack>
         </Box>
  
    </Box>

        </HStack>
        <Box marginTop="10px" paddingTop="10px">
        {/* <Footer/> */}
        </Box>
      </Box>
    </div>
  )
}

export default Erythromycin
