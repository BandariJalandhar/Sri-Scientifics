import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const S = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 17</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Salbutamol'> <Card className='Innercard' boxShadow="lg">SALBUTAMOL </Card> </Link>
       <Link to='/Salmeterol'> <Card className='Innercard' boxShadow="lg"> SALMETEROL </Card> </Link>
       <Link to='/Sapropterin'> <Card className='Innercard' boxShadow="lg">SAPROPTERIN</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Sertraline'> <Card className='Innercard' boxShadow="lg">SERTRALINE </Card> </Link>
       <Link to='/Simavastatin'> <Card className='Innercard' boxShadow="lg"> SIMAVASTATIN </Card> </Link>
       <Link to='/Spiranolaactone'> <Card className='Innercard' boxShadow="lg">SPIRANOLAACTONE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Sitagliptin'> <Card className='Innercard' boxShadow="lg"> SITAGLIPTIN</Card> </Link>
       <Link to='/Solifenancin'> <Card className='Innercard' boxShadow="lg">SOLIFENANCIN  </Card> </Link>
       <Link to='/Sirolimus'> <Card className='Innercard' boxShadow="lg">SIROLIMUS</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Sildenafilcitrate'> <Card className='Innercard' boxShadow="lg">SILDENAFIL CITRATE </Card> </Link>
       <Link to='/Sotalol'> <Card className='Innercard' boxShadow="lg">SOTALOL</Card> </Link>
       <Link to='/Sitagliptintwo'> <Card className='Innercard' boxShadow="lg"> SITAGLIPTIN2 </Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Sunitinib'> <Card className='Innercard' boxShadow="lg">SUNITINIB </Card> </Link>
       <Link to='/Sumatriptan'> <Card className='Innercard' boxShadow="lg"> SUMATRIPTAN </Card> </Link>
       <Link to='/Sulfamethoxazole'> <Card className='Innercard' boxShadow="lg"> SULFAMETHOXAZOLE </Card> </Link>
      </HStack>
      </Center>
      
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       {/* <Link to='/'> <Card className='Innercard' boxShadow="lg"> SODIUMPICOSULFATE</Card> </Link> */}
       {/* <Link to='/'> <Card className='Innercard' boxShadow="lg"> SITAGLIPTIN </Card> </Link> */}
       <Link to='/Surcrose'> <Card className='Innercard' boxShadow="lg">SURCROSE</Card> </Link>
      </HStack>
      </Center>

    </Box>
    </Box>
  )
}

export default S