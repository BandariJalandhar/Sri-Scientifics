import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack} from '@chakra-ui/react'
import React from 'react'
// import Footer from './Footer'
import '../../App.css'  
import { Link } from 'react-router-dom'

const Varenicline = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="0px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : VARENICLINE</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px" paddingBottom="15px"> Sub Category : 2</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height="300px">
        <UnorderedList margin="2px" spacing="10px">

            <Link to="/Valganciclovir"><ListItem>VALGANCICLOVIR</ListItem></Link>
            <Link to="/Valsartan1"><ListItem>VALSARTAN</ListItem></Link>
            <Link to="/ValproicAcid"><ListItem>VALPROIC ACID</ListItem></Link>
            <Link to="/Valacyclovir"><ListItem>VALACYCLOVIR</ListItem></Link>
            <Link to="/Vaganacyclovir"><ListItem>VAGANACYCLOVIR</ListItem></Link>
            <Link ><ListItem>VARENICLINE</ListItem></Link>
            <Link to="/Valsartan2"><ListItem>VALSARTAN</ListItem></Link>
            <Link to="/Vancomycine"><ListItem>VANCOMYCINE</ListItem></Link>
            <Link to="/Verapamil"><ListItem>VERAPAMIL</ListItem></Link>
            <Link to="/Vernicline"><ListItem>VERNICLINE</ListItem></Link>
            <Link to="/Venalafaxine"><ListItem>VENALAFAXINE</ListItem></Link>
            <Link to="/Vigabatrin1"><ListItem>VIGABATRIN</ListItem></Link>
            <Link to="/Vigabatrin2"><ListItem>VIGABATRIN</ListItem></Link>
            <Link to="/Vildagliptin"><ListItem>VILDAGLIPTIN</ListItem></Link>
            
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
            <Text align="justify" textAlign="center" fontSize="20px">Varenicline-VC-09 Nitroso Impurity (or) imp 1 </Text>
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
            <Text align="justify" textAlign="center" fontSize="20px">varenicline nitroso imp</Text>
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
          
          
          {/* <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Valsartan Related Compound C  </Text>
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
              <Text paddingLeft="0px"> : 137863-20-8</Text> 
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
        </Card>      */}
       </HStack>

          {/*   <HStack>
                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Valsartan Related Compound E </Text>
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
              <Text paddingLeft="0px"> :137863-17-3</Text> 
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
        </Card> */}
{/* 
         <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Enantiomer of Valganciclovir  </Text>
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
              <Text paddingLeft="0px"> : 000000</Text> 
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
        </Card>   */}

      {/* <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Loperamide-Impurity-H </Text>
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
              <Text paddingLeft="0px"> : 61299-42-1</Text> 
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
        </Card>  */}
                {/* </HStack>   */}
                
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

export default Varenicline
