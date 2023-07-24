import React from "react";
import './newbutton.css';
import { Link } from "react-router-dom";
export default function NewButton(){
    return(
        <>
        <>
  <div className="center">
    <button className="fancy">
      <span className="top-key" />
      <Link to='/oldhist'>Old Sessions</Link>
      <span className="bottom-key-1" />
      <span className="bottom-key-2" />
    </button>
  </div>

</>
</>
    );
}