import { Box, Text, } from '@chakra-ui/react'
import React from 'react'
import { Table, Thead, Tbody, Tr, Td,  Center } from '@chakra-ui/react'
import './../App.css';



const Microbiology = () => {
  return (
    <>
      
      <Center>

        <Box m="20px">
          <Box>
            <Box m="10px">
              <Text color="#EB1414" fontWeight="500" fontSize={'18px'}> Microbiology Agar Media</Text>
            </Box>


            {/* <TableContainer> */}
            <Center>
              <Table variant='striped' width={{ base: '360px', sm: "450px", md: '600px', lg: '750px', xl: '860px' }} m="10px">

                <Thead   background="#0157AC">
                  <Tr className='tableHead' bgColor={'white'} bgClip={'text'}>
                    <Td width="20%"><Center>SNo</Center></Td>
                    <Td width="30%"><Center>Product Code</Center></Td>
                    <Td width="50%"><Center>Column Description </Center></Td>
                  </Tr>
                </Thead>

                <Tbody color={'#333333'} fontSize={'14px'} fontWeight="500" pt='10px'>
                  <Tr>
                    <Td textAlign="center">01</Td>
                    <Td textAlign="center">SVAG0001</Td>
                    <Td lineHeight="25px" align='justify' >
                      Soyabean Casein Digest Agar (SCDA) (55mm Contact Plate),
                      Triple Wrapped, Gamma Irradiated</Td>

                  </Tr>
                  <Tr>
                    <Td textAlign="center">02</Td>
                    <Td textAlign="center">SVAG0002</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) with Lecithin,
                      Polysorbate 80 (55 mm Contact   Plate), Triple Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">03</Td>
                    <Td textAlign="center">SVAG0003</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA)
                      with Penicillinase (55 mm Contact Plate), Triple    Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">04</Td>
                    <Td textAlign="center">SVGA0004</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with a-Lactamase
                      (55 mm Contact Plate), Triple    Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">05</Td>
                    <Td textAlign="center">SVAG0005</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with
                      Lactamase II(55 mm Contact Plate), Triple Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">06</Td>
                    <Td textAlign="center">SVAG0006</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with Lecithin,
                      Polysorbate 80 and  Penicillinase,(55 mm Contact Plate)
                      Triple Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">07</Td>
                    <Td textAlign="center">SVAG0007</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with Lecithin,
                      Polysorbate 80 and  a-Lactamase, (55 mm Contact Plate),
                      Triple Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">08</Td>
                    <Td textAlign="center">SVAG0008</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with Lecithin,
                      Polysorbate 80 and  a-Lactamase II, (55 mm Contact Plate),
                      Triple Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">09</Td>
                    <Td textAlign="center">SVAG0009</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA)
                      90 mm Triple Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">10</Td>
                    <Td textAlign="center">SVAG0010</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA)
                      with Lecithin and Polysorbate 80, 90 mm Triple Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">11</Td>
                    <Td textAlign="center">SVAG0011</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA)
                      with Penicillinase, 90 mm Triple Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">12</Td>
                    <Td textAlign="center">SVAG0012</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) with
                      a-Lactamase, 90 mm Triple  Wrapped,  Gamma Irradiated</Td>
                  </Tr>

                  <Tr>
                    <Td textAlign="center">13</Td>
                    <Td textAlign="center">SVAG0013</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA)
                      with a-Lactamase II, 90 mm  Triple  Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">14</Td>
                    <Td textAlign="center">SVAG0014</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA)
                      with Lacithin,  Polysorbate 80 and Penicillinase,
                      90 mm  Triple  Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">15</Td>
                    <Td textAlign="center">SVAG0015</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA)
                      with Lacithin,  Polysorbate 80 and â-Lactamase,
                      90 mm  Triple  Wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">16</Td>
                    <Td textAlign="center">SVAG0016</Td>
                    <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA)
                      with Lacithin,  Polysorbate 80 and â-Lactamase II,
                      90 mm  Triple  Wrapped, Gamma Irradi</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">17</Td>
                    <Td textAlign="center">SVAG0017</Td>
                    <Td lineHeight="25px" align='justify' >Sabouraud Dextrose Agar,90 mm,
                      Triple wrapped,Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">18</Td>
                    <Td textAlign="center">SVAG0018</Td>
                    <Td lineHeight="25px" align='justify' >Sabouraud Dextrose Agar with
                      Lecithin and Polysorbate 80, 90 mm, Triple wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">19</Td>
                    <Td textAlign="center">SVAG0019</Td>
                    <Td lineHeight="25px" align='justify' >Sabouraud Chloramphenicol Agar 90 mm   Triple wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">20</Td>
                    <Td textAlign="center">SVAG0020</Td>
                    <Td lineHeight="25px" align='justify' >Potato Dextrose Agar 90 mm Triple wrapped,
                      Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">21</Td>
                    <Td textAlign="center">SVAG0021</Td>
                    <Td lineHeight="25px" align='justify' >R2A Agar 90 mm Triple wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">22</Td>
                    <Td textAlign="center">SVAG0022</Td>
                    <Td lineHeight="25px" align='justify' >Nutrient Agar 90 mm Triple wrapped, Gamma Irradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">23</Td>
                    <Td textAlign="center">SVAG0023</Td>
                    <Td lineHeight="25px" align='justify'>Plate Count Agar 90 mm Triple wrapped, Gamma Irradiated</Td>
                  </Tr>

                </Tbody>

              </Table>
            </Center>
            {/* </TableContainer> */}
          </Box>


          <Box>
            <Box m="20px">
              <Text color="#EB1414" fontWeight="500" fontSize={'18px'} >Selective Agar Media</Text>
            </Box>
            <Center>
              {/* <TableContainer> */}
              <Table variant='striped' width={{ base: '360px', sm: "450px", md: '600px', lg: '750px', xl: '860px' }}>

                <Thead  background="#0157AC" >
                  <Tr className='tableHead' bgColor={'white'} bgClip={'text'}>
                    <Td width="20%"><Center>SNo</Center></Td>
                    <Td width="30%"><Center>Product Code</Center></Td>
                    <Td width="50%"><Center>Column Description </Center></Td>
                  </Tr>
                </Thead>

                <Tbody color={'#333333'} fontSize={'14px'} fontWeight="500" pt='10px'>
                  <Tr>
                    <Td textAlign="center">01</Td>
                    <Td textAlign="center">SVAG0001</Td>
                    <Td lineHeight="25px">Mannitol Salt Aga 90 mm Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">02</Td>
                    <Td textAlign="center">SVAG0002</Td>
                    <Td lineHeight="25px">Cetrimide Agar 90 mm Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">03</Td>
                    <Td textAlign="center">SVAG0003</Td>
                    <Td lineHeight="25px">Xylose Lysine Deoxycholate Agar 90 mm    Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">04</Td>
                    <Td textAlign="center">SVAG0004</Td>
                    <Td lineHeight="25px">Mac Conkey Agar 90 mm Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">05</Td>
                    <Td textAlign="center">SVAG0005</Td>
                    <Td lineHeight="25px">Violet Red Bile Glucose Agar 90 mm Triple    wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">06</Td>
                    <Td textAlign="center">SVAG0006</Td>
                    <Td lineHeight="25px">Pseudomonas Fluorescein Agar 90 mm Triple    wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">07</Td>
                    <Td textAlign="center">SVAG0007</Td>
                    <Td lineHeight="25px">Pseudomonas Pyocyanin Agar 90 mm Triple    wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">08</Td>
                    <Td textAlign="center">SVAG0008</Td>
                    <Td lineHeight="25px">Columbia Agar 90 mm Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">09</Td>
                    <Td textAlign="center">SVAG0009</Td>
                    <Td lineHeight="25px">Chocolate Agar 90 mm Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">10</Td>
                    <Td textAlign="center">SVAG0010</Td>
                    <Td lineHeight="25px">EMB(Eosin Methylene Blue) Agar 90mm    Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">11</Td>
                    <Td textAlign="center">SVAG0011</Td>
                    <Td lineHeight="25px">CLED Agar 90 mm Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">12</Td>
                    <Td textAlign="center">SVAG0012</Td>
                    <Td lineHeight="25px">Sheep Blood Agar(5% Sheep Blood) 90 mm    Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">13</Td>
                    <Td textAlign="center">SVAG0013</Td>
                    <Td lineHeight="25px">SS (Salmonella Shigella) Agar 90mm Triple    wrapped</Td>
                  </Tr>

                  <Tr>
                    <Td textAlign="center">14</Td>
                    <Td textAlign="center">SVAG0014</Td>
                    <Td lineHeight="25px">Triple Sugar Iron Agar 90 mm Triple wrapped</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">15</Td>
                    <Td textAlign="center">SVAG0015</Td>
                    <Td lineHeight="25px">Dey-Engeley Neutralizing Agar90 mm Triple    wrapped, GammaIrradiated</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">16</Td>
                    <Td textAlign="center">SVAG0016</Td>
                    <Td lineHeight="25px">Dey-Engeley Neutralizing Agar 55 mm Triple    wrapped Gamma Irradiated</Td>
                  </Tr>
                </Tbody>

              </Table>
              {/* </TableContainer> */}
            </Center>
          </Box>


          <Box>
            <Box m="20px">
              <Text color="#EB1414" fontWeight="500" fontSize={'18px'} >Both Media in Tubes/Glass Bottles</Text>
            </Box>
            <Center>
              {/* <TableContainer> */}
              <Table variant='striped' width={{ base: '360px', sm: "450px", md: '600px', lg: '750px', xl: '860px' }}>

                <Thead  background="#0157AC" >
                  <Tr className='tableHead' bgColor={'white'} bgClip={'text'}>
                    <Td width="20%"><Center>SNo</Center></Td>
                    <Td width="30%"><Center>Product Code</Center></Td>
                    <Td width="50%"><Center>Column Description </Center></Td>
                  </Tr>
                </Thead>

                <Tbody color={'#333333'} fontSize={'14px'} fontWeight="500" pt='10px'>
                  <Tr>
                    <Td textAlign="center">01</Td>
                    <Td textAlign="center">SVB0001</Td>
                    <Td lineHeight="25px">Rappaport Vassiliadis Salmonella Enrichment    Broth 10ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">02</Td>
                    <Td textAlign="center">SVB0002</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Medium 10ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">03</Td>
                    <Td textAlign="center">SVB0003</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Medium with 0.1%    Tween 80 10ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">04</Td>
                    <Td textAlign="center">SVB0004</Td>
                    <Td lineHeight="25px">Soyabean
                      abean Casein Digest Medium 90 ml   (ScrewCap)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">05</Td>
                    <Td textAlign="center">SVB0005</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Medium (Double strength) 100 ml (Screw Cap)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">06</Td>
                    <Td textAlign="center">SVB0006</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Medium 100 ml    (Screw Cap)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">07</Td>
                    <Td textAlign="center">SVB0007</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Medium With 1%    poly 80 100 ml (Screw cap)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">08</Td>
                    <Td textAlign="center">SVB0008</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Medium 100 ml    (Flip-OfSeal) – for Sterility Testing</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">09</Td>
                    <Td textAlign="center">SVB0009</Td>
                    <Td lineHeight="25px">Tetrathionate Bile Brilliant Green Broth 10ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">10</Td>
                    <Td textAlign="center">SVB0010</Td>
                    <Td lineHeight="25px">Sabouraud Dextrose Broth 10ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">11</Td>
                    <Td textAlign="center">SVB0011</Td>
                    <Td lineHeight="25px">Saline Lactose Broth 10 ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">12</Td>
                    <Td textAlign="center">SVB0012</Td>
                    <Td lineHeight="25px">Dey-Engeley Neutralizing Broth 10 ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">13</Td>
                    <Td textAlign="center">SVB0014</Td>
                    <Td lineHeight="25px">0.1% Peptone Water (100ml)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">14</Td>
                    <Td textAlign="center">SVB0015</Td>
                    <Td lineHeight="25px">Sterile Saline 0.9% 10 ml</Td>
                  </Tr>

                  <Tr>
                    <Td textAlign="center">15</Td>
                    <Td textAlign="center">SVB0016</Td>
                    <Td lineHeight="25px">Sterile Saline 0.9% (100 ml)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">16</Td>
                    <Td textAlign="center">SVB0017</Td>
                    <Td lineHeight="25px">Mac Conkey Broth (100 ml) (Screw Cap)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">17</Td>
                    <Td textAlign="center">SVB0018</Td>
                    <Td lineHeight="25px">Enterobacteria Enrichment Broth Mossel (100   ml) (Screw Cap)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">18</Td>
                    <Td textAlign="center">SVB0019</Td>
                    <Td lineHeight="25px">Rinsing Fluid D 100ml (Flip-Of Seal)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">19</Td>
                    <Td textAlign="center">SVB0020</Td>
                    <Td lineHeight="25px">Gram Negative Broth 100ml (Screw Cap)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">20</Td>
                    <Td textAlign="center">SVB0021</Td>
                    <Td lineHeight="25px">Bufered Sodium Chloride Peptone Solution    pH7.0 With 1% poly 80 (100ml) (Screw Cap)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">21</Td>
                    <Td textAlign="center">SVB0022</Td>
                    <Td lineHeight="25px">Bufered Sodium Chloride Peptone Solution    pH 7.0 (100 ml) (Screw Cap)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">22</Td>
                    <Td textAlign="center">SVB0023</Td>
                    <Td lineHeight="25px">Fluid Thioglycollate Medium 100 ml (Flip-Of    Seal)  for Sterility Testing</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">23</Td>
                    <Td textAlign="center">SVB0024</Td>
                    <Td lineHeight="25px">Reinforced Medium for Clostridia (100 ml)    (Screw Cap)</Td>
                  </Tr>
                </Tbody>
              </Table>
              {/* </TableContainer> */}
            </Center>
          </Box>

          <Box>
            <Box m="25px">
              <Text color="#EB1414" fontWeight="500" fontSize={'18px'}>Solidifed Agar Media in Bottles (Screw Cap)</Text> </Box>
            <Center>
              {/* <TableContainer> */}
              <Table variant='striped' width={{ base: '360px', sm: "450px", md: '600px', lg: '750px', xl: '860px' }}>
                <Thead  background="#0157AC" >
                  <Tr className='tableHead' bgColor={'white'} bgClip={'text'}>
                    <Td width="20%"><Center>SNo</Center></Td>
                    <Td width="30%"><Center>Product Code</Center></Td>
                    <Td width="50%"><Center>Column Description </Center></Td>
                  </Tr>
                </Thead>
                <Tbody color={'#333333'} fontSize={'14px'} fontWeight="500" pt='10px'>
                  <Tr>
                    <Td textAlign="center">01</Td>
                    <Td textAlign="center">SVSAB0001</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Agar, 100 ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">02</Td>
                    <Td textAlign="center">SVSAB0002</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Agar With 0.07%    Lecethin & 0.5% Poly 80, 100 ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">03</Td>
                    <Td textAlign="center">SVSAB0003</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Agar With 0.07%    Lecethin & 0.5% Poly 20, 100 ml </Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">04</Td>
                    <Td textAlign="center">SVSAB0004</Td>
                    <Td lineHeight="25px">Soyabean Casein Digest Agar, 20 ml (slant)</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">05</Td>
                    <Td textAlign="center">SVSAB0005</Td>
                    <Td lineHeight="25px">Sabouraud Dextrose Agar, 100 ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">06</Td>
                    <Td textAlign="center">SVSAB0006</Td>
                    <Td lineHeight="25px">Sabouraud Dextrose Agar Agar With 0.07%    Lecethin & 0.5 % Poly 80, 100 ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">07</Td>
                    <Td textAlign="center">SVSAB0007</Td>
                    <Td lineHeight="25px">R2A, 100 ml</Td>
                  </Tr>
                  <Tr>
                    <Td textAlign="center">08</Td>
                    <Td textAlign="center">SVSAB0008</Td>
                    <Td lineHeight="25px">Plate Count Agar, 100 ml</Td>
                  </Tr>
                </Tbody>
              </Table>
              {/* </TableContainer> */}
            </Center>
          </Box>
        </Box>
      </Center>
    </>


  )
}

export default Microbiology;