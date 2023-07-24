import React from "react";
import './sh.css';
import NewButton from "./newbutton";
import NavBar from "./navbar";
import { Link } from "react-router-dom";
export default function Notification(){
    return(
        <>
        <NavBar/>
       <div className="shbox" style={{marginTop:'-400px'}}>
        <div className="row" >
            <h3>Notifications</h3>
            <br></br>
            <br></br>

            <div className="shboximg col-sm-2" >
                <img src="https://i.pinimg.com/736x/ea/b6/20/eab6203681c0493206436b91bd376752.jpg" height='200px' />
            </div>
            <div className="shboxtxt col-sm-4">
                <b><h4>Tony Stark</h4></b>
                <p style={{fontFamily:'sans-serif',fontSize:'14px', opacity:'0.5'}}>has accepted your request.<br></br></p>
                <p>Your schedule planned on 15 July 2023 between 15:00 and 16:00</p>
                <button className="newbut" style={{background:'blue', borderRadius:'5px', width:'200px', marginLeft:'220px'}}>
                    <Link to='/booking'>Proceed</Link></button>
            </div>
            </div>     
       </div>
</>
    );
}
