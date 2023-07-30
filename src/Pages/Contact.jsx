import React from 'react'
import {
  Box, VStack, Stack, Divider, Heading, Text,
  FormControl, Input, HStack, Button, Card, CardBody,
  Image, onSubmit, FormLabel,
  register, Flex, Center, ContainerStyle, center
} from '@chakra-ui/react'



const Contact = () => {
  return (
    <Box>
      <Box margin="50px" color="756F6F">
        <HStack>
          <VStack align="left">
            <Box>
              <Text fontSize="20px" color="#215878" as="b"> Contact US </Text>
              <Text>
                SRI Scientifics has main branch in Hyderabad, Pragathi Nagar
              </Text>
            </Box>

            <Box>

              <Box pt="20px" pb="20px">
                <Text fontSize="20px" color="#215878" as="b"> Our Branches </Text>
              </Box>

              <Box>
                <Text fontSize="20px" color="#215878" as="b">Hyderabad</Text>
                <Text>
                  Address   : Pragathi Nagar,Hyderabad
                </Text>
                <Text>
                  Mobile    : 9182689527
                </Text>
                <Text>
                  Mail      : srinivas@sriscientifics.co.in
                </Text>
                <Text>
                  Enquiry   : info@sriscientifics.co.in
                </Text>
              </Box>

              <Box pt="20px" pb="20px">
                                 
                <Text fontSize="20px" color="#215878" as="b">Visakhapatnam</Text> 

                
                <Text > Address :   
                    Lankelapalem, Visakapatnam <br/> Ap-531019</Text>                        
                                
                <Text> Mobile  : 9182689527 </Text>                  
                
                <Text >
                  Mail : srinivas@sriscientifics.co.in
                </Text>
                <Text>
                  Enquiry : enquiry@sriscientifics.co.in
                </Text>
                 
                 
              </Box>

            </Box>
          </VStack>

          {/* // Contact US Form // */}
          <Box width="100%">
            <Card>
              <CardBody>
                <Box color="#215878" as='b'> <Text pl="20px"> For any Query Pl Contact US </Text></Box>
                <VStack>
                  <HStack margin="10px">
                    <FormControl isRequired>
                      <Input placeholder='Name' height="60px" width="400px" borderRadius="10px" color="#756F6F" />
                    </FormControl>
                    <FormControl isRequired>
                      <Input placeholder='Phone Number' height="60px" width="400px" borderRadius="10px" color="#756F6F" />
                    </FormControl>
                  </HStack>

                  <HStack margin="10px">
                    <FormControl isRequired>
                      <Input placeholder='Email' height="60px" width="400px" borderRadius="10px" color="#756F6F" />
                    </FormControl>
                    <FormControl isRequired>
                      <Input placeholder='Optional' height="60px" width="400px" borderRadius="10px" color="#756F6F" />
                    </FormControl>
                  </HStack>

                  <Box>
                    <Box mt="10px">
                      <FormControl isRequired>
                        <Input placeholder='Optional' height="150px" width="810px" borderRadius="10px" color="#756F6F" />
                      </FormControl>
                    </Box>

                    <Box marginLeft="510px" mt="10px">
                      <Button width="300px" height="60px" bgColor="#215878" color="white">
                        Send Message </Button>
                    </Box>
                  </Box>
                </VStack>
              </CardBody>
            </Card>
          </Box>
        </HStack>

      </Box>


      {/* Cards */}

      <Box>
        <Center>
          <HStack>
            <Box>
              <Card height="250px" width="250px">
                <Center>
                  <CardBody m="5px" color="#756F6F">
                    <VStack>
                      <Image m="5px" src='./location.svg' />
                      <Text as="b"> Our Location </Text>
                      <Text > Pragathi Nagar, Hyderabad </Text>
                      <Text> Telangana </Text>
                    </VStack>
                  </CardBody>
                </Center>
              </Card>
            </Box>

            <Box>
              <Card height="250px" width="250px">
                <Center>
                  <CardBody m="5px" color="#756F6F">
                    <VStack>
                      <Image m="15px" src='./mail.svg' />
                      <Text as="b"> Our Email </Text>
                      <Text > srinivas@sriscientifics.co.in </Text>
                      <Text > info@sriscientifics.co.in </Text>
                    </VStack>
                  </CardBody>
                </Center>
              </Card>
            </Box>

            <Box>
              <Card height="250px" width="250px">
                <Center>
                  <CardBody m="5px" color="#756F6F">
                    <VStack>
                      <Image m="10px" src='./chat.svg' />
                      <Text as="b"> Phone Numbers  </Text>
                      <Text > Mobile: 9182689527 </Text>
                      <Text > Mobile: 9182689527 </Text>
                    </VStack>
                  </CardBody>
                </Center>
              </Card>
            </Box>

            <Box>
              <Card height="250px" width="250px">
                <Center>
                  <CardBody m="5px" color="#756F6F">
                    <VStack>
                      <Image m="10px" src='./clock.svg' />
                      <Text as="b"> Working hours </Text>
                      <Text > Morning : 9am - 6pm </Text>
                      <Text > Monday - Saturday </Text>
                    </VStack>
                  </CardBody>
                </Center>
              </Card>
            </Box>


          </HStack>
        </Center>
      </Box>
    </Box>
  )
}

export default Contact
