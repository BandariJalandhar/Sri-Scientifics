import { Box, Text, Image, Heading, VStack, Center, Card, CardBody, SimpleGrid, Flex } from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'



const Labaratoriesandchemicalsolvents = () => {
  return (
    <>
   

    <Center>
      
      <Box m="30px">
        <Box margin="10px">
          {/* <HStack> */}
          {/* <SimpleGrid column={{base: 2, lg:2}} > */}
          <Flex direction={{ base: 'column', md: 'row' }}>
            <Box mx="10px" mb="0px">
              <VStack>
                <Box align="justify" color="#756F6F" p="20px">
                  <Heading color="#EB1414" size="md">Labaratories & Chemical Solvent </Heading>
                  <Heading size="md" color="#756F6F" mt="40px"> Chemicals And Solvents </Heading>
                  <Text lineHeight="35px" mt="10px">
                    1.   We are suppliers for Thermo Fischer brand chemicals and solvents which includes HPLC/GC solvents in variant grades.
                  </Text>
                  <Text lineHeight="35px" mt="10px">
                    2.  Apart from the above, we will be supplying all synthesis grade chemicals/solvents from Avra, SRL and Fluka brands.
                  </Text>
                  <Text lineHeight="35px" mt="10px">
                    3.   We are specialized in supplying Honeywell, Advent, Bio-solve grade spectroscopic solvents.
                  </Text>
                </Box>
              </VStack>
            </Box>
            <Box>
              <Image src='./hplcsolvents.png' />
            </Box>
          </Flex>
          {/* </SimpleGrid> */}
          {/* </HStack> */}
        </Box>




        {/* Images / Orochem */}
        <Box ml={{base:"10px", md:"40px"}}>
          <Box>
            <Heading mb="25px" size="md" color="#EB1414" mt="40px"> Laboratory Consumables </Heading>
            <Text as="b" color="#EB1414"> Orochem </Text>
          </Box>

          <Box mt="10px">
            {/* <HStack spacing="10px"> */}
            {/* <VStack align="left"> */}
            {/* <Center> */}
            {/* <SimpleGrid columns={{ base: 1,md:2, lg:3}}> */}
            <Flex direction={{ base: 'column', lg: 'row' }}>
              <Flex direction={{ base: 'column', md: 'row' }} >
                <Box m={"3px"}>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./hplccolumns.png' />
                          <Text as="b"> Adhoc - HPLC Columns </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box m={"3px"}>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./specatridges.png' />
                          <Text as="b"> SPE Catridges </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>
              </Flex>

              <Box m={"3px"}>
                <Card height="300px" width="300px">
                  <Center>
                    <CardBody m="5px" color="#756F6F">
                      <VStack>
                        <Image src='./flashcolumns.png' />
                        <Text as="b"> Flash Columns </Text>
                      </VStack>
                    </CardBody>
                  </Center>
                </Card>
              </Box>
            </Flex>
            {/* </SimpleGrid> */}
            {/* </Center> */}
            {/* </VStack> */}
            {/* </HStack> */}
          </Box>
        </Box>

        {/* Millipore */}
        <Center>
          <Box>
            <Box mt="30px">
              <Text as="b" color="#EB1414"> Millipore </Text>
            </Box>

            <Box mt="30px">
              {/* <VStack align="left"> */}
              {/* <HStack spacing="10px"> */}
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={1}>
                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./filterpapers.png' />
                          <Text as="b"> Filter Papers </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./syringefilters.png' />
                          <Text as="b"> Syringe Filters </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./vacuumpump.png' />
                          <Text as="b"> Vacuum Pump </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./solventfilteration.png' />
                          <Text as="b"> Solvent Filteration Kit </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>
                {/* </HStack> */}

                {/* <Box> */}
                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./tlcplates.png' />
                          <Text as="b"> TLC Plates </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>
              </SimpleGrid>
              {/* </Box> */}
              {/* </VStack> */}
            </Box>
          </Box>
        </Center>
        {/* End */}

        {/* HPLC */}
        <Center>
          <Box>
            <Box mt="30px" fontSize="18px">
              <Text as="b" color="#EB1414"> HPLC </Text>
            </Box>

            <Box mt="30px">
              {/* <VStack align="left" spacing="10px"> */}
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={1}>
                {/* <HStack spacing="10px"> */}
                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./clearscrewvials.png' />
                          <Text as="b"> Clear Screw Vials </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./amberscrewvials.png' />
                          <Text as="b"> Amber Screw Vials </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./nonslit.png' />
                          <Text as="b"> Nonslit Cap & Septa </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./slitcap.png' />
                          <Text as="b"> Slit Cap & Septa </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>
                {/* </HStack> */}

                {/* HPLC Line - 2 */}

                {/* <Box  as='b'> */}
                {/* <HStack spacing="10px"> */}
                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody>
                        <VStack>
                          <Image src='./2mlcrimp.png' />
                          <Text color="#756F6F" align="center" fontSize="12px"> 2ml Crimp Top Clear </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px">
                        <VStack>
                          <Image src='./ppvials.png' />
                          <Text color="#756F6F" > PP Vials </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px">
                        <VStack>
                          <Image src='./shellvials.png' />
                          <Text color="#756F6F"> Shell Vials </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px">
                        <VStack>
                          <Image src='./columnendplugs.png' />
                          <Text color="#756F6F" > Column End Pugs </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                {/* </HStack> */}
                {/* </Box> */}

                {/* HPLC Line - 3 */}

                {/* <Box> */}
                {/* <HStack spacing="10px"> */}
                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./d2lamps.png' />
                          <Text as="b"> D2 Lamps </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./agilent.png' />
                          <Text as="b"> Agilent Suction Filters </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./shimadzu.png' />
                          <Text as="b"> Shimadzu Suction Filters </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                <Box>
                  <Card height="300px" width="300px">
                    <Center>
                      <CardBody m="5px" color="#756F6F">
                        <VStack>
                          <Image src='./watersuction.png' />
                          <Text as="b"> Waters Suction Filters </Text>
                        </VStack>
                      </CardBody>
                    </Center>
                  </Card>
                </Box>

                {/* </HStack> */}
                {/* </Box> */}
              </SimpleGrid>

              {/* </VStack> */}
            </Box>
          </Box>
        </Center>




        <Box align="right" mt="20px" >
          <Text color="#4169E1" >
            <Link to="/Labaratoriesandchemicalsolvents2"> Next </Link>
          </Text>
        </Box>

      </Box>
    </Center>
    </>
  )
}

export default Labaratoriesandchemicalsolvents
