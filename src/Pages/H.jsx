import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const H = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 05</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Halobetasol'> <Card className='Innercard' boxShadow="lg"> HALOBETASOL</Card> </Link>
       <Link to='/Haloperidol'> <Card className='Innercard' boxShadow="lg">HALOPERIDOL  </Card> </Link>
       <Link to='/Hydroxychoroquine'> <Card className='Innercard' boxShadow="lg">HYDROXYCHOROQUINE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Hydralazine'> <Card className='Innercard' boxShadow="lg">HYDRALAZINE </Card> </Link>
       <Link to='/Hydrochlorothiazide'> <Card className='Innercard' boxShadow="lg"> HYDROCHLOROTHIAZIDE </Card> </Link>
      </HStack>
      </Center>

    </Box>
    </Box>
  )
}

export default H