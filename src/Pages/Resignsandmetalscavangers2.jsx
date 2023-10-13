import { Box, HStack, Heading, Flex, Text, Stack, Card, CardBody, Center, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import './../App.css';


const Resignsandmetalscavangers2 = () => {
    return (
        <>
            
            <Center>

                <Box>

                    <Box m="20px" >
                        <Heading color="#0157AC" size="md"> Polystyrene Supported metal Scavengers</Heading>
                    </Box>



                    {/* Card-1 */}

                    {/* <Box>  */}
                    <Box>
                        {/* <HStack m="15px" spacing={4}> */}
                        <Center>
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={"2"} >
                                <Box >
                                    <Card className='resigns'  >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>MP - Thiophenol Resin</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text pt="10px" pb="10px"> Molecular Formula : NA </Text>
                                                        <Text  >Thiophenol resin is a macro porous polystyrene resin with a thiol end group.
                                                            Thiophenol resin is mainly used in the pharmaceutical industries as a metal scavenger such as Pd, Pt, Cu, Hg, Ag &Pb. Also,
                                                            this resin is effective in scavenging the alkyl halides</Text>
                                                        <HStack pt="10PX" spacing="15px"  >
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICM-001 </Text><Text>SICM-002</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 15-50 </Text><Text>100-200</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text> 4.0  to 4.8 </Text> <Text>2.3 to 2.5</Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-2 */}
                                <Box     >
                                    <Card className='resigns'  >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='10px'>MP - Thiourea Resin</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text>Thiourea resin is a macro porous polystyrene resin with a thiourea end group.
                                                            Thiourea resin is versatile scavenger for organo-metallic species and also,
                                                            efficient in scavenging of other transitional metals like Pt, Ru, Ag & Hg.</Text>
                                                        <HStack paddingTop="5PX" spacing="17px">
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICM-003 </Text><Text>SICM-004</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 15-50 </Text><Text>100-200</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text> 3.2  to 3.6  </Text> <Text>1.6 to 1.8</Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-3 */}

                                <Box >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>MP-TMT Resin</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synoryn : 2, 4, 6 trimercaptotriazine resin</Text>
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text>TMT resin is a macro porous resin bound with an equivalent of 2,4,6 trimercaptotriazine.
                                                            TMT resin is an inert robust, low swelling adsorbent, which makes it ideal for restricted volume environments.
                                                        </Text>
                                                        <HStack >
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICM-005 </Text><Text>SICM-006</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 15-50 </Text><Text>100-200</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text> 3.0  to 3.4</Text> <Text>1.5 to 1.8</Text>
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
                        {/* </HStack> */}

                    </Box>


                    {/* Polymer Bound Regents  */}

                    {/* Card - 1 */}

                    {/* <Box> */}
                    <Box m="25px"> <Heading color="#0157AC" size="md" > Polymer Bound Regents</Heading> </Box>
                    {/* <HStack m="15px" spacing={4}>  
                                            */}
                    <Center>
                        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={"4"} >
                            <Box>
                                <Card className='resigns' >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack>
                                            <Heading size='12px'>MP-Borohydride Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text>Borohydride resin is a macro porousresin with an equivalent of tetra alkyl ammonium borohydride.
                                                        It is a versatile reducing agent used for the reduction of carbonyl compounds and imines and the reductive
                                                        amination of aldehydes and ketones.

                                                    </Text>
                                                    <HStack >
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICR-001</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text> <Text> 15-50 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> (mmol/g) </Text> <Text> 2.0 to 2.5 </Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>

                            {/* Card-2 */}


                            <Box     >
                                <Card className='resigns' >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack >
                                            <Heading size='10px'>MP-Cyanoborohydride Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text>
                                                        Cyanoborohydride resin is a macro porous resin with an equivalent of tetra alkyl ammonium Cyanoborohydride.
                                                        The bound Cyanoborohydride resin is a versatile reducing agent for the reduction of carbonyl compounds and imines.

                                                    </Text>
                                                    <HStack >
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICR-002</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text> <Text> 15-50 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> (mmol/g) </Text> <Text> 2.0 to 2.5 </Text>
                                                        </Box>
                                                    </HStack>
                                                </Box>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>

                            {/* Card-3 */}
                            <Box >
                                <Card className='resigns' >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack >
                                            <Heading size='12px'>PS-Aldehyde Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synoryn : Benzaldehyde Resin</Text>

                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text>
                                                        Aldehyde resin is anpolystyrene resin with an equivalent of Benzaldehyde.
                                                        This resin is useful for scavenging various nucleophiles including primary amines,
                                                        selectively compared with secondary amines.

                                                    </Text>
                                                    <HStack >
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICR-003</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text> <Text> 100-200 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> (mmol/g) </Text> <Text> 1.0 to 1.2</Text>
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
                            {/* </Box> */}

                            {/* Card-4 */}
                            {/* <Box>  */}
                            {/* <HStack m="15px" spacing={4}> */}
                            <Box>
                                <Card className='resigns' >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack mt='6' spacing='1'>
                                            <Heading size='10px'>PS-Isocyanate Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Synoryn :  </Text>
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text>

                                                        Isocyanate resin is a polystyrene resin with 1% DVB cross linkage and with an equivalent of benzyl
                                                        isocyanate end group functionality. This resin can be readily scavengingthe excess of nucleophiles,
                                                        which are often used to drive reactions to completion. </Text>

                                                    <HStack>
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICR-004</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text> <Text> 100-200 </Text>
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

                            {/* Card-5 */}


                            <Box >
                                <Card className='resigns' >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack >
                                            <Heading size='12px'>MP-Cyanoborohydride Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">
                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text>
                                                        Cyanoborohydride resin is a macro porous resin with an equivalent of tetra alkyl ammonium Cyanoborohydride.
                                                        The bound Cyanoborohydride resin is a versatile reducing agent for the reduction of carbonyl compounds and imines.                              </Text>
                                                    <HStack >
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICR-002</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text> <Text> 15-50 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> (mmol/g) </Text> <Text> 2.0 to 2.5 </Text>
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
                                <Card className='resigns' >
                                    <CardBody>
                                        {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                        <Stack >
                                            <Heading size='12px'>MP-Piperazine Resin</Heading>
                                            <Flex>
                                                <Box fontSize="13px">

                                                    <Text> Molecular Formula : NA </Text>
                                                    <Text>
                                                        Piperazine resin is the resin bound with an equivalent of piperazine.
                                                        This resin has been developed to serve as a knoevenagel catalyst.
                                                        it will eliminate thepiperidine –derived by products and reduces the trans-esterification while using the alcohol as a solvent.

                                                    </Text>
                                                    <HStack >
                                                        <Box>
                                                            <Text> Catalogue number  </Text> <Text> SICR-005</Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> Mesh size Loading </Text> <Text> 100-200 </Text>
                                                        </Box>
                                                        <Box>
                                                            <Text> (mmol/g) </Text> <Text> 1.0 to 1.2</Text>
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
                        </SimpleGrid>
                    </Center>



                    {/* Card - 1 */}
                    <Box>
                        <Box m="25px">
                            <Heading color="#0157AC" size="md">Ion Exchange Resign</Heading>
                        </Box>
                        {/* <HStack m="15px" spacing={4}> */}
                        <Center>
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={"4"} >

                                {/* Card-1 */}
                                <Box     >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Sulfonic Acid Resin</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synoryn :  </Text>
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text>
                                                            Sulfonic Acid resin is a strong cation exchange resin and is capable of scavenging the
                                                            heterocyclic bases, in addition to primary, secondary and tertiary amines.
                                                        </Text>
                                                        <HStack>
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICI-001	</Text><Text>SICI-002	</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Ionic Form	</Text><Text>H-+</Text><Text>Na+</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 15-50</Text><Text>15-50	</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text>2.0 to 2.5</Text><Text>4.5 to 5.0</Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-2 */}


                                <Box     >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Carboxylic Acid Resin</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text>
                                                            Cyanoborohydride resin is a macro porous resin with an equivalent of tetra alkyl ammonium Cyanoborohydride.
                                                            The bound Cyanoborohydride resin is a versatile reducing agent for the reduction of carbonyl compounds and imines.


                                                        </Text>
                                                        <HStack >
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICI-003</Text><Text>SICI-004</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Ionic Form	</Text><Text>H-+</Text><Text>Na+</Text>
                                                            </Box>


                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 15-50 </Text><Text> 15-50 </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text> 3.5 to 5.0</Text> <Text> 2.0 to 2.5 </Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-3 */}
                                <Box     >
                                    <Card className='resigns'  >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Triethylamine Resin</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">


                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text>
                                                            Triethylamine Resin is a macro porous polystyrene resin functionalized with a triethylamine end group.
                                                            It is commonly used as a acid scavenger useful for sequestering acidic residues as they are generated during reactions.

                                                        </Text>
                                                        <HStack paddingTop="5PX" spacing="17px">
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICI-005</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 15-50</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text> 3.0 to 3.5</Text>
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

                                {/* Card-4 */}

                                {/* <Box>  */}
                                {/* <HStack m="15px" spacing={4}> */}

                                <Box     >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack>
                                                <Heading size='12px'>Hydroxide Resin</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synoryn : NA </Text>

                                                        <Text> CAS Number : NA</Text>
                                                        <Text> Molecular Formula : NA </Text>
                                                        <HStack >
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICI-006</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 15-50</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text>1.0 to 1.5</Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-5 */}


                                <Box     >
                                    <Card className='resigns'  >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Carbonate Resin</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text>
                                                            Carbonate resin is macro porous polystyrene anion exchange resin
                                                            that is solid supported equivalent of tetraalkylammonium carbonate.
                                                            This resin is used as a general base to quench reactions, neutralize amine hydrochlorides,
                                                            or to scavenge a variety of acid molecules such as carboxylic acids or acidic phenols.



                                                        </Text>
                                                        <HStack  >
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICI-003</Text><Text>SICI-004</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> Ionic Form	</Text><Text>H-+</Text><Text>Na+</Text>
                                                            </Box>


                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 15-50 </Text><Text> 15-50 </Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text> 3.5 to 5.0</Text> <Text> 2.0 to 2.5 </Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* </HStack> */}

                            </SimpleGrid>
                        </Center>
                    </Box>



                    <Box>
                        <Box m="25px">
                            <Heading color="#0157AC" size="md">Reverse Phase Silica Gel</Heading>
                        </Box>
                        {/* <HStack m="15px" spacing={4}> */}
                        <Center>
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={"4"} >
                                {/* Card-1 */}
                                <Box     >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>C18 Spherical Silica</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synoryn : Octadecyl phase  </Text>


                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text>
                                                            C18 silica gel is the most popular and versatile reverse phase and capable of
                                                            interactions with a wide variety of organic compounds.               </Text>

                                                        <HStack >
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICC-001</Text><Text>SICI-002	</Text>
                                                            </Box>

                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 10 µm</Text><Text>10 µm	</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text>C% 16 to 18</Text><Text>C% 12 to 16</Text>
                                                            </Box>
                                                        </HStack>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-2 */}


                                <Box     >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>C8 Spherical Silica</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text> Synoryn : Octyl phase </Text>

                                                        <Text> Molecular Formula : NA </Text>
                                                        <Text>
                                                            C8 silica gel is used for the phase chromatography for the separation of non-polar to moderately polar
                                                            compounds such as steroids, Nucleosides, Cyclodextrins, Pharmacological plant constituents.



                                                        </Text>
                                                        <HStack >
                                                            <Box>
                                                                <Text> Catalogue number  </Text> <Text> SICI-003</Text>
                                                            </Box>
                                                            <Box>
                                                            </Box>


                                                            <Box>
                                                                <Text> Mesh size Loading </Text> <Text> 10 µm	</Text>
                                                            </Box>
                                                            <Box>
                                                                <Text> (mmol/g) </Text> <Text> C% 8 to 11</Text>
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

                    </Box>


                    <Box>
                        <Box m="25px">
                            <Heading color="#0157AC" size="md">Linkers</Heading>
                        </Box>
                        {/* <HStack m="15px" spacing={4}> */}
                        <Center>
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={"4"} >
                                {/* Card-1 */}
                                <Box >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack>
                                                <Heading size='12px'>Fmoc-Rink Amide Linker</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No: SICL-001</Text>

                                                        <Text> Synoryn : Rink Amide Linker  </Text>
                                                        <Text> CAS Number :145069-56-3</Text>

                                                        <Text>Molecular weight: 297.31 </Text>
                                                        <Text> Molecular Formula : C32H29NO7 </Text>
                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-2 */}
                                <Box     >
                                    <Card className='resigns'>
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Ramage Linker</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No: SICL-002</Text>

                                                        <Text> Synoryn : Fmoc-Suberol </Text>
                                                        <Text> CAS Number :212783-75-0</Text>

                                                        <Text>Molecular weight: 505.58 </Text>
                                                        <Text> Molecular Formula : C32H27NO5 </Text>
                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* </HStack> */}
                            </SimpleGrid>
                        </Center>
                    </Box>

                    <Box>
                        <Box m="25px">
                            <Heading color="#0157AC" size="md" >Fmoc-Protected Amino Acid</Heading>
                        </Box>
                        {/* <HStack m="15px" spacing={4}> */}
                        <Center>
                            <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={"4"} >
                                {/* Card-1 */}
                                <Box     >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Fmoc-L-Gly-OH</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No: SICF-001</Text>

                                                        <Text> Synoryn : Fmoc-L-Glycine  </Text>
                                                        <Text> CAS Number :29022-11-5</Text>

                                                        <Text>Molecular weight: 297.31 </Text>
                                                        <Text> Molecular Formula : C17H15NO4 </Text>


                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* Card-2 */}
                                <Box     >
                                    <Card className='resigns'  >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Fmoc-L-Ala-OH</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No:  SICF-002</Text>
                                                        <Text> Synoryn : Fmoc-L-Alanine, N-(9-Fluorenylmethoxycarbonyl)-L-alanine </Text>
                                                        <Text> CAS Number : 35661-39-3</Text>
                                                        <Text>Molecular weight: 311.33 </Text>
                                                        <Text> Molecular Formula : C18H17NO4 </Text>
                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-3 */}
                                <Box     >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Fmoc-L-Val-OH</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No:  SICF-003</Text>

                                                        <Text> Synoryn :  Fmoc-L-Valine, N-(9-Fluorenylmethoxycarbonyl)-L-valine </Text>
                                                        <Text> CAS Number : 68858-20-8</Text>

                                                        <Text>Molecular weight: 339.39 </Text>
                                                        <Text> Molecular Formula : C20H21NO4</Text>
                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* </HStack> */}

                                {/* </Box> */}


                                {/* <Box>  */}
                                {/* <HStack m="15px" spacing={4}> */}
                                {/* Card-4 */}
                                <Box     >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Fmoc-L-Ile-OH</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No:  SICF-004</Text>

                                                        <Text> Synoryn :  Fmoc-L-isoleucine, N-(9-Fluorenylmethoxycarbonyl)-L-Isoleucine</Text>
                                                        <Text> CAS Number : 71989-23-6</Text>

                                                        <Text>Molecular weight: 353.41 </Text>
                                                        <Text> Molecular Formula : C21H23NO4</Text>
                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-5 */}

                                <Box >
                                    <Card className='resigns'  >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Fmoc-Leu-OH</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No:  SICF-005</Text>
                                                        <Text> Synoryn : Fmoc-L-leucine, N-(9-Fluorenylmethoxycarbonyl)-L-leucine</Text>
                                                        <Text> CAS Number : 35661-60-0</Text>
                                                        <Text>Molecular weight: 353.41 </Text>
                                                        <Text> Molecular Formula : C21H23NO4</Text>
                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* Card-6 */}
                                <Box>
                                    <Card className='resigns'  >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Fmoc-L-Phe-OH</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No: SICF-006 </Text>

                                                        <Text> Synoryn : Fmoc-L-Phenylalanine, N-(9-Fluorenylmethoxycarbonyl)-L-Phenylalanine</Text>
                                                        <Text> CAS Number : 35661-40-6</Text>

                                                        <Text>Molecular weight: 387.43 </Text>
                                                        <Text> Molecular Formula : C24H21NO4</Text>
                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>
                                {/* </HStack> */}
                                {/* </Box> */}


                                {/* Card-7 */}
                                {/* <Box>  */}
                                {/* <HStack m="15px" spacing={4}> */}
                                <Box >

                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Fmoc-L-Pro-OH </Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No:  SICF-007</Text>
                                                        <Text> Synoryn :  Fmoc-L-Proline, N-(9-Fluorenylmethoxycarbonyl)-L-Proline</Text>
                                                        <Text> CAS Number : 71989-31-6</Text>
                                                        <Text>Molecular weight: 337.37 </Text>
                                                        <Text> Molecular Formula : C20H19NO4</Text>
                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>
                                </Box>

                                {/* Card-8 */}


                                <Box     >
                                    <Card className='resigns' >
                                        <CardBody>
                                            {/* <Center> <Image src='/logo1.png' /> </Center> */}
                                            <Stack >
                                                <Heading size='12px'>Fmoc-D-Phe-OH</Heading>
                                                <Flex>
                                                    <Box fontSize="13px">
                                                        <Text>Catalogue No:  SICF-008</Text>
                                                        <Text> Synoryn : Fmoc-D-Phenylalanine, N-(9-Fluorenylmethoxycarbonyl)-L-Phenylalanine</Text>
                                                        <Text> CAS Number : 86123-10-6</Text>

                                                        <Text>Molecular weight: 387.43</Text>
                                                        <Text> Molecular Formula : C24H21NO4</Text>
                                                        <Text> Purity: ≥99.0 %</Text>
                                                    </Box>
                                                </Flex>
                                            </Stack>
                                        </CardBody>
                                    </Card>

                                </Box>
                                {/* </HStack> */}
                            </SimpleGrid>
                        </Center>
                    </Box>



                </Box>
            </Center>
        </>
    )

}

export default Resignsandmetalscavangers2;