import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import './nl.css';
import axios from "axios";
function NLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
  
    // const validateEmail = (email) => {
  
    //   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    //   return pattern.test(email);
    // }
    const clientuser=null;
    const navigate = useNavigate();
  
    const handleFormSubmit = async(e) => {
      e.preventDefault();
      
      // if (!validateEmail(email)) {
      //   setEmailError('Please enter a valid email address.');
      //   return;
      // }
      try{

        console.log(email);
        console.log(password);
        await axios.post('http://localhost:8181/api/v1/auth/authenticate',{email,password})
        .then((res)=>{
          console.log(res)
          navigate('/newhome');
          let token=res.data.token;
          console.log(token);
          let user=res.data.userResponce;
          localStorage.setItem('token',token);
          localStorage.setItem('user',JSON.stringify(user));
          console.log(res);
          // clientuser=res.user.data.email;
        })
        
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
              {emailError && <p className="error">{emailError} style={{color:"black"}}</p>}
      <br />
      <input type="password" placeholder="Password" value={password}
              onChange={(e)=>setPassword(e.target.value)} style={{color:"black"}}/>
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
export default NLogin;