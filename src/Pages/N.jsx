import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const N = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 15</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Naproxen'> <Card className='Innercard' boxShadow="lg"> NAPROXEN</Card> </Link>
       <Link to='/Nirmatrelvir'> <Card className='Innercard' boxShadow="lg"> NIRMATRELVIR </Card> </Link>
       <Link to='/Nintedanib'> <Card className='Innercard' boxShadow="lg">NINTEDANIB</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Nebivolol'> <Card className='Innercard' boxShadow="lg"> NEBIVOLOL</Card> </Link>
       <Link to='/Neaminehydrochloride'> <Card className='Innercard' boxShadow="lg"> NEAMINE HYDROCHLORIDE </Card> </Link>
       <Link to='/Naphazoline'> <Card className='Innercard' boxShadow="lg">NAPHAZOLINE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Naringenin'> <Card className='Innercard' boxShadow="lg">NARINGENIN </Card> </Link>
       <Link to='/Naloxegol'> <Card className='Innercard' boxShadow="lg">  NALOXEGOL</Card> </Link>
       <Link to='/Nitrofurantoin'> <Card className='Innercard' boxShadow="lg"> NITROFURANTOIN</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Nicotine'> <Card className='Innercard' boxShadow="lg">NICOTINE </Card> </Link>
       <Link to='/Nicardipine'> <Card className='Innercard' boxShadow="lg"> NICARDIPINE </Card> </Link>
       <Link to='/Nifedipine'> <Card className='Innercard' boxShadow="lg">NIFEDIPINE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Nefopam'> <Card className='Innercard' boxShadow="lg">NEFOPAM </Card> </Link>
       <Link to='/Nalbuphine'> <Card className='Innercard' boxShadow="lg">NALBUPHINE  </Card> </Link>
       <Link to='/Norepinephrine'> <Card className='Innercard' boxShadow="lg">NOREPINEPHRINE</Card> </Link>
      </HStack>
      </Center>
  

    </Box>
    </Box>
  )
}

export default N