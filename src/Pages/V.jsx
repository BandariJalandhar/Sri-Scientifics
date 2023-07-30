import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const V = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 13</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Valganciclovir'> <Card className='Innercard' boxShadow="lg">VALGANCICLOVIR </Card> </Link>
       <Link to='/Valsartan1'> <Card className='Innercard' boxShadow="lg">VALSARTAN  </Card> </Link>
       <Link to='/ValproicAcid'> <Card className='Innercard' boxShadow="lg">VALPROIC ACID</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Valacyclovir'> <Card className='Innercard' boxShadow="lg">VALACYCLOVIR </Card> </Link>
       <Link to='/Vaganacyclovir'> <Card className='Innercard' boxShadow="lg">VAGANACYCLOVIR  </Card> </Link>
       <Link to='/Varenicline'> <Card className='Innercard' boxShadow="lg">VARENICLINE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Valsartan2'> <Card className='Innercard' boxShadow="lg">VALSARTAN </Card> </Link>
       <Link to='/Vancomycine'> <Card className='Innercard' boxShadow="lg">  VANCOMYCINE</Card> </Link>
       <Link to='/Verapamil'> <Card className='Innercard' boxShadow="lg">VERAPAMIL</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Vernicline'> <Card className='Innercard' boxShadow="lg"> VERNICLINE</Card> </Link>
       <Link to='/Venalafaxine'> <Card className='Innercard' boxShadow="lg"> VENALAFAXINE </Card> </Link>
       <Link to='/Vigabatrin1'> <Card className='Innercard' boxShadow="lg">VIGABATRIN</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Vigabatrin2'> <Card className='Innercard' boxShadow="lg">VIGABATRIN</Card> </Link>
       <Link to='/Vildagliptin'> <Card className='Innercard' boxShadow="lg">VILDAGLIPTIN </Card> </Link>
      </HStack>
      </Center>


    </Box>
    </Box>
  )
}

export default V