import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
 import React from 'react'

     import '../../App.css';
     import { Link } from 'react-router-dom'

     const  Fesotreidone = () => {
     return (
         <div>
         <Box>
             <HStack>
         <Box position="relative" top="-290px">
             <Box width="300px" paddingLeft="30px" borderColor="gray"> 
             <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : FESOTREIDONE</Text></Box>
             <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 3</Text></Box>
             <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
             </Box>
             <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px'>
             <UnorderedList margin="2px" spacing="10px">
                 
             <Link to='/Famotidine'> <ListItem>Famotidine</ListItem></Link>
                 <Link to='/Fexofenadine1'><ListItem>Fexofenadine 1</ListItem></Link>
                 <Link to='/Fexofenadine2'> <ListItem>Fexofenidine 2 </ListItem></Link> 
                 <Link to='/Fenofibrate'><ListItem>Fenofibrate</ListItem></Link>
             <Link to='/Fesoterodine'> <ListItem>Fesoterodine </ListItem></Link>
             <Link to='/Fesotreidone'> <ListItem>Fesotreidone </ListItem></Link>
             <Link to='/Fingolimod'> <ListItem>Fingolimod</ListItem></Link>
             <Link to='/Flecanide1'> <ListItem>Flecanide 1</ListItem></Link>
             <Link to='/Flecanide2'> <ListItem>Flecanid 2</ListItem></Link>
             <Link to='/Flucanazole'> <ListItem>Flucanazole</ListItem></Link>
             <Link to='/Fluphenazine'> <ListItem>Fluphenazine</ListItem></Link>
             <Link to='/Fluoxetine'> <ListItem>Fluoxetine</ListItem></Link>
             <Link to='/Flutamide'> <ListItem>Flutamide</ListItem></Link>
             <Link to='/Fluvastatin'> <ListItem>Fluvastatin</ListItem></Link>
             <Link to='/Fluvoxamine'> <ListItem>Fluvoxamine</ListItem></Link>
             <Link to='/Flumazenil'> <ListItem>Flumazenil</ListItem></Link>
             <Link to='/Folicacid'> <ListItem>Folicacid</ListItem></Link> 
             <Link to='/Fomepizole'> <ListItem>Fomepizole</ListItem></Link>
             <Link to='/Fosfomycin'> <ListItem>Fosfomycin</ListItem></Link>
             <Link to='/Formoterol'> <ListItem>Formoterol</ListItem></Link>
             <Link to='/Furosamide'> <ListItem>Furosamide</ListItem></Link>
             






                 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fesotreidone- Impurity-A</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png" className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : SZ-F002002</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 200801-70-3</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : C22H31NO2 </Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> : 341.5</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fesotreidone-Impurity-B</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png" className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : SZ-F002003</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 1208313-13-6</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : C30H43NO4</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> :  481.7</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fesotreidone-Impurity-C</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png"  className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : 000</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 895137-81-2</Text> 
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
             <HStack>
             <Card className='Subcard' boxShadow="dark-lg">              
             <CardBody>
                 <Text align="justify" textAlign="center" fontSize="20px">Fesotreidone-Impurity-G</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png"  className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : 000</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 1254942-29-4</Text> 
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

     export default  Fesotreidone;