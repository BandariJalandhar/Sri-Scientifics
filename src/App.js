import React from 'react'
import { Box,} from '@chakra-ui/react'
import Header from './Pages/Header'
import Rooting from './Rooting'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <Box>
        <Header/>
        <Rooting/>      
        <Footer/>
    </Box>
  )
}
export default App