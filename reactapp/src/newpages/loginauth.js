import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import './nl.css';
import axios from "axios";
function NNLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const validateEmail = (email) => {
  
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
      return pattern.test(email);
    }
    const navigate = useNavigate();
  
    const handleFormSubmit = async(e) => {
      e.preventDefault();
      
      if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
        return;
      }
      try{
        const responce=await axios.post("http://localhost:8181/api/v1/auth/authenticate",{email,password});
        navigate('/newhome');
        let token=responce.data.token;
        let user=responce.data.userResponce;
        localStorage.setItem('token',token);
        localStorage.setItem('user',JSON.stringify(user));
      }
      catch(error){
        console.error("Error: " ,error);
        alert("Password is Incorrect");
      }
      setEmailError('');
    }
    return(
        <>
        <>
 
  <div className="containerl">
    <form onSubmit={handleFormSubmit}> 
      <p>Sign In</p>
      <input type="email" placeholder="Email" value={email}
              onChange={(e)=>setEmail(e.target.value)} />
              {emailError && <p className="error">{emailError}</p>}
      <br />
      <input type="password" placeholder="Password" value={password}
              onChange={(e)=>setPassword(e.target.value)}/>
      <br />
      {/* {passwordError && <p className="error">{passwordError}</p>} */}
      <br></br>
      <button type="submit" value="Login" className="loginbut">Login</button>
      <br />
      <br />
      


      <p className="para">New User?<br></br><br></br>
      <Link to='/signup' style={{color:'white',fontSize:'14px'}}>Create a New Account</Link></p>
    </form>

  </div>
</>

</>
    );
}
export default NNLogin;