import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
 import React from 'react'

     import '../../App.css';
     import { Link } from 'react-router-dom'

     const  Fingolimod = () => {
     return (
         <div>
         <Box>
             <HStack>
         <Box position="relative" top="-780px">
             <Box width="300px" paddingLeft="30px" borderColor="gray"> 
             <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : FINGOLIMOD</Text></Box>
             <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 12</Text></Box>
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
             <Link to='/Flecanide2'> <ListItem>Flecanide 2</ListItem></Link>
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod Deshydroxymethyl Impurity</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png" className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : SZ-F014002</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 168560-42-7</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : C18H31NO </Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> : 277.4 </Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod Diethyl 2-(4-octylphenethyl)-2- acetamidomalonate</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png" className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : 000</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 162358-08-9</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : 000</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> :  000</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod N-(1-hydroxy-4-(4-octyl phenyl)butan-2-yl)aceta mide</Text>
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
                 <Text paddingLeft="0px"> : 177259-52-8</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod 2-Acetamido-2-(4-octylp henethyl)malonic acid</Text>
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

             <Card className='Subcard' boxShadow="dark-lg">              
             <CardBody>
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod 2-(methoxyc arbonyl)-4-(4-octylphen yl) butanoic acid</Text>
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
             <Card className='Subcard' boxShadow="dark-lg">              
             <CardBody>
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod impurity A</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png"  className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : SZ-F014012</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 1201794-93-5 </Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : C17H29NO2</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> : 279.4</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod impurity A</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png"  className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : SZ-F014012</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 1201794-93-5 </Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : C17H29NO2</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> : 279.4</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod impurity B</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png"  className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : SZ-F014019</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 745767-97-9 </Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : C18H31NO2</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> : 293.5</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod impurity C</Text>
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
                 <Text paddingLeft="0px"> : 746594-44-5 </Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : 0000</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod impurity D</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png"  className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : SZ-F014013</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 780729-32-0 </Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : C21H37NO2 </Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> : 335.5</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">FFingolimod impurity G</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png"  className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : SZ-F014011</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 1807973-92-7 </Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : C21H35NO3</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> : 349.5</Text> 
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
                 <Text align="justify" textAlign="center" fontSize="20px">Fingolimod impurity I</Text>
                 <Divider marginTop="10px" paddingTop="5px"/>
                 <Box padding="10px">
                 <Image src="/phy.png"  className='Image'></Image>
                 </Box>
                 <Box margin="5px" paddingTop="30px" >
                 <HStack>
                 <Box> <Text>CAT NO </Text> </Box>
                 <Text paddingLeft="0px"> : SZ-F014030</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>CAS NO</Text> </Box>
                 <Text paddingLeft="0px"> : 249289-10-9</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.F.</Text> </Box>
                 <Text paddingLeft="15px"> : C21H35NO3</Text> 
                 </HStack>
                 <HStack>
                 <Box> <Text>Mol.Wt.</Text> </Box>
                 <Text paddingLeft="5px"> : 349.5</Text> 
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

     export default  Fingolimod;