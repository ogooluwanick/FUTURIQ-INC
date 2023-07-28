import React, { useEffect, useState } from 'react'
import "./Navbar.scss"



const Navbar = () => {

        const [scrollPos, setScrollPos] = useState(0);



        useEffect(() => {
                function handleScroll() {
                        setScrollPos(window.pageYOffset);
                }

                //initialize
                handleScroll()
                console.log("scrollPos", scrollPos)

                window.addEventListener('scroll', handleScroll);
                
                return () => {
                        window.removeEventListener('scroll', handleScroll);
                };
        }, []);

  return (
    <div>Navbar</div>
  )
}

export default Navbar