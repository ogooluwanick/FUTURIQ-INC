import React from 'react'

import "./Aboutus.scss"
import AppWrap from "../../wrapper/AppWrap"
import MotionWrap from "../../wrapper/MotionWrap"


const Aboutus = () => {
  return (
        <> 
                <h2>About us</h2>
                <p>
                        Welcome to Futuriq Inc., where revolutionary AI solutions come to fruition, guiding startups, small businesses and enterprises into AI-driven powerhouses. Led by visionary founder Edwina McKennon, our expert team is passionately committed to enhancing your business's efficiency and fueling its growth with cutting-edge AI products.
                        At Futuriq Inc., we transform your ideas into deployable solutions, harnessing our extensive industry experience to redefine your company's success. Empowering your organization across multiple sectors, we pave the way for innovative solutions that captivate the market.
                        Join us on this transformative journey, unlocking the full potential of your business with Futuriq Inc.'s unparalleled AI expertise. Together, let's create a future where success knows no boundaries. Sign up now and embark on a limitless path of possibilities.
                </p>
        </>
  )
}

export default  AppWrap( MotionWrap(Aboutus,"app__about" ) , "about", "app__whitebg default__container") 
