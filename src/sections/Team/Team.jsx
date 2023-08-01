import React from 'react'

import "./Team.scss"
import MotionWrap from '../../wrapper/MotionWrap'
import AppWrap from '../../wrapper/AppWrap'

const team = [
        {
          name: "Smart Mac",
          photo: "/team/ass.png",
          role: "CEO",
          link:"#",
        },
        {
          name: "Ogooluwanick E.",
          photo: "/team/ogo.png",
          role: "Lead Developer",
          link: "https://ogooluwanick-portfolio.netlify.app/",
        },
        {
          name: "Edwimpna Dup",
          photo: "/team/mesa.png",
          role: "Head of Operations",
          link: "#",
        },
];
      

const Team = () => {
  return (
        <>
                <h2 className='subheader'>MEET THE TEAM</h2>
                
                <section className="team-members">
                        {
                                team.map((mem, i)=>(
                                        <a href={mem.link} key={i}>
                                                <div className="m-card" >
                                                        <div className="m-img">
                                                                <img src={mem.photo} alt={`${mem.role} img`} />
                                                        </div>

                                                        <div className="info">
                                                                <div className="m-name">{mem.name}</div>
                                                                <div className="m-pos">{mem.role}</div>
                                                        </div>
                                                </div>
                                       </a>
                                ))
                        }
                </section>

        </>
  )
}

export default AppWrap( MotionWrap(Team,"app__team" ) , "team", "app__whitebg default__container ") 
