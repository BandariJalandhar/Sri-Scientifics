import { Box, Heading, Image, VStack, Text, } from '@chakra-ui/react'
import React from 'react'
import { Table, Thead, Tbody, Tr, Td, TableContainer, Center } from '@chakra-ui/react'



const Microbiology = () => {
  return (

  <Center> 
    <Box m="40px">
      <Box> 
      <Box m="25px">
        <Text color="#215878" as="b" fontSize={'20px'}> Microbiology Agar Media</Text>
      </Box>

       
        <TableContainer>
          <Table variant='unstyled' width="600px">

            <Thead fontSize={'18px'} >
              <Tr bgColor={'#EB1414'} bgClip={'text'}>
                <Td >SNo</Td>
                <Td>Product Code</Td>
                <Td>Column Description </Td>
              </Tr>
            </Thead>

            <Tbody color={'#756F6F'} fontSize={'16px'} pt='10px'>
              <Tr>
                <Td>01</Td>
                <Td>SVAG0001</Td>
                <Td lineHeight="25px" align='justify' >
                  Soyabean Casein Digest Agar (SCDA) (55mm Contact Plate),
                  <br/> Triple Wrapped, Gamma Irradiated</Td>

              </Tr>
              <Tr>
                <Td>02</Td>
                <Td>SVAG0002</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) with Lecithin, 
                  <br/>Polysorbate 80 (55 mm Contact   Plate), Triple Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>03</Td>
                <Td>SVAG0003</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) 
                  <br/> with Penicillinase (55 mm Contact Plate), Triple    Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>04</Td>
                <Td>SVGA0004</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with a-Lactamase
                  <br/> (55 mm Contact Plate), Triple    Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>05</Td>
                <Td>SVAG0005</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with 
                  <br/> Lactamase II(55 mm Contact Plate), Triple Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>06</Td>
                <Td>SVAG0006</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with Lecithin, 
                   Polysorbate 80 and <br/> Penicillinase,(55 mm Contact Plate)
                    Triple Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>07</Td>
                <Td>SVAG0007</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with Lecithin,  
                   Polysorbate 80 and <br/> a-Lactamase, (55 mm Contact Plate), 
                  Triple Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>08</Td>
                <Td>SVAG0008</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar with Lecithin, 
                   Polysorbate 80 and <br/> a-Lactamase II, (55 mm Contact Plate), 
                    Triple Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>09</Td>
                <Td>SVAG0009</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) 
                  <br/> 90 mm Triple Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>10</Td>
                <Td>SVAG0010</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) 
                  <br/> with Lecithin and Polysorbate 80, 90 mm Triple Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>11</Td>
                <Td>SVAG0011</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) 
                  <br/> with Penicillinase, 90 mm Triple Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>12</Td>
                <Td>SVAG0012</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) with 
                  <br/> a-Lactamase, 90 mm Triple  Wrapped,  Gamma Irradiated</Td>
              </Tr>

              <Tr>
                <Td>13</Td>
                <Td>SVAG0013</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) 
                  <br/> with a-Lactamase II, 90 mm  Triple  Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>14</Td>
                <Td>SVAG0014</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) 
                   with Lacithin, <br/> Polysorbate 80 and Penicillinase, 
                    90 mm  Triple  Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>15</Td>
                <Td>SVAG0015</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) 
                   with Lacithin, <br/> Polysorbate 80 and â-Lactamase,    
                    90 mm  Triple  Wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>16</Td>
                <Td>SVAG0016</Td>
                <Td lineHeight="25px" align='justify' >Soyabean Casein Digest Agar (SCDA) 
                   with Lacithin, <br/> Polysorbate 80 and â-Lactamase II,    
                    90 mm  Triple  Wrapped, Gamma Irradi</Td>
              </Tr>
              <Tr>
                <Td>17</Td>
                <Td>SVAG0017</Td>
                <Td lineHeight="25px" align='justify' >Sabouraud Dextrose Agar,90 mm,
                  <br/> Triple wrapped,Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>18</Td>
                <Td>SVAG0018</Td>
                <Td lineHeight="25px" align='justify' >Sabouraud Dextrose Agar with 
                  <br/> Lecithin and Polysorbate 80, 90 mm, Triple wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>19</Td>
                <Td>SVAG0019</Td>
                <Td lineHeight="25px" align='justify' >Sabouraud Chloramphenicol Agar 90 mm  <br/> Triple wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>20</Td>
                <Td>SVAG0020</Td>
                <Td lineHeight="25px" align='justify' >Potato Dextrose Agar 90 mm Triple wrapped, 
                <br/> Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>21</Td>
                <Td>SVAG0021</Td>
                <Td lineHeight="25px" align='justify' >R2A Agar 90 mm Triple wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>22</Td>
                <Td>SVAG0022</Td>
                <Td lineHeight="25px" align='justify' >Nutrient Agar 90 mm Triple wrapped, Gamma Irradiated</Td>
              </Tr>
              <Tr>
                <Td>23</Td>
                <Td>SVAG0023</Td>
                <Td lineHeight="25px" align='justify'>Plate Count Agar 90 mm Triple wrapped, Gamma Irradiated</Td>
              </Tr>

            </Tbody>

          </Table>
        </TableContainer>
        </Box> 


        <Box> 
        <Box m="25px"> 
        <Text color="#215878" as="b" fontSize={'20px'} >Selective Agar Media</Text>
        </Box>

        <TableContainer>
          <Table variant='unstyled'>

            <Thead fontSize={'18px'} >
              <Tr bgColor={'#EB1414'} bgClip={'text'}>
                <Td >SNo</Td>
                <Td>Product Code</Td>
                <Td >Column Description </Td>
              </Tr>
            </Thead>

            <Tbody color={'#565454'} fontSize={'16px'} pt='10px'>
              <Tr>
                <Td>01</Td>
                <Td>SVAG0001</Td>
                <Td >Mannitol Salt Aga 90 mm Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>02</Td>
                <Td>SVAG0002</Td>
                <Td >Cetrimide Agar 90 mm Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>03</Td>
                <Td>SVAG0003</Td>
                <Td >Xylose Lysine Deoxycholate Agar 90 mm    Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>04</Td>
                <Td>SVAG0004</Td>
                <Td >Mac Conkey Agar 90 mm Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>05</Td>
                <Td>SVAG0005</Td>
                <Td >Violet Red Bile Glucose Agar 90 mm Triple    wrapped</Td>
              </Tr>
              <Tr>
                <Td>06</Td>
                <Td>SVAG0006</Td>
                <Td >Pseudomonas Fluorescein Agar 90 mm Triple    wrapped</Td>
              </Tr>
              <Tr>
                <Td>07</Td>
                <Td>SVAG0007</Td>
                <Td >Pseudomonas Pyocyanin Agar 90 mm Triple    wrapped</Td>
              </Tr>
              <Tr>
                <Td>08</Td>
                <Td>SVAG0008</Td>
                <Td >Columbia Agar 90 mm Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>09</Td>
                <Td>SVAG0009</Td>
                <Td >Chocolate Agar 90 mm Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>10</Td>
                <Td>SVAG0010</Td>
                <Td >EMB(Eosin Methylene Blue) Agar 90mm    Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>11</Td>
                <Td>SVAG0011</Td>
                <Td >CLED Agar 90 mm Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>12</Td>
                <Td>SVAG0012</Td>
                <Td >Sheep Blood Agar(5% Sheep Blood) 90 mm    Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>13</Td>
                <Td>SVAG0013</Td>
                <Td >SS (Salmonella Shigella) Agar 90mm Triple    wrapped</Td>
              </Tr>

              <Tr>
                <Td>14</Td>
                <Td>SVAG0014</Td>
                <Td >Triple Sugar Iron Agar 90 mm Triple wrapped</Td>
              </Tr>
              <Tr>
                <Td>15</Td>
                <Td>SVAG0015</Td>
                <Td >Dey-Engeley Neutralizing Agar90 mm Triple    wrapped, GammaIrradiated</Td>
              </Tr>
              <Tr>
                <Td>16</Td>
                <Td>SVAG0016</Td>
                <Td >Dey-Engeley Neutralizing Agar 55 mm Triple    wrapped Gamma Irradiated</Td>
              </Tr>
            </Tbody>

          </Table>
        </TableContainer>
        </Box>


        <Box> 
        <Box m="25px"> 
        <Text color="#215878" as="b" fontSize={'20px'} >Both Media in Tubes/Glass Bottles</Text>
        </Box>

        <TableContainer>
          <Table variant='unstyled'>

            <Thead fontSize={'18px'} >
              <Tr bgColor={'#EB1414'} bgClip={'text'}>
                <Td >SNo</Td>
                <Td>Product Code</Td>
                <Td >Column Description </Td>
              </Tr>
            </Thead>

           <Tbody color={'#565454'} fontSize={'16px'} pt='10px'>
              <Tr>
                <Td>01</Td>
                <Td>SVB0001</Td>
                <Td >Rappaport Vassiliadis Salmonella Enrichment    Broth 10ml</Td>
              </Tr>
              <Tr>
                <Td>02</Td>
                <Td>SVB0002</Td>
                <Td>Soyabean Casein Digest Medium 10ml</Td>
              </Tr>
              <Tr>
                <Td>03</Td>
                <Td>SVB0003</Td>
                <Td >Soyabean Casein Digest Medium with 0.1%    Tween 80 10ml</Td>
              </Tr>
              <Tr>
                <Td>04</Td>
                <Td>SVB0004</Td>
                <Td >Soyabean
                  abean Casein Digest Medium 90 ml   (ScrewCap)</Td>
              </Tr>
              <Tr>
                <Td>05</Td>
                <Td>SVB0005</Td>
                <Td>Soyabean Casein Digest Medium (Double strength) 100 ml (Screw Cap)</Td>
              </Tr>
              <Tr>
                <Td>06</Td>
                <Td>SVB0006</Td>
                <Td>Soyabean Casein Digest Medium 100 ml    (Screw Cap)</Td>
              </Tr>
              <Tr>
                <Td>07</Td>
                <Td>SVB0007</Td>
                <Td>Soyabean Casein Digest Medium With 1%    poly 80 100 ml (Screw cap)</Td>
              </Tr>
              <Tr>
                <Td>08</Td>
                <Td>SVB0008</Td>
                <Td>Soyabean Casein Digest Medium 100 ml    (Flip-OfSeal) – for Sterility Testing</Td>
              </Tr>
              <Tr>
                <Td>09</Td>
                <Td>SVB0009</Td>
                <Td>Tetrathionate Bile Brilliant Green Broth 10ml</Td>
              </Tr>
              <Tr>
                <Td>10</Td>
                <Td>SVB0010</Td>
                <Td>Sabouraud Dextrose Broth 10ml</Td>
              </Tr>
              <Tr>
                <Td>11</Td>
                <Td>SVB0011</Td>
                <Td>Saline Lactose Broth 10 ml</Td>
              </Tr>
              <Tr>
                <Td>12</Td>
                <Td>SVB0012</Td>
                <Td>Dey-Engeley Neutralizing Broth 10 ml</Td>
              </Tr>
              <Tr>
                <Td>13</Td>
                <Td>SVB0014</Td>
                <Td>0.1% Peptone Water (100ml)</Td>
              </Tr>
              <Tr>
                <Td>14</Td>
                <Td>SVB0015</Td>
                <Td>Sterile Saline 0.9% 10 ml</Td>
              </Tr>

              <Tr>
                <Td>15</Td>
                <Td>SVB0016</Td>
                <Td>Sterile Saline 0.9% (100 ml)</Td>
              </Tr>
              <Tr>
                <Td>16</Td>
                <Td>SVB0017</Td>
                <Td>Mac Conkey Broth (100 ml) (Screw Cap)</Td>
              </Tr>
              <Tr>
                <Td>17</Td>
                <Td>SVB0018</Td>
                <Td>Enterobacteria Enrichment Broth Mossel (100   ml) (Screw Cap)</Td>
              </Tr>
              <Tr>
                <Td>18</Td>
                <Td>SVB0019</Td>
                <Td>Rinsing Fluid D 100ml (Flip-Of Seal)</Td>
              </Tr>
              <Tr>
                <Td>19</Td>
                <Td>SVB0020</Td>
                <Td>Gram Negative Broth 100ml (Screw Cap)</Td>
              </Tr>
              <Tr>
                <Td>20</Td>
                <Td>SVB0021</Td>
                <Td>Bufered Sodium Chloride Peptone Solution    pH7.0 With 1% poly 80 (100ml) (Screw Cap)</Td>
              </Tr>
              <Tr>
                <Td>21</Td>
                <Td>SVB0022</Td>
                <Td>Bufered Sodium Chloride Peptone Solution    pH 7.0 (100 ml) (Screw Cap)</Td>
              </Tr>
              <Tr>
                <Td>22</Td>
                <Td>SVB0023</Td>
                <Td>Fluid Thioglycollate Medium 100 ml (Flip-Of    Seal)  for Sterility Testing</Td>
              </Tr>
              <Tr>
                <Td>23</Td>
                <Td>SVB0024</Td>
                <Td>Reinforced Medium for Clostridia (100 ml)    (Screw Cap)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </Box>

        <Box>  
        <Box m="25px"> 
        <Text color="#215878" as="b" fontSize={'20px'}>Solidifed Agar Media in Bottles (Screw Cap)</Text> </Box>

        <TableContainer>
          <Table variant='unstyled'>

            <Thead fontSize={'18px'} >
              <Tr bgColor={'#EB1414'} bgClip={'text'}>
                <Td >SNo</Td>
                <Td>Product Code</Td>
                <Td >Column Description </Td>
              </Tr>
            </Thead>




            <Tbody color={'#565454'} fontSize={'16px'} pt='10px'>
              <Tr>
                <Td>01</Td>
                <Td>SVSAB0001</Td>
                <Td >Soyabean Casein Digest Agar, 100 ml</Td>
              </Tr>
              <Tr>
                <Td>02</Td>
                <Td>SVSAB0002</Td>
                <Td >Soyabean Casein Digest Agar With 0.07%    Lecethin & 0.5% Poly 80, 100 ml</Td>
              </Tr>
              <Tr>
                <Td>03</Td>
                <Td>SVSAB0003</Td>
                <Td >Soyabean Casein Digest Agar With 0.07%    Lecethin & 0.5% Poly 20, 100 ml </Td>
              </Tr>
              <Tr>
                <Td>04</Td>
                <Td>SVSAB0004</Td>
                <Td >Soyabean Casein Digest Agar, 20 ml (slant)</Td>
              </Tr>
              <Tr>
                <Td>05</Td>
                <Td>SVSAB0005</Td>
                <Td >Sabouraud Dextrose Agar, 100 ml</Td>
              </Tr>
              <Tr>
                <Td>06</Td>
                <Td>SVSAB0006</Td>
                <Td >Sabouraud Dextrose Agar Agar With 0.07%    Lecethin & 0.5 % Poly 80, 100 ml</Td>
              </Tr>
              <Tr>
                <Td>07</Td>
                <Td>SVSAB0007</Td>
                <Td >R2A, 100 ml</Td>
              </Tr>
              <Tr>
                <Td>08</Td>
                <Td>SVSAB0008</Td>
                <Td >Plate Count Agar, 100 ml</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    </Center>    



  )
}

export default Microbiology;