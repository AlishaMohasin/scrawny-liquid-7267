import React from 'react'
import style from "./nav.module.css"
import { Button } from '@chakra-ui/react'

const Nav = () => {
    return (
      <nav className={style.main} >
      <div className={style.logo}>
          <img src="https://cdn.monday.com/images/logos/monday_logo_icon.png" width="100px" />
            </div>

            <div className={style.logo}>
                <Button><img src="https://thumbs.dreamstime.com/b/logout-vector-icon-logo-design-193333071.jpg" width="100px"/></Button>
            </div>
            </nav>
  )
}

export default Nav