import { Box,Image } from '@chakra-ui/react'
import React from 'react'
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
      <div>
          <Box className={style.main}>
              <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png" className={style.logo} />
              
          </Box>
    </div>
  )
}

export default Navbar