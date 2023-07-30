import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const O = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 11</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Obetichlolic'> <Card className='Innercard' boxShadow="lg">OBETICHLOLIC </Card> </Link>
       <Link to='/Omeprazole'> <Card className='Innercard' boxShadow="lg"> OMEPRAZOLE </Card> </Link>
       <Link to='/Ondansetron'> <Card className='Innercard' boxShadow="lg">ONDANSETRON</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Olopatadine'> <Card className='Innercard' boxShadow="lg">OLOPATADINE </Card> </Link>
       <Link to='/Olmesartan1'> <Card className='Innercard' boxShadow="lg"> OLMESARTAN </Card> </Link>
       <Link to='/Olmesartan2'> <Card className='Innercard' boxShadow="lg"> OLMESARTAN </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Oseltamivir'> <Card className='Innercard' boxShadow="lg">OSELTAMIVIR</Card> </Link>
       <Link to='/Oxcarbazepine'> <Card className='Innercard' boxShadow="lg"> OXCARBAZEPINE</Card> </Link>
       <Link to='/Oxibendazole'> <Card className='Innercard' boxShadow="lg"> OXIBENDAZOLE </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Oxymetazoline'> <Card className='Innercard' boxShadow="lg">OXYMETAZOLINE</Card> </Link>
       <Link to='/Oxaprozin'> <Card className='Innercard' boxShadow="lg">OXAPROZIN </Card> </Link>
       <Link to='/Oxazapam'> <Card className='Innercard' boxShadow="lg">OXAPROZAM  </Card> </Link>
      </HStack>
      </Center>

    </Box>
    </Box>
  )
}

export default O