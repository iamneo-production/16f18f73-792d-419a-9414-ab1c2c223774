import React from "react";
import { Link } from "react-router-dom";
import './payment.css';
import NavBar from "./navbar";
export default function Payment(){
    return(
        <>
        <NavBar/>
        <div className="paymentbox">
            
      
        </div>
        <div className="shboxtxt col-sm-8" style={{alignContent:'center',marginLeft:'260px'}}>
        <li>Sender: &nbsp;&nbsp;&nbsp; Tony Gibbs</li>
            <li>Receiver: &nbsp; Tony Stark</li>
            <label for="inputState">Payment Mode</label>
        <select id="inputState" class="form-control">
        <option selected>...</option>
        <option >GPay</option>
        <option >UPI</option>
        <option >NetBanking</option>
        <option >Credit Card</option>
        <option >Debit Card</option>
      </select>
      <br></br>
      <button className="newbut" style={{background:'blue', borderRadius:'5px', width:'200px', marginLeft:'360px'}} onClick={()=> {alert("Payment Successful"); window.location.href='/newhome'}}>
                    <Link to='/payment' >Proceed to payment</Link></button>
                    <br></br>
                </div>
        </>
    );
}