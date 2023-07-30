import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Z = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 05</Heading>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Zafirlukast'> <Card className='Innercard' boxShadow="lg">ZAFIRLUKAST </Card> </Link>
       <Link to='/Zolmitriptan'> <Card className='Innercard' boxShadow="lg"> ZOLMITRIPTAN </Card> </Link>
       <Link to='/Zolpidem'> <Card className='Innercard' boxShadow="lg">ZOLPIDEM</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Zonisamide'> <Card className='Innercard' boxShadow="lg">ZONISAMIDE </Card> </Link>
       <Link to='/Zopiclone'> <Card className='Innercard' boxShadow="lg"> ZOPICLONE </Card> </Link>
      </HStack>
      </Center>
  

    </Box>
    </Box>
  )
}

export default Z