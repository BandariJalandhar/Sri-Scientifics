import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const B = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 17</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Baclofen'> <Card className='Innercard' boxShadow="lg"> BACLOFEN</Card> </Link>
       <Link to='/Benazepril'> <Card className='Innercard' boxShadow="lg"> BENAZEPRIL </Card> </Link>
       <Link to='/Betahistine'> <Card className='Innercard' boxShadow="lg">BETAHISTINE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Bendamustine1'> <Card className='Innercard' boxShadow="lg">BENDAMUSTINE </Card> </Link>
       <Link to='/Bendamustine2'> <Card className='Innercard' boxShadow="lg">BENDAMUSTINE </Card> </Link>
       <Link to='/Bilastine'> <Card className='Innercard' boxShadow="lg"> BILASTINE </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Bisoprolol'> <Card className='Innercard' boxShadow="lg"> BISOPROLOL</Card> </Link>
       <Link to='/Bisoprololfumarate'> <Card className='Innercard' boxShadow="lg">BISOPROLOL FUMARATE </Card> </Link>
       <Link to='/Bimatoprost'> <Card className='Innercard' boxShadow="lg">BIMATOPROST  </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Bosentan'> <Card className='Innercard' boxShadow="lg">BOSENTAN</Card> </Link>
       <Link to='/Bortezomib'> <Card className='Innercard' boxShadow="lg">BORTEZOMIB </Card> </Link>
       <Link to='/Brexpiprazole'> <Card className='Innercard' boxShadow="lg"> BREXPIPRAZOLE </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Brompromazine'> <Card className='Innercard' boxShadow="lg">BROMPROMAZINE</Card> </Link>
       <Link to='/Brivaracetam'> <Card className='Innercard' boxShadow="lg">BRIVARACETAM </Card> </Link>
       <Link to='/Bupropion'> <Card className='Innercard' boxShadow="lg"> BUPROPION </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Bumitanide'> <Card className='Innercard' boxShadow="lg">BUMITANIDE</Card> </Link>
       <Link to='/Busulfan'> <Card className='Innercard' boxShadow="lg"> BUSULFAN</Card> </Link>
       <Link to='/Bupivacaine'> <Card className='Innercard' boxShadow="lg"> BUPIVACAINE </Card> </Link>
      </HStack>
      </Center>

    </Box>
    </Box>
  )
}

export default B
