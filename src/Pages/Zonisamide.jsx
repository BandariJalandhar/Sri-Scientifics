import { Box, Text, ListItem, UnorderedList, HStack, } from '@chakra-ui/react'
import { Card, CardBody, Image, Heading, Divider, VStack, } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import './App.css'

const Zonisamide = () => {
  return (
    <div>
      <Box>
        <HStack>
          <Box position="relative" top="20px">
            <Box width="300px" paddingLeft="30px" borderColor="gray">
              <Box margin="1px" padding="10px" paddingTop="60px"><Text paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : Zonisamide </Text></Box>
              <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px"> Sub Category : 3 </Text></Box>
              <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px" paddingBottom="15px">Filter By: API</Text></Box>
            </Box>
            <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height="300px">
              <UnorderedList margin="2px" spacing="10px">
                <ListItem>Zafirlukast </ListItem>
                <ListItem>Zolmitriptan</ListItem>
                <ListItem> Zolpidem</ListItem>
                <ListItem> Zonisamide </ListItem>
                <ListItem> Zopiclone </ListItem>

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
                      <Text align="justify" textAlign="center" fontSize="20px"> N-Methyl Zonosamide </Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/logo1.png" className='Image'></Image>
                      </Box>
                      <Box margin="5px" paddingTop="30px" >
                        <HStack>
                          <Box> <Text>CAT NO </Text> </Box>
                          <Text paddingLeft="0px"> : SZ-Z008005 </Text>
                        </HStack>
                        <HStack>
                          <Box> <Text>CAS NO</Text> </Box>
                          <Text paddingLeft="0px"> : 68292-02-4 </Text>
                        </HStack>
                        <HStack>
                          <Box> <Text>Mol.F.</Text> </Box>
                          <Text paddingLeft="15px"> : C9H10N2O3S </Text>
                        </HStack>
                        <HStack>
                          <Box> <Text>Mol.Wt.</Text> </Box>
                          <Text paddingLeft="5px"> : 226.3 </Text>
                        </HStack>
                        <HStack>
                          <Box> <Text color="blue">lnv.Staus</Text> </Box>
                          <Text color="blue" paddingLeft="0px"> : Custom Synthesis </Text>
                        </HStack>
                      </Box>
                    </CardBody>
                  </Card>

                  <Card className='Subcard' boxShadow="dark-lg">
                    <CardBody>
                      <Text align="justify" textAlign="center" fontSize="20px">Zonisamide Related Compound-A</Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/logo1.png" className='Image'></Image>
                      </Box>
                      <Box margin="5px" paddingTop="30px" >
                        <HStack>
                          <Box> <Text>CAT NO </Text> </Box>
                          <Text paddingLeft="0px"> : SZ-Z008002 </Text>
                        </HStack>
                        <HStack>
                          <Box> <Text>CAS NO</Text> </Box>
                          <Text paddingLeft="0px"> : 73101-64-1 </Text>
                        </HStack>
                        <HStack>
                          <Box> <Text>Mol.F.</Text> </Box>
                          <Text paddingLeft="15px"> : C8H7NO4S : Na </Text>
                        </HStack>
                        <HStack>
                          <Box> <Text>Mol.Wt.</Text> </Box>
                          <Text paddingLeft="5px"> : 213.2 : 23.0</Text>
                        </HStack>
                        <HStack>
                          <Box> <Text color="blue">lnv.Staus</Text> </Box>
                          <Text color="blue" paddingLeft="0px"> : ln Stock</Text>
                        </HStack>
                        <HStack>
                          <Box> <Text color="blue">Rel. CAS No</Text> </Box>
                          <Text color="blue" paddingLeft="0px"> : 342623-49-8 (free base) </Text>
                        </HStack>
                      </Box>
                    </CardBody>
                  </Card>

                  <Card className='Subcard' boxShadow="dark-lg">
                    <CardBody>
                      <Text align="justify" textAlign="center" fontSize="20px"> Zonisamide Related Compound-I </Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/logo1.png" className='Image'></Image>
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
                  </Card>
                </HStack>





              </VStack>
            </Box>

          </Box>

        </HStack>
        <Box marginTop="10px" paddingTop="10px">
          <Footer />
        </Box>
      </Box>
    </div>
  )
}

export default Zonisamide