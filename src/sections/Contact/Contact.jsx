import React, { useState } from 'react'
import { useForm } from "react-hook-form";


import "./Contact.scss"
import MotionWrap from '../../wrapper/MotionWrap'
import AppWrap from '../../wrapper/AppWrap'

const Contact = () => {
        const { register, handleSubmit , formState:{errors} ,setValue,getValues,setFocus} = useForm();

        const [loading, setLoading] = useState(false)

        const handleEmail =()=>{
                try {
                        
                } 
                catch (error) {
                        
                }
        }
  return (
        <>
                <h2 className='subheader'>LET'S GET IN TOUCH</h2>

                <form onSubmit={handleSubmit(handleEmail)}>
                        <div className="input-box">
                                <input id='name'  name='name' type="text" placeholder='Full name' style={{textTransform:"capitalize"}}  {
                                                                                                ...register(      "name",
                                                                                                                        {
                                                                                                                                pattern:{value: /^(\s*[a-zA-Z-]+\s*)+$/g , message:"Just your first and last name, thanks. 😂"},
                                                                                                                                required:"You did not just forget your name. 😂",
                                                                                                                        })
                                                                                        }
                                />
                                {errors.name?<div className={"errors"}>{errors.name.message}</div>:""}
                        </div>
                        <div className="doublebag">
                                <div className="input-box">
                                        <input name="subject" id='subject' type="text"  placeholder='Subject' {
                                                                                                ...register(      "subject",
                                                                                                                        {
                                                                                                                                required:"Please include a subject 🥺",
                                                                                                                        })
                                                                                                }
                                        />
                                        {errors.subject?<div className={"errors"}>{errors.subject.message}</div>:""}

                                </div>
                                <div className="input-box">
                                        <input name="email" id='email' type="email" placeholder='Your email' style={{textTransform:"lowercase"}} autoFocus {
                                                                                                ...register(      "email",
                                                                                                                        {
                                                                                                                                required:"Lol! Don't forget to add your email. 😂",
                                                                                                                                pattern:{value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ , message:"Haha... invalid email address. 😂"}
                                                                                                                        })
                                                                                        }
                                        />
                                        {errors.email?<div className={"errors"}>{errors.email.message}</div>:""}
                                </div>
                        </div>
                        <div className="input-box">
                                <textarea name="content" id="content" type="text" placeholder='How can we help you?' cols="35" rows="10" {
                                                                                                ...register(      "content",
                                                                                                                        {
                                                                                                                                required:"Lol! Don't forget to add your email. 😂",
                                                                                                                        })
                                                                                        }
                                />
                                {errors.content?<div className={"errors"}>{errors.content.message}</div>:""}
                        </div>
                        <div className="input-box">
                                <label htmlFor="budget">What is you budget for this project</label>
                                <select name="budget" id="budget" {
                                                                                                ...register(      "budget",
                                                                                                                        {
                                                                                                                                required:"Kindly let us know your budget. 😂",
                                                                                                                        })
                                                                                        }
                                >
                                        <option value="less than $5,000" selected>less than $5,000</option>
                                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                        <option value="$20,000 - $40,000" >$20,000 - $40,000</option>
                                        <option value="$40,000+">$40,000+</option>
                                </select>

                                {errors.budget?<div className={"errors"}>{errors.budget.message}</div>:""}
                        </div>

                        <div className="btn-box">
                                <button type='submit'>
                                        Send
                                </button>
                        </div>
                </form>
        </>
  )
}

export default AppWrap( MotionWrap(Contact,"app__contact" ) , "contact", "app__whitebg  ") 
