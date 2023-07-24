import React from "react";
import './nt.css';
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Userslice";
import { colors } from "@mui/material";
import NavBar from "./navbar";
import { Link } from "react-router-dom";
// import { Col } from "react-bootstrap";
export default function NewTicket(){
    const user=useSelector(selectUser);
    return(
        <>
        <NavBar/>
        <div className="containerticket">
            <h1 style={{color:'green',fontFamily:'serif',textAlign:'center'}}>Request Successful</h1><br></br><br></br><br></br><br></br>
  <h6 style={{paddingLeft:'100px',color:'color'}}>Client: </h6><h3 style={{color:'rgb(67,67,69)',paddingLeft:'300px',marginTop:'-35px'}}>
    {user.fname}</h3><br></br><br></br>
  <h6 style={{paddingLeft:'100px',color:'color'}}>Advisor: </h6><h3 style={{color:'rgb(67,67,69)',paddingLeft:'300px',marginTop:'-35px'}}>{user.lname}</h3><br></br><br></br>
  <h6 style={{paddingLeft:'100px',color:'color'}}>Request Status: </h6><h3 style={{color:'rgb(67,67,69)',paddingLeft:'300px',marginTop:'-35px'}}>Successful</h3><br></br><br></br>
  <h6 style={{paddingLeft:'100px',color:'color'}}>Location: </h6><h3 style={{color:'rgb(67,67,69)',paddingLeft:'300px',marginTop:'-35px'}}>{user.datet}</h3><br></br><br></br>

  {/* <img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1689262348/accept_wbuda8.png" height='100px' style={{opacity:'0.7'}}/> */}
</div>
</>
    );
}