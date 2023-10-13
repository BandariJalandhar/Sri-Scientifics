import React, { useState } from 'react'
import "./../App.css"
import { Box,  Image, Text, Stack, Center, Button,FormControl,Input,  Flex, useToast } from '@chakra-ui/react'
import axios from 'axios';

const Technicalsupport = () => {
  

  const [supportName, setSupportName] = useState('');
  const [supportEmail, setSupportEmail] = useState('');
  const [supportNum, setSupportNum] = useState('');
  const [supportDesc, setSupportDesc] = useState('');
  const toast = useToast();

  const handleAddSupport = async () => {
    if (
      supportName &&
      supportEmail &&
      supportNum &&
      isValidPhoneNumber(supportNum) &&
      isValidEmail(supportEmail)
    ) {
      try {
        const techData = {
          support_name: supportName,
          support_email: supportEmail,
          support_number: supportNum,
        };
        if (supportDesc) {
          techData.support_desc = supportDesc;
        }
        const response = await axios.post(
          'http://localhost:5000/api/technical',
          techData
        );
        if (response.data.success) {
          toast({
            title: `Your Request Added Successful`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'bottom',
          });
          setSupportName('');
          setSupportEmail('');
          setSupportNum('');
          setSupportDesc('');
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
    <>
  
    <Box marginTop="30px">
      <Box className="TechSupport">
        <Center>
        <Flex direction={{base:"column",xl:"row"}} >
          <Image src="./technicalsupport.png" m={{lg:"20px",xl:"40px"}}/>

          <Box className='techForm'>
            <Stack spacing="20px" >
              <Box color="#0157AC" as='b' > <Text color="#0157AC" as="b" fontSize="20px" pl="10px">For Support</Text></Box>
              <FormControl isRequired>
                    <Input
                      placeholder="Name"
                      value={supportName}
                      onChange={e => setSupportName(e.target.value)}
                      width={{ base: '100%', xl: '380px' }}
                      height="45px"
                      borderRadius="10px"
                      color="#333333"
                      border={'1px solid #D9D9D9'}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <Input
                      placeholder="Phone Number"
                      value={supportNum}
                      onChange={e => setSupportNum(e.target.value)}
                      width={{ base: '100%', xl: '380px' }}
                      height="45px"
                      borderRadius="10px"
                      color="#333333"
                      border={'1px solid #D9D9D9'}
                      pattern="^\d{10}$"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      placeholder="Email"
                      value={supportEmail}
                      onChange={e => setSupportEmail(e.target.value)}
                      width={{ base: '100%', xl: '380px' }}
                      height="45px"
                      borderRadius="10px"
                      color="#333333"
                      border={'1px solid #D9D9D9'}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <Input
                      placeholder="Message"
                      value={supportDesc}
                      onChange={e => setSupportDesc(e.target.value)}
                      width={{ base: '100%', xl: '380px' }}
                      height="100px"
                      borderRadius="10px"
                      color="#333333"
                      border={'1px solid #D9D9D9'}
                    />
                  </FormControl>

                  <Button
                    height="45px"
                    bgColor="#0157AC"
                    color="white"
                    float="right"
                    mt="10px"
                    colorScheme="#0157AC"
                    onClick={handleAddSupport}
                  >
                    Send Message{' '}
                  </Button>



            </Stack>


          </Box>



        </Flex>
        </Center>
      </Box>

     
    </Box>
    </>
  )
}

export default Technicalsupport
