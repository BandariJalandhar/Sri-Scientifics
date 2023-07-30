
import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import React from 'react'
import '../../App.css' ;

import { Link } from 'react-router-dom'

const Temazepam= () => {
  return (
    <div>
      <Box>
        <HStack>
      <Box position="relative" top="-290px">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : Temazepam</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 6</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px' >
        <UnorderedList margin="2px" spacing="10px">
            
            <Link to='/Tadalafile'> <ListItem> Tadalafil</ListItem></Link>
           <Link to='/Tavaborole'> <ListItem>Tavaborole</ListItem> </Link>
           <Link to='/Tapentadol'> <ListItem > Tapentadol</ListItem></Link>
           <Link to='/Tacrolimus'> <ListItem >Tacrolimus</ListItem></Link>
           <Link to='/Tamoxifine'> <ListItem >Tamoxifine </ListItem></Link>
           <Link to='/Tamoxifen'> <ListItem >Tamoxifen</ListItem></Link>


           <Link to='/Tenofovir'> <ListItem >Tenofovir</ListItem></Link>
           <Link to='/Terbinafine'> <ListItem >Terbinafine</ListItem></Link>
           <Link to='/Terbutaline'> <ListItem >Terbutaline</ListItem></Link>
           <Link to='/Teriflunomide'> <ListItem >Teriflunominde</ListItem></Link>
           <Link to='/Testosterone'> <ListItem   >Testosterone</ListItem></Link>
           <Link to='/Telmisartan'> <ListItem >Telmisartan</ListItem></Link>
           <Link to='/Tetracaine'> <ListItem >Tetracaine</ListItem></Link>
           <Link  to='/Temazepam'><ListItem >Temazepam</ListItem></Link>
           <Link to='/Theobromine'> <ListItem >Theobromine</ListItem></Link> 
           <Link to='/Theophylline'> <ListItem >Theophylline</ListItem></Link>
           <Link to='/Thiamine'> <ListItem >Thiamine</ListItem></Link>

           <Link to='/Timolo'><ListItem >Timolol</ListItem></Link>
           <Link to='/Tinidazole'><ListItem >Tinidazole</ListItem></Link> 
           <Link to= '/Tiaprofenic'><ListItem >Tiaprofenic</ListItem></Link>
           <Link to='/Tiagabine'><ListItem >Tiagabine</ListItem></Link>
           <Link to='/Tizoxanide'> <ListItem >Tizoxanide</ListItem></Link>
           <Link  to='/Tramadol1'>  <ListItem>Tramadol 1</ListItem></Link>
           <Link to='/Tramadol2'><ListItem >Tramadol 2</ListItem></Link>

           <Link to='/Trandolaprill'> <ListItem >Trandolapril</ListItem></Link>
           <Link to='/Tranexamicacid'><ListItem >Tranexamic Acid</ListItem></Link>
           <Link to='/Trimipramine'> <ListItem >Trimipramine</ListItem></Link>
           <Link to='/Travoprost'><ListItem >Travoprost</ListItem></Link>
           <Link to='/Trazadone'> <ListItem >Trazadone</ListItem></Link>
           <Link to='/Triamcinolone'><ListItem >Triamcinolone</ListItem></Link>
           <Link to='/Trimethoprim'><ListItem >Trimethoprim</ListItem></Link>
           <Link to='/Tranycypromine'>  <ListItem >Tranycypromine</ListItem></Link>
           <Link to='/Trisalicylicacid'> <ListItem >Trisalicylic Acid</ListItem></Link>
           <Link to='/Topiramate'> <ListItem>Topiramate</ListItem></Link>
            
            <Link to='/Tofacitinib'> <ListItem >Tofacitinib</ListItem> </Link>  
            <Link to='/Tolterodine'><ListItem>Tolterodine</ListItem></Link>
            <Link to='/Tobramycin' ><ListItem>Tobramycin</ListItem></Link>
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
            <Text align="justify" textAlign="center" fontSize="20px">Temazepam-Impurity A</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-T127002</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 1022-13-5</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C14H12ClNO</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 245.7</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : Custom Synthesis</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>

        <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Temazepam-impurity C (or) O-Acetil temazepam</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> :SZ-T127004</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 18818-64-9</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C18H15ClN2O3</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 342.8</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Temazepam-Impurity D (or) O-Metil temazepam</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-T127005</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 17191-70-7</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C17H15ClN2O2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 314.8</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>




       

        
        
                        </HStack>

                        <HStack>

                        <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Temazepam-Impurity E (or) Metil Nordazepam</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-T127006</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 2888-64-4</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C16H13ClN2O2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 300.7 </Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Temazepam-Impurity F</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-T127007</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 3294-96-0</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C16H13ClN2O2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 300.7</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stroke</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>


        <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Temazepam-impurity G</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : SZ-T127008</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 93329-92-1</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C17H15ClN2O2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 314.8</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : In Stock</Text> 
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

  export default  Temazepam; ; 