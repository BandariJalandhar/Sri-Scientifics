import { Box,Text,ListItem,UnorderedList,HStack,} from '@chakra-ui/react'
import {Card,CardBody,Image,Heading,Divider,VStack,} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Norepinephrine = () => {
  return (
    <div>
      <Box>
        <HStack>
        <Box position="relative">
        <Box width="300px" paddingLeft="30px" borderColor="gray"> 
          <Box margin="1px" padding="10px" paddingTop="60px"><Text  paddingBottom="15px" marginBottom="1px" borderBottom="1px">Category : NOREPINEPHRINE </Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px"borderBottom="1px"  paddingBottom="15px"> Total Products : 1</Text></Box>
          <Box margin="1px" padding="10px"><Text marginBottom="1px" borderBottom="1px"  paddingBottom="15px">Filter By: API</Text></Box>
        </Box>
        <Box display='block' overflowY='scroll' paddingLeft="80px" marginTop="10px" height='300px'>
        <UnorderedList margin="2px" spacing="10px">
            <Link to='/Naproxen'><ListItem>Naproxen</ListItem></Link>
            <Link to='/Nirmatrelvir'><ListItem> Nirmatrelvir </ListItem></Link>
            <Link to='/Nintedanib'><ListItem> Nintedanib </ListItem></Link>
            <Link to='/Nebivolol'><ListItem> Nebivolol </ListItem></Link>
            <Link to='/Neaminehydrochloride'><ListItem> Neamine Hydrachloride </ListItem></Link>
            <Link to='/Naphazoline'><ListItem> Naphazoline </ListItem></Link>
            <Link to='/Naringenin'><ListItem> Naringenin </ListItem></Link>
            <Link to='/Naloxegol'><ListItem> Naloxegol </ListItem></Link>
            <Link to='/Nitrofurantoin'><ListItem> Nitrofurantoin </ListItem></Link>
            <Link to='/Nicotine'><ListItem> Nicotine </ListItem></Link>
            <Link to='/Nicardipine'><ListItem> Nicardipine </ListItem></Link>
            <Link to='/Nifedipine'><ListItem> Nifedipine </ListItem></Link>
            <Link to='/Nefopam'><ListItem> Nefopam </ListItem></Link>
            <Link to='/Nalbuphine'><ListItem> Nalbuphine </ListItem></Link>
            <Link to='/Norepinephrine'><ListItem> Norepinephrine </ListItem></Link>
        </UnorderedList>
        </Box>
      </Box>
  


<Box>
         <Box marginLeft="10px">
            <Box marginLeft="100px"  padding="10px"><Heading >Pharmaceuticals Reference Standards</Heading></Box></Box>
         <Box margin="10px" marginLeft="20px">
            <VStack>
                <HStack>

                <Card className='Subcard' boxShadow="dark-lg">              
          <CardBody>
            <Text align="justify" textAlign="center" fontSize="20px">Norepinephrine Impurity-B Hydrochloride </Text>
            <Divider marginTop="10px" paddingTop="5px"/>
            <Box padding="10px">
              <Image src="/phy.png" className='Image'></Image>
            </Box>
            <Box margin="5px" paddingTop="30px" >
            <HStack>
              <Box> <Text>CAT NO </Text> </Box>
              <Text paddingLeft="0px"> : 124646-10-2</Text> 
            </HStack>
            <HStack>
              <Box> <Text>CAS NO</Text> </Box>
              <Text paddingLeft="0px"> : 2484719-11-9</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.F.</Text> </Box>
              <Text paddingLeft="15px"> : C26H33NO3</Text> 
            </HStack>
            <HStack>
              <Box> <Text>Mol.Wt.</Text> </Box>
              <Text paddingLeft="5px"> : 407.5</Text> 
            </HStack>
            <HStack>
              <Box> <Text color="blue">lnv.Staus</Text> </Box>
              <Text color="blue" paddingLeft="0px"> : ln Stock</Text> 
            </HStack>
            </Box>
          </CardBody>
        </Card>
</HStack>
                
            </VStack>
         </Box>
  
    </Box>

        </HStack>
        <Box marginTop="10px" paddingTop="10px">
        </Box>
      </Box>
    </div>
  )
}

export default Norepinephrine

