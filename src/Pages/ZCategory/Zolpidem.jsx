import { Box,Text,ListItem,UnorderedList,HStack} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'
// import Footer from './Footer'
import '../../App.css'  
import { Link } from 'react-router-dom'

const Zolpidem = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-500px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : Zolpidem </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px" paddingBottom="15px"> Sub Category : 9 </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height="300px">
        <UnorderedList margin="2px" spacing="10px">
             <Link to='/Zafirlukast'><ListItem>Zafirlukast </ListItem></Link>
             <Link to='/Zolmitriptan'><ListItem>Zolmitriptan </ListItem></Link>
             <Link to='/Zolpidem'><ListItem>Zolpidem </ListItem></Link>
             <Link to='/Zonisamide'><ListItem>Zonisamide </ListItem></Link>
             <Link to='/Zopiclone'><ListItem>Zopiclone </ListItem></Link>
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
            <Text align="justify" textAlign="center" fontSize="20px"> Zolpidem Acid </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-Z016002 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 189005-44-5 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C17H16N2O2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 280.3 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : Custom Synthesis </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>
 
        <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Zolpidem related <br/> Compound A </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-Z016008 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 1346600-85-8 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C19H21N3O </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 307.4 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : Custom Synthesis </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>

        <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Zolpidem Related <br/> Compound B </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : 00 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 00 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : 00 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 00 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : 00 </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card> 
        </HStack>

        <HStack>
                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Zolpidem Related <br/> Compound C </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-Z016015 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 14547-80-9 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C13H12N2O </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 212.3 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : Custom Synthesis </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>

        <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Zolpidem Cabaldehyde </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-Z016010 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 400777-11-9 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C16H14N2O </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 250.3 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : Custom Synthesis </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>

        <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Zolpidem-Toly <br/> bromo propionamide </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : 00 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 00 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : 00 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 00 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : 00 </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>
        </HStack>
    <HStack>

<Card className='Subcard' boxShadow="dark-lg">              
<CardBody>
<Text align="justify" textAlign="center" fontSize="20px"> Zolpidem-Tolyoyl <br/> Acrylamide </Text>
<Divider marginTop="10px" paddingTop="5px"/>
<Box padding="10px">
<Image src="/phy.png" className='Image'></Image>
</Box>
<Box margin="5px" paddingTop="30px" >
<HStack>
<Box> <Text>CAT NO </Text> </Box>
<Text paddingLeft="0px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text>CAS NO</Text> </Box>
<Text paddingLeft="0px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.F.</Text> </Box>
<Text paddingLeft="15px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.Wt.</Text> </Box>
<Text paddingLeft="5px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text color="blue">lnv.Staus</Text> </Box>
<Text color="blue" paddingLeft="0px"> : 00 </Text> 
</HStack>
</Box>
</CardBody>
</Card>

<Card className='Subcard' boxShadow="dark-lg">              
<CardBody>
<Text align="justify" textAlign="center" fontSize="20px"> Zolpidem-Tolyoyl <br/> Propionamide </Text>
<Divider marginTop="10px" paddingTop="5px"/>
<Box padding="10px">
<Image src="/phy.png" className='Image'></Image>
</Box>
<Box margin="5px" paddingTop="30px" >
<HStack>
<Box> <Text>CAT NO </Text> </Box>
<Text paddingLeft="0px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text>CAS NO</Text> </Box>
<Text paddingLeft="0px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.F.</Text> </Box>
<Text paddingLeft="15px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.Wt.</Text> </Box>
<Text paddingLeft="5px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text color="blue">lnv.Staus</Text> </Box>
<Text color="blue" paddingLeft="0px"> : 00 </Text> 
</HStack>
</Box>
</CardBody>
</Card>

<Card className='Subcard' boxShadow="dark-lg">              
<CardBody>
<Text align="justify" textAlign="center" fontSize="20px"> Zolpidem-Tolyoyl <br/> Propionic acid </Text>
<Divider marginTop="10px" paddingTop="5px"/>
<Box padding="10px">
<Image src="/phy.png" className='Image'></Image>
</Box>
<Box margin="5px" paddingTop="30px" >
<HStack>
<Box> <Text>CAT NO </Text> </Box>
<Text paddingLeft="0px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text>CAS NO</Text> </Box>
<Text paddingLeft="0px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.F.</Text> </Box>
<Text paddingLeft="15px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.Wt.</Text> </Box>
<Text paddingLeft="5px"> : 00 </Text> 
</HStack>
<HStack>
<Box> <Text color="blue">lnv.Staus</Text> </Box>
<Text color="blue" paddingLeft="0px"> : 00 </Text> 
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

export default Zolpidem