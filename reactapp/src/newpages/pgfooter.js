import React from "react";
import './pgf.css';
import { Link } from "react-router-dom";
export default function PgFooter(){
    return(
        <>
        <footer style={{background:'white'}} className="pgff">
        <Link to='/termsandconditions'><p style={{color:'black'}}>© 2023 AdvHub All rights reserved  Terms of Service  Privacy Policy. Terms and Conditions</p></Link>
        </footer>
        </>
    );
}