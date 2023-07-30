import { Box, Text, ListItem, UnorderedList, HStack } from '@chakra-ui/react';
import {
  Card,
  CardBody,
  Image,
  Heading,
  Divider,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import '../../App.css';

import { Link } from 'react-router-dom';

const Gabapentin1 = () => {
  return (
    <div>
      <Box>
        <HStack>
          <Box position="relative" top="-570px">
            <Box width="300px" paddingLeft="30px" borderColor="gray">
              <Box margin="1px" padding="10px" paddingTop="60px">
                <Text
                  paddingBottom="15px"
                  marginBottom="1px"
                  borderBottom="1px"
                >
                  Category : Gabapentin 1
                </Text>
              </Box>
              <Box margin="1px" padding="10px">
                <Text
                  marginBottom="1px"
                  borderBottom="1px"
                  paddingBottom="15px"
                >
                  {' '}
                  Sub Category : 7
                </Text>
              </Box>
              <Box margin="1px" padding="10px">
                <Text
                  marginBottom="1px"
                  borderBottom="1px"
                  paddingBottom="15px"
                >
                  Filter By: API
                </Text>
              </Box>
            </Box>
            <Box
              display="block"
              overflowY="scroll"
              paddingLeft="80px"
              marginTop="10px"
              height="220px"
            >
              <UnorderedList margin="2px" spacing="10px">
                <Link to="/Gabapentin1">
                  {' '}
                  <ListItem>Gabapentin 1</ListItem>
                </Link>
                <Link to="/Gabapentin2">
                  <ListItem>Gabapentin 2</ListItem>
                </Link>
                <Link to="/Ganciclovir">
                  <ListItem>Ganciclovir</ListItem>
                </Link>
                <Link to="/Gefitinib">
                  {' '}
                  <ListItem>Gefitinib</ListItem>
                </Link>
                <Link to="/Gentamicine">
                  {' '}
                  <ListItem>Gentamicine</ListItem>
                </Link>
                <Link to="/Gemfibrozil">
                  {' '}
                  <ListItem>Gemfibrozil</ListItem>
                </Link>
                <Link to="/Glibenclamide">
                  {' '}
                  <ListItem>Glibenclamide</ListItem>
                </Link>
                <Link to="/Glycopyrrolate">
                  {' '}
                  <ListItem>Glycopyrrolate</ListItem>
                </Link>
                <Link to="/Glimiperide">
                  {' '}
                  <ListItem>Glimiperide</ListItem>
                </Link>
                <Link to="/Granisetron">
                  {' '}
                  <ListItem>Granisetron</ListItem>
                </Link>
                <Link to="/Griseofulvin">
                  {' '}
                  <ListItem>Griseofulvin</ListItem>
                </Link>
                <Link to="/Guaifenesin">
                  {' '}
                  <ListItem>Guaifenesin</ListItem>
                </Link>
              </UnorderedList>
            </Box>
          </Box>

          <Box>
            <Box marginLeft="10px">
              <Box marginLeft="100px" padding="10px">
                <Heading>Pharmaceuticals Reference Standards</Heading>
              </Box>
            </Box>
            <Box margin="10px" marginLeft="20px">
              <VStack>
                <HStack>
                  <Card className="Subcard" boxShadow="dark-lg">
                    <CardBody>
                      <Text align="justify" textAlign="center" fontSize="20px">
                        Gabapentin EP Impurity A
                      </Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/phy.png" className="Image"></Image>
                      </Box>
                      <Box margin="5px" paddingTop="30px">
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAT NO </Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : SZ-G001002</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAS NO</Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : 64744-50-9</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.F.</Text>{' '}
                          </Box>
                          <Text paddingLeft="15px"> : C9H15NO</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.Wt.</Text>{' '}
                          </Box>
                          <Text paddingLeft="5px"> : 153.2</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text color="blue">lnv.Staus</Text>{' '}
                          </Box>
                          <Text color="blue" paddingLeft="0px">
                            {' '}
                            : ln Stock
                          </Text>
                        </HStack>
                      </Box>
                    </CardBody>
                  </Card>

                  <Card className="Subcard" boxShadow="dark-lg">
                    <CardBody>
                      <Text align="justify" textAlign="center" fontSize="20px">
                        Gabapentin EP Impurity B
                      </Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/phy.png" className="Image"></Image>
                      </Box>
                      <Box margin="5px" paddingTop="30px">
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAT NO </Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : SZ-G001003</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAS NO</Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : 133481-09-1</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.F.</Text>{' '}
                          </Box>
                          <Text paddingLeft="15px"> : C9H13NO2</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.Wt.</Text>{' '}
                          </Box>
                          <Text paddingLeft="5px"> : 167.2</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text color="blue">lnv.Staus</Text>{' '}
                          </Box>
                          <Text color="blue" paddingLeft="0px">
                            {' '}
                            : ln Stock
                          </Text>
                        </HStack>
                      </Box>
                    </CardBody>
                  </Card>

                  <Card className="Subcard" boxShadow="dark-lg">
                    <CardBody>
                      <Text align="justify" textAlign="center" fontSize="20px">
                        Gabapentin EP Impurity D{' '}
                      </Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/phy.png" className="Image"></Image>
                      </Box>
                      <Box margin="5px" paddingTop="30px">
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAT NO </Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : SZ-G001004</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAS NO</Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : 1076198-17-8</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.F.</Text>{' '}
                          </Box>
                          <Text paddingLeft="15px"> : C18H29NO3</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.Wt.</Text>{' '}
                          </Box>
                          <Text paddingLeft="5px"> : 307.4</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text color="blue">lnv.Staus</Text>{' '}
                          </Box>
                          <Text color="blue" paddingLeft="0px">
                            {' '}
                            : ln Stock
                          </Text>
                        </HStack>
                      </Box>
                    </CardBody>
                  </Card>
                </HStack>

                <HStack>
                  <Card className="Subcard" boxShadow="dark-lg">
                    <CardBody>
                      <Text align="justify" textAlign="center" fontSize="20px">
                        {' '}
                        Gabapentin EP Impurity E{' '}
                      </Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/phy.png" className="Image"></Image>
                      </Box>
                      <Box margin="5px" paddingTop="30px">
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAT NO </Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : SZ-G001005</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAS NO</Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : 67950-95-2 </Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.F.</Text>{' '}
                          </Box>
                          <Text paddingLeft="15px"> : C9H14O4</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.Wt.</Text>{' '}
                          </Box>
                          <Text paddingLeft="5px"> : 186.2</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text color="blue">lnv.Staus</Text>{' '}
                          </Box>
                          <Text color="blue" paddingLeft="0px">
                            {' '}
                            : ln Stock
                          </Text>
                        </HStack>
                      </Box>
                    </CardBody>
                  </Card>

                  <Card className="Subcard" boxShadow="dark-lg">
                    <CardBody>
                      <Text align="justify" textAlign="center" fontSize="20px">
                        {' '}
                        Gabapentin Homologue
                      </Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/phy.png" className="Image"></Image>
                      </Box>
                      <Box margin="5px" paddingTop="30px">
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAT NO </Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : 000</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAS NO</Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : NA</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.F.</Text>{' '}
                          </Box>
                          <Text paddingLeft="15px"> : 000</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.Wt.</Text>{' '}
                          </Box>
                          <Text paddingLeft="5px"> : 000</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text color="blue">lnv.Staus</Text>{' '}
                          </Box>
                          <Text color="blue" paddingLeft="0px">
                            {' '}
                            : ln Stock
                          </Text>
                        </HStack>
                      </Box>
                    </CardBody>
                  </Card>

                  <Card className="Subcard" boxShadow="dark-lg">
                    <CardBody>
                      <Text align="justify" textAlign="center" fontSize="20px">
                        {' '}
                        Gabapentin Lactam tertiary butyl amine urea
                      </Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/phy.png" className="Image"></Image>
                      </Box>
                      <Box margin="5px" paddingTop="30px">
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAT NO </Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : 000</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAS NO</Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : NA</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.F.</Text>{' '}
                          </Box>
                          <Text paddingLeft="15px"> : 000</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.Wt.</Text>{' '}
                          </Box>
                          <Text paddingLeft="5px"> : 000</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text color="blue">lnv.Staus</Text>{' '}
                          </Box>
                          <Text color="blue" paddingLeft="0px">
                            {' '}
                            : ln Stock
                          </Text>
                        </HStack>
                      </Box>
                    </CardBody>
                  </Card>
                </HStack>

                <HStack>
                  <Card className="Subcard" boxShadow="dark-lg">
                    <CardBody>
                      <Text align="justify" textAlign="center" fontSize="20px">
                        Gabapentin 2 Benzylbenzyl Ester HCl
                      </Text>
                      <Divider marginTop="10px" paddingTop="5px" />
                      <Box padding="10px">
                        <Image src="/phy.png" className="Image"></Image>
                      </Box>
                      <Box margin="5px" paddingTop="30px">
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAT NO </Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : 000</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>CAS NO</Text>{' '}
                          </Box>
                          <Text paddingLeft="0px"> : 60142-95-2 </Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.F.</Text>{' '}
                          </Box>
                          <Text paddingLeft="15px"> : 000</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text>Mol.Wt.</Text>{' '}
                          </Box>
                          <Text paddingLeft="5px"> : 000</Text>
                        </HStack>
                        <HStack>
                          <Box>
                            {' '}
                            <Text color="blue">lnv.Staus</Text>{' '}
                          </Box>
                          <Text color="blue" paddingLeft="0px">
                            {' '}
                            : ln Stock
                          </Text>
                        </HStack>
                      </Box>
                    </CardBody>
                  </Card>
                </HStack>
              </VStack>
            </Box>
          </Box>
        </HStack>
      </Box>
    </div>
  );
};

export default Gabapentin1;
