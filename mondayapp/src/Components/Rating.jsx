import React from 'react'
import {Image} from "@chakra-ui/react"
import style from "./Rating.module.css"

const Rating = () => {
  return (
      <div>
          <Image src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/stars.png" margin="auto" marginTop={"20px"} />
          <h1 className={style.h1}>An <span className={style.span}>award-winning</span> platform. <span>Loved</span> by customers.</h1>
          <h1 className={style.h11}>Based on 10,000+ customer reviews.</h1>

    </div>
  )
}

export default Rating