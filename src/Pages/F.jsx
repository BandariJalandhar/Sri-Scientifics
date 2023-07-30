import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const F = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 19</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Famotidine'> <Card className='Innercard' boxShadow="lg">FAMOTIDINE </Card> </Link>
       <Link to='/Fexofenadine1'> <Card className='Innercard' boxShadow="lg"> FEXOFENADINE 1 </Card> </Link>      
        <Link to='/Fexofenadine2'> <Card className='Innercard' boxShadow="lg"> FEXOFENADINE 2</Card> </Link>


      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Fenofibrate'> <Card className='Innercard' boxShadow="lg">FENOFIBRATE</Card> </Link>


       <Link to='/Fesoterodine'> <Card className='Innercard' boxShadow="lg"> FESOTERODINE </Card> </Link>
       <Link to='/Fingolimod'> <Card className='Innercard' boxShadow="lg">FINGOLIMOD</Card> </Link>

      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >

       <Link to='/Flecanide1'> <Card className='Innercard' boxShadow="lg">FLECANIDE 1 </Card> </Link>
       <Link to='/Flecanide2'> <Card className='Innercard' boxShadow="lg">FLECANIDE 2 </Card> </Link>
       <Link to='/Fesotreidone'> <Card className='Innercard' boxShadow="lg"> FESOTREIDONE </Card> </Link>


      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Flucanazole'> <Card className='Innercard' boxShadow="lg"> FLUCANAZOLE </Card> </Link>

      <Link to='/Fluphenazine'> <Card className='Innercard' boxShadow="lg">FLUPHENAZINE</Card> </Link>

       <Link to='/Fluoxetine'> <Card className='Innercard' boxShadow="lg">FLUOXETINE </Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Flutamide'> <Card className='Innercard' boxShadow="lg"> FLUTAMIDE </Card> </Link>
       
      <Link to='/Fluvastatin'> <Card className='Innercard' boxShadow="lg">FLUVASTATIN</Card> </Link>


       <Link to='/Fluvoxamine'> <Card className='Innercard' boxShadow="lg"> FLUVOXAMINE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Flumazenil'> <Card className='Innercard' boxShadow="lg"> FLUMAZENIL </Card> </Link>

      <Link to='/Folicacid'> <Card className='Innercard' boxShadow="lg">FOLIC ACID</Card> </Link>

       <Link to='/Fomepizole'> <Card className='Innercard' boxShadow="lg"> FOMEPIZOLE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Fosfomycin'> <Card className='Innercard' boxShadow="lg"> FOSFOMYCIN </Card> </Link>

      <Link to='/Formeterol'> <Card className='Innercard' boxShadow="lg">FORMOTEROL</Card> </Link>


       <Link to='/Furosamide'> <Card className='Innercard' boxShadow="lg">FUROSAMIDE </Card> </Link>
      </HStack>
      </Center>

    </Box>
    </Box>
  )
}

export default F
