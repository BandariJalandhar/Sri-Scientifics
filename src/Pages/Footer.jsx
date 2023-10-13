import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MdCopyright } from 'react-icons/md';
import { VStack,  Text, Center, Flex, SimpleGrid } from '@chakra-ui/react';
import './../App.css';
const Footer = () => {
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
    <Box className="footer">
      <Center>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box className="footerBox" w="230px" mt="40px">
            <VStack alignItems="flex-start">
              <a href='/'>Home</a>
              <a href='/about'>About Us</a>
              <a href='/categories'>Product Category</a>
              <a href='/Technicalsupport'>Techinical support</a>
              <a href='/contact'>Contact Us</a>
            </VStack>
          </Box>
          <SimpleGrid columns={{base:"1",lg:"2"}} >
            {contacts.map(detail => (
              <Box key={detail._id} className="footerBox footerBox1" w="300px">
                <Text fontSize="30px">{detail.city_name}</Text>
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
        </Flex>
      </Center>
      <Box className="devider"></Box>
      <Center>
        <Box className="copyRight">
          <Box className="copyRight1">
            <Text>@ 2023 Sri Scientifics</Text>
            <Box m="4px" mt="7px">
              <MdCopyright />
            </Box>

            <Text>All rights Reserved</Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
export default Footer;