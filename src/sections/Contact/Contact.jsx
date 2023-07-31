import React from 'react'

import "./Contact.scss"
import MotionWrap from '../../wrapper/MotionWrap'
import AppWrap from '../../wrapper/AppWrap'

const Contact = () => {
        const handleEmail =()=>{

        }
  return (
        <>
                <h2 className='subheader'>LET'S GET IN TOUCH</h2>

                <form onSubmit={handleEmail}>
                        <div className="input-box">
                                <input type="text" placeholder='Fullname' />
                        </div>
                        <div className="input-box">
                                <input type="text" placeholder='Subject' />
                                <input type="email" placeholder='Your email' />
                        </div>
                        <div className="input-box">
                                <textarea name="" id="content"  placeholder='How can we help you?' cols="35" rows="10"></textarea>
                        </div>
                        <div className="input-box">
                                <label htmlFor="budget">What is you budget for this project</label>
                                <select name="budget" id="budget">
                                        <option value="less than $5,000">less than $5,000</option>
                                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                        <option value="$20,000 - $40,000">$20,000 - $40,000</option>
                                        <option value="$40,000+">$40,000+</option>

                                </select>
                        </div>
                </form>
        </>
  )
}

export default AppWrap( MotionWrap(Contact,"app__contact" ) , "contact", "app__whitebg  ") 
