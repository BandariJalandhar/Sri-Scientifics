import { Center, Flex, extendTheme } from "@chakra-ui/react"
import { Checkbox, Box, Text, } from '@chakra-ui/react'
// import { DeleteIcon,ChevronLeftIcon,ChevronRightIcon} from '@chakra-ui/icons'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState } from 'react';

const theme = extendTheme({
    styles: {
      global: {
        body: {
          backgroundColor: 'lightgray', 
        },
      },
    },
  });

const Inbox = () => {

    const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [checkbox1Checked, setCheckbox1Checked] = useState(false);
  const [checkbox2Checked, setCheckbox2Checked] = useState(false);
  const [checkbox3Checked, setCheckbox3Checked] = useState(false);
  const [checkbox4Checked, setCheckbox4Checked] = useState(false);
  const [checkbox5Checked, setCheckbox5Checked] = useState(false);
  const [checkbox6Checked, setCheckbox6Checked] = useState(false);

  const handleSelectAllCheckboxChange = () => {
    const newSelectAllChecked = !selectAllChecked;
    setSelectAllChecked(newSelectAllChecked);
    setCheckbox1Checked(newSelectAllChecked);
    setCheckbox2Checked(newSelectAllChecked);
    setCheckbox3Checked(newSelectAllChecked);
    setCheckbox4Checked(newSelectAllChecked);
    setCheckbox5Checked(newSelectAllChecked);
    setCheckbox6Checked(newSelectAllChecked);
  };
    return (
        <Center>
            <Box fontSize="15px" theme={theme} mb="400px">
                <Box bgColor="#F5F5F5" mt="50px" >
                    <Flex w="1200px" h="50px" justifyContent="space-between" align="center">
                        <Box display="flex" w="400px" justifyContent="space-between">
                            <Box ml="50px">
                                <Checkbox size="lg"
                                     isChecked={selectAllChecked}
                                     onChange={handleSelectAllCheckboxChange}
                                >Select</Checkbox>
                            </Box>
                            <Box>
                                <Text>All</Text>
                            </Box>
                            <Box>
                                <Text>Read</Text>
                            </Box>
                            <Box>
                                <Text>Unread</Text>
                            </Box>

                        </Box>
                        <Box display="flex" w="280px" justifyContent="space-between">
                            <Box display="flex">
                                <Box mt="5px" fontSize="20px" m="2px">
                                    <RiDeleteBin6Fill />
                                </Box>

                                <Text>Delete</Text>
                            </Box>
                            <Box display="flex" w="100px" mr="50px" justifyContent="space-between" mt="5px">
                                <Box>
                                    <FaChevronLeft />
                                </Box>
                                <Box>
                                    <FaChevronRight />
                                </Box>


                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box display="flex" mt="2px" h="50px" justifyContent="flex-start" alignItems="center" bgColor={checkbox1Checked?"#c1daf8":"#F5F5F5"}>
                    <Box ml="50px">
                        <Checkbox size="lg" 
                        isChecked={checkbox1Checked}
                        onChange={() => setCheckbox1Checked(!checkbox1Checked)}
                        ></Checkbox>
                    </Box>
                    <Box width="200px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="50px"
                    >
                        Naresh
                    </Box>
                    <Box width="150px"
                    >
                        <Text>9666053015</Text>
                    </Box>
                    <Box width="250px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                    >
                        Naresh2023@gmail.com
                    </Box>
                    <Box width="450px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis" ml="20px">
                        Lorem ipsum dolor sit amet consecthsfsfhfhjetur adipisicing elit. Deleniti, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, et.
                    </Box>

                </Box>

                <Box display="flex" mt="2px" h="50px" justifyContent="flex-start" alignItems="center"  bgColor={checkbox2Checked?"#c1daf8":"#F5F5F5"}>
                    <Box ml="50px">
                        <Checkbox size="lg"
                        isChecked={checkbox2Checked}
                        onChange={() => setCheckbox2Checked(!checkbox2Checked)}
                        ></Checkbox>
                    </Box>
                    <Box width="200px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="50px"
                    >
                        Venkateshwaru
                    </Box>
                    <Box width="150px"
                    >
                        <Text>8451323015</Text>
                    </Box>
                    <Box width="250px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                    >
                        Venkateshwarlupasanuri1991@gmail.com
                    </Box>
                    <Box width="450px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis" ml="20px">
                        Lorem ipsum dolor sit amet consecthsfsfhfhjetur adipisicing elit. Deleniti, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, et.
                    </Box>

                </Box>


                <Box display="flex" mt="2px" h="50px" justifyContent="flex-start" alignItems="center"  bgColor={checkbox3Checked?"#c1daf8":"#F5F5F5"}>
                    <Box ml="50px">
                        <Checkbox size="lg"
                       isChecked={checkbox3Checked}
                       onChange={() => setCheckbox3Checked(!checkbox3Checked)}
                       ></Checkbox>
                    </Box>
                    <Box width="200px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="50px"
                    >
                        Nagaraju mandi
                    </Box>
                    <Box width="150px"
                    >
                        <Text>7882403015</Text>
                    </Box>
                    <Box width="250px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                    >
                        nagarajumandi138@gmail.com
                    </Box>
                    <Box width="450px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="20px">
                        Lorem ipsum dolor sit amet consecthsfsfhfhjetur adipisicing elit. Deleniti, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, et.
                    </Box>

                </Box>

                <Box display="flex" mt="2px" h="50px" justifyContent="flex-start" alignItems="center"  bgColor={checkbox4Checked?"#c1daf8":"#F5F5F5"}>
                    <Box ml="50px">
                        <Checkbox size="lg"
                        isChecked={checkbox4Checked}
                        onChange={() => setCheckbox4Checked(!checkbox4Checked)}
                        ></Checkbox>
                    </Box>
                    <Box width="200px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="50px"
                    >
                        Swapna Reddy badawar
                    </Box>
                    <Box width="150px"
                    >
                        <Text>9647586849</Text>
                    </Box>
                    <Box width="250px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                    >
                        swapna2@gmail.com
                    </Box>
                    <Box width="450px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="20px"
                    >
                        Lorem ipsum dolor sit amet consecthsfsfhfhjetur adipisicing elit. Deleniti, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, et.
                    </Box>

                </Box>


                <Box display="flex" mt="2px" h="50px" justifyContent="flex-start" alignItems="center"  bgColor={checkbox5Checked?"#c1daf8":"#F5F5F5"}>
                    <Box ml="50px">
                        <Checkbox size="lg" 
                       isChecked={checkbox5Checked}
                       onChange={() => setCheckbox5Checked(!checkbox5Checked)}
                       ></Checkbox>
                    </Box>
                    <Box width="200px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="50px"
                    >
                        Josheph jonder
                    </Box>
                    <Box width="150px"
                    >
                        <Text>9647900114</Text>
                    </Box>
                    <Box width="250px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                    >
                        josheph2@gmail.com
                    </Box>
                    <Box width="450px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="20px"
                    >
                        Lorem ipsum dolor sit amet consecthsfsfhfhjetur adipisicing elit. Deleniti, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, et.
                    </Box>

                </Box>

                <Box display="flex" mt="2px" h="50px" justifyContent="flex-start" alignItems="center"  bgColor={checkbox6Checked?"#c1daf8":"#F5F5F5"}>
                    <Box ml="50px">
                        <Checkbox size="lg" 
                        isChecked={checkbox6Checked}
                        onChange={() => setCheckbox6Checked(!checkbox6Checked)}
                        ></Checkbox>
                    </Box>
                    <Box width="200px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="50px"
                    >
                       Laxmi Raghunandhanrao machiraju
                    </Box>
                    <Box width="150px"
                    >
                        <Text>9647544549</Text>
                    </Box>
                    <Box width="250px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                    >
                        raghu1554@gmail.com
                    </Box>
                    <Box width="450px"

                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        ml="20px"
                    >
                        Lorem ipsum dolor sit amet consecthsfsfhfhjetur adipisicing elit. Deleniti, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, et.
                    </Box>

                </Box>




            </Box>
        </Center>
    )
}

export default Inbox;