import React, { useState } from 'react';
import {
  Box,
  Center,
  
  Image,
  Text,
  Card,
  CardBody,
  VStack,
  Flex,
  Button,
  FormControl,
  Input,
  SimpleGrid,
  useMediaQuery,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const Mainpage = () => {
  
  
  const [cardSize] = useMediaQuery('(min-width: 768px)');
  const [card1025] = useMediaQuery('(min-width: 1025px)');
  const [custName, setCustName] = useState('');
  const [custMail, setCustMail] = useState('');
  const [custNum, setCustNum] = useState('');
  const [custDesc, setCustDesc] = useState('');

  const toast = useToast();
  const handleAddRequest = async () => {
    if (
      custName &&
      custMail &&
      custNum &&
      isValidPhoneNumber(custNum) &&
      isValidEmail(custMail)
    ) {
      try {
        const reqData = {
          customer_name: custName,
          customer_email: custMail,
          customer_number: custNum,
        };
        if (custDesc) {
          reqData.customer_desc = custDesc;
        }
        console.log('Req Data', reqData);
        const response = await axios.post(
          'http://localhost:5000/api/request',
          reqData
        );
        if (response.data.success) {
          toast({
            title: `Your Request Added Successful`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'bottom',
          });
          setCustName('');
          setCustMail('');
          setCustNum('');
          setCustDesc('');
        } else {
          console.log('Failed to add API');
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

  return (
    <Box>
      <Box>
        <Center>
          <Image src="/Banner.png" borderRadius="0px 0px 10px 10px"></Image>
        </Center>
      </Box>

      <Center>
        <Box mx="40px" fontSize={cardSize ? '25px' : '18px'} color="#0157AC">
          <Center>
            <Box as="b" my="40px">
              <Text>We offer the following</Text>
            </Box>
          </Center>

          {/* <HStack spacing="30px" mt="20px" display={["flex"]} flexDirection={{ md: "row" , sm:"column" ,base:"column"}}  mt={[-1,0,0,0]}> */}
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, xl: 6 }} spacing={4}>
            <Box>
              <Link to="/categories">
                <Card
                  height={cardSize ? '180px' : '180px'}
                  width={cardSize ? '180px' : '180px'}
                  borderRadius="15px"
                  boxShadow="1px  1px 3px #565454"
                >
                  <Center>
                    <VStack>
                      <Box mt="30px">
                        <Image
                          src="/impurities.png"
                          alt="Impurities & Synthesis"
                        />
                      </Box>
                      <CardBody>
                        <Link to="/categories">
                          <Box color="#333333" mt={'-20px'}>
                            <Text align="center" fontSize={'15px'}>
                              {' '}
                              Impurities & synthesis{' '}
                            </Text>
                          </Box>
                        </Link>
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>

            <Box>
              <Link to="/Labaratoriesandchemicalsolvents">
                <Card
                  height={cardSize ? '180px' : '180px'}
                  width={cardSize ? '180px' : '180px'}
                  borderRadius="15px"
                  boxShadow="1px  1px 3px #565454"
                >
                  <Center>
                    <VStack>
                      <Box mt="30px">
                        <Image src="/solvents.png" alt="Chemicals & Solvents" />
                      </Box>
                      <CardBody>
                        <Box
                          color="#333333"
                          mt={'-20px'}
                          ml={'-5px'}
                          mr={'-5px'}
                        >
                          <Text align="center" fontSize={'15px'}>
                            {' '}
                            Laboratory Chemicals & Solvents{' '}
                          </Text>
                        </Box>
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>

            <Box>
              <Link to="/MicrobiologyAgarmedia">
                <Card
                  height={cardSize ? '180px' : '180px'}
                  width={cardSize ? '180px' : '180px'}
                  borderRadius="15px"
                  boxShadow="1px  1px 3px #565454"
                >
                  <Center>
                    <VStack>
                      <Box mt="30px">
                        <Image
                          src="/microbiology.png"
                          alt="Microbiology Agar Media"
                        />{' '}
                      </Box>
                      <CardBody>
                        <Box color="#333333" mt={'-20px'}>
                          <Text align="center" fontSize={'15px'}>
                            {' '}
                            Microbiology Agar Media{' '}
                          </Text>
                        </Box>
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>
            {/* </HStack> */}

            {/* <HStack spacing="30px" mt="20px"> */}
            <Box>
              <Link to="/Resignsandmetalscavangers ">
                <Card
                  height={cardSize ? '180px' : '180px'}
                  width={cardSize ? '180px' : '180px'}
                  borderRadius="15px"
                  boxShadow="1px  1px 3px #565454"
                >
                  <Center>
                    <VStack>
                      <Box mt="30px">
                        <Image src="/resigns.png" alt="Chakra UI" />
                      </Box>
                      <CardBody>
                        <Box color="#333333" mt={'-20px'}>
                          <Text align="center" fontSize={'15px'}>
                            {' '}
                            Resigns & Metal Scavengers{' '}
                          </Text>
                        </Box>
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>

            <Box>
              <Link to="/HPCLColumns">
                <Card
                  height={cardSize ? '180px' : '180px'}
                  width={cardSize ? '180px' : '180px'}
                  borderRadius="15px"
                  boxShadow="1px  1px 3px #565454"
                >
                  <Center>
                    <VStack>
                      <Box mt="30px">
                        <Image src="/hplc.png" alt="HPLC Columns" />{' '}
                      </Box>
                      <CardBody>
                        <Box color="#333333" mt={'-18px'}>
                          <Text fontSize={'15px'}> HPLC Columns </Text>
                        </Box>
                        {/* <Outlet /> */}
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>

            <Box>
              <Link to="/Apiintermediates">
                <Card
                  height={cardSize ? '180px' : '180px'}
                  width={cardSize ? '180px' : '180px'}
                  borderRadius="15px"
                  boxShadow="1px  1px 3px #565454"
                >
                  <Center>
                    <VStack>
                      <Box mt="30px">
                        <Image src="/Api.png" alt="API" />
                      </Box>
                      <CardBody>
                        <Box color="#333333" mt={'-20px'}>
                          <Text align="center" fontSize={'15px'}>
                            {' '}
                            Supply of APIs & Intermediates{' '}
                          </Text>{' '}
                        </Box>
                      </CardBody>
                    </VStack>
                  </Center>
                </Card>
              </Link>
            </Box>
            {/* </HStack> */}
          </SimpleGrid>
        </Box>
      </Center>

      {/* About us ============= */}

      <Box mt="15px" my="30px">
        <Center>
          <Text as="b" fontSize="35px" color="#0157AC">
            About us
          </Text>
        </Center>
        <Center>
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            className="mainAboutUs"
          >
            <Box
              mt="30px"
              mr={card1025 ? '50px' : '10px'}
              // margin={isLargerThan768 ? "50px" : "20px" }
              //  marginLeft={"35px"} marginRight={"35px"}
            >
              <VStack spacing={4}>
                <Text align="justify" fontSize="16px" lineHeight="30px">
                  <p style={{ marginBottom: '1rem' }}>
                    Sri Scientifics is an emerging Company with excellent market
                    rating and company profile is based on manufacturing of
                    impurities, marketing of Impurities, HPLC Columns, Chemical
                    & solvents and testing support for Row market different APIs
                    & Intermediates, We have an exclusive Authorization for
                    Distribution of USP listed ADHOC BRAND HPLC COLUMNS AND
                    MICROBIOLOGY media over the market of AP,Telangana and
                    selected areas in Gujarat & Pune in India.
                  </p>

                  <p style={{ marginBottom: '1rem' }}>
                    We have an import and export permission to Canada,
                    Singapore, USA. We have an authorization for Thermo
                    Fischer,SRL,Avra for all chemicals and solvents. we have
                    good experience in supplying the consumable for
                    thechromatographic applications.
                  </p>
                </Text>
              </VStack>
            </Box>

            <Image src="./aboutus.png" alt="about us" my="30px" />
          </Flex>
        </Center>
      </Box>

      {/* Request a quote---------- */}
      <Box background="#D9D9D9">
        <Center>
          <Box>
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              className="requestQuote"
              spacing={0}
            >
              <Image
                src="./form-image.png"
                alt="form"
                className="formImage"
                m="0px"
              />

              <Box className="requestForm">
                <Stack spacing="20px">
                  <Box color="#0157AC" as="b">
                    {' '}
                    <Text color="#0157AC" as="b" fontSize="20px" pl="10px">
                      {' '}
                      Request a quote{' '}
                    </Text>
                  </Box>
                  <FormControl isRequired>
                    <Input
                      placeholder="Name"
                      value={custName}
                      onChange={e => setCustName(e.target.value)}
                      height="50px"
                      width={{ base: '100%', lg: '420px' }}
                      borderRadius="10px"
                      color="#333333"
                      border={'1px solid #333333'}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <Input
                      placeholder="Phone Number"
                      value={custNum}
                      onChange={e => setCustNum(e.target.value)}
                      height="50px"
                      width={{ base: '100%', lg: '420px' }}
                      borderRadius="10px"
                      color="#333333"
                      border={'1px solid #333333'}
                      pattern="^\d{10}$"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <Input
                      placeholder="Email"
                      type="email"
                      value={custMail}
                      onChange={e => setCustMail(e.target.value)}
                      height="50px"
                      width={{ base: '100%', lg: '420px' }}
                      borderRadius="10px"
                      color="#333333"
                      border={'1px solid #333333'}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <Input
                      placeholder="Optional"
                      value={custDesc}
                      onChange={e => setCustDesc(e.target.value)}
                      height="100px"
                      width={{ base: '100%', lg: '420px' }}
                      borderRadius="10px"
                      color="#333333"
                      border={'1px solid #333333'}
                    />
                  </FormControl>
                  <Button
                    bgColor="#0157AC"
                    colorScheme="#0157AC"
                    color="white"
                    h="50px"
                    onClick={handleAddRequest}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Mainpage;
