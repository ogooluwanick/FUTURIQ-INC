import React from 'react'

import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'

const MissionStatement = () => {
  return (
        <>
                <p>
                        <span>Unleash</span> your company's true potential 
                        with Futuriq's unmatched AI development expertise. <span>Unleash</span>
                        Accelerate your growth and stay ahead of the competition, 
                        <span>Unleash</span>harnessing the power of cutting-edge AI solutions tailored to your unique business needs.
                </p>
        </>
  )
}

export default  AppWrap( MotionWrap(MissionStatement,"app__mission" ) , "mission", "app__darkbg default__container") 
