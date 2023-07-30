import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const E = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 20</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Ebastine'> <Card className='Innercard' boxShadow="lg">EBASTINE </Card> </Link>
       <Link to='/Edarvone'> <Card className='Innercard' boxShadow="lg">  EDARAVONE</Card> </Link>
       <Link to='/Efinaconazole'> <Card className='Innercard' boxShadow="lg">EFINACONAZOLE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Emtricitabine'> <Card className='Innercard' boxShadow="lg">EMTRICITABINE </Card> </Link>
       <Link to='/Empagliflozin1'> <Card className='Innercard' boxShadow="lg"> EMPAGLIFLOZIN </Card> </Link>
       <Link to='/Empagliflozin2'> <Card className='Innercard' boxShadow="lg"> EMPAGLIFLOZIN </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Enrofloxacin'> <Card className='Innercard' boxShadow="lg">ENROFLOXACIN</Card> </Link>
       <Link to='/Enzalutamide'> <Card className='Innercard' boxShadow="lg">ENZALUTAMIDE </Card> </Link>
       <Link to='/Enalapril'> <Card className='Innercard' boxShadow="lg"> ENALAPRIL </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Elagolix'> <Card className='Innercard' boxShadow="lg">ELAGOLIX </Card> </Link>
       <Link to='/Eltrombopag'> <Card className='Innercard' boxShadow="lg">ELTROMBOPAG</Card> </Link>
       <Link to='/Eplerenone'> <Card className='Innercard' boxShadow="lg">EPLERENONE  </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Eszopiclonee'> <Card className='Innercard' boxShadow="lg">ESZOPICLONEE</Card> </Link>
       <Link to='/Esmolol'> <Card className='Innercard' boxShadow="lg"> ESMOLOL</Card> </Link>
       <Link to='/Estradiol'> <Card className='Innercard' boxShadow="lg"> ESTRADIOL </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Etodolac'> <Card className='Innercard' boxShadow="lg">ETODOLAC</Card> </Link>
       <Link to='/Etoposide'> <Card className='Innercard' boxShadow="lg"> ETOPOSIDE</Card> </Link>
       <Link to='/Etomidate'> <Card className='Innercard' boxShadow="lg">ETOMIDATE  </Card> </Link>
       
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Erythromycin'> <Card className='Innercard' boxShadow="lg">ERYTHROMYCIN</Card> </Link>
       <Link to='/Exemestane'> <Card className='Innercard' boxShadow="lg">EXEMESTANE </Card> </Link>
       <Link to='/Ezetimibe1'> <Card className='Innercard' boxShadow="lg">EZETIMIBE  </Card> </Link>
      </HStack>
      </Center>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Ezetimibe2'> <Card className='Innercard' boxShadow="lg">EZETIMIBE  </Card> </Link>
      </HStack>
      </Center>

    </Box>
    </Box>
  )
}

export default E
