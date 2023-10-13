import React, { useState, useEffect } from "react";

import {

  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  Box,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const Products = () => {
  const [buttons, setButtons] = useState([]);

  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [categoryButtons, setCategoryButtons] = useState({});
  const [subcategoryButtons, setSubcategoryButtons] = useState([]);
  const [filterLetter, setFilterLetter] = useState("");


  const toast = useToast();
  useEffect(() => {
    fetchButtons();
  }, []);


  //handling the select dropdown for product category added buttons
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSubcategoryButtons(categoryButtons[category] || []);
    setShowCategoryOptions(true);

    // Fetch subcategories for the selected button
    fetchCategoryButton(category._id);
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

  // Fetch the sub category from selected Button of product category
  const fetchCategoryButton = async (buttonId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/buttons/${buttonId}/category`
      );
      console.log("Fetched category buttons:", response.data);

      const sortedCategories = response.data.categories.sort((a, b) =>
        a.category_name.localeCompare(b.category_name, undefined, {
          sensitivity: "base",
        })
      );

      setCategories(sortedCategories);
    } catch (error) {
      console.error("Error fetching Category buttons:", error);
    }
  };


  //Filtering the categories
  const handleFilterChange = (letter) => {
    setFilterLetter(letter);
  };
  const filteredCategories = categories
    .filter((category) =>
      category.category_name
        .toLowerCase()
        .startsWith(filterLetter.toLowerCase())
    )
    .sort((a, b) => {
      const wordsA = a.category_name.toLowerCase().split(" ");
      const wordsB = b.category_name.toLowerCase().split(" ");

      for (let i = 0; i < Math.min(wordsA.length, wordsB.length); i++) {
        const wordComparison = wordsA[i].localeCompare(wordsB[i], undefined, {
          sensitivity: "base",
        });

        if (wordComparison !== 0) {
          return wordComparison;
        }
      }
      return wordsA.length - wordsB.length;
    });


  return (
    <>

      <Box fontFamily="helvetica" mx="10%" h="100vh" mt="5%">
        <Box
          pb={2}
          display="flex"
          justifyContent="space-around"
          pt={5}
          w="100%"
        >
          <Box
            display="flex"
            flexDir="row"
            w="60%"
            justifyContent="space-between"
          >
            <Select
              placeholder="Select a Product Category"
              onChange={(e) => handleSelectCategory(JSON.parse(e.target.value))} // Parse the selected value
              width="50%"
              ml={5}
              mr={5}
            >
              {buttons.map((button) => (
                <option key={button._id} value={JSON.stringify(button)}>
                  {button.name}
                </option>
              ))}
            </Select>

          </Box>
          <Box
            display="flex"
            flexDir="row"
            ml="10%"
            justifyContent="space-evenly"
            w="40%"
            fontFamily="helvetica"
          >
            <Select
              placeholder="Filter"
              bgImg="../Img/107799.png"
              value={filterLetter}
              onChange={(e) => handleFilterChange(e.target.value)}
              width="30%"
              mr={5}
              ml="70%"
            >
              <option value="">All</option>
              {Array.from({ length: 26 }, (_, index) => (
                <option key={index} value={String.fromCharCode(65 + index)}>
                  {String.fromCharCode(65 + index)}
                </option>
              ))}
            </Select>
          </Box>
        </Box>
        <Box w="100%" p={4}>
          {selectedCategory && (
            <Grid templateColumns="repeat(6, 1fr)" gap={3}>
              {filteredCategories.map((category) => (
                <GridItem
                  key={category._id}
                  position="relative"

                >
                  <Box>
                    <Box
                      p={1}
                      borderWidth={1}
                      borderRadius="md"
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      boxShadow="md"
                      h="50px"
                    >
                      <Text fontSize="medium" ml={2} mr={10}>
                        {category.category_name}
                      </Text>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Products;