import React from 'react'
import { Box, VStack, Heading, Text, Divider, Stack, Flex, Button, HStack, Image } from '@chakra-ui/react'
import './../App.css';


const About = () => {
  return (
    <Box>

      <Box margin="20px" >
        <HStack>
          <Box margin="20px">
            <VStack>
              <Box >
                <Text  as="b" fontSize="35px" color="#215878">About Sri Scientifics</Text>
              </Box>

              <Box align="justify" color="#756F6F" >
                <Text  pt="15px" lineHeight="25px">
                  SRI Scientifics is an emerging company with
                  excellent market rating and company profile is based
                  on manufacturing of impurities, marketing of
                  Impurities, HPLC Columns, Chemicals & solvents and
                  testing support for ROW market in different APIs &
                  Intermediates
                </Text>

                <Text pt="15px" lineHeight="25px"  >
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
            </VStack>
          </Box>
          <Image src='./aboutbanner.png' alt='about us' />
        </HStack>
      </Box>

      <Box margin="50px" color="756F6F" align="justify" height="300px">
        <HStack spacing="50px">          
            <Box height="200px">
              <VStack paddingBottom="20px" >
                <Text color="#215878" fontSize="20px" as="b"> IMPURITIES AND STANDARDS: </Text>
                <Divider border="1px" color="#756F6F" width="80%" />
                <Text lineHeight="30px">All primary reference standards, We have 
              characterized in-house impurities with testing data
              andCOA.</Text>
              </VStack>
            </Box>

            <Box height="200px">
              <VStack paddingBottom="20px" >
                <Text color="#215878" fontSize="20px" as="b"> CHEMICALS AND SOLVENTS: </Text>
                <Divider border="1px" color="#756F6F" width="80%"/>
                <Text lineHeight="30px">We are suppliers for <b> Thermo Fischer </b> brand 
                chemicals and solvents which includes HPLC/GC 
                solvents in variant grades.</Text>
                <Text lineHeight="30px">Apart from the above, we will be supplying all
                synthesis grade chemicals/solvents from Avra, SRL 
                and Fluka brands.</Text>
                <Text lineHeight="30px">We are specialized in supplying Honeywell, Advent, 
                Bio-solve grade spectroscopic solvents.</Text>
              </VStack>
            </Box>

            <Box height="200px">
              <VStack paddingBottom="20px" >
                <Text color="#215878" fontSize="20px" as="b"> Microbiology media: </Text>
                <Divider border="1px" color="#756F6F" width="80%" />
                <Text lineHeight="30px">We are authorized distributers for all types of Agar 
                media and different types of medias for microbiology labs.</Text>
              </VStack>
            </Box>
          </HStack>
      </Box>
    </Box>
  )
}

export default About
