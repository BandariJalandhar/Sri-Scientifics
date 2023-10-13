import React, { useState, useEffect } from 'react';
import {
  SimpleGrid,
  UnorderedList,
  ListItem,
  Link,
  Flex,
  Stack,
  Center,
  CardBody,
  Card,
} from '@chakra-ui/react';
import axios from 'axios';
import { Box, Select, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

const Apis = () => {
  const [buttons, setButtons] = useState([]);
  const [selectedButton, setSelectedButton] = useState('');

  const [categories, setCategories] = useState([]);

  // Declare selectedCategoryFromURL here
  const [selectedCategory, setSelectedCategory] = useState('');

  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Initialize selectedCategoryFromURL using the URL parameter
  const selectedCategoryFromURL = queryParams.get('category');

  useEffect(() => {
    const savedSelectedButton = localStorage.getItem('selectedButton');
    const savedSelectedCategory = localStorage.getItem('selectedCategory');

    if (savedSelectedButton) {
      setSelectedButton(savedSelectedButton);
      fetchCategories(savedSelectedButton);
    } else {
      fetchButtons();
    }

    if (savedSelectedCategory) {
      setSelectedCategory(savedSelectedCategory);
      fetchApi(savedSelectedCategory);
    } else {
      fetchApi();
    }
  }, []);

  useEffect(() => {
    fetchButtons();
    fetchCategories();
    fetchApi(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedButton) {
      fetchCategories(selectedButton);
    }
  }, [selectedButton]);

  useEffect(() => {
    setSelectedCategory(selectedCategoryFromURL || '');
  }, [selectedCategoryFromURL]);

  // Update localStorage when the selected values change
  useEffect(() => {
    if (selectedButton) {
      localStorage.setItem('selectedButton', selectedButton);
    } else {
      localStorage.removeItem('selectedButton');
    }

    if (selectedCategory) {
      localStorage.setItem('selectedCategory', selectedCategory);
    } else {
      localStorage.removeItem('selectedCategory');
    }
  }, [selectedButton, selectedCategory]);

  //For Displaying the Buttons
  const fetchButtons = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/buttons');
      setButtons(response.data.buttons);
    } catch (error) {
      console.error('Error fetching buttons:', error);
    }
  };

  //For Displaying the Categories
  const fetchCategories = async buttonId => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/buttons/${buttonId}/category`
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  //For Displaying the API
  const fetchApi = async categoryId => {
    try {
      if (categoryId) {
        const response = await axios.get(
          `http://localhost:5000/api/category/${categoryId}/apis`
        );
        // Spread the existing subcategories and append the new ones
        setSubcategories(response.data);
      } else {
        setSubcategories([]);
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      setSubcategories([]);
    }
  };

  //Select downdrop for Buttons
  const handleSelectButton = event => {
    const selectedButtonId = event.target.value;
    setSelectedButton(selectedButtonId);
    fetchCategories(selectedButtonId);
  };

  //Select downdrop for Buttons
  const handleSelectCategoryLink = categoryId => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(''); // Reset selected subcategory
    fetchApi(categoryId);
    // Fetch APIs for the selected category
  };

  const handleSelectCategory = event => {
    const selectedCategoryId = event.target.value;
    setSelectedCategory(selectedCategoryId);
    setSelectedSubcategory(''); // Reset selected subcategory
    fetchApi(selectedCategoryId);
    // Fetch APIs for the selected category
  };

  // State to track hover state
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    // Set hover state to true
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    // Set hover state to false
    setIsHovered(false);
  };

  function getCategoryNameById(id) {
    const category = categories.find(category => category._id === id);
    return category ? category.category_name : null;
  }

  return (
    <Box display="flex" flexDir="column" m="20px">
      <Box
        display="flex"
        flexDir={{ base: 'column', md: 'row' }}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Select
          fontSize="14px"
          m="10px"
          outline="none"
          width="280px"
          bgColor="white"
          value={selectedButton}
          onChange={handleSelectButton}
        >
          <option value="">Select Product</option>
          {buttons.map(button => (
            <option key={button._id} value={button._id}>
              {button.name}
            </option>
          ))}
        </Select>
        {selectedButton && (
          <Select
            fontSize="14px"
            m="10px"
            outline="none"
            width="280px"
            value={selectedCategory}
            onChange={handleSelectCategory}
            bgColor="white"
          >
            <option value="">Select Category</option>
            {categories
              .sort((a, b) =>
                a.category_name.localeCompare(b.category_name, undefined, {
                  sensitivity: 'base',
                })
              )
              .map(category => (
                <option key={category._id} value={category._id}>
                  {category.category_name}
                </option>
              ))}
          </Select>
        )}
      </Box>

      <Box
        display="flex"
        flexDir={{ base: 'column', md: 'row' }}
        w="100%"
        ml={{ base: '5px', lg: '30px' }}
      >
        <Box
          w={{ base: '100%', md: '250px' }}
          display="flex"
          flexDir="column"
          h="50vh"
          ml={{base:"40px",md:"10px"}}
        >
          <Box
            display="flex"
            flexDir="column"
            alignItems="start"
            justifyContent="center"
            width="100%"
          >
            <Box display="flex" flexDir="row" h="40px" alignItems="center" borderBottomWidth={1}>
              <Text color="#0157AC" fontSize="16" >
                Category
              </Text>
              <Text >&nbsp;:&nbsp;&nbsp;</Text>
              <Text >{getCategoryNameById(selectedCategory)}</Text>{' '}
            </Box>
            <Box  display="flex" flexDir="row" h="40px" alignItems="center" borderBottomWidth={1} >
              <Text color="#0157AC" fontSize="16" >
                Total Products
              </Text>
              <Text >&nbsp;:&nbsp;&nbsp;</Text>
              <Text >{categories.length}</Text>
            </Box>
            <Box  display="flex" flexDir="row" alignItems="center" h="40px" borderBottomWidth={1}>
              <Text color="#0157AC" fontSize="16" >
                Filter By
              </Text>
              <Text >&nbsp;:&nbsp;&nbsp;</Text>
              <Text > API</Text>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDir="column"
            overflowY="scroll"
            alignItems="start"
          >
            {selectedButton && (
              <UnorderedList spacing={2} p={0} m={0}>
                {categories
                  .sort((a, b) =>
                    a.category_name.localeCompare(b.category_name, undefined, {
                      sensitivity: 'base',
                    })
                  )
                  .map(category => (
                    <ListItem key={category._id} listStyleType="none">
                      <Link
                        as={RouterLink}
                        to={`/apis?category=${category._id}`}
                        fontSize="14px"
                        outline="none"
                        bgColor="white"
                        text-Decoration="none"
                        onClick={() => handleSelectCategoryLink(category._id)}
                      >
                        <span style={{ marginRight: '8px' }}>•</span>
                        {category.category_name}
                      </Link>
                    </ListItem>
                  ))}
              </UnorderedList>
            )}
          </Box>
        </Box>
        <Box display="flex" flexDir="column" alignItems="start" p={4}>
          <Box alignItems="center" fontSize="20px" color="#0157Ac" mb="10px">
            <Text>Pharmaceuticals Reference Standards</Text>
          </Box>
          {selectedCategory && subcategories && (
            <Center>
              <SimpleGrid
                columns={{ base: 1, md: 2, xl: 3 }}
                css={{
                  '@media (max-width: 820px)': {
                    gridTemplateColumns: '1fr',
                  },
                }}
                spacing="15px"
              >
                {subcategories.map(api => (
                  <Card
                    h="200px"
                    w="300px"
                    color="#565454"
                    boxShadow="1px  1px 3px #565454"
                  >
                    <CardBody>
                      <Box
                        borderBottom="1px solid gray"
                        pb="10px"
                        position="relative"
                      >
                        <Text
                          textAlign="center"
                          fontSize="16px"
                          fontWeight="500"
                          whiteSpace="nowrap"
                          overflow="hidden"
                          textOverflow="ellipsis"
                          cursor="pointer"
                          title={api.api_name}
                          onMouseOver={handleMouseOver}
                          onMouseOut={handleMouseOut}
                          className={isHovered ? 'hovered' : ''}
                        >
                          {' '}
                          {api.api_name}
                        </Text>
                        <Box
                          className={`additional-content ${
                            isHovered ? 'show' : ''
                          }`}
                          fontSize="18px"
                        >
                          {/* additional content */}
                        </Box>
                      </Box>
                      <Box margin="5px" fontSize="14px" fontWeight="400">
                        <Stack>
                          <Flex>
                            <Text>CAT NO</Text>
                            <Text ml={4}>:</Text>
                            <Box mx={4}>{api.cat_no}</Box>
                          </Flex>
                          <Flex>
                            <Text>CAS NO</Text>
                            <Text ml={3}>:</Text>
                            <Box mx={4}>{api.cas_no}</Box>
                          </Flex>
                          <Flex>
                            <Text>Mol.F.</Text>
                            <Text ml={7}>:</Text>
                            <Box mx={4}>{api.mol_f}</Box>
                          </Flex>
                          <Flex>
                            <Text>Mol.Wt.</Text>
                            <Text ml={4}>:</Text>
                            <Box mx={4}>{api.mol_wt}</Box>
                          </Flex>
                          <Flex color="blue">
                            <Text>Inv.Status</Text>
                            <Text ml={1}>:</Text>
                            <Box mx={3}>{api.inv_status}</Box>
                          </Flex>
                        </Stack>
                      </Box>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </Center>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Apis;
