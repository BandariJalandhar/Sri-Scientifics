import { Box, Divider, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HStack, VStack, Link, Text, Center } from "@chakra-ui/react"



const Footer = () => {
  return (
     
    <Box bgColor={'#F5F5F5'} h={'300px'} >
      <Box>
        <HStack m="30px" justifyContent={'space-between'}>
          <Box m="30px">
            <VStack m="2px" alignItems="flex-start" color="#756F6F">
              <Link>Home</Link>
              <Link>About Us</Link>
              <Link>Product Category</Link>
              <Link>Techinical support</Link>
              <Link>Request a Quote</Link>
              <Link>Contact Us</Link>
            </VStack>
          </Box>

          <Box m="30px" color="#756F6F">
            <VStack m="2px" alignItems="flex-start" fontSize="16px" color="#756F6F">
              <Link href="/" isExternal>
                <Text fontSize="20px" color="#215878" as="b">Hyderabad</Text>
              </Link>
              <VStack spacing={2} alignItems="flex-start">
                <Text>
                  Address : Pragathi Nagar,Hyderabad
                </Text>
                <Text>
                  Mobile: 9182689527
                </Text>
                <Text>
                  Mail : srinivas@sriscientifics.co.in
                </Text>
                <Text>
                  Enquiry : info@sriscientifics.co.in
                </Text>
              </VStack>
            </VStack>
          </Box>


          <Box m="30px" color="#756F6F">
            <VStack m="2px" alignItems="flex-start" color="#756F6F" fontSize="16px">
              <Link href="/" isExternal>
                <Text fontSize="20px" color="#215878" as="b">Visakhapatnam</Text>
              </Link>
              <VStack spacing={1} alignItems="flex-start">
                <Text >
                  Address: Lankelapalem, Visakhapatnam, <br /> Ap-531019
                </Text>
                <Text >
                  Mobile: 9182689527
                </Text>
                <Text>
                  Mail : srinivas@sriscientifics.co.in
                </Text>
                <Text>
                  Enquiry : enquiry@sriscientifics.co.in
                </Text>
              </VStack>
            </VStack>
          </Box>

          <Box>
            <VStack as="b" alignItems="flex-start" color="#215878">
              <Box margin="50px" pt="100px">
                <Text> Follow us on </Text>
                <HStack>
                  <Icon as={FaTwitter} boxSize={6} color="#215878" />
                  <Icon as={FaFacebook} boxSize={6} color="#215878" />
                  <Icon as={FaInstagram} boxSize={6} color="#215878" />
                </HStack>
              </Box>
            </VStack>
          </Box>
        </HStack>    
       

      
        {/* <Box> 
          <Divider /> </Box>
          <Box margin="10px"
            color="#215878"
            align="center"> 
          <Text> @ 2023 Sri Scientifics &copy; All rights Reserved</Text>
        </Box> */}
      
      
    </Box>
    </Box>
    

  )
}
export default Footer;