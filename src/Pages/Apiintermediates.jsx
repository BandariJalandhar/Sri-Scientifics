import { Box,Image,Flex, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {  Table, Thead, Tbody, Tr, Td, TableContainer, } from '@chakra-ui/react'



const Apiintermediates = () => {
   return (

      <Box align="center"> 
       
         <Box m="50px"> 
         <Text align="left" as="b" fontSize="20px" color="#215878">Supply of API'S & Intermediates</Text> 
         </Box> 
         
         <VStack>
       <TableContainer  border={'1px solid gray'} borderRadius={'10px'}>
            <Table variant='unstyled' w='900px'>
            
               <Thead fontSize={'18px'}  borderBottom={'1px solid gray'} >
                  <Tr bgColor={'red'} bgClip={'text'}> 
                  <Td >SNo</Td>
                  <Td>Name</Td>
                  <Td pl='30px'>Code </Td>                  
                  </Tr>
               </Thead>         
               
               
               <Tbody  fontSize={'16px'} pt='10px' color={'#756F6F'}>
                  <Tr>
                  <Td>01.</Td>
                  <Td>Azathioprine</Td>
                  <Td >30049099</Td>
                  </Tr>

                  <Tr>
                  <Td>02.</Td>
                  <Td>Hydro Cortisone</Td>
                  <Td >29372100</Td>
                  </Tr>
                 
                  <Tr>
                  <Td>03.</Td>
                  <Td>Amlodipine besilate Powder</Td>
                  <Td >29333990</Td>
                  </Tr>

                  <Tr>
                  <Td>04.</Td>
                  <Td>Spironolactone Poweder</Td>
                  <Td >30049099</Td>
                  </Tr>

                  <Tr>
                  <Td>05.</Td>
                  <Td>Sertraline Hcl Powder</Td>
                  <Td >30049099</Td>
                  </Tr>
               <Tr>
                  <Td>06.</Td>
                  <Td>Topiramate Powder</Td>
                  <Td >29420090</Td>
                  </Tr>

                  <Tr>
                  <Td>07.</Td>
                  <Td>Zopiclone Powder</Td>
                  <Td >3004</Td>
                  </Tr>

                  <Tr>
                  <Td>08.</Td>
                  <Td>Aluminium hydroxide pellets</Td>
                  <Td >28183000</Td>
                  </Tr>
               
                  <Tr>
                  <Td>09.</Td>
                  <Td>Amitriptyline Hcl Powder</Td>
                  <Td >30049039</Td>
                  </Tr>
               
                  <Tr>
                  <Td>10.</Td>
                  <Td>Bisacodyl powder</Td>
                  <Td >30049099</Td>
                  </Tr>

                  <Tr>
                  <Td>11.</Td>
                  <Td>Calcium carbonate powder</Td>
                  <Td >283650000</Td>
                  </Tr>

                  <Tr>
                  <Td>12.</Td>
                  <Td>Captoprill</Td>
                  <Td >30049071</Td>
                  </Tr>

                  <Tr>
                  <Td>13.</Td>
                  <Td>Ascorbic Acid</Td>
                  <Td >30049071</Td>
                  </Tr>
                  <Tr>
                  <Td>14.</Td>
                  <Td>Allopurinol</Td>
                  <Td >30049071</Td>
                  </Tr>

                  <Tr>
                  <Td>15.</Td>
                  <Td>Chloral hydrate</Td>
                  <Td >29121990</Td>
                  </Tr>

                  <Tr>
                  <Td>16.</Td>
                  <Td>Chlorothiazide</Td>
                  <Td >29350090</Td>
                  </Tr>
               
                  <Tr>
                  <Td>17.</Td>
                  <Td>Sucralfate</Td>
                  <Td >30049039</Td>
                  </Tr>

<Tr>
                  <Td>18.</Td>
                  <Td>Dexamethansone</Td>
                  <Td >30043913</Td>
                  </Tr>
               
                  <Tr>
                  <Td>19.</Td>
                  <Td>Venlafaxine</Td>
                  <Td >29420090</Td>
                  </Tr>

                  <Tr>
                  <Td>20.</Td>
                  <Td>Oxybutynin</Td>
                  <Td >29211990</Td>
                  </Tr>

                  <Tr>
                  <Td>21.</Td>
                  <Td>Clopidogrel</Td>
                  <Td >30049099</Td>
                  </Tr>

                  <Tr>
                  <Td>22.</Td>
                  <Td>Clonidine Hcl</Td>
                  <Td >30049076</Td>
                  </Tr>
               
                  <Tr>
                  <Td>23.</Td>
                  <Td>Flecainide</Td>
                  <Td >30049099</Td>
                  </Tr>

                  <Tr>
                  <Td>24.</Td>
                  <Td>Citric Acid</Td>
                  <Td >291814</Td>
                  </Tr>

                  <Tr>
                  <Td>25.</Td>
                  <Td>Sodium Citrate</Td>
                  <Td >29181520</Td>
                  </Tr>
               
                  <Tr>
                  <Td>26.</Td>
                  <Td>Sodium Benzoate</Td>
                  <Td >29163140</Td>
                  </Tr>

                  <Tr>
                  <Td>27.</Td>
                  <Td>Riboflavin</Td>
                  <Td >29362310</Td>
                  </Tr>

                  <Tr>
                  <Td>28.</Td>
                  <Td>Gabapentin</Td>
                  <Td >30049081</Td>
                  </Tr>
             
                  <Tr>
                  <Td>29.</Td>
                  <Td>Naltrexone Hcl</Td>
                  <Td >29420090</Td>
                  </Tr>

                  <Tr>
                  <Td>30.</Td>
                  <Td>Omeprazole Powder</Td>
                  <Td >30049034</Td>
                  </Tr>

                  <Tr>
                  <Td>31.</Td>
                  <Td>Pheno barbital Hcl</Td>
                  <Td >30049081</Td>
                  </Tr>

                  <Tr>
                  <Td>32.</Td>
                  <Td>Ranitidine</Td>
                  <Td >29420014</Td>
                  </Tr>

                  <Tr>
                  <Td>33.</Td>
                  <Td>Quetiapine</Td>
                  <Td >2933</Td>
                  </Tr>

                  <Tr>
                  <Td>34.</Td>
                  <Td>Phenytoin</Td>
                  <Td >30049081</Td>
                  </Tr>

                  <Tr>
                  <Td>35.</Td>
                  <Td>Salicylic acid powder</Td>
                  <Td >29182110</Td>
                  </Tr>
                
                  <Tr>
                  <Td>36.</Td>
                  <Td>Sodium bicarbone</Td>
                  <Td >283630</Td>
                  </Tr>
               
                  <Tr>
                  <Td>37.</Td>
                  <Td>L-arginine</Td>
                  <Td >29225090</Td>
                  </Tr>

                  <Tr>
                  <Td>38.</Td>
                  <Td>Lorazepam</Td>
                  <Td >29339100</Td>
                  </Tr>

                  <Tr>
                  <Td>39.</Td>
                  <Td>Coal tar Solution BP</Td>
                  <Td >27060010</Td>
                  </Tr>

                  <Tr>
                  <Td>40.</Td>
                  <Td>Ichthammol</Td>
                  <Td >30041090</Td>
                  </Tr>

                  <Tr>
                  <Td>41.</Td>
                  <Td>Diltiazem Hcl powder</Td>
                  <Td >2942</Td>
                  </Tr>

                  <Tr>
                  <Td>42.</Td>
                  <Td>Ethanol Solution 96%</Td>
                  <Td >22072000</Td>
                  </Tr>

<Tr>
                  <Td>43.</Td>
                  <Td>Ketamine Hcl powder</Td>
                  <Td > 30039036 </Td>
                  </Tr>
             
                  <Tr>
                  <Td>44.</Td>
                  <Td>Magnesium glyceyophosphate</Td>
                  <Td >2919</Td>
                  </Tr>

                  <Tr>
                  <Td>45.</Td>
                  <Td>Melatonin</Td>
                  <Td >29420090</Td>
                  </Tr>

                  <Tr>
                  <Td>46.</Td>
                  <Td>Midazolam Hcl</Td>
                  <Td >29339100</Td>
                  </Tr>

                  <Tr>
                  <Td>47.</Td>
                  <Td>L-Citrulline</Td>
                  <Td >29241900</Td>
                  </Tr>

                  <Tr>
                  <Td>48.</Td>
                  <Td>Methyl hydronybenzoate powder</Td>
                  <Td >2918</Td>
                  </Tr>

                  <Tr>
                  <Td>49.</Td>
                  <Td>Propyl hydronybenzoate powder</Td>
                  <Td >29182910</Td>
                  </Tr>

                  <Tr>
                  <Td>50.</Td>
                  <Td>Excipient</Td>
                  <Td >29420090</Td>
                  </Tr>
           </Tbody>
               
            </Table>
            </TableContainer>
            </VStack>         

       </Box>

   
   )
}
export default Apiintermediates
