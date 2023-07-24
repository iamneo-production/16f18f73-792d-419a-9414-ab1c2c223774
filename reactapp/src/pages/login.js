import React, { useState } from "react";
import './login.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {


    if(username && isValidPassword(password))
    {
        navigate('./home')
    }

    e.preventDefault();
    setUsernameError("");
    setPasswordError("");

    // Perform validation checks
    let isValid = true;

    if (username.trim() === "") {
        // style={color:'red'}
      setUsernameError("Username is required");
      isValid = false;
    }

    if (password.trim() === "") {
        // style={color:'red'}
      setPasswordError("Password is required");
      isValid = false;
    }
    else if (!isValidPassword(password)) {
        // style={color:'red'}
      setPasswordError("Invalid  format");
      isValid = false;
    }

   
    if (isValid) {
     
      console.log("Form submitted");
    }
  };
  const isValidPassword = (password) => {
  
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}$/;
    return passwordRegex.test(password);
  };
  return (
    <div className="bodylogin">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
            style={{color:'white'}}
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              // required
            />
            {usernameError && <p className="error">{usernameError}</p>}
          </div>
          <div className="form-group">
            <input
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
            <button type="submit" value="Login" onClick={handleSubmit} className="loginbut">Login</button>
          </div>
        </form>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <p>New user?</p>
        <Link style={{ textDecoration: "none" }} to="/register">
          Create new account
        </Link>
      </div>
    </div>
  );
}

export default Login;