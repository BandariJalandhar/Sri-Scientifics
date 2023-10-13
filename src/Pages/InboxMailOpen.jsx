import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react"
import { FiArrowLeft } from "react-icons/fi";

const InboxMailOpen =()=>{
    return(
        <Center>
            <Box w="1200px" >
                <Flex>
                    <Box fontSize="30px">
                        <FiArrowLeft/>

                    </Box>
                    <Box>
                        <Box fontSize="30px">
                        <Stack>
                            <Text>Naresh</Text>
                            <Text>From &nbsp;:Naresh2023@gmail.com</Text>
                            <Text>Ph &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:9666053015</Text>
                        </Stack>
                        </Box>
                        
                        <Box>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, maiores autem odit dolorum fuga excepturi. Asperiores, ratione? Fuga voluptatem, eligendi libero eos sed omnis numquam ratione perspiciatis odit. Sunt, ipsa!
                            </Text>

                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Center>
    )
}

export default InboxMailOpen;