// import { Box,Image, VStack, } from '@chakra-ui/react'
// import React from 'react'


// const HPLCColumns = () => {
//    return (
// <Box  height="120px" flexWrap="wrap" w={["100%"]} h={["100%"]} display="flex" alignItems="center" justifyContent="center"  pt={"30px"} pb={"30px"} >
//       <VStack>
//       <Box flex={1} mr={4}> <Image src='HPLCColumns.png'></Image> </Box>
//       </VStack>
//       <VStack>
//       <Box flex={1}> <Image src='HPLCColumns-2.png'></Image> </Box>
//       </VStack>

//      </Box>
//   )
// }

// export default HPLCColumns;


import { Box, VStack, Text, } from '@chakra-ui/react'
import React from 'react'
import {
   Table,
   Thead,
   Tbody,
   Tr,
   Td,
   Center,
} from '@chakra-ui/react'
import './../App.css';


const HPLCColumns = () => {

   return (
      <>
        
         <Center>

            <Box >
               <Box m="10px" mt="30px" ml={{ base: "50px", lg: "20px" }}>
                  <Text color="#EB1414" fontSize={'18px'} fontWeight="500">HPLC Columns</Text>
               </Box>
               <VStack>
                  <Center>
                     {/* <TableContainer> */}
                     <Table variant='striped' width={{ base: '100%', sm: "100%", md: '600px', lg: '750px', xl: '890px' }} m="20px" >
                        <Thead fontSize={{ base: "12px", md: '14px' }} fontWeight="500" background="#0157AC">
                           <Tr bgColor={'white'} bgClip={'text'} className='tableHead'>
                              <Td width="20%"><Center>SNo</Center></Td>
                              <Td width="26%"><Center>Product Code</Center></Td>
                              <Td width="34%"><Center>Column Description</Center> </Td>
                              <Td width="20%"><Center>Bonding Phase</Center></Td>
                           </Tr>
                        </Thead>
                        <Tbody color={'#333333'} fontSize={'14px'} fontWeight="500" pt='10px'>
                           <Tr>
                              <Td textAlign="center">01.</Td>
                              <Td textAlign="center">P18-25046-5</Td>
                              <Td >Prudent HPLC column 250 mm x 4.6 mm 5u C18</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>
                           <Tr>
                              <Td textAlign="center">02</Td>
                              <Td textAlign="center">P18-15046-5</Td>
                              <Td >Prudent HPLC column 150 mm x 4.6 mm 5u C18</Td>
                              <Td textAlign="center" >C18</Td>

                           </Tr>
                           <Tr>
                              <Td textAlign="center">03</Td>
                              <Td textAlign="center">P18-12546-5</Td>
                              <Td >Prudent HPLC column 125 mm x 4.6 mm 5u C18</Td>
                              <Td textAlign="center" >C18</Td>

                           </Tr>
                           <Tr>
                              <Td textAlign="center">04</Td>
                              <Td textAlign="center">P18-10046-5</Td>
                              <Td >Prudent HPLC column 100    mm x 4.6 mm 5u C18</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>
                           <Tr>
                              <Td textAlign="center">05</Td>
                              <Td textAlign="center">P18-5046-5</Td>
                              <Td >Prudent HPLC column 50    mm x 4.6 mm 5u C18</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>
                           <Tr>
                              <Td textAlign="center">06</Td>
                              <Td textAlign="center">P18-25046-5T</Td>
                              <Td >Prudent HPLC column 250   mm x 4.6 mm 5u C18T</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">07</Td>
                              <Td textAlign="center">P18-15046-5T</Td>
                              <Td >Prudent HPLC column 150   mm x 4.6 mm 5u C18T</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">08</Td>
                              <Td textAlign="center">P18-12546-5T</Td>
                              <Td >Prudent HPLC column 125   mm x 4.6 mm 5u C18T</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">09</Td>
                              <Td textAlign="center">P18-10046-5T</Td>
                              <Td >Prudent HPLC column 100    mm x 4.6 mm 5u C18T</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">10</Td>
                              <Td textAlign="center">P18-5046-5T</Td>
                              <Td >Prudent HPLC column 50    mm x 4.6 mm 5u C18T</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">11</Td>
                              <Td textAlign="center">P18-25046-5γ</Td>
                              <Td >Prudent HPLC column 250    mm x 4.6 mm 5u C18γ</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">12</Td>
                              <Td textAlign="center">P18-15046-5γ</Td>
                              <Td >Prudent HPLC column 150   mm x 4.6 mm 5u C18γ</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">13</Td>
                              <Td textAlign="center">P18-12546-5γ</Td>
                              <Td >Prudent HPLC column 125   mm x 4.6 mm 5u C18γ</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           {/* > Nagendra Megaroy: */}
                           <Tr>
                              <Td textAlign="center">14</Td>
                              <Td textAlign="center">P18-10046-5γ</Td>
                              <Td >Prudent HPLC column 100   mm x 4.6 mm 5u C18γ</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">15</Td>
                              <Td textAlign="center">P18-5046-5γ</Td>
                              <Td >Prudent HPLC column 50   mm x 4.6 mm 5u C18γ</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">16</Td>
                              <Td textAlign="center">PA-25046-5</Td>
                              <Td >Prudent HPLC column 250    mm x 4.6 mm 5u Amino</Td>
                              <Td textAlign="center" >Amino</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">17</Td>
                              <Td textAlign="center">PA-15046-5</Td>
                              <Td >Prudent HPLC column 150   mm x 4.6 mm 5u Amino</Td>
                              <Td textAlign="center" >Amino</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">18</Td>
                              <Td textAlign="center">PA-12546-5</Td>
                              <Td >Prudent HPLC column 125   mm x 4.6 mm 5u Amino</Td>
                              <Td textAlign="center">Amino</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">19</Td>
                              <Td textAlign="center">PA-10046-5</Td>
                              <Td >Prudent HPLC column 100   mm x 4.6 mm 5u Amino</Td>
                              <Td textAlign="center" >Amino</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">20</Td>
                              <Td textAlign="center">PA-5046-5</Td>
                              <Td >Prudent HPLC column 50   mm x 4.6 mm 5u Amino</Td>
                              <Td textAlign="center" >Amino</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">21</Td>
                              <Td textAlign="center">PS-25046-5</Td>
                              <Td >Prudent Silica HPLC column 250   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >Silica</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">22</Td>
                              <Td textAlign="center">PS-15046-5</Td>
                              <Td >Prudent Silica HPLC column 150    mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >Silica</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">23</Td>
                              <Td textAlign="center">PS-12546-5</Td>
                              <Td >Prudent Silica HPLC column 125   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >Silica</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">24</Td>
                              <Td textAlign="center">PS-10046-5</Td>
                              <Td >Prudent Silica HPLC column 100   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >Silica</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">25</Td>
                              <Td textAlign="center">PS- 5046-5</Td>
                              <Td >Prudent Silica HPLC column 50   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >Silica</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">26</Td>
                              <Td textAlign="center">A18-30046-5</Td>
                              <Td >Alpha HPLC Column 300   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">27</Td>
                              <Td textAlign="center">A18-30040-5</Td>
                              <Td >Alpha HPLC Column 300   mm x 4.0 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">28</Td>
                              <Td textAlign="center">A18-30039-5</Td>
                              <Td >Alpha HPLC Column 300   mm x 3.9 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">29</Td>
                              <Td textAlign="center">A18-25046-5</Td>
                              <Td >Alpha HPLC Column 250   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">30</Td>
                              <Td textAlign="center">A18-25040-5</Td>
                              <Td >Alpha HPLC Column 250   mm x 4.0 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">31</Td>
                              <Td textAlign="center">A18-25046-5</Td>
                              <Td >Alpha HPLC Column 200   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">32</Td>
                              <Td textAlign="center">A18-15046-5</Td>
                              <Td >Alpha HPLC Column 150   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">33</Td>
                              <Td textAlign="center">A18-15046-5</Td>
                              <Td >Alpha HPLC Column 150   mm x 4.0 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">34</Td>
                              <Td textAlign="center">A18-12546-5</Td>
                              <Td >Alpha HPLC Column 125   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">35</Td>
                              <Td textAlign="center">A18-12540-5</Td>
                              <Td >Alpha HPLC Column 125   mm x 4.0 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">36</Td>
                              <Td textAlign="center">A18-10046-5</Td>
                              <Td >Alpha HPLC Column 100   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center"  >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">37</Td>
                              <Td textAlign="center">A18-10040-5</Td>
                              <Td >Alpha HPLC Column 100   mm x 4.0 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">38</Td>
                              <Td textAlign="center">A18-5046-5</Td>
                              <Td >Alpha HPLC Column 50   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">39</Td>
                              <Td textAlign="center">A18-5040-5</Td>
                              <Td >Alpha HPLC Column 50   mm x 4.0 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">40</Td>
                              <Td textAlign="center">A18-30046-5</Td>
                              <Td >Alpha HPLC Column 300   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">41</Td>
                              <Td textAlign="center">A18-30040-5</Td>
                              <Td >Alpha HPLC Column 300   mm x 4.0 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">42</Td>
                              <Td>A18-30039-5</Td>
                              <Td >Alpha HPLC Column 300   mm x 3.9 mm 5u</Td>
                              <Td >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">43</Td>
                              <Td textAlign="center">A18-25046-5</Td>
                              <Td >Alpha HPLC Column 250   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">44</Td>
                              <Td textAlign="center">A18-25040-5</Td>
                              <Td >Alpha HPLC Column 250   mm x 4.0 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">45</Td>
                              <Td textAlign="center">A18-20046-5</Td>
                              <Td >Alpha HPLC Column 200   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">46</Td>
                              <Td textAlign="center">A18-15046-5</Td>
                              <Td >Alpha HPLC Column 150   mm x 4.6 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">47</Td>
                              <Td textAlign="center">A18-15040-5</Td>
                              <Td >Alpha HPLC Column 150   mm x 4.0 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">48</Td>
                              <Td textAlign="center">A18-12546-5</Td>
                              <Td >Alpha HPLC Column 125  mm x 4.6 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">49</Td>
                              <Td textAlign="center">A18-12540-5</Td>
                              <Td >Alpha HPLC Column 125  mm x 4.0 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">50</Td>
                              <Td textAlign="center">A18-10046-5</Td>
                              <Td >Alpha HPLC Column 100  mm x 4.6 mm 5u</Td>
                              <Td textAlign="center">C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">51</Td>
                              <Td textAlign="center">A18-10040-5</Td>
                              <Td >Alpha HPLC Column 100  mm x 4.0 mm 5u</Td>
                              <Td textAlign="center" >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">52</Td>
                              <Td textAlign="center">A18-7546-5</Td>
                              <Td >Alpha HPLC Column 75  mm x 4.6 mm 5u</Td>
                              <Td textAlign="center"  >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">53</Td>
                              <Td textAlign="center">A18-5046-5</Td>
                              <Td >Alpha HPLC Column 50  mm x 4.6 mm 5u</Td>
                              <Td textAlign="center"  >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">54</Td>
                              <Td textAlign="center">A18-5040-5</Td>
                              <Td >Alpha HPLC Column 50  mm x 4.0 mm 5u</Td>
                              <Td textAlign="center"  >C18</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">55</Td>
                              <Td textAlign="center">A8-30046-5</Td>
                              <Td >Alpha HPLC Column 300  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">56</Td>
                              <Td textAlign="center">A8-30040-5</Td>
                              <Td >Alpha HPLC Column 300  mm x 4.0 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">57</Td>
                              <Td textAlign="center">A8-30039-5</Td>
                              <Td >Alpha HPLC Column 300  mm x 3.9 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">58</Td>
                              <Td textAlign="center">A8-25046-5</Td>
                              <Td >Alpha HPLC Column 250  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center"  >C8</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">59</Td>
                              <Td textAlign="center">A8-25040-5</Td>
                              <Td >Alpha HPLC Column 250  mm x 4.0 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">60</Td>
                              <Td textAlign="center">A8-20046-5</Td>
                              <Td >Alpha HPLC Column 200  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">61</Td>
                              <Td textAlign="center">A8-15046-5</Td>
                              <Td >Alpha HPLC Column 150  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">62</Td>
                              <Td textAlign="center">A8-15040-5</Td>
                              <Td >Alpha HPLC Column 150  mm x 4.0 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">63</Td>
                              <Td textAlign="center">A8-12546-5</Td>
                              <Td >Alpha HPLC Column 125  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center"  >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">64</Td>
                              <Td textAlign="center">A8-12540-5</Td>
                              <Td >Alpha HPLC Column 125  mm x 4.0 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">65</Td>
                              <Td textAlign="center">A8-10046-5</Td>
                              <Td >Alpha HPLC Column 100  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">66</Td>
                              <Td textAlign="center">A8-10040-5</Td>
                              <Td >Alpha HPLC Column 100  mm x 4.0 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">67</Td>
                              <Td textAlign="center">A8-5046-5</Td>
                              <Td >Alpha HPLC Column 50  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center"  >C8</Td>
                           </Tr>
                           <Tr>
                              <Td textAlign="center">68</Td>
                              <Td textAlign="center">A8-5040-5</Td>
                              <Td >Alpha HPLC Column 50  mm x 4.0 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">69</Td>
                              <Td textAlign="center">A8-30046-5</Td>
                              <Td >Alpha HPLC Column 300  mm x 4.6 mm C8 </Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">70</Td>
                              <Td textAlign="center">A8-30040-5</Td>
                              <Td >Alpha HPLC Column 300  mm x 4.0 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">71</Td>
                              <Td textAlign="center">A8-30039-5</Td>
                              <Td >Alpha HPLC Column 300  mm x 3.9 mm 5u C8</Td>
                              <Td textAlign="center"  >C8</Td>
                           </Tr>


                           <Tr>
                              <Td textAlign="center">72</Td>
                              <Td textAlign="center">A8-25046-5</Td>
                              <Td >Alpha HPLC Column 250  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">73</Td>
                              <Td textAlign="center">A8-25040-5</Td>
                              <Td >Alpha HPLC Column 250  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center"  >C8</Td>
                           </Tr>

                           <Tr>
                              <Td textAlign="center">74</Td>
                              <Td textAlign="center">A8-20046-5</Td>
                              <Td >Alpha HPLC Column 200  mm x 4.6 mm 5u C8</Td>
                              <Td textAlign="center" >C8</Td>
                           </Tr>
                        </Tbody>
                     </Table>
                     {/* </TableContainer> */}
                  </Center>
               </VStack>


            </Box>
         </Center>
      </>

   )
}

export default HPLCColumns;


