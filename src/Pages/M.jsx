import React from 'react'
import { Box,Heading,HStack,Card,Center, } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const M = () => {
  return (
    <Box>
        <Box>
          <Heading paddingLeft="560px" paddingTop="20px" paddingBottom="20px" color="#565454">Total API : 28</Heading>
      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Manidipine'> <Card className='Innercard' boxShadow="lg"> MANIDIPINE</Card> </Link>
       <Link to='/Metformin1'> <Card className='Innercard' boxShadow="lg">METFORMIN 1 </Card> </Link>
       <Link to='/Metformin2'> <Card className='Innercard' boxShadow="lg">METFORMIN 2 </Card> </Link>

      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Memantine1'> <Card className='Innercard' boxShadow="lg">MEMANTINE 1</Card> </Link>
      <Link to='/Memantine2'> <Card className='Innercard' boxShadow="lg">MEMANTINE 2</Card> </Link>


       <Link to='/Mirabegrone'> <Card className='Innercard' boxShadow="lg">MIRABEGRON </Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Metoprolol1'> <Card className='Innercard' boxShadow="lg">METOPROLOL 1</Card> </Link>

      <Link to='/Metoprolol2'> <Card className='Innercard' boxShadow="lg"> METOPROLOL 2</Card> </Link>

      <Link to='/Mebeverine'> <Card className='Innercard' boxShadow="lg">MEBEVERINE</Card> </Link>

      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Mesalazine'> <Card className='Innercard' boxShadow="lg">MESALAZINE </Card> </Link>
       <Link to='/Melphalan'> <Card className='Innercard' boxShadow="lg"> MELPHALAN </Card> </Link>
       <Link to='/Medetomidine'> <Card className='Innercard' boxShadow="lg">MEDETOMIDINE</Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
       <Link to='/Meloxicam'> <Card className='Innercard' boxShadow="lg"> MELOXICAM</Card> </Link>
       <Link to='/Metronidazole1'> <Card className='Innercard' boxShadow="lg">METRONIDAZOLE 1 </Card> </Link>
       <Link to='/Metronidazole2'> <Card className='Innercard' boxShadow="lg">METRONIDAZOLE 2 </Card> </Link>

      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Meropenem'> <Card className='Innercard' boxShadow="lg">MEROPENEM</Card> </Link>

      <Link to='/Metoclopramide'> <Card className='Innercard' boxShadow="lg">METOCLOPRAMIDE </Card> </Link>

       <Link to='/Methylnaltrexone'> <Card className='Innercard' boxShadow="lg">METHYLNALTREXONE </Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Metamizole'> <Card className='Innercard' boxShadow="lg"> METAMIZOLE </Card> </Link>

       <Link to='/Metolazone'> <Card className='Innercard' boxShadow="lg"> METOLAZONE</Card> </Link>
       <Link to='/Meclazine'> <Card className='Innercard' boxShadow="lg">MECLAZINE  </Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Mevastatin'> <Card className='Innercard' boxShadow="lg">MEVASTATIN</Card> </Link>

       <Link to='/Macitentan'> <Card className='Innercard' boxShadow="lg">MACITENTAN </Card> </Link>
       <Link to='/Midazolam'> <Card className='Innercard' boxShadow="lg"> MIDAZOLAM </Card> </Link>
      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >
      <Link to='/Minocycline'> <Card className='Innercard' boxShadow="lg">MINOCYCLINE</Card> </Link>

       <Link to='/Mirtazepine'> <Card className='Innercard' boxShadow="lg">MIRTAZEPINE </Card> </Link>
       <Link to='/Montelukast1'> <Card className='Innercard' boxShadow="lg"> MONTELUKAST 1 </Card> </Link>

      </HStack>
      </Center>

      <Center>
      <HStack paddingTop="20px" paddingBottom="20px" spacing="20px" >     
      <Link to='/Montelukast2'> <Card className='Innercard' boxShadow="lg"> MONTELUKAST 2</Card> </Link>


      <Link to='/Molnupiravir'> <Card className='Innercard' boxShadow="lg">MOLNUPIRAVIR</Card> </Link>

       <Link to='/Mycophenolicacid'> <Card className='Innercard' boxShadow="lg"> MYCOPHENOLIC ACID</Card> </Link>
      </HStack>
      </Center>
  

    </Box>
    </Box>
  )
}

export default M