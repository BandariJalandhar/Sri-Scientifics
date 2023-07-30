import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

const Carbamazepine = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-510px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : Carbamazepine </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px" paddingBottom="15px"> Sub Category : 8 </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height="300px">
        <UnorderedList margin="2px" spacing="10px">
        <Link to='/Carbidopa'></Link> <ListItem>CARBIDOPA</ListItem>
           <Link to='/Carbamazepine'><ListItem>CARBAMAZEPINE</ListItem></Link>
           <Link to='/Caffeine'><ListItem>CAFFEINE</ListItem></Link>
            <Link to='/Carfilzomib'><ListItem>CARFILZOMIB</ListItem></Link>
            <Link to='/Canagliflozin'><ListItem>CANAGLIFLOZIN</ListItem></Link>
            <Link to='/Carisoprodol'><ListItem>CARISOPRODOL</ListItem></Link>
            <Link to='/Carvedilol'><ListItem>CCARVEDILOL</ListItem></Link>
            <Link to='/Carmustine'><ListItem>CARMUSTINE</ListItem></Link>
            <Link to='/Capacetabin'><ListItem>CAPACETABIN</ListItem></Link>
            <Link to='/Cabergoline'><ListItem>CABERGOLINE</ListItem></Link>
            <Link to='/Carboprost'><ListItem>CARBOPROST</ListItem></Link>
            <Link to='/Cariprazine'><ListItem>CARIPRAZINE</ListItem></Link>
            <Link to='/Cetirizine'><ListItem>CETIRIZINE</ListItem></Link>
            <Link to='/Cefazolin'><ListItem>CEFAZOLIN</ListItem></Link>
            <Link to='/Cefditoren'><ListItem>CEFDITOREN</ListItem></Link>
            <Link to='/Cefotaxime'><ListItem>CEFOTAXIME</ListItem></Link>
            <Link to='/Cevimeline'><ListItem>CEVIMELINE</ListItem></Link>
            <Link to='/Celecoxib'><ListItem>CELECOXIB</ListItem></Link>
            <Link to='/Cefuroxime'><ListItem>CEFUROXIME</ListItem></Link>
            <Link to='/Cholestrol'><ListItem>CHOLESTROL</ListItem></Link>
            <Link to='/Chlorphenamine'><ListItem>CHLORPHENAMINE</ListItem></Link> 
            <Link to="/Chlorthalidone"><ListItem>CHLORTHALIDONE</ListItem></Link>
            <Link to="/Chlorpromazine"><ListItem>CHLORPROMAZINE</ListItem></Link>
            <Link to="/Clonidine"><ListItem>CLONIDINE</ListItem></Link>
            <Link to="/Chlorodiazepoxide"><ListItem>CHLORODIAZEPOXIDE</ListItem></Link>
            <Link to="/Ciprofloxacin"><ListItem>CIPROFLOXACIN</ListItem></Link>
            <Link to="/Citalopram1"><ListItem>CITALOPRAM</ListItem></Link>
            <Link to="/Citalopram2"><ListItem>CITALOPRAM</ListItem></Link>
            <Link to="/Clozapine"><ListItem>CLOZAPINE</ListItem></Link>
            <Link to="/Cladribine"><ListItem>CLADRIBINE</ListItem></Link>
            <Link to="/Clarithromycin"><ListItem>CLARITHROMYCIN</ListItem></Link>
            <Link to="/Clorazepate"><ListItem>CLORAZEPATE</ListItem></Link>
            <Link to="/Clevidipine"><ListItem>CLEVIDIPINE</ListItem></Link>
            <Link to="/Clidinium"><ListItem>CLIDINIUM</ListItem></Link>
            <Link to="/Clomipramine"><ListItem>CLOMIPRAMINE</ListItem></Link>
            <Link to="/Clonazepam"><ListItem>CLONAZEPAM</ListItem></Link>
            <Link to="/Clindamycin"><ListItem>CLINDAMYCIN</ListItem></Link>
            <Link to="/Clobazam"><ListItem>CLOBAZAM</ListItem></Link>
            <Link to="/Cystine"><ListItem>CYSTINE</ListItem></Link>
            <Link to="/Cyclosporin"><ListItem>CYCLOSPORIN</ListItem></Link>
            <Link to="/Cyproheptadine"><ListItem>CYPROHEPTADINE</ListItem></Link>
            <Link to="/Cyclobenzaprine"><ListItem>CYCLOBENZAPRINE</ListItem></Link>
           
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
            <Text align="justify" textAlign="center" fontSize="20px"> Carbamazepine API </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C006001 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 298-46-4 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C15H12N2O </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 236.3 </Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> Carbamazepine-Impurity A</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C006002 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 3564-73-6 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C15H14N2O </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 238.3 </Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> Carbamazepine-Impurity B </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C006003 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 611-64-3 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C14H11N </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 193.2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stock </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card> 
        </HStack>

        <HStack>
                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Carbamazepine-Impurity C </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C006004 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 1219170-51-0 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C16H13N3O2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 279.3 </Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px"> Carbamazepine-Impurity D </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C006005 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 256-96-2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C14H11N </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 193.2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stock </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">Rel. CAT No </Text> </Box>
              <Text color="blue" paddingLeft="0px"> :  SZ-O009006 </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>

        <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Carbamazepine-Impurity E </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C006006 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 494-19-9 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C14H13N </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 195.3 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stock </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>
                </HStack>

    <HStack>

<Card className='Subcard' boxShadow="dark-lg">              
<CardBody>
<Text align="justify" textAlign="center" fontSize="20px"> Carbamazepine-Impurity F </Text>
<Divider marginTop="10px" paddingTop="5px"/>
<Box padding="10px">
<Image src="/phy.png" className='Image'></Image>
</Box>
<Box margin="5px" paddingTop="30px" >
<HStack>
<Box> <Text>CAT NO </Text> </Box>
<Text paddingLeft="0px"> : SZ-C006007 </Text> 
</HStack>
<HStack>
<Box> <Text>CAS NO</Text> </Box>
<Text paddingLeft="0px"> : 33948-22-0 </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.F.</Text> </Box>
<Text paddingLeft="15px"> : C15H10ClNO </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.Wt.</Text> </Box>
<Text paddingLeft="5px"> : 255.7 </Text> 
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
<Text align="justify" textAlign="center" fontSize="20px"> Carbamazepine-Impurity G </Text>
<Divider marginTop="10px" paddingTop="5px"/>
<Box padding="10px">
<Image src="/phy.png" className='Image'></Image>
</Box>
<Box margin="5px" paddingTop="30px" >
<HStack>
<Box> <Text>CAT NO </Text> </Box>
<Text paddingLeft="0px"> : SZ-C006008 </Text> 
</HStack>
<HStack>
<Box> <Text>CAS NO</Text> </Box>
<Text paddingLeft="0px"> : 59690-97-0 </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.F.</Text> </Box>
<Text paddingLeft="15px"> : C15H11BrN2O </Text> 
</HStack>
<HStack>
<Box> <Text>Mol.Wt.</Text> </Box>
<Text paddingLeft="5px"> : 315.2 </Text> 
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
        {/* <Box marginTop="10px" paddingTop="10px">
        <Footer/>
        </Box> */}
      </Box>
    </div>
  )
}

export default Carbamazepine