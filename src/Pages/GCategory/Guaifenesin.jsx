        import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
        import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
        import React from 'react'
        
        import { Link } from 'react-router-dom'

        const Guaifenesin = () => {
        return (
            <div>
            <Box>
                <HStack>
            <Box position="relative" top="-570px">
                <Box width="300px" paddingLeft="30px" borderColor="gray"> 
                <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : Gabapentin</Text></Box>
                <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Sub Category : 8</Text></Box>
                <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
                </Box>
                <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='220px'>
                <UnorderedList margin="2px" spacing="10px">
                    
                <Link to='/Gabapentin1'> <ListItem>Gabapentin1</ListItem></Link>
                    <Link to='/Gabapentin2'><ListItem>Gabapentin2</ListItem></Link>
                    <Link to='/Ganciclovir'><ListItem>Ganciclovir</ListItem></Link>
                <Link to='/Gefitinib'> <ListItem>Gefitinib</ListItem></Link>
                <Link to='/Gentamicine'> <ListItem>Gentamicine</ListItem></Link>
                <Link to='/Gemfibrozil'> <ListItem>Gemfibrozil</ListItem></Link>
                <Link to='/Glibenclamide'> <ListItem>Glibenclamide</ListItem></Link>
                <Link to='/Glycopyrrolate'> <ListItem>Glycopyrrolate</ListItem></Link>
                <Link to='/Glimiperide'> <ListItem>Glimiperide</ListItem></Link>
                <Link to='/Granisetron'> <ListItem>Granisetron</ListItem></Link>
                <Link to='/Griseofulvin'> <ListItem>Griseofulvin</ListItem></Link>
                <Link to='/Guaifenesin'> <ListItem>Guaifenesin</ListItem></Link>


                    
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
                    <Text align="justify" textAlign="center" fontSize="20px">Guaifenesin -Impurity-A</Text>
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
                    <Text paddingLeft="0px"> : 90-05-1</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px">Guaifenesin -Impurity-D</Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png" className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-G006005</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 16929-60-5</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C17H20O5</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> :  304.3</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px">Guaifenesin Beta Isomer </Text>
                    <Divider marginTop="10px" paddingTop="5px"/>
                    <Box padding="10px">
                    <Image src="/phy.png"  className='Image'></Image>
                    </Box>
                    <Box margin="5px" paddingTop="30px" >
                    <HStack>
                    <Box> <Text>CAT NO </Text> </Box>
                    <Text paddingLeft="0px"> : SZ-G006003</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>CAS NO</Text> </Box>
                    <Text paddingLeft="0px"> : 14007-09-1</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.F.</Text> </Box>
                    <Text paddingLeft="15px"> : C10H14O4</Text> 
                    </HStack>
                    <HStack>
                    <Box> <Text>Mol.Wt.</Text> </Box>
                    <Text paddingLeft="5px"> : 198.2</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Guaifenesin -2,6-Dichlorophenylacetic Acid </Text>
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
                    <Text paddingLeft="0px"> :  </Text> 6575-24-2
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Guaifenesin  -2,6-Dichlorophenylacetic Acid Methyl Ester</Text>
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
                    <Text paddingLeft="0px"> : 54551-8306</Text> 
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
                    <Text align="justify" textAlign="center" fontSize="20px"> Guaifenesin -Ethylenediaminetetraacetic acid disodium salt dihydrate</Text>
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
                    <Text paddingLeft="0px"> : 6381-92-6</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Guanidine Hydrochloride</Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
            <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
            <Box> <Text>CAT NO </Text> </Box>
            <Text paddingLeft="0px"> : SZ-G033006</Text> 
            </HStack>
            <HStack>
            <Box> <Text>CAS NO</Text> </Box>
            <Text paddingLeft="0px"> : 50-01-1 </Text> 
            </HStack>
            <HStack>
            <Box> <Text>Mol.F.</Text> </Box>
            <Text paddingLeft="15px"> : CH5N3 : HCl</Text> 
            </HStack>
            <HStack>
            <Box> <Text>Mol.Wt.</Text> </Box>
            <Text paddingLeft="5px"> : 59.1 : 36.5</Text> 
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
            <Text align="justify" textAlign="center" fontSize="20px">Guanfacine</Text>
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
            <Text paddingLeft="0px"> : 29110-47-2 </Text> 
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

        export default Guaifenesin;