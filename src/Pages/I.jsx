import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const I = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 08</Heading>
    
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Ibuprofen'> <Card className='Innercard' boxShadow="lg"> IBUPROFEN</Card> </Link>
       <Link to='/Irbesartan'> <Card className='Innercard' boxShadow="lg"> IRBESARTAN </Card> </Link>
       <Link to='/Indomethacin'> <Card className='Innercard' boxShadow="lg">INDOMETHACIN</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Ivabradine'> <Card className='Innercard' boxShadow="lg"> IVABRADINE</Card> </Link>
       <Link to='/Isoproterno'> <Card className='Innercard' boxShadow="lg"> ISOPROTERNO </Card> </Link>
       <Link to='/Isonaringin'> <Card className='Innercard' boxShadow="lg">ISONARINGIN</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Imatinib'> <Card className='Innercard' boxShadow="lg"> IMATINIB</Card> </Link>
       <Link to='/Imatinibtwo'> <Card className='Innercard' boxShadow="lg"> IMATINIB 2</Card> </Link>
       <Link to='/Ivermectin'> <Card className='Innercard' boxShadow="lg"> IVERMECTIN </Card> </Link>
      </HStack>
      </Center>
  

    </Box>
    </Box>
  )
}

export default I