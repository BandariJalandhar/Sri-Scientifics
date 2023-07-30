import React from 'react'
import { Box, Card, Image, Text, Heading, Stack, CardBody, HStack, VStack } from '@chakra-ui/react'
const Technicalsupport = () => {
  return (
    <Box margin="20px">
      <HStack>
        <Image src='./Technicalsupport.jpg ' />
        <Box margin="20px">
          <VStack>
            <Box align="justify" color="#756F6F" margin="20px">
              <Heading fontSize="74px" color="#215878">Technical Support</Heading>
               <Text paddingTop="20px" lineHeight="30px" align="justify">
               
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel tellus tristique, scelerisque mi sit amet, fermentum nisi. Maecenas faucibus lectus non metus aliquam aliquam. Duis mollis ante non sapien accumsan, id vulputate tellus tincidunt. Vestibulum orci turpis, tempus quis rhoncus a, aliquet et est. Mauris a posuere metus, non volutpat tellus. Donec non nisl sed felis eleifend pulvinar at at eros. Cras purus felis, tristique eu tortor in, rutrum ultricies lorem. In dapibus massa nulla, vel laoreet purus ornare sed.</Text>              
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default Technicalsupport
