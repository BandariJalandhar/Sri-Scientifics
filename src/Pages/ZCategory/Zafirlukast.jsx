import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'
// import Footer from './Footer'
import '../../App.css'  
import { Link } from 'react-router-dom' 

const Zafirlukast = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-250px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : Zafirlukast </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px" paddingBottom="15px"> Sub Category : 6 </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height="300px">
        <UnorderedList margin="2px" spacing="10px">
             <Link to='/Zafirlukast'><ListItem>Zafirlukast </ListItem></Link>
             <Link to='/Zolmitriptan'><ListItem>Zolmitriptan </ListItem></Link>
             <Link to='/Zolpidem'><ListItem>Zolpidem </ListItem></Link>
             <Link to='/Zonisamide'><ListItem>Zonisamide </ListItem></Link>
             <Link to='/Zopiclone'><ListItem>Zopiclone </ListItem></Link>
            {/* <ListItem>Zolmitriptan</ListItem>
            <ListItem> Zolpidem</ListItem>
            <ListItem> Zonisamide </ListItem>
            <ListItem> Zopiclone </ListItem> */}
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
            <Text align="justify" textAlign="center" fontSize="20px"> Zafirlukast-Impurity-A </Text>
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
            <Text align="justify" textAlign="center" fontSize="20px">Zafirlukast-Impurity-B</Text>
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
            <Text align="justify" textAlign="center" fontSize="20px"> Zafirlukast-Impurity-C </Text>
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
            <Text align="justify" textAlign="center" fontSize="20px"> Zafirlukast-Impurity-D </Text>
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
            <Text align="justify" textAlign="center" fontSize="20px"> Zafirlukast-Impurity-E </Text>
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
            <Text align="justify" textAlign="center" fontSize="20px"> Zafirlukast-Standard IHS </Text>
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

export default Zafirlukast