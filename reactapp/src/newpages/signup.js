// import React, { useState } from "react";
// import './nl.css';
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// function Signup() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [nameError, setNameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [phoneNumberError, setPhoneNumberError] = useState("");
//  const navigate = useNavigate();
//   const handleNameChange = (e) => {
//     setName(e.target.value);
//     setNameError("");
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     setPasswordError("");
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//     setConfirmPasswordError("");
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     setEmailError("");
//   };

//   const handlePhoneNumberChange = (e) => {
//     setPhoneNumber(e.target.value);
//     setPhoneNumberError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//         if(name && isValidPassword(password))
//     {
//         navigate('/newhome')
//     }
    
//     setNameError("");
//     setPasswordError("");
//     setConfirmPasswordError("");
//     setEmailError("");
//     setPhoneNumberError("");

    
//     let isValid = true;

//     if (name.trim() === "") {
//         // style={color:'red'}
//       setNameError("Name is required");
//       isValid = false;
//     }

//     if (password.trim() === "") {
//         // style={color:'red'}
//       setPasswordError("Password is required");
//       isValid = false;
//     }
//     else if (!isValidPassword(password)) {
//         // style={color:'red'}
//       setPasswordError("Invalid password format");
//       isValid = false;
//     }

//     if (confirmPassword.trim() === "") {
//         // style={color:'red'}
//       setConfirmPasswordError("Confirm Password is required");
//       isValid = false;
//     } 
    
//     else if (confirmPassword !== password) {
//         // style={color:'red'}
//       setConfirmPasswordError("Passwords do not match");
//       isValid = false;
//     }

//     if (email.trim() === "") {
//         // style={color:'red'}
//       setEmailError("Email is required");
//       isValid = false;
//     } else if (!isValidEmail(email)) {
//         // style={color:'red'}
//       setEmailError("Invalid email format");
//       isValid = false;
//     }

//     if (phoneNumber.trim() === "") {
//         // style={color:'red'}
//       setPhoneNumberError("Phone Number is required");
//       isValid = false;
//     }

   
//     if (isValid) {
    
//       console.log("Form submitted");
//     }
//   };

//   const isValidEmail = (email) => {
  
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };
//   const isValidPassword = (password) => {
  
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/;
//     return passwordRegex.test(password);
//   };

//   return (
//     <div className="rbox" style={{alignContent:'centre',marginTop:'-400px'}}>
//         <h2></h2>
//       <div className="container" style={{top:'200px', position:'sticky'}}>
//         <form onSubmit={handleSubmit} className="container">
//           <div className="form-group">
//             <input
//               id="n"
//               type="text"
//               name="username"
//               placeholder="Name"
//               value={name}
//               onChange={handleNameChange}
//               // required
//             />
//             {nameError && <p className="error">{nameError}</p>}
//           </div>
//           <div className="form-group">
//             <input
//               id="n"
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={password}
//               onChange={handlePasswordChange}
//               // required
//             />
//             {passwordError && <p className="error">{passwordError}</p>}
//           </div>
//           <div className="form-group">
//             <input
//               id="n"
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={handleConfirmPasswordChange}
//               // required
//             />
//             {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
//           </div>
//           <div className="form-group">
//             <input
//               id="n"
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={email}
//               onChange={handleEmailChange}
//               // required
//             />
//             {emailError && <p className="error">{emailError}</p>}
//           </div>
//           <div className="form-group">
//             <input
//               id="n"
//               type="number"
//               name="number"
//               placeholder="Phone Number"
//               value={phoneNumber}
//               onChange={handlePhoneNumberChange}
//               // required
//             />
//             {phoneNumberError && <p className="error">{phoneNumberError}</p>}
//           </div>
//           <div className="form-group">
//             <button type="submit" name="next" onClick={handleSubmit} className="loginbut">Register</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Signup;




import React, { useState } from "react";
import './nl.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
 const navigate = useNavigate();

const validateEmail = (email) => {
  
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    return pattern.test(email);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address.');
        return;
    }
    try{
        const responce=await axios.post('http://localhost:8181/api/v1/auth/register',{name,email,phoneNumber,password});
        console.log("Form submitted");
        if(responce.status==200){
        navigate('/');
        setName("");
          setPassword("");
          setConfirmPassword("");
          setEmail("");
          setPhoneNumber("");
        }
      }
      catch(error){
        console.error("Error: " ,error);
      }

    


    
    let isValid = true;

    if (name.trim() === "") {
        // style={color:'red'}
      setNameError("Name is required");
      isValid = false;
    }

    if (password.trim() === "") {
        // style={color:'red'}
      setPasswordError("Password is required");
      isValid = false;
    }
    else if (!isValidPassword(password)) {
        // style={color:'red'}
      setPasswordError("Invalid password format");
      isValid = false;
    }

    if (confirmPassword.trim() === "") {
        // style={color:'red'}
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    } 
    
    else if (confirmPassword !== password) {
        // style={color:'red'}
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    if (email.trim() === "") {
        // style={color:'red'}
      setEmailError("Email is required");
      isValid = false;
    } else if (!isValidEmail(email)) {
        // style={color:'red'}
      setEmailError("Invalid email format");
      isValid = false;
    }

    if (phoneNumber.trim() === "") {
        // style={color:'red'}
      setPhoneNumberError("Phone Number is required");
      isValid = false;
    }

   
    if (isValid) {
    
    }
  };

  const isValidEmail = (email) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassword = (password) => {
  
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="rbox" style={{alignContent:'centre',marginTop:'-400px'}}>
        <h2></h2>
      <div className="container" style={{top:'200px', position:'sticky'}}>
        <form onSubmit={handleSubmit} className="container">
          <div className="form-group">
            <input
              id="n"
              type="text"
              name="username"
              placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              // required
            />
            {/* {nameError && <p className="error">{nameError}</p>} */}
          </div>
          <div className="form-group">
            <input
              id="n"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              // required
            />
            {/* {passwordError && <p className="error">{passwordError}</p>} */}
          </div>
          <div className="form-group">
            <input
              id="n"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              // required
            />
            {/* {confirmPasswordError && <p className="error">{confirmPasswordError}</p>} */}
          </div>
          <div className="form-group">
            <input
              id="n"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              // required
            />
            {/* {emailError && <p className="error">{emailError}</p>} */}
          </div>
          <div className="form-group">
            <input
              id="n"
              type="number"
              name="number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e)=>setPhoneNumber(e.target.value)}
              // required
            />
            {/* {phoneNumberError && <p className="error">{phoneNumberError}</p>} */}
          </div>
          <div className="form-group">
            <button type="submit" name="next" className="loginbut">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
