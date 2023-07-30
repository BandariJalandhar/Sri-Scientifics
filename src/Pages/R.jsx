import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const R = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 18</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Raloxifene'> <Card className='Innercard' boxShadow="lg">RALOXIFENE </Card> </Link>
       <Link to='/Raltagravir1'> <Card className='Innercard' boxShadow="lg"> RALTAGRAVIR </Card> </Link>
       <Link to='/Ranitidine'> <Card className='Innercard' boxShadow="lg">RANITIDINE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Ranolazine'> <Card className='Innercard' boxShadow="lg">RANOLAZINE </Card> </Link>
       <Link to='/Ramipril'> <Card className='Innercard' boxShadow="lg">  RAMIPRIL</Card> </Link>
       <Link to='/Raltagravir2'> <Card className='Innercard' boxShadow="lg">RALTAGRAVIR</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Riboflavin'> <Card className='Innercard' boxShadow="lg"> RIBOFLAVIN</Card> </Link>
       <Link to='/Repaglinide'> <Card className='Innercard' boxShadow="lg">REPAGLINIDE  </Card> </Link>
       <Link to='/Respindone'> <Card className='Innercard' boxShadow="lg">RESPINDONE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Rifaximin'> <Card className='Innercard' boxShadow="lg">RIFAXIMIN </Card> </Link>
       <Link to='/Rivastigmine'> <Card className='Innercard' boxShadow="lg"> RIVASTIGMINE </Card> </Link>
       <Link to='/Riluzole'> <Card className='Innercard' boxShadow="lg">RILUZOLE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Rivaroxaban1'> <Card className='Innercard' boxShadow="lg">RIVAROXABAN </Card> </Link>
       <Link to='/Rivaroxaban2'> <Card className='Innercard' boxShadow="lg">RIVAROXABAN </Card> </Link>
       <Link to='/Roflumilast'> <Card className='Innercard' boxShadow="lg"> ROFLUMILAST </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Rosuvastatincalcium'> <Card className='Innercard' boxShadow="lg"> ROSUVASTATIN CALCIUM</Card> </Link>
       <Link to='/Rosuvastatin'> <Card className='Innercard' boxShadow="lg"> ROSUVASTATIN</Card> </Link>
       <Link to='/Rupivacaine'> <Card className='Innercard' boxShadow="lg">RUPIVACAINE  </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Rufinamide'> <Card className='Innercard' boxShadow="lg">RUFINAMIDE</Card> </Link>
      </HStack>
      </Center>

    </Box>
    </Box>
  )
}

export default R