import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const K = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 03</Heading>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Ketorolac'> <Card className='Innercard' boxShadow="lg">KETOROLAC </Card> </Link>
       <Link to='/Ketoprofen'> <Card className='Innercard' boxShadow="lg"> KETOPROFEN </Card> </Link>
       <Link to='/Ketamine'> <Card className='Innercard' boxShadow="lg">KETAMINE</Card> </Link>
      </HStack>
      </Center>
      
  

    </Box>
    </Box>
  )
}

export default K