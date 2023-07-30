import React from 'react'
import { Box, VStack, HStack, Input, Button, Text, FormControl, } from '@chakra-ui/react'
const Requestaquote = () => {
  return (
    <Box>
      <Box>
        <VStack paddingTop="50px">
          <Box paddingTop="20px">
            <Text alignContent="space-between">Lorel porta dolor Phasellus neque, interdum hendrerit erat vehicula vel. Phasellus <br />
              Aenean iaculis at enim id iaculis. Quisque  Phasellus congue mauris felis, quis <br />
              Sed tincidunt turpis eget auctor tempor.Phasellus Sed sem erat, dictum et diam id,  <br />
              consectetur Phasellus magna et rutrum dignissim. Morbi vitae felis tellus. Nullam <br />
              turpis tincidunt et. Sed sapien risus, ornare sed cursu Phaselluss quis, euismod et.</Text>
          </Box>

          <Box paddingTop="40px">
            <HStack>
              <FormControl isRequired>
                <Input placeholder='Name' height="60px" width="300px" borderRadius="10px" />
              </FormControl>
              <FormControl isRequired>
                <Input placeholder='Phone Number' height="60px" width="300px" borderRadius="10px" />
              </FormControl>
            </HStack>

            <HStack paddingTop="40px">
              <FormControl isRequired>
                <Input placeholder='Email' height="60px" width="300px" borderRadius="10px" />
              </FormControl>
              <FormControl isRequired>
                <Input placeholder='Message' height="60px" width="300px" borderRadius="10px" />
              </FormControl>
            </HStack>

            <Box paddingTop="40px" paddingLeft="400px" paddingBottom="40px">
              <Button colorScheme='blue' height="50px" width="200px">
                Submit
              </Button>
            </Box>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default Requestaquote
