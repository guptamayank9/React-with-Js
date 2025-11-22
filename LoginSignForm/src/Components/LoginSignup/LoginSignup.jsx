import React, { useState } from 'react'
import './LoginSignup.css'


import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
const LoginSignup=()=> {

    const[action,setAction]=useState("Sign Up");//usestate is reacthook 
                                                ///which provide us variavle and a function
                                                //to set data on this vaariavle with intailieze valiavle
                                                //whenever variavle update our frontend also updated
                                                //state get updated

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>

        </div>
        <div className="inputs">
            {action==="Login" ?<div></div>://if action is equeal to login we return empty div 
            // if action is not equal to login 
            //we return this input
                 <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}
           
             <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email id' />
            </div>
             <div className="input">
                <img src={password_icon} alt="" />
                <input type="password"  placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div> :
        <div className="forgot-password">Forget Password? <span>Click here</span></div> }

       <div className="submit-container">
        <div className={action=="Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>


         <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
       </div>

    </div>
  )
}

export default LoginSignup
