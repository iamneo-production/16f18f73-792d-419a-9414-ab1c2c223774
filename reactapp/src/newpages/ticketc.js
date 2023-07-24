import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {signup} from "../Redux/Userslice";
export default function Ticketc(){
    const dispatch=useDispatch();
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const handleSubmit=(e)=>{ 
        e.preventDefault();
        console.log(fname);
        console.log({fname:fname});
        console.log();
        // dispatch(signup({fname:fname}));
        dispatch(signup({fname:fname,lname:lname}))
      }
    return(
        
        <>
        <form>
            <label>Client Name</label>
            <input 
            onChange={(e) => setFname(e.target.value)}/>

            <label>Advisor Name</label>
            <input 
            onChange={(e) => setLname(e.target.value)}/>    <button type="submit" onClick={handleSubmit}></button>
            </form>
            </>
    );
}

//hello?