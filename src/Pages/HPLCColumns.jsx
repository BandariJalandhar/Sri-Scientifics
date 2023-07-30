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
   TableContainer,
} from '@chakra-ui/react'


const HPLCColumns = () => {

   return (
      <Box align="center">
         <Box m="30px">
            <Text color="#215878" as="b" fontSize={'20px'} >HPLC Columns</Text>
         </Box>
         <VStack>

            <TableContainer>
               <Table variant='unstyled' w='100%'>

                  <Thead fontSize={'18px'} >
                     <Tr bgColor={'red'} bgClip={'text'}>
                        <Td >SNo</Td>
                        <Td>Product Code</Td>
                        <Td >Column Description </Td>
                        <Td >Bonding Phase</Td>

                     </Tr>
                  </Thead>

                  <Tbody color={'#756F6F'} fontSize={'16px'} pt='10px'>
                     <Tr>
                        <Td>01.</Td>
                        <Td>P18-25046-5</Td>
                        <Td >Prudent HPLC column 250 mm x 4.6 mm 5u C18</Td>
                        <Td >C18</Td>
                     </Tr>
                     <Tr>
                        <Td>02</Td>
                        <Td>P18-15046-5</Td>
                        <Td >Prudent HPLC column 150 mm x 4.6 mm 5u C18</Td>
                        <Td  >C18</Td>

                     </Tr>
                     <Tr>
                        <Td>03</Td>
                        <Td>P18-12546-5</Td>
                        <Td >Prudent HPLC column 125 mm x 4.6 mm 5u C18</Td>
                        <Td  >C18</Td>

                     </Tr>
                     <Tr>
                        <Td>04</Td>
                        <Td>P18-10046-5</Td>
                        <Td >Prudent HPLC column 100    mm x 4.6 mm 5u C18</Td>
                        <Td  >C18</Td>
                     </Tr>
                     <Tr>
                        <Td>05</Td>
                        <Td>P18-5046-5</Td>
                        <Td >Prudent HPLC column 50    mm x 4.6 mm 5u C18</Td>
                        <Td  >C18</Td>
                     </Tr>
                     <Tr>
                        <Td>06</Td>
                        <Td>P18-25046-5T</Td>
                        <Td >Prudent HPLC column 250   mm x 4.6 mm 5u C18T</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>07</Td>
                        <Td>P18-15046-5T</Td>
                        <Td >Prudent HPLC column 150   mm x 4.6 mm 5u C18T</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>08</Td>
                        <Td>P18-12546-5T</Td>
                        <Td >Prudent HPLC column 125   mm x 4.6 mm 5u C18T</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>09</Td>
                        <Td>P18-10046-5T</Td>
                        <Td >Prudent HPLC column 100    mm x 4.6 mm 5u C18T</Td>
                        <Td >C18</Td>
                     </Tr>


                     <Tr>
                        <Td>10</Td>
                        <Td>P18-5046-5T</Td>
                        <Td >Prudent HPLC column 50    mm x 4.6 mm 5u C18T</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>11</Td>
                        <Td>P18-25046-5γ</Td>
                        <Td >Prudent HPLC column 250    mm x 4.6 mm 5u C18γ</Td>
                        <Td  >C18</Td>
                     </Tr>


                     <Tr>
                        <Td>12</Td>
                        <Td>P18-15046-5γ</Td>
                        <Td >Prudent HPLC column 150   mm x 4.6 mm 5u C18γ</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>13</Td>
                        <Td>P18-12546-5γ</Td>
                        <Td >Prudent HPLC column 125   mm x 4.6 mm 5u C18γ</Td>
                        <Td  >C18</Td>
                     </Tr>

                     {/* > Nagendra Megaroy: */}
                     <Tr>
                        <Td>14</Td>
                        <Td>P18-10046-5γ</Td>
                        <Td >Prudent HPLC column 100   mm x 4.6 mm 5u C18γ</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>15</Td>
                        <Td>P18-5046-5γ</Td>
                        <Td >Prudent HPLC column 50   mm x 4.6 mm 5u C18γ</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>16</Td>
                        <Td>PA-25046-5</Td>
                        <Td >Prudent HPLC column 250    mm x 4.6 mm 5u Amino</Td>
                        <Td  >Amino</Td>
                     </Tr>

                     <Tr>
                        <Td>17</Td>
                        <Td>PA-15046-5</Td>
                        <Td >Prudent HPLC column 150   mm x 4.6 mm 5u Amino</Td>
                        <Td  >Amino</Td>
                     </Tr>

                     <Tr>
                        <Td>18</Td>
                        <Td>PA-12546-5</Td>
                        <Td >Prudent HPLC column 125   mm x 4.6 mm 5u Amino</Td>
                        <Td  >Amino</Td>
                     </Tr>

                     <Tr>
                        <Td>19</Td>
                        <Td>PA-10046-5</Td>
                        <Td >Prudent HPLC column 100   mm x 4.6 mm 5u Amino</Td>
                        <Td  >Amino</Td>
                     </Tr>


                     <Tr>
                        <Td>20</Td>
                        <Td>PA-5046-5</Td>
                        <Td >Prudent HPLC column 50   mm x 4.6 mm 5u Amino</Td>
                        <Td  >Amino</Td>
                     </Tr>


                     <Tr>
                        <Td>21</Td>
                        <Td>PS-25046-5</Td>
                        <Td >Prudent Silica HPLC column 250   mm x 4.6 mm 5u</Td>
                        <Td  >Silica</Td>
                     </Tr>


                     <Tr>
                        <Td>22</Td>
                        <Td>PS-15046-5</Td>
                        <Td >Prudent Silica HPLC column 150    mm x 4.6 mm 5u</Td>
                        <Td  >Silica</Td>
                     </Tr>


                     <Tr>
                        <Td>23</Td>
                        <Td>PS-12546-5</Td>
                        <Td >Prudent Silica HPLC column 125   mm x 4.6 mm 5u</Td>
                        <Td  >Silica</Td>
                     </Tr>

                     <Tr>
                        <Td>24</Td>
                        <Td>PS-10046-5</Td>
                        <Td >Prudent Silica HPLC column 100   mm x 4.6 mm 5u</Td>
                        <Td  >Silica</Td>
                     </Tr>

                     <Tr>
                        <Td>25</Td>
                        <Td>PS- 5046-5</Td>
                        <Td >Prudent Silica HPLC column 50   mm x 4.6 mm 5u</Td>
                        <Td  >Silica</Td>
                     </Tr>

                     <Tr>
                        <Td>26</Td>
                        <Td>A18-30046-5</Td>
                        <Td >Alpha HPLC Column 300   mm x 4.6 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>27</Td>
                        <Td>A18-30040-5</Td>
                        <Td >Alpha HPLC Column 300   mm x 4.0 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>


                     <Tr>
                        <Td>28</Td>
                        <Td>A18-30039-5</Td>
                        <Td >Alpha HPLC Column 300   mm x 3.9 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>29</Td>
                        <Td>A18-25046-5</Td>
                        <Td >Alpha HPLC Column 250   mm x 4.6 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>30</Td>
                        <Td>A18-25040-5</Td>
                        <Td >Alpha HPLC Column 250   mm x 4.0 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>


                     <Tr>
                        <Td>31</Td>
                        <Td>A18-25046-5</Td>
                        <Td >Alpha HPLC Column 200   mm x 4.6 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>


                     <Tr>
                        <Td>32</Td>
                        <Td>A18-15046-5</Td>
                        <Td >Alpha HPLC Column 150   mm x 4.6 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>33</Td>
                        <Td>A18-15046-5</Td>
                        <Td >Alpha HPLC Column 150   mm x 4.0 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>34</Td>
                        <Td>A18-12546-5</Td>
                        <Td >Alpha HPLC Column 125   mm x 4.6 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>35</Td>
                        <Td>A18-12540-5</Td>
                        <Td >Alpha HPLC Column 125   mm x 4.0 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>


                     <Tr>
                        <Td>36</Td>
                        <Td>A18-10046-5</Td>
                        <Td >Alpha HPLC Column 100   mm x 4.6 mm 5u</Td>
                        <Td   >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>37</Td>
                        <Td>A18-10040-5</Td>
                        <Td >Alpha HPLC Column 100   mm x 4.0 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>38</Td>
                        <Td>A18-5046-5</Td>
                        <Td >Alpha HPLC Column 50   mm x 4.6 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>39</Td>
                        <Td>A18-5040-5</Td>
                        <Td >Alpha HPLC Column 50   mm x 4.0 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>40</Td>
                        <Td>A18-30046-5</Td>
                        <Td >Alpha HPLC Column 300   mm x 4.6 mm 5u</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>41</Td>
                        <Td>A18-30040-5</Td>
                        <Td >Alpha HPLC Column 300   mm x 4.0 mm 5u</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>42</Td>
                        <Td>A18-30039-5</Td>
                        <Td >Alpha HPLC Column 300   mm x 3.9 mm 5u</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>43</Td>
                        <Td>A18-25046-5</Td>
                        <Td >Alpha HPLC Column 250   mm x 4.6 mm 5u</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>44</Td>
                        <Td>A18-25040-5</Td>
                        <Td >Alpha HPLC Column 250   mm x 4.0 mm 5u</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>45</Td>
                        <Td>A18-20046-5</Td>
                        <Td >Alpha HPLC Column 200   mm x 4.6 mm 5u</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>46</Td>
                        <Td>A18-15046-5</Td>
                        <Td >Alpha HPLC Column 150   mm x 4.6 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>47</Td>
                        <Td>A18-15040-5</Td>
                        <Td >Alpha HPLC Column 150   mm x 4.0 mm 5u</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>48</Td>
                        <Td>A18-12546-5</Td>
                        <Td >Alpha HPLC Column 125  mm x 4.6 mm 5u</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>49</Td>
                        <Td>A18-12540-5</Td>
                        <Td >Alpha HPLC Column 125  mm x 4.0 mm 5u</Td>
                        <Td >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>50</Td>
                        <Td>A18-10046-5</Td>
                        <Td >Alpha HPLC Column 100  mm x 4.6 mm 5u</Td>
                        <Td   >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>51</Td>
                        <Td>A18-10040-5</Td>
                        <Td >Alpha HPLC Column 100  mm x 4.0 mm 5u</Td>
                        <Td  >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>52</Td>
                        <Td>A18-7546-5</Td>
                        <Td >Alpha HPLC Column 75  mm x 4.6 mm 5u</Td>
                        <Td   >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>53</Td>
                        <Td>A18-5046-5</Td>
                        <Td >Alpha HPLC Column 50  mm x 4.6 mm 5u</Td>
                        <Td   >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>54</Td>
                        <Td>A18-5040-5</Td>
                        <Td >Alpha HPLC Column 50  mm x 4.0 mm 5u</Td>
                        <Td   >C18</Td>
                     </Tr>

                     <Tr>
                        <Td>55</Td>
                        <Td>A8-30046-5</Td>
                        <Td >Alpha HPLC Column 300  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>56</Td>
                        <Td>A8-30040-5</Td>
                        <Td >Alpha HPLC Column 300  mm x 4.0 mm 5u C8</Td>
                        <Td  >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>57</Td>
                        <Td>A8-30039-5</Td>
                        <Td >Alpha HPLC Column 300  mm x 3.9 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>58</Td>
                        <Td>A8-25046-5</Td>
                        <Td >Alpha HPLC Column 250  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>


                     <Tr>
                        <Td>59</Td>
                        <Td>A8-25040-5</Td>
                        <Td >Alpha HPLC Column 250  mm x 4.0 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>60</Td>
                        <Td>A8-20046-5</Td>
                        <Td >Alpha HPLC Column 200  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>


                     <Tr>
                        <Td>61</Td>
                        <Td>A8-15046-5</Td>
                        <Td >Alpha HPLC Column 150  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>62</Td>
                        <Td>A8-15040-5</Td>
                        <Td >Alpha HPLC Column 150  mm x 4.0 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>63</Td>
                        <Td>A8-12546-5</Td>
                        <Td >Alpha HPLC Column 125  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>64</Td>
                        <Td>A8-12540-5</Td>
                        <Td >Alpha HPLC Column 125  mm x 4.0 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>


                     <Tr>
                        <Td>65</Td>
                        <Td>A8-10046-5</Td>
                        <Td >Alpha HPLC Column 100  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>


                     <Tr>
                        <Td>66</Td>
                        <Td>A8-10040-5</Td>
                        <Td >Alpha HPLC Column 100  mm x 4.0 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>


                     <Tr>
                        <Td>67</Td>
                        <Td>A8-5046-5</Td>
                        <Td >Alpha HPLC Column 50  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>
                     <Tr>
                        <Td>68</Td>
                        <Td>A8-5040-5</Td>
                        <Td >Alpha HPLC Column 50  mm x 4.0 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>69</Td>
                        <Td>A8-30046-5</Td>
                        <Td >Alpha HPLC Column 300  mm x 4.6 mm C8 </Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>70</Td>
                        <Td>A8-30040-5</Td>
                        <Td >Alpha HPLC Column 300  mm x 4.0 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>71</Td>
                        <Td>A8-30039-5</Td>
                        <Td >Alpha HPLC Column 300  mm x 3.9 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>


                     <Tr>
                        <Td>72</Td>
                        <Td>A8-25046-5</Td>
                        <Td >Alpha HPLC Column 250  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>73</Td>
                        <Td>A8-25040-5</Td>
                        <Td >Alpha HPLC Column 250  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>

                     <Tr>
                        <Td>74</Td>
                        <Td>A8-20046-5</Td>
                        <Td >Alpha HPLC Column 200  mm x 4.6 mm 5u C8</Td>
                        <Td   >C8</Td>
                     </Tr>
                  </Tbody>
               </Table>
            </TableContainer>
         </VStack>


      </Box>



   )
}

export default HPLCColumns;


