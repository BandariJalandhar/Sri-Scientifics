import React, { useState, useEffect } from "react";
import { Button, Select, Text, Box,Center, Flex,SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SubCategory = () => {
  const [buttons, setButtons] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [categoryButtons, setCategoryButtons] = useState({});
  const [subcategoryButtons, setSubcategoryButtons] = useState([]);
  const [filterLetter, setFilterLetter] = useState("");
  const [selectedButtonValue, setSelectedButtonValue] = useState("");
  const navigate = useNavigate();

  // Use local storage to persist and retrieve selected values
  useEffect(() => {
    const savedSelectedCategory = localStorage.getItem("selectedCategory");
    const savedSelectedButtonValue = localStorage.getItem("selectedButtonValue");

    if (savedSelectedCategory) {
      setSelectedCategory(savedSelectedCategory);
    }

    if (savedSelectedButtonValue) {
      setSelectedButtonValue(savedSelectedButtonValue);
    }

    fetchButtons();
    if (savedSelectedCategory) {
      fetchCategoryButton(savedSelectedCategory);
    } else {
      fetchCategoryButton(); 
    }
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchCategoryButton(selectedCategory);
    }
  }, [selectedCategory]);

  const handleSelectCategory = async category => {
    setSelectedCategory(category);
    setSubcategoryButtons(categoryButtons[category] || []);
    setShowCategoryOptions(true);

    localStorage.setItem('selectedCategory', category);

    if (category) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/buttons/${category}/category`
        );
        console.log('Fetched category buttons:', response.data);
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching Category buttons:', error);
      }
    }
  };

  //Fetching Buttons from Product Category
  const fetchButtons = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/buttons");
      setButtons(response.data.buttons);
    } catch (error) {
      console.error("Error fetching buttons:", error);
    }
  };

  //Fetch the sub category from selected Button of product category
  const fetchCategoryButton = async (buttonId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/buttons/${buttonId}/category`
      );
      console.log("Fetched category buttons:", response.data);
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching Category buttons:", error);
    }
  };

  const handleCategory = (category) => {
    setSelectedButtonValue(category.name);
    localStorage.setItem("selectedButtonValue", category.name);
    navigate(`/apis?category=${category._id}`);
  };

  const handleFilterChange = (letter) => {
    setFilterLetter(letter);
  };
  const filteredCategories = categories.filter((category) =>
    category.category_name.startsWith(filterLetter)
  );

  const handleSelectButton = (buttonName) => {
    setSelectedButtonValue(buttonName);
  };

  return (
    <Center>
    <Box >
        <Center>
      <Box pb={2}   mt="30px">
        <Flex direction={{ base: 'column', md: 'row' }}>
        <Select
          placeholder="Select a Product Category"
          value={selectedCategory}
          onChange={(e) => handleSelectCategory(e.target.value)}
          width={{ base: "250px", md: "297px" }}
          h="35px"
         m="8px"
        >
          {buttons.map((button) => (
            <option key={button._id} value={button._id}>
              {button.name}
            </option>
          ))}
        </Select>


        <Select
          placeholder="Filter by Letter"
          value={filterLetter}
          onChange={(e) => handleFilterChange(e.target.value)}
          width={{ base: "250px", md: "175px" }}
          h="35px"
          m="8px"
        >
          <option value="">All</option>
          {Array.from({ length: 26 }, (_, index) => (
            <option key={index} value={String.fromCharCode(65 + index)}>
              {String.fromCharCode(65 + index)}
            </option>
          ))}
        </Select>
        <Text  fontSize="20" fontWeight="bold" m="8px" mt="8px">
          Total API : {filteredCategories.length}
        </Text>
        </Flex>
      </Box>
      </Center>
      
      <Box >
        <Center>
<Box display="grid" >
        {selectedCategory && (
            <Center>
          {/* <Flex justify="center" flexWrap="wrap" w="90%"> */}
          <SimpleGrid columns={{base:"1",sm:"2",md:"3",lg:"4",xl:"5"}}>
            {filteredCategories
              .sort((a, b) => a.category_name.localeCompare(b.category_name))
              .map((category) => (
                <Button
                color="#333333"
                  fontSize="14px"
                  fontWeight="500"
                  key={category._id}
                  bgColor="white"
                  onClick={() => handleCategory(category)}
                  width="190px"
                  height="30px"
                  border="1px solid #333333"
                  m="8px"
                >
                  {category.category_name}
                </Button>
              ))}
              </SimpleGrid>
          {/* </Flex> */}
          </Center>
        )}
        </Box>
        </Center>
      </Box>
     
    </Box>
    </Center>
  );
};

export default SubCategory;