import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loaderimport { Carousel } from "react-responsive-carousel";

import "./Services.scss"
import MotionWrap from '../../wrapper/MotionWrap'
import AppWrap from '../../wrapper/AppWrap'



const services = [  {
        name: ["GPT-3 | GPT 4", "Development"],
        services: [
          "Language synthesis",
          "Knowledge response",
          "Chatbot development",
          "Model tuning",
        ],
      },
      {
        name: ["AI", "Consulting"],
        services: [
          "Feasibility assessments",
          "Use case identification",
          "Performance evaluation",
          "Strategy development",
        ],
      },
      {
        name: ["Natural Language", "Processing"],
        services: [
          "Document categorization",
          "Data mining",
          "Text summarization",
          "Entity identification",
        ],
      },
];


const Services = () => {
        const [screen, setScreen] = useState(0)

        useEffect(() => {
                const handleResize = () => {
                        setScreen(window.innerWidth);
                }
                
                //initialize
                handleResize();
                
                window.addEventListener("resize", handleResize);
                
                return () => {
                        window.removeEventListener("resize", handleResize);
                };
                        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        
  return (
        <>
                <h2 className='subheader'>OUR SERVICES</h2>

                <h1 style={{padding:"2rem"}}>3D deco goes here</h1>

                {
                        screen>770 ?
                        <section className='serve-holder'>
                        {
                                services.map((service, index) => (
                                        <div className="serve-card" key={index}>
                                                <span className="deco" />
                                                <h4 className="title">{service.name[0]}<br/>{service.name[1]}</h4>
                                                <div className='caption'>{service.services.map((serve, i)=>(<p key={i}>{serve}</p>) )}</div>
                                        </div>
                                ))
                        }
                        </section>
                        :
                        <Carousel className="" autoPlay={true}  infiniteLoop={true} showStatus={false} >
                        {
                                services.map((service, index) => {
                                        return (
                                        <div className="serve-card" key={index}>
                                                <span className="deco" />
                                                <h4 >{service.name}</h4>
                                                <div className='caption'>{service.services.map((serve, i)=>(<p key={i}>{serve}</p>) )}</div>
                                        </div>
                                        );
                                })
                        }
                        </Carousel>
                }


                
                

        </>
  )     
}

export default AppWrap( MotionWrap(Services,"app__services" ) , "services", "app__whitebg ") 
