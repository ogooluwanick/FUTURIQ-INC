import React from 'react'

import "./MissionStatement.scss"
import AppWrap from '../../wrapper/AppWrap'
import MotionWrap from '../../wrapper/MotionWrap'

const MissionStatement = () => {
  return (
        <>
                <div className="btn-shine">
                        Unleash your company's true potential 
                        with Futuriq's unmatched <span>AI development</span> expertise. 
                        Accelerate your growth and stay ahead of the competition, 
                        harnessing the power of <span>cutting-edge AI solutions </span>tailored to your unique business needs.
                </div>
        </>
  )
}

export default  AppWrap( MotionWrap(MissionStatement,"app__mission" ) , "mission", "app__darkbg default__container") 
