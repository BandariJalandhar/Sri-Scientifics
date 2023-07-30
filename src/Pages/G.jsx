import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const G = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 11</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Gabapentin1'> <Card className='Innercard' boxShadow="lg">GABAPENTIN 1 </Card> </Link>
       <Link to='/Gabapentin2'> <Card className='Innercard' boxShadow="lg">GABAPENTIN 2 </Card> </Link>

       <Link to='/Ganciclovir'> <Card className='Innercard' boxShadow="lg"> GANCICLOVIR </Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Gefitinib'> <Card className='Innercard' boxShadow="lg">GEFITINIB</Card> </Link>

       <Link to='/Gentamicine'> <Card className='Innercard' boxShadow="lg">GENTAMICINE </Card> </Link>
       <Link to='/Gemfibrozil'> <Card className='Innercard' boxShadow="lg"> GEMFIBROZIL </Card> </Link>
      </HStack>
      </Center>
      

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Glibenclamide'> <Card className='Innercard' boxShadow="lg">GLIBENCLAMIDE</Card> </Link>

       <Link to='/Glycopyrrolate'> <Card className='Innercard' boxShadow="lg">GLYCOPYRROLATE </Card> </Link>
       <Link to='/Glimiperide'> <Card className='Innercard' boxShadow="lg"> GLIMIPERIDE </Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Granisetron'> <Card className='Innercard' boxShadow="lg">GRANISETRON</Card> </Link>

       <Link to='/Griseofulvin'> <Card className='Innercard' boxShadow="lg">GRISEOFULVIN </Card> </Link>
       <Link to='/Guaifenesin'> <Card className='Innercard' boxShadow="lg"> GUAIFENESIN </Card> </Link>
      </HStack>
      </Center>

    </Box>
    </Box>
  )
}

export default G
