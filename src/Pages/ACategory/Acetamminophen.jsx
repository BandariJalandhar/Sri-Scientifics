        import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
        import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
        import React from 'react'

        import '../../App.css' 
    
        
        import { Link } from 'react-router-dom'

        const  Acetaminophen = () => {   
        return (
            <div>
            <Box>
                <HStack>
            <Box position="relative" top="-1000px">
                <Box width="300px" paddingLeft="30px" borderColor="gray" > 
                <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : ACETAMINOPHEN</Text></Box>
                <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 13</Text></Box>
                <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
                </Box>
                <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px'>
                <UnorderedList margin="2px" spacing="10px"> 
                <Link to='/Abiraterone'><ListItem>Abiraterone</ListItem></Link>
                <Link to='/Aciclovir'> <ListItem>Aciclovir</ListItem></Link>
                <Link to='/Acetaminophen' ><ListItem>Acetaminophen</ListItem></Link>
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
                    <Link to='Atenolol'><ListItem>Atenolol</ListItem></Link>
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
                        <Card className='Subcard' boxShadow="dark-lg">              
                <CardBody>
                    <Text align="justify" textAlign="center" fontSize="20px"> Acetaminophen <br/>paracetamol</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png" className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-P007001</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 103-90-2</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C8H9NO2</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 151.2</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Acetaminophen-Impurity-A <br/> (or) RC-C</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png" className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box> 

                    <Text paddingLeft="0px"> : SZ-P007002</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 614-80-2
        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C8H9NO2</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 151.2</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Acetaminophen-Related Compound-B</Text>  
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png"  className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-P007003</Text>

                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 1693-37-4
        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C9H11NO2</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 165.2</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Acetaminophen-Impurity-C </Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png" className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-P007004</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 3964-54-3</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C8H8ClNO2</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 185.6</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Acetaminophen-Related Compound-D <br/>(or) imp D</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png"  className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> :  SZ-P007005
        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 103-84-4 </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C8H9NO</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 135.2
        </Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Paracetamol (EP) Impurity-E</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png" className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-P007006 </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 99-93-4

        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C8H8O2

        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 136.2 </Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Acetaminophen-Impurity -F</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png" className='Image' ></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>   
                    <Text paddingLeft="0px"> : SZ-P007007</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 100-02-7</Text>  

                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>  

                    <Text paddingLeft="15px"> : C6H5NO3</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 139.1</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> paracetamol RC-A <br/> (or) impurity H</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png"  className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> :  SZ-P007009</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box> 

                    <Text paddingLeft="0px"> : 2623-33-8 
        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C10H11NO3</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 193.2</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Acetaminophen-Impurity-K</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png" className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-P007012</Text> 

                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 123-30-8</Text>  
        
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C6H7NO</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 109.1</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Acetaminophen-Impurity-J</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png" className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-P007011</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 539-03-7 </Text>  

                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> :  C8H8ClNO</Text> 

                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 169.6</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px">Paracetamol (EP) Impurity-N</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png" className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box> 

                    <Text paddingLeft="0px"> : SZ-P007017
        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 3070-86-8</Text>  

                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C16H16N2O3</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 284.3</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px">Paracetamol impurity O</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png"  className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-P007020
        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px">2575516-61-7</Text>   
        
                    </HStack>
                    <HStack>  

                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C16H16N2O4
        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> :300.3</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Acetaminophen-P-Chlorophenol</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png"  className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-P007020</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 2575516-61-7
        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C16H16N2O4

        </Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 300.3
                </Text> 
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

        export default  Acetaminophen;