import React from 'react'

import "./Team.scss"
import MotionWrap from '../../wrapper/MotionWrap'
import AppWrap from '../../wrapper/AppWrap'

const Team = () => {
  return (
        <>
                <h2 className='subheader'>MEET THE TEAM</h2>

        </>
  )
}

export default AppWrap( MotionWrap(Team,"app__team" ) , "team", "app__whitebg default__container ") 
