import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'
import '../../App.css'
import { Link } from 'react-router-dom'

const Cefotaxime = () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-30px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : CARBIDOPA </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px" paddingBottom="15px"> Sub Category : 1 </Text></Box>
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
            <Text align="justify" textAlign="center" fontSize="20px"> Cefotaxime Sodium  </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C062003 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 7597-60-6 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C7H10N4O3 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 198.2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : Custom Synthesis </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>
 
        {/* <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Cefazolin-Impurity C  </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C062004 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 519-32-4 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C8H10N4O2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 194.2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card> */}

        {/* <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Cefazolin-Impurity E </Text>
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
        </Card>  */}
        </HStack>

        <HStack>
                {/* <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px"> Cefazolin-Impurity H </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C062007</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 611-59-6 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C7H8N4O2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 180.2 </Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Cefodroxil-D-Phenylglycinamide </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-C062001 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 58-08-2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C8H10N4O2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 194.2 </Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stock </Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card> */}
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

export default Cefotaxime