import React, { useState } from 'react'
import { useForm } from "react-hook-form";


import "./Contact.scss"
import MotionWrap from '../../wrapper/MotionWrap'
import AppWrap from '../../wrapper/AppWrap'
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import {Fireworks} from '../../lib/Fireworks';
import { toast } from 'react-hot-toast';


const Contact = () => {
        const { register, handleSubmit , formState:{errors} ,setValue} = useForm();

        const [loading, setLoading] = useState(false)


        const handleEmail =({name,subject,email, content,  budget})=>{
                console.log(name,subject,email, content,  budget)
                setLoading(true)
                // try {
                        toast.success( "Message sent",{ duration: 1500 })
                        Fireworks();
                        
                // } 
                // catch (error) {
                        toast.error( "Message failed",{ duration: 1500 })
                        
                // }
                setLoading(false)

                setValue("name","")
                setValue("subject","")
                setValue("email","")
                setValue("content","")
                setValue("budget","")

        }

        console.log(loading)

  return (
        <>
                <h2 className='subheader'>LET'S GET IN TOUCH</h2>

                <form onSubmit={handleSubmit(handleEmail)}>
                        <div className="input-box">
                                <input id='name'  name='name' type="text" placeholder='Full name' disabled={loading} style={{textTransform:"capitalize"}}  {
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
                                        <input name="subject" id='subject' type="text" disabled={loading}  placeholder='Subject' {
                                                                                                ...register(      "subject",
                                                                                                                        {
                                                                                                                                required:"Please include a subject 🥺",
                                                                                                                        })
                                                                                                }
                                        />
                                        {errors.subject?<div className={"errors"}>{errors.subject.message}</div>:""}

                                </div>
                                <div className="input-box">
                                        <input name="email" id='email' type="email" disabled={loading} placeholder='Your email'   {
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
                                <textarea name="content" id="content" type="text" disabled={loading} placeholder='How can we help you?'  {
                                                                                                ...register(      "content",
                                                                                                                        {
                                                                                                                                required:"Lol! Don't forget about your message. 😂",
                                                                                                                        })
                                                                                        }
                                />
                                {errors.content?<div className={"errors"}>{errors.content.message}</div>:""}
                        </div>
                        <div className="input-box">
                                <label htmlFor="budget">What is you budget for this project</label>
                                <select name="budget" id="budget" disabled={loading} {
                                                                                                ...register(      "budget",
                                                                                                                        {
                                                                                                                                required:"Kindly let us know your budget. 😂",
                                                                                                                        })
                                                                                        }
                                >
                                        <option value="less than $5,000" defaultValue>less than $5,000</option>
                                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                        <option value="$20,000 - $40,000" >$20,000 - $40,000</option>
                                        <option value="$40,000+">$40,000+</option>
                                </select>

                                {errors.budget?<div className={"errors"}>{errors.budget.message}</div>:""}
                        </div>

                        <div className="btn-box">
                                <button type='submit' disabled={loading} >
                                        { loading ?  <LoadingBox size={10} text={""} color="#fff" />   : "Send"}
                                </button>
                        </div>
                </form>
        </>
  )
}

export default AppWrap( MotionWrap(Contact,"app__contact" ) , "contact", "app__whitebg  ") 
