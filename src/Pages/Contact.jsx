import React, { useEffect, useState } from 'react';
import {
  Box,
  VStack,
 
  Text,
  FormControl,
  Input,
  
  Button,
  Card,
  CardBody,
  Image,
 
  Flex,
  Center,
 
  SimpleGrid,
  
  useMediaQuery,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';

const Contact = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const toast = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [desc, setDesc] = useState('');

  const handleAddContact = async () => {
    if (
      name &&
      email &&
      number &&
      subject &&
      desc &&
      isValidEmail(email) &&
      isValidPhoneNumber(number)
    ) {
      try {
        const contactData = {
          contact_name: name,
          contact_email: email,
          contact_number: number,
          contact_sub: subject,
        };
        if (desc) {
          contactData.contact_desc = desc;
        }
        const response = await axios.post(
          'http://localhost:5000/api/contact-us',
          contactData
        );
        if (response.data.success) {
          toast({
            title: `Your Request Added Successful`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'bottom',
          });
          setName('');
          setEmail('');
          setNumber('');
          setSubject('');
          setDesc('');
        } else {
          console.log('Failed to add Contact');
        }
      } catch (error) {
        console.error('Error adding API:', error.response.data);
      }
    } else {
      toast({
        title: `Please fill all fields correctly`,
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
    }
  };
  const isValidPhoneNumber = phoneNumber => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const isValidEmail = email => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/contact');
      setContacts(response.data.contacts);
    } catch (error) {
      console.error('Error fetching buttons:', error);
    }
  };

  return (
    <Box>
      <Center>
        <Box m="30px" color="#333333" className="contactUs" >
           {/* // Contact US Form // */}
           <Box >
              <Box color="#0157AC" fontSize="20px">
                {' '}
                <Text pl={{ base: '20px', xl: '30px' }}>Contact Us </Text>
              </Box>
              <Box
                width="97%"
                m={{ md: '0px', lg: '10px' }}
                mt="15px"
                
                borderRadius="6px"
              >
                
                 
                    {/* <VStack> */}
                    {/* <HStack margin="10px"> */}
                    <SimpleGrid
                      m={'10px'}
                      columns={{ base: 1, md: 2 }}
                      spacing={1}
                    >
                      <FormControl isRequired>
                        <Input
                          placeholder="Name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          height="50px"
                          className="contactFormInput"
                          width={{ base: '100%', sm: '100%', md: '100%' }}
                          borderRadius="10px"
                          color="#333333"
                          border={'1px solid #565454'}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <Input
                          placeholder="Phone Number"
                          pattern="^\d{10}$"
                          title="Please enter a valid 10-digit phone number"
                          value={number}
                          onChange={e => setNumber(e.target.value)}
                          className="contactFormInput"
                          height="50px"
                          width={{ base: '100%', sm: '100%', md: '100%' }}
                          borderRadius="10px"
                          color="#333333"
                          border={'1px solid #565454'}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <Input
                          placeholder="Email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          className="contactFormInput"
                          height="50px"
                          width={{ base: '100%', sm: '100%', md: '100%' }}
                          borderRadius="10px"
                          color="#333333"
                          border={'1px solid #565454'}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <Input
                          placeholder="Subject"
                          value={subject}
                          onChange={e => setSubject(e.target.value)}
                          className="contactFormInput"
                          height="50px"
                          width={{ base: '100%', sm: '100%', md: '100%' }}
                          borderRadius="10px"
                          color="#333333"
                          border={'1px solid #565454'}
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <Input
                          placeholder="Message"
                          value={desc}
                          onChange={e => setDesc(e.target.value)}
                          className="contactFormInput"
                          height="120px"
                          width={{ base: '100%', md: '200%' }}
                          borderRadius="10px"
                          color="#333333"
                          border={'1px solid #565454'}
                        />
                      </FormControl>
                      {/* </Box> */}
                    </SimpleGrid>
                    {/* <Box  mt="10px"> */}
                    <Button
                      width={{ base: '90%', md: '47%' }}
                      height="60px"
                      colorScheme="#0157AC"
                      bgColor="#0157AC"
                      color="white"
                      float="right"
                      m="10px"
                      onClick={handleAddContact}
                    >
                      Send Message{' '}
                    </Button>
                    {/* </Box> */}
                    {/* </Box> */}
                    {/* </VStack> */}
                  
                
              </Box>
            </Box>
          {/* <HStack> */}
         
          {/* <Flex direction={{ base: 'column', lg: 'row' }}>
            <VStack align="left">
              <Box>
                <Box pb="5px">
                  <Text fontSize="20px" color="#0157AC" as="b">
                    {' '}
                    Our Branches{' '}
                  </Text>
                </Box>
                <Box className="contactBranch">
                  <Box
                    className="Branch"
                    width="320px"
                    mt={{ base: '10px', lg: '20px' }}
                  >
                    <VStack
                      m="2px"
                      alignItems="flex-start"
                      fontSize="16px"
                      color="#333333"
                    >
                      <Link href="/" isExternal>
                        <Text fontSize="20px" color="#0157AC">
                          Hyderabad
                        </Text>
                      </Link>
                      <VStack spacing={2} alignItems="flex-start">
                        <Flex>
                          <Text>Address </Text>
                          <Text>&nbsp;&nbsp;:&nbsp;</Text>
                          <Box>Pragathi Nagar, Hyderabad</Box>
                        </Flex>
                        <Flex align="center">
                          <Text>Mobile</Text>
                          <Text>&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</Text>
                          <Box> 9182689527</Box>
                        </Flex>
                        <Flex align="center">
                          <Text>Mail</Text>
                          <Text>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                          </Text>
                          <Box>srinivas@sriscientifics.co.in</Box>
                        </Flex>
                        <Flex align="center">
                          <Text>Enquiry</Text>
                          <Text>&nbsp;&nbsp;&nbsp;:&nbsp;</Text>
                          <Box>info@sriscientifics.co.in</Box>
                        </Flex>
                      </VStack>
                    </VStack>
                  </Box>
                  <Box
                    className="Branch"
                    width="320px"
                    mt={{ base: '10px', lg: '20px' }}
                  >
                    <VStack
                      m="2px"
                      alignItems="flex-start"
                      fontSize="16px"
                      color="#333333"
                    >
                      <Link href="/" isExternal>
                        <Text fontSize="20px" color="#0157AC">
                          Vishakhapatnam
                        </Text>
                      </Link>
                      <VStack spacing={2} alignItems="flex-start">
                        <Flex>
                          <Text>Address </Text>
                          <Text>&nbsp;&nbsp;:&nbsp;</Text>
                          <Box>Lankelapalem, Vishakhapatnam, AP-531019</Box>
                        </Flex>
                        <Flex align="center">
                          <Text>Mobile</Text>
                          <Text>&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</Text>
                          <Box> 9182689527</Box>
                        </Flex>
                        <Flex align="center">
                          <Text>Mail</Text>
                          <Text>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                          </Text>
                          <Box>srinivas@sriscientifics.co.in</Box>
                        </Flex>
                        <Flex align="center">
                          <Text>Enquiry</Text>
                          <Text>&nbsp;&nbsp;&nbsp;:&nbsp;</Text>
                          <Box>info@sriscientifics.co.in</Box>
                        </Flex>
                      </VStack>
                    </VStack>
                  </Box>
                </Box>
              </Box>
            </VStack>

           
          </Flex> */}
          {/* </HStack> */}
        </Box>
      </Center>
      <Center>
        <Box m="10px" w="90%" p="30px" borderBottom="1px solid #333333" borderTop="1px solid #333333">
          <Center>
            <Box  >
      <Text fontSize="20px" color="#0157AC" as="b">
                    {' '}
                    Our Branches{' '}
                  </Text>
          <SimpleGrid columns={{base:"1", md:"2",xl: contacts.length >= 3 ? "3" : "2"}}  >
            {contacts.map(detail => (
              <Box key={detail._id}  w="300px" lineHeight="2" m="10px" >
                <Text fontSize="20px" color="#0157AC">{detail.city_name}</Text>
                <Flex>
                  <Text>Address&nbsp;</Text>
                  <Text>:</Text>
                  <Text>&nbsp;&nbsp;</Text>
                  <Box>
                    {detail.street_name}, {detail.city_name}, {detail.state_name}, {detail.postal_code}
                  </Box>
                </Flex>
                <Flex>
                  <Text>Mobile</Text>
                  <Text>&nbsp;&nbsp;&nbsp;:</Text>
                  <Box>&nbsp; {detail.mobile}</Box>
                </Flex>
                <Flex>
                  <Text>Mail</Text>
                  <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</Text>
                  <Box>
                  &nbsp;&nbsp;
                    {detail.admin_email}
                  </Box>
                </Flex>
                <Flex>
                  <Text>Enquiry</Text>
                  <Text>&nbsp;&nbsp;: </Text>
                  <Box>&nbsp;&nbsp;{detail.enquiry_email}</Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
          </Box>
          </Center>
          </Box>
      </Center>

      {/* Cards */}

      <Box mt="30px">
        <Center>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
            {/* <HStack> */}
            <Box>
              <Card
                height={{ base: '220px', xl: '250px' }}
                width={{ base: '220px', xl: '250px' }}
                border={'1px solid #565454'}
              >
                <Center>
                  <CardBody m="5px" color="#333333">
                    <VStack>
                      <Image
                        m={isLargerThan768 ? '5px' : '0px'}
                        src="./location.png"
                      />
                      <Text as="b"> Our Location </Text>
                      <Text textAlign="center">
                        {' '}
                        Pragathi Nagar, Hyderabad, Telangana
                      </Text>
                    </VStack>
                  </CardBody>
                </Center>
              </Card>
            </Box>

            <Box>
              <Card
                height={{ base: '220px', xl: '250px' }}
                width={{ base: '220px', xl: '250px' }}
                border={'1px solid #565454'}
              >
                <Center>
                  <CardBody m="5px" color="#333333">
                    <VStack>
                      <Image
                        m={isLargerThan768 ? '10px' : '0px'}
                        src="./mail.png"
                      />
                      <Text as="b"> Our Email </Text>
                      <Text> srinivas@sriscientifics.co.in </Text>
                      <Text> info@sriscientifics.co.in </Text>
                    </VStack>
                  </CardBody>
                </Center>
              </Card>
            </Box>

            <Box>
              <Card
                height={{ base: '220px', xl: '250px' }}
                width={{ base: '220px', xl: '250px' }}
                border={'1px solid #565454'}
              >
                <Center>
                  <CardBody m="5px" color="#333333">
                    <VStack>
                      <Image
                        m={isLargerThan768 ? '10px' : '0px'}
                        src="./call.png"
                      />
                      <Text as="b"> Phone Numbers </Text>
                      <Text> Mobile: 9182689527 </Text>
                      <Text> Mobile: 9182689527 </Text>
                    </VStack>
                  </CardBody>
                </Center>
              </Card>
            </Box>
            <Box>
              <Card
                height={{ base: '220px', xl: '250px' }}
                width={{ base: '220px', xl: '250px' }}
                border={'1px solid #565454'}
              >
                <Center>
                  <CardBody m="5px" color="#333333">
                    <VStack>
                      <Image
                        m={isLargerThan768 ? '10px' : '0px'}
                        src="./clock.png"
                      />
                      <Text as="b"> Working hours </Text>
                      <Text> Morning : 9am-6pm </Text>
                      <Text> Monday - Saturday </Text>
                    </VStack>
                  </CardBody>
                </Center>
              </Card>
            </Box>
            {/* </HStack> */}
          </SimpleGrid>
        </Center>
      </Box>
    </Box>
  );
};
export default Contact;
