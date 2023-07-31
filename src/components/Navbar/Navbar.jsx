import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import useOnclickOutside from 'react-cool-onclickoutside'

import "./Navbar.scss"


const Navbar = () => {
        const submenu = useOnclickOutside( ()=> setToggle(false) )



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
    <nav className={`${"app__navbar"}  ${scrollPos >= 5  && "blur_navbar"   }  `}>
        <div className="navbar_content">

                <div className='app__navbar-logo'>
                        <a href="#home">
                                <img src={"/logo.png"}  alt="logo" />
                        </a>
                </div>

                <div className='app__navbar-menu'>
                {
                        screen<600 ?
                        <>
                                <span id="menu-btn" className={`block  hamburger ${toggle&&"open"}`}  onClick={()=>  setToggle(val=>!val)}>
                                        <span className="hamburger-1"></span>
                                        <span className="hamburger-2"></span>
                                        <span className="hamburger-3"></span>
                                </span>

                                <AnimatePresence mode='wait' >
                                {
                                toggle && (
                                        <motion.div  className='md_submenu' initial={{ y: "100%", opacity:0 }}   animate={{y: 0, opacity:1 }}   exit={{y: "100%", opacity:0 }}     transition={{ type: "spring", bounce: 0.3, duration: 0.4 }} ref={submenu} >
                                                <div>
                                                        <a href="#services" onClick={()=>setToggle(false)}>
                                                                <button>Our services</button>
                                                        </a>
                                                        <button onClick={()=>setToggle(false)}>Join our newsletter</button>
                                                </div>
                                        </motion.div>
                                )
                                }
                                </AnimatePresence>
                                
                        </>
                        :
                        <div className='menu_btns'>
                                <a href="#services"><button>Our services</button></a>
                                <button onClick={""} className='join'>Join our newsletter</button>
                        </div>
                }
                </div>
        </div>
    </nav>
  )
}

export default Navbar