import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'
import '../../App.css' 

import { Link } from 'react-router-dom'

const  Aspirin= () => {   
  return (   
    <div>  
      <Box>
        <HStack>
      <Box position="relative" top="-290px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : ASPIRIN</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 6 </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px'>
        <UnorderedList margin="2px" spacing="10px">
        <Link to='/Abiraterone'><ListItem>Abiraterone</ListItem></Link>

           <Link to='/Aciclovir'> <ListItem>Aciclovir</ListItem></Link>
            <Link to='/Acetaminophen'><ListItem>Acetaminophen</ListItem></Link>
            <Link to='/Adrenaline'><ListItem>Adrenaline</ListItem></Link>
           <Link to='/Aminocaproicacid'> <ListItem>Aminocaproic Acid</ListItem></Link>
           <Link to='/Amlodopin'> <ListItem> Amlodopin</ListItem></Link>
           <Link to='/Albendazole'> <ListItem >Albendazole</ListItem></Link>
            <Link to='/Aceclofenac'><ListItem >Aceclofenac</ListItem></Link>
            <Link to='/Amisulpride'><ListItem >Amisulpride</ListItem></Link>

            <Link to='/Acid'><ListItem> Acid </ListItem></Link>
            <Link to='/Alcaftadine'><ListItem> Alcaftadine</ListItem></Link>
            <Link to='/Ambrisentan'><ListItem> Ambrisentan</ListItem></Link>
            <Link to='/Amikacine'><ListItem>Amikacine</ListItem></Link>
            <Link to='/Atenolol'><ListItem>Atenolol</ListItem></Link>
            <Link to='/Amiodarone'><ListItem>Amiodarone</ListItem></Link>
            <Link to='/Allopurinol'><ListItem>Allopurinol</ListItem></Link>

            <Link to='/Aripiprazole'><ListItem>Aripiprazole</ListItem></Link>
            <Link to='/Atropine'><ListItem>Atropine</ListItem></Link>        
            <Link  to='/Aspirin'><ListItem>Aspirin</ListItem></Link>
            <Link to='/Api'><ListItem>Api</ListItem></Link>           
             <Link to='/Apremilast'><ListItem>Apremilast</ListItem></Link>

            <Link to='/Atazanavir'><ListItem>Atazanavir</ListItem></Link>
            <Link to='/Atorvastatin'><ListItem>Atorvastatin</ListItem></Link>
            <Link to='/Atv'><ListItem>Atv</ListItem></Link>
            <Link to='/Amoxicillin'><ListItem>Amoxicillin</ListItem></Link>
            <Link to='/Azythromycin'><ListItem>Azythromycin</ListItem></Link>
            <Link to='/Azacitidine'><ListItem>Azacitidine</ListItem></Link>
            <Link to='/Aztreonam'><ListItem>Aztreonam</ListItem></Link>            
            <Link to='/Azilsartan'><ListItem>Azilsartan</ListItem></Link>
            









            
        
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
            <Text align="justify" textAlign="center" fontSize="20px">Aspirin (or) Acetyl Salicylic acid-Impurity-A</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-A046001</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 99-96-7</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C7H6O3</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 138.1</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>
        <Card  className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Aspirin (or) Acetyl Salicylic acid-Impurity-B</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-A046002</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 636-46-4 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C8H6O5 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 182.1</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>
        <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Aspirin (or) Acetyl Salicylic acid-Impurity-C</Text>  
            <Divider marginTop="10px" paddingTop="5px"/>
            
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-A046003


</Text>

            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 69-72-7
</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C7H6O3

</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 138.1</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> :  In Stock

</Text>

            </HStack>
            </Box>
          </CardBody>
        </Card>
                </HStack>
                <HStack>
                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Aspirin (or) Acetyl Salicylic acid-Impurity-D</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-A046004 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 530-75-6</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C16H12O6 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 300.3</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stock </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card> 

        <Card className='Subcard' boxShadow="dark-lg">
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Aspirin (or) Acetyl Salicylic acid-Impurity-E</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-A046005 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 552-94-3 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C14H10O5</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 258.2</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stock </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card> 
        <Card className='Subcard' boxShadow="dark-lg">             
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Aspirin (or) Acetyl Salicylic acid-Impurity-F</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-A046006 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 1466-82-6</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C18H14O7</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 342.3</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stock </Text> 
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

export default  Aspirin;