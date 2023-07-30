    import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
    import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
    import React from 'react'
    import '../../App.css' ;


    
    import { Link } from 'react-router-dom'

    const Ketorolac = () => {
    return (
        <div>
        <Box>
            <HStack>
        <Box position="relative" top="-640px">
            <Box width="300px" paddingLeft="30px" borderColor="gray"> 
            <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : KETOROLAC</Text></Box>
            <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 7</Text></Box>
            <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
            </Box>
            <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='70px' >
            <UnorderedList margin="2px" spacing="10px">
                
            <Link to='/Ketorolac'> <ListItem>Ketorolac</ListItem></Link>
                <Link to='/Ketoprofen'><ListItem>Ketoprofen</ListItem></Link>
                <Link to='/Ketamine'><ListItem>Ketamine</ListItem></Link>  
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
                <Text align="justify" textAlign="center" fontSize="20px">Ketorolac-Impurity-<br/> A/RC-B</Text>
                <Divider marginTop="10px" paddingTop="5px"/>
                <Box padding="10px">
                <Image src="/phy.png" className='Image'></Image>
                </Box>
                <Box margin="5px" paddingTop="30px" >
                <HStack>
                <Box> <Text>CAT NO </Text> </Box>
                <Text paddingLeft="0px"> : SZ-K003002</Text> 
                </HStack>
                <HStack>
                <Box> <Text>CAS NO</Text> </Box>
                <Text paddingLeft="0px"> : 154476-25-2</Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.F.</Text> </Box>
                <Text paddingLeft="15px"> : C14H13NO2</Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.Wt.</Text> </Box>
                <Text paddingLeft="5px"> : 227.3</Text> 
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
                <Text align="justify" textAlign="center" fontSize="20px">Ketorolac-Impurity-<br/> B/RC-C</Text>
                <Divider marginTop="10px" paddingTop="5px"/>
                <Box padding="10px">
                <Image src="/phy.png" className='Image'></Image>
                </Box>
                <Box margin="5px" paddingTop="30px" >
                <HStack>
                <Box> <Text>CAT NO </Text> </Box>
                <Text paddingLeft="0px"> : SZ-K003003</Text> 
                </HStack>
                <HStack>
                <Box> <Text>CAS NO</Text> </Box>
                <Text paddingLeft="0px"> : 113502-52-6</Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.F.</Text> </Box>
                <Text paddingLeft="15px"> : C14H11NO2</Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.Wt.</Text> </Box>
                <Text paddingLeft="5px"> :  225.2</Text> 
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
                <Text align="justify" textAlign="center" fontSize="20px">Ketorolac-Impurity C </Text>
                <Divider marginTop="10px" paddingTop="5px"/>
                <Box padding="10px">
                <Image src="/phy.png"  className='Image'></Image>
                </Box>
                <Box margin="5px" paddingTop="30px" >
                <HStack>
                <Box> <Text>CAT NO </Text> </Box>
                <Text paddingLeft="0px"> : SZ-K003004</Text> 
                </HStack>
                <HStack>
                <Box> <Text>CAS NO</Text> </Box>
                <Text paddingLeft="0px"> :1026936-07-1 </Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.F.</Text> </Box>
                <Text paddingLeft="15px"> : C15H13NO3</Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.Wt.</Text> </Box>
                <Text paddingLeft="5px"> : 255.3</Text> 
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
                <Text align="justify" textAlign="center" fontSize="20px"> Ketorolac-Impurity- D </Text>
                <Divider marginTop="10px" paddingTop="5px"/>
                <Box padding="10px">
                <Image src="/phy.png" className='Image'></Image>
                </Box>
                <Box margin="5px" paddingTop="30px" >
                <HStack>
                <Box> <Text>CAT NO </Text> </Box>
                <Text paddingLeft="0px"> : SZ-K003005</Text> 
                </HStack>
                <HStack>
                <Box> <Text>CAS NO</Text> </Box>
                <Text paddingLeft="0px"> : 1391053-45-4 </Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.F.</Text> </Box>
                <Text paddingLeft="15px"> : C16H15NO4</Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.Wt.</Text> </Box>
                <Text paddingLeft="5px"> : 285.3</Text> 
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
                <Text align="justify" textAlign="center" fontSize="20px"> Ketorolac RC-D</Text>
                <Divider marginTop="10px" paddingTop="5px"/>
                <Box padding="10px">
                <Image src="/phy.png"  className='Image'></Image>
                </Box>
                <Box margin="5px" paddingTop="30px" >
                <HStack>
                <Box> <Text>CAT NO </Text> </Box>
                <Text paddingLeft="0px"> : SZ-K003010 </Text> 
                </HStack>
                <HStack>
                <Box> <Text>CAS NO</Text> </Box>
                <Text paddingLeft="0px"> : 113502-55-9</Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.F.</Text> </Box>
                <Text paddingLeft="15px"> : C14H13NO </Text> 
                </HStack>
                <HStack>
                <Box> <Text>Mol.Wt.</Text> </Box>
                <Text paddingLeft="5px"> : 211.3</Text> 
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
                <Text align="justify" textAlign="center" fontSize="20px"> Ketorolac Tromethamine</Text>
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
                <Text paddingLeft="0px"> : 74103-07-4</Text> 
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
    <Text align="justify" textAlign="center" fontSize="20px">Ketorolac-related compound </Text>
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
    <Text paddingLeft="0px"> : 167105-80-8 </Text> 
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

    export default Ketorolac;