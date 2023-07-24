import React, { useState } from "react";
import './register.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
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
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        if(name && isValidPassword(password))
    {
        navigate('/home')
    }
    
    setNameError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setEmailError("");
    setPhoneNumberError("");

    
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
    
      console.log("Form submitted");
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
    <div>
      <div className="container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="n"
              type="text"
              name="username"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              // required
            />
            {nameError && <p className="error">{nameError}</p>}
          </div>
          <div className="form-group">
            <input
              id="n"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              // required
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <div className="form-group">
            <input
              id="n"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              // required
            />
            {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
          </div>
          <div className="form-group">
            <input
              id="n"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              // required
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="form-group">
            <input
              id="n"
              type="number"
              name="number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              // required
            />
            {phoneNumberError && <p className="error">{phoneNumberError}</p>}
          </div>
          <div className="form-group">
            <button type="submit" name="next" onClick={handleSubmit} className="loginbut">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
