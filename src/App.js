import React from 'react'
import { Box, } from '@chakra-ui/react'
import Rooting from './Rooting'
import Footer from './Pages/Footer'
import Header1 from './Pages/Header1'
import Header2 from './Pages/Header2'
import Header3 from './Pages/Header3'
import './App.css'
const App = () => {
  return (
    <Box>
      <Header1 />
      <Header2 />
      <Header3 />
      <Rooting />
      <Footer />
    </Box>
  )
}
export default App