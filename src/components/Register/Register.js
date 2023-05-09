import React, {useState} from 'react';
import './Register.css';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo3.svg'



function Register(){

    let navigate = useNavigate();
    const handleClick = () => {
      navigate('../Overview');
    };  

    const [nameval,setnameval]= useState("");
    const [emailval,setemailval]= useState("");
    const [passval,setpassval]= useState("");
  
    const handlesubmit=(event)=>{
      event.preventDefault();
    }

    return(
      <div className='main-register'>
        <div className='register-contain'>
            <div className='img-class'>
                <img src={logo} alt='logo' id='img-id' />
            </div>  
            <div className='header'>
                <p>CREATE ACCOUNT</p>
            </div>
            <form onSubmit={handlesubmit}>
            <label for='name'>Name</label>
                <input placeholder='Enter your name' type='text' value={nameval} 
                onChange={(e)=>{setnameval(e.target.value)}} id='name'/>
            <label for='email1'>Email</label>
                <input placeholder='Enter your email...' type='email' value={emailval} 
                onChange={(e)=>{setemailval(e.target.value)}} id='email1'/>
            <label for='pwd1'>Password</label>
                <input placeholder='Enter password' type='password' value={passval}
                onChange={(e)=>{setpassval(e.target.value)}} id='pwd1'/>
            <button type='submit' id="log-butt" onClick={handleClick}>LOGIN</button>
            </form>
            <div className='footer'>
                <h5>Already have an account? <NavLink className='link' to ="/">Login</NavLink></h5>
            </div>
        </div>
      </div>
        

       
      ) 
}

export default Register