
import { Box, HStack, Heading, Flex, Text, Stack, Card, CardBody, Center, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'


const Resignsandmetalscavangers = () => {
    return (
        <>
            <Center>
                <Box>
                    <Box fontSize="20px" m="20px">
                        <Text color="#0157AC" as="b"> Resins & Metal Scavengers </Text>
                    </Box>
                    {/* <Box> */}
                    {/* <HStack m="15px" spacing={4}> */}
                    {/* Card1 */}
                    <Center>
                        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={"4"} >

                            <Box>
                                <Card height="500px" width="350px">
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack>
                                            <Heading size='12px'>Merrifield Resins</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synoryn : Chloroethynol resign </Text>
                                                    <Text> CAS Number : 9003-70-7 </Text>
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text lineHeight="25px" align="justify" pt="10px">Merrifield resin contains the chloromethyl functional support for the synthesis of peptide acids by Boc-chemistry. This resin can be attached to N-Boc Amino Acids via their cesium salts and the resulting Boc-Amino esters will treat with a mixture of TFA/DCM to obtain the free amine,
                                                        which is then utilized in subsequent amide coupling/deportation/coupling sequences, thus generating the desired peptide on solid support</Text>
                                                    <HStack pt="10px" pb="10px">
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICP 001  </Text> <Text> SICP 002 </Text> <Text> SICP 003 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size  </Text> <Text> 100-200  </Text> <Text>  100-200 </Text> <Text> 100-200 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Loading (mmol/g) </Text> <Text> 0.4 to 0.8  </Text>
                                                            <Text>  0.8 to 1.2 </Text> <Text>  1.2 to 1.6 </Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>


                            {/* Card2 */}
                            <Box>
                                <Card height="500px" width="350px" >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack>
                                            <Heading size='12px'> Amino methylPolystyrene Resin (AM Resin)</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synoryn : AM Resin </Text>
                                                    <Text> CAS Number : 89551-24-6</Text>
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text pt="10px" lineHeight="25px" align="justify">Aminomethyl (AM) resin is widelyused as a core resin for acylating with carboxylic acid-containing linkers by employing the standard coupling methods of amide bond formation to lead supports for solid phase organic synthesis.
                                                        It is also used in the solution phase synthesis as a scavenger to remove excess acid derivatives, alkylating agents and other electrophiles</Text>
                                                    <HStack pt="10px" pb="10px">
                                                        <Box>
                                                            <Text> Catalogue number  </Text>
                                                            <Text> SICP 004  </Text>
                                                            <Text> SICP 005 </Text>
                                                            <Text> SICP 006</Text>
                                                            <Text>SICP 007</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size  </Text>
                                                            <Text> 100-200  </Text>
                                                            <Text>  100-200 </Text>
                                                            <Text> 100-200 </Text>
                                                            <Text> 100-200</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Loading (mmol/g) </Text>
                                                            <Text> 0.4 to 0.8  </Text>
                                                            <Text>  0.8 to 1.2 </Text>
                                                            <Text>  1.2 to 1.6 </Text>
                                                            <Text>1.6 to 2.3</Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>

                            {/* Card3 */}
                            <Box>
                                <Card height="500px" width="350px" >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack>
                                            <Heading size='12px'>Rink Amide AM Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synoryn : Fmoc-Rink Amide AM Resin </Text>
                                                    <Text> CAS Number : 183599-10-2</Text>
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text lineHeight="25px" align="justify" pt="10px">Rink amide AM resin is an model support of choice to synthesis the peptide amides through solid phase peptide synthesis using Fmoc chemistry.
                                                        This resin will require the removal of Fmoc protected group prior to use for coupling with amino acids.
                                                        The coupling reaction can be monitored using the Kaiser test. Once the desired peptide is produced, can be cleaved it using 10% TFA in DCM.

                                                    </Text>
                                                    <HStack pt="10px" pb="10px">
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICP 008 </Text> <Text> SICP 009 </Text> <Text> SICP 010</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text> <Text> 100-200  </Text> <Text>  100-200 </Text> <Text> 100-200 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> (mmol/g) </Text> <Text> 0.3 to 0.6  </Text> <Text>  0.6 to 0.8 </Text> <Text>  0.8 to 1.0 </Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>

                            {/* </HStack> */}
                            {/* </Box> */}


                            {/* <Box> */}
                            {/* <HStack m="15px" spacing={4}> */}

                            {/* Card 4 */}
                            <Box>
                                <Card height="500px" width="350px" >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack>
                                            <Heading size='12px'>MBHA Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synoryn : 4-Methylbenzhydrylamine </Text>
                                                    <Text> CAS Number : NA</Text>
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text lineHeight="25px" align="justify"  >MBHA (4-methylbenzhydrylamine) resin is used as a solid support for the synthesis of carboxamides or C-terminal peptide amides by Boc chemistry.
                                                        The resin can be cleaved from the product by HF and it is stable towards TFA conditions.
                                                    </Text>
                                                    <HStack pt="10px" pb="10px">
                                                        <Box>
                                                            <Text> Catalogue number  </Text>
                                                            <Text> SICP 011  </Text>
                                                            <Text> SICP 012 </Text>
                                                            <Text> SICP 013 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text>
                                                            <Text> 100-200  </Text>
                                                            <Text>  100-200 </Text>
                                                            <Text> 100-200 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> (mmol/g) </Text>
                                                            <Text> 0.3 to 0.6 </Text>
                                                            <Text>  0.6 to 0.8 </Text>
                                                            <Text>  1.0 to 1.2</Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>

                            {/* Card 5 */}
                            <Box>
                                <Card height="500px" width="350px" >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack >
                                            <Heading size='10px'>Rinkamide MBHA Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synoryn : Fmoc-Rink amide MBHA resin </Text>
                                                    <Text> CAS Number : 431041-83-7</Text>
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text lineHeight="25px" pt="10px" align="justify">Fmoc-Rinkamide MBHA resin, This support comprises the modified rink amide linker attached via norleucine to MBHA resin. And is an ideal tool for the SPPS of peptide amides.
                                                        Cleavage from this can be affected by a single step of treatment with 95% TFA, Providing peptide amides in high yields and purities</Text>
                                                    <HStack paddingTop="5PX" spacing="17px">
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICP 014 </Text> <Text> SICP 15 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text> <Text> 100-200  </Text> <Text>  100-200 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> (mmol/g) </Text> <Text> 0.3 to 0.6 </Text> <Text>  0.6 to 0.8</Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>

                            {/* Card 6 */}
                            <Box>
                                <Card height="500px" width="350px" >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack>
                                            <Heading size='12px'>2-Chlorotrityl Chloride Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synoryn : 2-CTC Resin</Text>
                                                    <Text> CAS Number : 42074-68-0</Text>
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text pt="10px" lineHeight="25px" align="justify">2-Chlorotrityl Chloride (CTC) resin is commonly used to prepare the C-terminal acid peptides in the solid phase organic synthesis.
                                                        This is extremely an acid-labile resin and can be cleaved under very mild acid conditions without reacting with side chain functional groups like Boc/tBu, Trt/Acm etc. Thus,
                                                        it can also be used to prepare protected peptide sequences and obtained the same through the cleavage from this matrix by treatment with AcOH/TFE/DCM,0.5% TFA or HFIP.
                                                        95% TFA will be used to cleave the resin to obtain the fully deprotected peptide fragments</Text>
                                                    <HStack>
                                                        <Box>
                                                            <Text> Catalogue number  </Text>
                                                            <Text> SICP 016  </Text>
                                                            <Text> SICP 017 </Text>
                                                            <Text> SICP 018 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text> <Text> 100-200  </Text> <Text>  100-200 </Text> <Text> 100-200 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> (mmol/g) </Text> <Text> 0.5 to 0.8  </Text> <Text>  0.8 to 1.2 </Text> <Text>  1.2 to 1.6 </Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>
                            {/* </HStack>
                </Box> */}

                            {/* Card 7 */}
                            {/* <Box>
                    <HStack m="15px" spacing={4}>                         */}
                            <Box >
                                <Card height="500px" width="350px" >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack>
                                            <Heading size='12px'>Wang Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synonym : 4-Benzyloxybenzyl Alcohol Resin </Text>
                                                    <Text> CAS Number : 65307-53-1</Text>
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text lineHeight="25px" align="justify" pt="10px">Su-Sun Wang in 1973 reported the most popular solid-phase linker is the Wang linker (4-hydroxybenzyl alcohol), usually referred to as the Wang resin.
                                                        Commonly used as a solid phase support to accomplish the C-terminal peptide acid.
                                                        The resin can be readily cleaved by moderate treatment with trifluoroacetic acid.</Text>
                                                    <HStack pt="10px" pb="10px">
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICP 019  </Text> <Text> SICP 020 </Text> <Text> SICP 021 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size  </Text> <Text> 100-200  </Text> <Text>  100-200 </Text> <Text> 100-200 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Loading (mmol/g) </Text> <Text> 0.3 to 0.5  </Text> <Text>  0.6 to 0.8 </Text> <Text>  0.9 to 1.1 </Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>

                            {/* Card 8 */}
                            <Box>
                                <Card height="500px" width="350px" >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack>
                                            <Heading size='12px'>FMP Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synonym : (4-Formyl-3-methoxyphenoxymethyl)polystyrene resin\
                                                    </Text>
                                                    <Text> CAS Number : NA </Text>
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text pt="10px" lineHeight="25px" align="justify">FMP Resin is used for the synthesis of high quality azides,
                                                        which could be used for direct “click assembly” and in situ screening of enzyme inhibitors.</Text>
                                                    <HStack paddingTop="5PX" spacing="17px">
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICP 022  </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size  </Text> <Text> 100-200  </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Loading (mmol/g) </Text> <Text> 0.8  to 1.0 </Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>
                        </SimpleGrid>
                    </Center>
                    {/* </HStack>
                </Box> */}

                    {/* Silica Supported Metal Scavengers */}

                    <Box>
                        {/* <Box pt="20px">  */}
                        <Box m="20px" fontSize="20px">
                            <Text color="#0157AC" as="b" pt="50px"> Silica Supported Metal Scavengers</Text>
                        </Box>
                        {/* <HStack m="15px" spacing={4}> */}
                        {/* Card 1 */}
                        <Center>
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={"4"} >
                                <Box>
                                    <Card height="400px" width="350px" >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack>
                                                <Heading size='12px'>SIC - SilicaThiol</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synonym : 3-MercaptopropylFunctionalized silica gel </Text>
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text lineHeight="25px" pt="10px" align="justify">Silica Thiol is the silica bound equivalent of 1-propane thiol.
                                                            it is supreme versatile and healthy metal scavenger used in the pharmaceutical industries to remove the metals like Pd, Pt, Cu, Hg, Ag &Pb.
                                                            It can also be used for the covalent scavenging of alkyl benzyl & aryl halides.</Text>
                                                        <HStack pt="10px" pb="10px">
                                                            <Box>
                                                                <Text> Catalogue number  </Text>
                                                                <Text> SICS-001  </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text>
                                                                <Text> 230-400 </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text>
                                                                <Text> 1.0 to 1.5  </Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* Card-2 */}
                                <Box >
                                    <Card height="400px" width="350px" >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack>
                                                <Heading size='12px'>SIC – Silica Thiourea</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text lineHeight="25px" pt="10px" align="justify">Silica thiourea is a versatile scavenger for all forms of palladium and will also scavenge other transitional metals like Pd, Pt, Rh, Cu, Fe, Ag & Sn.</Text>
                                                        <HStack pt="10px" pb="10px">
                                                            <Box>
                                                                <Text> Catalogue number  </Text>
                                                                <Text> SICS-002  </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size  </Text>
                                                                <Text> 230-400 </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Loading (mmol/g) </Text>
                                                                <Text> 0.8 to 1.2 </Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* Card-3 */}
                                <Box>
                                    <Card height="400px" width="350px" >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack>
                                                <Heading size='12px'>SIC- SilicaTMT</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synoryn : 2,4,6 Trimercaptotriazine silica </Text>
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text lineHeight="25px" pt="10px" align="justify">TMT Silica is the silica bound equivalent of 2,4,6 trimercaptotriazine (TMT).
                                                            It is a versatile metal scavenger for variety of metals and the desired metal scavenger for the ruthenium catalyst.
                                                            TMT silica is the best metal scavenger for As,Ir,Ni,Os,Pd, Pt ,Rh, Ru &Se

                                                        </Text>
                                                        <HStack pt="10px" pb="10px" >
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICS-003  </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 230-400 </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text> 0.3 to 0.8  </Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* </HStack> */}
                                {/* </Box> */}

                                {/* Card 4 */}
                                {/* <Box>  */}
                                {/* <HStack m="15px" spacing={4}>                         */}
                                <Box>
                                    <Card height="400px" width="350px" >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack>
                                                <Heading size='12px'>SIC - Silica Amine</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synonym : Si-WAX </Text>
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text lineHeight="25px" pt="10px" align="justify">Silica Amine is an effective scavenger of acid chlorides, sulfonyl chlorides, isocyanates and other electrophiles.
                                                            It will eliminate the tedious post reaction purification step and scavenges faster, easier to add and filter.
                                                            This is the best scavenger for Cd, Cr, Pd& Rh.</Text>
                                                        <HStack pt="10px" pb="10px" >
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICS-004  </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size  </Text> <Text> 230-400 </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Loading (mmol/g) </Text> <Text> 0.1 to 1.2 </Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-5 */}
                                <Box>
                                    <Card height="400px" width="350px">
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack>
                                                <Heading size='12px'>SIC - Silica Tosic Acid</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synoryn : Si- SCX, Si-TSOH </Text>
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text lineHeight="25px" pt="10px" align="justify">Silica Tosic acid is a strong cation exchanger (SCX) in catch and release purification of amines.
                                                            It is also widely used as a stationary phase in ion exchange chromatography and for scavenging of amines and other basic functionalities.</Text>
                                                        <HStack pt="10px" pb="10px">
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICS-004 </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 230-400 </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text> 1.0 to 1.2 </Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-6 */}
                                <Box>
                                    <Card height="400px" width="350px" >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>SIC-Silica Trisamine</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synoryn :  Si-WAX </Text>
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text lineHeight="25px" pt="10px" align="justify">
                                                            Silica trisamine is an effective for scavenging metals such as Pb, Co, Ru & Pd.
                                                            It is preferred scavenger for Pb. It can also be used as a scavenger for acid chlorides,                                      isocyanates and other electrophiles.  </Text>
                                                        <HStack pt="10px" pb="10px">
                                                            <Box>
                                                                <Text> Catalogue number  </Text>
                                                                <Text> SICS-006  </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text>
                                                                <Text> 230-400 </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text>
                                                                <Text> 1.0 to 1.2 </Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* </HStack> */}
                                {/* </Box>  */}
                            </SimpleGrid>
                        </Center>

                    </Box>

                    <Box align="right" mt="20px" >
                        <Text color="#4169E1" >
                            <Link to="/Resignsandmetalscavangers2" > Next </Link>
                        </Text>
                    </Box>

                </Box>

            </Center>
        </>
    )
}

export default Resignsandmetalscavangers;

