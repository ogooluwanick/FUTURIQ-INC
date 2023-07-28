import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import {HiX} from "react-icons/hi"

import "./Navbar.scss"


const Navbar = () => {

        const [scrollPos, setScrollPos] = useState(0);
        const [screen, setScreen] = useState(0)
        const [toggle, setToggle] = useState(false)


        useEffect(() => {
                function handleScroll() {
                        setScrollPos(window.pageYOffset);
                }

                const handleResize = () => {
                        setScreen(window.innerWidth);
                }
                
                //initialize
                handleResize();
                handleScroll()
                
                window.addEventListener('scroll', handleScroll);
                window.addEventListener("resize", handleResize);
                
                return () => {
                        window.removeEventListener('scroll', handleScroll);
                        window.removeEventListener("resize", handleResize);
                };
                        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        

  return (
    <nav className={`${"navbar_container"}  ${scrollPos >= 5  && "blur_navbar"   }  `}>
        <div className='app__navbar-logo'>
                <a href="#home">
                        <img src={"/logo.png"}  alt="logo" />
                </a>
        </div>

        <div className='app__navbar-menu'>
        {
                screen<500 ?
                <>
                        <span id="menu-btn" class={`block  hamburger ${toggle&&"open"}`}  onClick={()=>setToggle(val=>!val)}>
                                <span class="hamburger-1"></span>
                                <span class="hamburger-2"></span>
                                <span class="hamburger-3"></span>
                        </span>

                        {
                        toggle && (
                        <motion.div  whileInView={{opacity:[0,1]}}  transition={{duration:.5, type:"easeOut"}} >
                                <HiX onClick={()=>setToggle(false)}/>
                                
                                <ul>
                                {
                                ["home","about","work","skills","testimonials","contact" ].map((item)=>(
                                        <li  className='' key={item}>
                                        <a href={`#${item}`} onClick={()=>setToggle(false)}> {item} </a>
                                        </li>
                                ))
                                }
                                </ul>
                        </motion.div>
                        )
                        }
                        
                </>
                :
                <>
                        <button>Our services</button>
                        <button>Join our newsletter</button>
                </>
        }
        </div>

    </nav>
  )
}

export default Navbar