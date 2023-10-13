import { Box } from '@chakra-ui/react';
import React from 'react'


import "./../App.css"
const Header1 = () => {

    return (
        <Box className='HeaderIcons'>
            <Box className='HeaderIcons1' >
                <Box className="socialIcon">
                    <img src="./linkdin.png" alt='socialMediaIcons' />
                </Box>
                <Box className="socialIcon">
                    <img src="./twitter.png" alt='socialMediaIcons' />
                </Box>
                <Box className="socialIcon">
                    <img src="./facebook.png" alt='socialMediaIcons' />
                </Box>
                <Box className="socialIcon">
                    <img src="./instagram.png" alt='socialMediaIcons' />  
                </Box>
            </Box>
        </Box>
    )
}

export default Header1;


