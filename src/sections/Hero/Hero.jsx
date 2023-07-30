import React from 'react'
import {motion} from "framer-motion"

import "./Hero.scss"
import AppWrap from "../../wrapper/AppWrap"

const Hero = () => {
  return (
        <div className='app__hero  app__flex'>
                <motion.div whileInView={{x:[-100,0],opacity:[0,1]}} transition={{duration:0.5}} className='app__hero-info'>
                        <h1 className='hero_head'>Glacial Indifference</h1>
                        <p className='hero_text'>Elevate Your Business with State-of-the-Art AI Solutions</p>
                        
                        <div className="cta_btns">
                                <button className="primary_btn">Let's talk</button>
                                <button className="secondary_btn">Our services</button>
                        </div>
                </motion.div>
        </div>
  )
}
export default AppWrap(Hero, "hero")
