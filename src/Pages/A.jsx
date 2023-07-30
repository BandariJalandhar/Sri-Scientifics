import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const A = () => {
  return (
    <Box>

        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 29</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Abiraterone'> <Card className='Innercard' boxShadow="lg"> ABIRATERONE </Card> </Link>
       <Link to='/Aciclovir'> <Card  className='Innercard' boxShadow="lg"> ACICLOVIR </Card></Link>
       <Link to='/Acetaminophen'> <Card className='Innercard' boxShadow="lg">ACETAMINOPHEN </Card></Link>
      </HStack>
      </Center>
    
      <Center>
      <HStack paddingBottom="20px" spacing="20px"> 
       <Link to='/Adrenaline' > <Card className='Innercard' boxShadow="lg"> ADRENALINE </Card></Link>
       <Link to='/AminocaproicAcid'> <Card className='Innercard' boxShadow="lg"> AMINOCAPROIC ACID</Card></Link>
       <Link to='/Amlodopin'> <Card className='Innercard' boxShadow="lg"> AMLODOPIN </Card></Link>
      </HStack>
      </Center>

      <Center>
      <HStack  paddingBottom="20px" spacing="20px">
       <Link to='/Albendazole'> <Card className='Innercard' boxShadow="lg"> ALBENDAZOLE </Card></Link>
      <Link to='/Aceclofenac'>  <Card className='Innercard' boxShadow="lg"> ACECLOFENAC</Card></Link>
       <Link to='/Amisulpride'> <Card className='Innercard' boxShadow="lg"> AMISULPRIDE</Card></Link>
      </HStack>
      </Center>

      <Center>
      <HStack  paddingBottom="20px" spacing="20px">
       <Link to='/Acid'> <Card className='Innercard' boxShadow="lg"> ACID </Card></Link>
      <Link to='/Alcaftadine'>  <Card className='Innercard' boxShadow="lg">ALCAFTADINE </Card></Link>
      <Link to='/Ambrisentan'>  <Card className='Innercard' boxShadow="lg"> AMBRISENTAN</Card></Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingBottom="20px" spacing="20px">
       <Link to='/Amikacine'> <Card className='Innercard' boxShadow="lg">AMIKACINE  </Card></Link>
       <Link to='/Atenolol'> <Card className='Innercard' boxShadow="lg">ATENOLOL </Card></Link>
       <Link to='/Amiodarone'> <Card className='Innercard' boxShadow="lg"> AMIODARONE</Card></Link>
      </HStack>
      </Center>
      

      <Center>
      <HStack paddingBottom="20px" spacing="20px">
       <Link to='/Allopurinol'> <Card className='Innercard' boxShadow="lg"> ALLOPURINOL </Card></Link>
        <Link to='/Aripiprazole'><Card className='Innercard' boxShadow="lg"> ARIPIPRAZOLE </Card></Link>
       <Link to='/Atropine'> <Card className='Innercard' boxShadow="lg"> ATROPINE </Card></Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingBottom="20px" spacing="20px">
      <Link to='/Aspirin'>  <Card className='Innercard' boxShadow="lg"> ASPIRIN </Card></Link>
      <Link to='/Api'>  <Card className='Innercard' boxShadow="lg">API </Card></Link>
      <Link to='/Apremilast'>  <Card className='Innercard' boxShadow="lg">APREMILAST </Card></Link>
      </HStack>
      </Center>

      <Center>
      <HStack  paddingBottom="20px" spacing="20px">
       <Link to='/Atazanavir'> <Card className='Innercard' boxShadow="lg"> ATAZANAVIR </Card></Link>
       <Link to='/Atorvastatin'> <Card className='Innercard' boxShadow="lg"> ATORVASTATIN </Card></Link>
       <Link to='/Atv'> <Card className='Innercard' boxShadow="lg"> ATV </Card></Link>
      </HStack>
      </Center>

      <Center>
      <HStack  paddingBottom="20px" spacing="20px">
       <Link to='/Amoxicillin'> <Card className='Innercard' boxShadow="lg">AMOXICILLIN  </Card></Link>
       <Link to='/Azythromycin'> <Card className='Innercard' boxShadow="lg">AZYTHROMYCIN </Card></Link>
      <Link to='/Azacitidine'>  <Card className='Innercard' boxShadow="lg"> AZACITIDINE</Card></Link>
      </HStack>
      </Center>

      <Center>
      <HStack  paddingBottom="20px" spacing="20px">
       <Link to='/Aztreonam'> <Card className='Innercard' boxShadow="lg"> AZTREONAM </Card></Link>
       <Link to='/Azilsartan'> <Card className='Innercard' boxShadow="lg">AZILSARTAN </Card></Link>
      </HStack>
      </Center>
    </Box>
    </Box>
  )
}

export default A
