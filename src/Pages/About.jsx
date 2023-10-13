import React from 'react'
import { Box, VStack,Center,  Text,  Flex,  Image, SimpleGrid } from '@chakra-ui/react'
import './../App.css';



const About = () => {
  return (
    <Box>
      
      <Box margin="30px" >
        {/* <HStack> */}
        <Center>
        <Box className="aboutHead">
                <Text >About Sri Scientifics</Text>
              </Box>
        </Center>
        <Flex direction={{ base: 'column', xl: 'row' }} className='about'>
          <Box className='aboutContent' align="justify" >
           
                <Text   lineHeight="25px">
                  SRI Scientifics is an emerging company with
                  excellent market rating and company profile is based
                  on manufacturing of impurities, marketing of
                  Impurities, HPLC Columns, Chemicals & solvents and
                  testing support for ROW market in different APIs &
                  Intermediates
                </Text>

                <Text pt="15px" lineHeight="25px"color="#333333">
                  We have an exclusive Authorization for Distribution of
                  USP listed ADHOC Brand HPLC Columns and
                  Microbiology media over the market of AP, Telangana
                  and selected areas in Gujarat & Pune in India.
                </Text>

                <Text pt="15px" lineHeight="25px" >
                  We have an import and export permission to Canada,
                  Singapore, USA.
                </Text>

                <Text paddingTop="15px" lineHeight="25px">
                  We have an authorization for Thermo Fischer, SRL,
                  Avra for all chemicals and solvents. We have good
                  experience in supplying the consumables for the
                  chromatographic applications.
                </Text>
              
          </Box>
          <Image src='./aboutus-banner.png' alt='about us' className='aboutImage'/>
        {/* </HStack> */}
        </Flex>
      </Box>

      {/* <Box margin="50px" color="756F6F" align="justify" height="300px"> */}
        {/* <HStack spacing="50px">           */}
        <SimpleGrid columns={{ base: 1, xl:3 }} spacing={{lg:4,xl:8}} className='aboutChemicals'>
            

            <Box m={{base:"0px",lg:"10px"}} color="##333333">
             <VStack>
              <Box borderBottom="2px solid #0157AC" pb="4px" >
                <Text color="#0157AC" fontSize="20px" as="b"> Chemical and Solvents: </Text>
                </Box>
                
                <Box align="justify">
                <Text lineHeight="30px">We are suppliers for  Thermo Fischer brand 
                chemicals and solvents which includes HPLC/GC 
                solvents in variant grades.</Text>
                <Text lineHeight="30px">Apart from the above, we will be supplying all
                synthesis grade chemicals/solvents from Avra, SRL 
                and Fluka brands.</Text>
                <Text lineHeight="30px">We are specialized in supplying Honeywell, Advent, 
                Bio-solve grade spectroscopic solvents.</Text>
                </Box>
                </VStack>
            </Box>

            <Box m={{base:"0px",lg:"10px"}} color="##333333">
             <VStack>
              <Box borderBottom="2px solid #0157AC" pb="4px">
                <Text color="#0157AC" fontSize="20px" as="b"> Microbiology Media: </Text>
                </Box>
                <Box align="justify">
                <Text lineHeight="30px">We are authorized distributers for all types of Agar 
                media and different types of medias for microbiology labs.</Text>
                </Box>
                </VStack>
            </Box>

            <Box m={{base:"0px",lg:"10px"}}>
              <VStack  >
                <Box borderBottom="2px solid #0157AC" pb="4px">
                <Text color="#0157AC" fontSize="20px" as="b"> Impurities and Standards: </Text>
                </Box>
                
                <Box align="justify">
                <Text lineHeight="30px" color="##333333">All primary reference standards, We have 
              characterized in-house impurities with testing data
              andCOA.</Text>
              </Box>
              </VStack>
            </Box>
            </SimpleGrid>
          {/* </HStack> */}
      {/* </Box> */}
    </Box>
  )
}

export default About
