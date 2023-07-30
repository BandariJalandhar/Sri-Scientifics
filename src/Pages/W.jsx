import React from 'react'
import { Box,Heading,HStack,Card,Center,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const W = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 01</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Warfarin'> <Card className='Innercard' boxShadow="lg">WARFARIN </Card> </Link>
      </HStack>
      </Center>

     
    </Box>
    </Box>
  )
}

export default W