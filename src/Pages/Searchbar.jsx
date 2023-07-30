import {
    Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  InputRightElement
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchBar = () => {
  return (
    <>
    <Box width="250px">
      {/* <InputGroup borderRadius={2} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text" placeholder="Search..." border="1px solid #949494" />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="2px solid #949494">
            
          </Button>
        </InputRightAddon>
      </InputGroup> */}

<InputGroup borderRadius={5}>
  <InputRightElement pointerEvents="none">
      <SearchIcon color="#D9D9D9" />
  </InputRightElement>
  <Input placeholder="Search..." />
</InputGroup>

     </Box>
    </>
  );
};
