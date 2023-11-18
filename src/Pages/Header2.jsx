import React, { useEffect } from 'react';

import { useState } from 'react';
import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    VStack,
    Collapse,
    Button,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
   
    PopoverBody,
    Input,
    InputGroup,
    InputRightElement,
    Center,
    Menu, MenuList, MenuItem, MenuButton
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
   
    ChevronDownIcon,
} from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';

import './../App.css';
import axios from 'axios';

function Header2() {

    const [searchKey, setSearchKey] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSearch = async () => {
        if (searchKey.trim() === '') {
            setResults([]);
            return;
        }
        try {
            const response = await axios.get(
                `http://localhost:5000/api/search/${searchKey}`
            );
            setResults(response.data.results);
            setError(null);
        } catch (error) {
            setError('An error occurred while fetching results.');
            setResults([]);
        }
    };

    const handleCategory = category => {
        setSearchKey('');
        setResults([]);
        navigate(`/apis?category=${category._id}`);
    };
    useEffect(() => {
        fetchProducts();
    }, [])
    const [buttons, setButtons] = useState([]);



    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/buttons");
            setButtons(response.data.buttons);
            console.log(response.data.buttons);

        } catch (error) {
            console.error("Error fetching buttons:", error);
        }
    }

    const handleClick = () => {
        navigate(`/categories/`)
    }

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowWidth = window.innerWidth;


            if (windowWidth <= 912) {

                setIsSticky(window.scrollY >= 40);
            } else {

                setIsSticky(false);
            }
        };


        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { isOpen, onToggle } = useDisclosure();
    const [menuData, setMenuData] = useState([
        { label: "Home", url: "/" },
        { label: "About Us", url: "/about" },
        {
            label: "Products Category",
            url: "/categories",
            subItems: [
                // product items...
                // { label: "Impurities Synthesis", url: "/categories" },
                { label: "Laboratory Chemicals & solvents", url: "/Labaratoriesandchemicalsolvents" },
                { label: "Microbiology Agar Media", url: "/MicrobiologyAgarmedia" },
                { label: "Resins & Metal scavengers", url: "/Resignsandmetalscavangers" },
                { label: "HPLC Columns", url: "/HPCLColumns" },
                { label: "Supply of ApIs & Intermediates", url: "/Apiintermediates" },
            ],
        },
        { label: "Technical Support", url: "/Technicalsupport" },

        { label: "Contact Us", url: "/contact" },
    ]);

    return (

        <Center>
            <Box w={{ base: "100%", xl: "1230px" }} className={`navbar ${isSticky ? 'sticky' : ''}`}>
                <Flex
                    as="nav"
                    align="center"
                    justify="space-between"
                    padding={{ base: 2, lg: 4 }}
                    bg="white"
                    color="#0157AC"
                    h="70px"
                    top="0"
                    left="0"
                    right="0"
                    fontSize="15px"
                    fontWeight="600"
                // zIndex="1"
                >
                    {/* Logo ------- */}
                    <Flex align="center">
                        <img src="logo.png" alt="Logo" />
                    </Flex>


                    {/* Search Bar */}
                    <Box className='HeaderSearch' display={{ base: "none", lg: "flex" }}>
                        <Popover>
                            <PopoverTrigger>
                                <InputGroup w="300px">
                                    <Input
                                        placeholder="Search Here..."
                                        value={searchKey}
                                        onChange={e => setSearchKey(e.target.value)}
                                    />
                                    <InputRightElement w="80px" borderRadius="0px 5px 5px 0px">
                                        <Button
                                            bgColor="#0157AC"
                                            onClick={handleSearch}
                                            colorScheme="#0157AC"
                                            borderRadius="0px 5px 5px 0px"
                                        >
                                            Search
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverBody>
                                    {error && <Text color="red.500">{error}</Text>}
                                    {results.length === 0 ? (
                                        <Text>No results found.</Text>
                                    ) : (
                                        results.map(result => (
                                            <Link key={result._id} to={`/apis?category=${result._id}`}>
                                                <Text
                                                    p={2}
                                                    _hover={{ bg: 'gray.200' }}
                                                    onClick={() => handleCategory(result)}
                                                >
                                                    {result.category_name}
                                                </Text>
                                            </Link>
                                        ))
                                    )}
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Box>

                    {/* Desktop Navigation Links */}

                    {/* Hamburger Icon for mobile --------- */}
                    <IconButton
                        display={{ base: "flex", lg: "none" }}
                        icon={isOpen ? <CloseIcon color={"#0157AC"} /> : <HamburgerIcon color={"#0157AC"} />}
                        onClick={onToggle}
                        variant="outline"
                        color="white"
                    />

                </Flex>

                {/* Mobile and Tablet Dropdown Menu */}
                <Collapse in={isOpen} animateOpacity>
                    <VStack
                        display={{ base: isOpen ? "flex" : "none", lg: "none" }}
                        alignItems="center"
                        bg="white"
                        color="#0157AC"
                        fontSize="18px"
                        fontWeight="600"
                        py={1}
                    >
                        {menuData.map((item) => (
                            <React.Fragment key={item.label}>
                                {item.subItems ? (
                                    <Menu>
                                        <MenuButton
                                            // as={Button}
                                            // rightIcon={<ChevronDownIcon/>}
                                            variant="link"
                                            _hover={{ color: "#0157AC", borderRadius: "10px" }}
                                            mb={4}
                                            fontSize="18px"
                                            fontWeight="600"
                                        >
                                            {item.label}<ChevronDownIcon />
                                        </MenuButton>
                                        <MenuList>
                                            {buttons.map((button) => (
                                                <Box key={button._id} >
                                                    <MenuItem variant="ghost" onClick={handleClick}
                                                     _hover={{
                                                        background: '#0157AC',
                                                        color: 'white',
                                                    }}
                                                    >
                                                        {button.name}
                                                       
                                                    </MenuItem>
                                                </Box>
                                            ))}
                                            {item.subItems.map((subItem) => (
                                                <Link key={subItem.label} to={subItem.url}>
                                                    <MenuItem
                                                     _hover={{
                                                        background: '#0157AC',
                                                        color: 'white',
                                                    }}
                                                    
                                                    >{subItem.label}</MenuItem>
                                                </Link>
                                            ))}
                                        </MenuList>
                                    </Menu>
                                ) : (
                                    <Link to={item.url}>
                                        <Text
                                            variant="link"
                                            onClick={onToggle}
                                            _hover={{ color: "#0157AC", borderRadius: "10px" }}
                                            mb={1}
                                            color={"#0157AC"}
                                        >
                                            {item.label}
                                        </Text>
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                        {/* Search Bar */}
                        <Box className='HeaderSearch'>
                            <Popover>
                                <PopoverTrigger>
                                    <InputGroup w="300px">
                                        <Input
                                            placeholder="Search Here..."
                                            value={searchKey}
                                            onChange={e => setSearchKey(e.target.value)}
                                        />
                                        <InputRightElement w="80px" borderRadius="0px 5px 5px 0px">
                                            <Button
                                                bgColor="#0157AC"
                                                onClick={handleSearch}
                                                colorScheme="#0157AC"
                                                borderRadius="0px 5px 5px 0px"
                                            >
                                                Search
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverBody>
                                        {error && <Text color="red.500">{error}</Text>}
                                        {results.length === 0 ? (
                                            <Text>No results found.</Text>
                                        ) : (
                                            results.map(result => (
                                                <Link key={result._id} to={`/apis?category=${result._id}`}>
                                                    <Text
                                                        p={2}
                                                        _hover={{ bg: 'gray.200' }}
                                                        onClick={() => handleCategory(result)}
                                                    >
                                                        {result.category_name}
                                                    </Text>
                                                </Link>
                                            ))
                                        )}
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </Box>
                    </VStack>
                </Collapse>
            </Box>
        </Center>
    );
}

export default Header2;