import React from 'react'
import { Box, Center, HStack, Image, Text, Card, CardBody, VStack, Flex, Button, FormControl, Input } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

const Mainpage = () => {
  return (
    <Box>
      <Box pt="20px">
        <Image src="/Banner.png"></Image>
      </Box>

      <Center>
        <Box m="40px" fontSize="25px" color="#215878">

          <Center>
            <Box as='b' mb="20px">
              <Text >We offer the following</Text>
            </Box>
          </Center>

          <HStack spacing="30px" mt="20px">
            <Box>
              <Card height="300px" width="300px" borderRadius="15px" boxShadow="dark-lg">
                <Center>
                  <VStack>
                    <Box mt="25px" > <Image src='/impurities.png' alt='Impurities & Synthesis' /> </Box>
                    <CardBody>
                      <Link to='/Products' >
                        <Box color="#756F6F">
                          <Text align="center" >  Impurities & synthesis </Text> </Box>
                      </Link>
                    </CardBody>
                  </VStack>
                </Center>
              </Card>
            </Box>

            <Box>
              <Link to='/Labaratoriesandchemicalsolvents'>
                <Card height="300px" width="300px" borderRadius="15px" boxShadow="dark-lg">
                  <Center>
                    <VStack>
                      <Box mt="35px"> <Image src='/solvents.png' alt='Chemicals & Solvents' /> </Box>
                      <CardBody>
                        <Box color="#756F6F">
                          <Text align="center">  Laboratory Chemicals & Solvents </Text>
                        </Box>
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>

            <Box>
              <Link to='/MicrobiologyAgarmedia'>
                <Card height="300px" width="300px" borderRadius="15px" boxShadow="dark-lg">
                  <Center>
                    <VStack>
                      <Box mt="25px"> <Image src='/microbiology.png' alt='Microbiology Agar Media' /> </Box>
                      <CardBody>
                        <Box color="#756F6F">
                          <Text align="center" > Microbiology Agar Media </Text>
                        </Box>
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>
          </HStack>

          <HStack spacing="30px" mt="20px">
            <Box>
              <Link to='/Resignsandmetalscavangers '>
                <Card height="300px" width="300px" borderRadius="15px" boxShadow="dark-lg">
                  <Center>
                    <VStack>
                      <Box mt="25px"> <Image src='/resigns.png' alt='Chakra UI' /> </Box>
                      <CardBody>
                        <Box color="#756F6F">
                          <Text align="center"> Resigns & Metal Scavengers </Text>
                        </Box>
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>

            <Box>
              <Link to='/HPLCColumns'>
                <Card height="300px" width="300px" borderRadius="15px" boxShadow="dark-lg">
                  <Center>
                    <VStack>
                      <Box mt="45px" > <Image src='/hplc.png' alt='HPLC Columns' /> </Box>
                      <CardBody>
                        <Box color="#756F6F">
                          <Text > HPLC Columns </Text></Box>
                        {/* <Outlet /> */}
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>

            <Box>
              <Link to='/Apiintermediates'>
                <Card height="300px" width="300px" borderRadius="15px" boxShadow="dark-lg">
                  <Center>
                    <VStack>
                      <Box mt="25px" > <Image src='/Api.png' alt='API' /> </Box>
                      <CardBody>
                        <Box color="#756F6F">
                          <Text align="center">  Supply of APIs & Intermediates </Text> </Box>
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>
          </HStack>
        </Box>
      </Center>

      {/* About us  */}
      <Box margin="70px">

        <HStack>
          <Box margin="25px">
            <VStack spacing={4}>
              <Text as="b" fontSize="35px" color="#215878">About us</Text>

              <Text align="justify" fontSize="16px" lineHeight="30px" >
                <p style={{ marginBottom: "1rem" }}>
                  Sri Scientifics is an emerging Company with excellent market rating and company profile is based on manufacturing of impurities, marketing of Impurities,HPLC Columns,Chemical & solvents and testing support for Row  market different APIs & Intermediates, We have an exclusive Authorization for Distribution of USP listed ADHOC BRAND HPLC COLUMNS AND MICROBIOLOGY media over the market of AP,Telangana and selected areas in Gujarat & Pune in India.</p>

                <p style={{ marginBottom: "1rem" }}>
                  We have an import and export permission to Canada,Singapore,USA. We have an authorization for Thermo
                  Fischer,SRL,Avra for all chemicals and solvents. we have good experience in supplying the consumable for thechromatographic applications.
                </p>

              </Text>
            </VStack>
          </Box>
          <Image src='./Aboutus.png' alt='about us' />
        </HStack>
      </Box>

      {/* Request a quote */}

      <center>
        <Box marginBottom="50px">
          <Card width="1200px" height="450px" bgColor="#F5F5F5" boxShadow="xl">
            <CardBody alignItems="center">
              <Box position="relative" left="-330px" mb="20px" mt="50px"> <Text color="#215878" as="b" fontSize="20px"> Request a quote </Text> </Box>
              <Box>
                <VStack spacing={4}>
                  <HStack spacing={3}>
                    <FormControl isRequired>
                      <Input placeholder='Name' height="60px" width="400px" borderRadius="10px" color="#756F6F" />
                    </FormControl>
                    <FormControl isRequired>
                      <Input placeholder='Phone Number' height="60px" width="400px" borderRadius="10px" color="#756F6F" />
                    </FormControl>
                  </HStack>

                  <HStack spacing={3}>
                    <FormControl isRequired>
                      <Input placeholder='Email' height="60px" width="400px" borderRadius="10px" color="#756F6F" />
                    </FormControl>
                    <FormControl isRequired>
                      <Input placeholder='Message' height="60px" width="400px" borderRadius="10px" color="#756F6F" />
                    </FormControl>
                  </HStack>
                  <Box position="relative" left="260px" mt="30px">  <Button width="300px" height="60px" bgColor="#215878" color="white"> Send Message </Button> </Box>
                </VStack>
              </Box>
            </CardBody>
          </Card>

        </Box>
      </center>
    </Box>
  )
}

export default Mainpage
