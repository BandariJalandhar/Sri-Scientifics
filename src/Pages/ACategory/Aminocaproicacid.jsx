import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'
import '../../App.css' ;
import { Link } from 'react-router-dom'

const  Aminocaproicacid= () => {   
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-290px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : AMINOCAPROICACID</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 4</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px"height='300px' >
        <UnorderedList margin="2px" spacing="10px">
        <Link to='/Abiraterone'><ListItem>Abiraterone</ListItem></Link>

           <Link to='/Aciclovir'> <ListItem>Aciclovir</ListItem></Link>
            <Link to='/Acetaminophen'><ListItem>Acetaminophen </ListItem></Link>
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
            <Link to='/Aspirin'><ListItem>Aspirin</ListItem></Link>
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
                <Card className='Subcard' boxShadow="dark-lg" >
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Aminocaproic Acid-Caprolactum Impurity</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : HTS-A-017CL</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 105-60-2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> :C6H11NO  </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 113.16  </Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Aminocaproic Acid-Dimer Impurity</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>

            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-A060002</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 2014-58-6</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C12H24N2O3</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 244.3</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>
        <Card  className='Subcard' boxShadow="dark-lg" >
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Aminocaproic Acid-Trimer Impurity</Text>  
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>

            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-A060003 </Text>

            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 5776-78-3</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C18H35N3O4
               </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 357.5</Text> 
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
        <Card className='Subcard' boxShadow="dark-lg" > 
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Aminocaproic Acid-Sorbitol Ester</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png"  className='Image'></Image>

            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : HTS-A-017SO </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : NA
</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C12H25NO7</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 295.33</Text> 
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

export default  Aminocaproicacid;