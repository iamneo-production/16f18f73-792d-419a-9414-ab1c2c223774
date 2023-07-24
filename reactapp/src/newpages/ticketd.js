import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Userslice";
export default function TicketD(){
    const user=useSelector(selectUser);
    return(
        <>
    <div>
        <h1>{user.fname}</h1>
        <h2>{user.lname}</h2>
    </div>
        </>
    );
}