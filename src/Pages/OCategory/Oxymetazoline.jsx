import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack} from '@chakra-ui/react'
import React from 'react'
// import Footer from './Footer'
import '../../App.css'  
import { Link } from 'react-router-dom'

const Oxymetazoline = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-250px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : OXYMETAZOLINE</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px" paddingBottom="15px"> Sub Category : 6</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height="300px">
        <UnorderedList margin="2px" spacing="10px">

            <Link to="/Obetichlolic"><ListItem>OBETICHLOLIC</ListItem></Link>  
            <Link to="/Omeprzole"><ListItem>OMEPRAZOLE</ListItem></Link>
            <Link to="/Ondansetron"><ListItem>ONDANSETRON</ListItem></Link>
            <Link to="/Olopatadine"><ListItem>OLOPATADINE</ListItem></Link>
            <Link to="/Olmesartan1"><ListItem>OLMESARTAN</ListItem></Link>
            <Link to="/Olmesartan2"><ListItem>OLMESARTAN</ListItem></Link>
            <Link to="/Oseltamivir"><ListItem>OSELTAMIVIR</ListItem></Link>
            <Link to="/Oxcarbazepine"><ListItem>OXCARBAZEPINE</ListItem></Link>
            <Link to="/Oxibendazole"><ListItem>OXIBENDAZOLE</ListItem></Link>
            <Link ><ListItem>OXYMETAZOLINE</ListItem></Link>
            <Link to="/Oxaprozin"><ListItem>OXAPROZIN</ListItem></Link>
            <Link to="/Oxazapam"><ListItem>OXAPROZAM</ListItem></Link>
            
            
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
            <Text align="justify" textAlign="center" fontSize="20px">Oxymetazoline-Impurity-A (or) DMH aminoethylacetamide </Text>
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
              <Text paddingLeft="0px"> :1391053-50-1</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">xylometazoline (or) Oxymetazoline-Impurity-B</Text>
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
              <Text paddingLeft="0px"> :000000</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> DMH acetamide (or) Oxymetazoline-Impurity-C   </Text>
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
              <Text paddingLeft="0px"> : 55699-13-3</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> DMH acetic acid (or) Oxymetazoline-Impurity-D </Text>
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
              <Text paddingLeft="0px"> :55699-12-2</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> DMH acetonitrile (or) Oxymetazoline-Impurity-E </Text>
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
              <Text paddingLeft="0px"> : 55699-10-0</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> TXBL impurity of Oxymetaziline  </Text>
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
              <Text paddingLeft="0px"> :1879-09-0</Text> 
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
{/* 
     <HStack>

<Card className='Subcard' boxShadow="dark-lg">              
<CardBody>
<Text align="justify" textAlign="center" fontSize="20px">Ebastine-Impurity-G </Text>
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
<Text paddingLeft="0px"> : 1429071-65-7</Text> 
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
<Text align="justify" textAlign="center" fontSize="20px"> Ebastine-Impurity-H</Text>
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
<Text paddingLeft="0px"> :574-42-5</Text> 
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
        </Card> 
</HStack> */}
                
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

export default Oxymetazoline
