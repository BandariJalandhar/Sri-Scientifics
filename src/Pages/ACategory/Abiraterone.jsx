import { Box, Text, ListItem, UnorderedList, HStack, } from '@chakra-ui/react'
import { Card, CardBody, Image, Heading, Divider, VStack, } from '@chakra-ui/react'
import React from 'react'

import '../../App.css'

import { Link } from 'react-router-dom'

const Abiraterone = () => {
    return (
        <div>
            <Box>
                <HStack>
                    <Box position="relative" top="-1500px">
                        <Box width="300px" paddingLeft="30px" borderColor="gray">
                            <Box margin="1px" padding="10px" paddingTop="60px"><Text paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : ABIRATERONE</Text></Box>
                            <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px"> Sub Category : 21</Text></Box>
                            <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px">Filter By: API</Text></Box>
                        </Box>
                        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px'>
                            <UnorderedList margin="2px" spacing="10px">
                                <Link to='/Abiraterone' ><ListItem>Abiraterone</ListItem></Link>
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
                                <Link to='/Atenolol'><ListItem>Atenolo</ListItem></Link>
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
                            <Box marginLeft="100px" padding="10px"><Heading >Pharmaceuticals Reference Standards</Heading></Box></Box>
                        <Box margin="10px" marginLeft="20px">
                            <VStack>
                                <HStack>

                                    <Card className='Subcard' boxShadow="dark-lg">
                                        <CardBody>
                                            <Text align="justify" textAlign="center" fontSize="20px">Alpha epoxy Abiterone acetate</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006009</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 2484719-11-9</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C26H33NO3</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 407.5</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px">Beta epoxy Abiterone acetate</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006010</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 2484719-26-6</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C26H33NO3</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 407.6</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> 7-Keto Abiraterone </Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006011</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 2410075-48-6</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C26H31NO3</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 405.5</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Anhydro abiraterone </Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006005</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 154229-20-6 </Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C24H29N</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 331.5</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Abiraterone Isopropyl ether</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006004</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 2484719-15-3</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C27H37NO</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 391.6</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> O-Chloro butyl abiraterone 0000</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : 000</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : NA</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px">Abiraterone ethyl ether</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006003</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 2484719-14-2 </Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C26H35NO</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 377.5</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Abiraterone 16-Dehydro Pregnenolone Acetate Oxime Impurity-0000</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : 000</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : NA</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Abiraterone 16-Dehydro Pregnenolone Acetate</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006033</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 979-02-2</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C23H32O3</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 356.5</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Abiraterone Isopropyl Bromide-000</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : 000</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> :75-26-3 </Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Abiraterone des iodo abiraterone (or) impurity 1</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006079</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> :1224-94-8</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C19H28O</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 272.4</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> abiraterone acetate dimer imp</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006014</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> :186826-68-6 </Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C47H61NO4</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 704</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px">abiraterone Dimer imp </Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : 0000</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 186826-70-0</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> AbirateroneHydrazine Sulfate</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : 000</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> :186826-68-6 </Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Abiraterone 3-Iodine Impurity</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006054</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 1268610-38-3</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C19H24I2</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 506.2</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Abiraterone Hydroxylamine HCl</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : 000</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> :  01-11-5479</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Alphaepoxy abiraterone acetae</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : 000</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 2484719-11-9</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> Betaepoxy aberaterone acetate</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : 000</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 2484719-26-6</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px">Abiraterone </Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006002</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 154229-19-3</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> : C24H31NO</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> 7-keto Abiraterone</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : SZ-A006011</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : 2484719-26-6</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.F.</Text> </Box>
                                                    <Text paddingLeft="15px"> :C26H31NO3</Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>Mol.Wt.</Text> </Box>
                                                    <Text paddingLeft="5px"> : 405.5</Text>
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
                                            <Text align="justify" textAlign="center" fontSize="20px"> 3-Deoxy-3Acetyl Abiraterone - 3- ene</Text>
                                            <Divider marginTop="10px" paddingTop="5px" />
                                            <Box padding="10px">
                                                <Image src="/logo1.png" className='Image'></Image>
                                            </Box>
                                            <Box margin="5px" paddingTop="30px" >
                                                <HStack>
                                                    <Box> <Text>CAT NO </Text> </Box>
                                                    <Text paddingLeft="0px"> : 000 </Text>
                                                </HStack>
                                                <HStack>
                                                    <Box> <Text>CAS NO</Text> </Box>
                                                    <Text paddingLeft="0px"> : NA</Text>
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

export default Abiraterone;