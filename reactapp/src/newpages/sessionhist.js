import React from "react";
import './sh.css';
import NewButton from "./newbutton";
import NavBar from "./navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/Userslice";
export default function SessionHist(){
    const user=useSelector(selectUser);
    return(
        <>
        <NavBar/>
       <div className="shbox" style={{marginTop:'-400px'}}>
        <div className="row" >
            <h4> Upcoming Sessions</h4>
            <br></br>
            <br></br>



            <div className="shboximg col-sm-2" >
                <img src="https://i.pinimg.com/736x/ea/b6/20/eab6203681c0493206436b91bd376752.jpg" height='200px' />
            </div>
            <div className="shboxtxt col-sm-4" >
                <b><h4>Tony Stark</h4></b><br></br>
                <p style={{fontFamily:'sans-serif',fontSize:'14px'}}>Requested on 13-07-2023</p>
                <li className="shli">Mode: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GMeet</li>
                <li  className="shli">Time:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11:00pm</li>
                <li  className="shli">Date:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15-07-2023</li>
                <li className="shli">Request Status: &nbsp; Accepted</li>
                <div className="overlay overlay_0">
                    <img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1689263253/pending_wa3jkz.png" height='40px' style={{opacity:'0.7'}}/>
                </div>
                <button style={{background:'white',color:'blue',border:'none'}} onClick={()=>window.location.href="https://meet.google.com/"}>Join</button>
            </div>



            <div className="shboximg col-sm-2" >
                <img src="https://i.pinimg.com/736x/ea/b6/20/eab6203681c0493206436b91bd376752.jpg" height='200px' />
            </div>
            <div className="shboxtxt col-sm-4">
                <b><h4>Tony Stark</h4></b><br></br>
                <p style={{fontFamily:'sans-serif',fontSize:'14px'}}>Requested on 13-07-2023</p>
                <li className="shli">Mode: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GMeet</li>
                <li  className="shli">Time:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11:00pm</li>
                <li  className="shli">Date:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15-07-2023</li>
                <li className="shli">Request Status: &nbsp; Accepted</li>
                <div className="overlay overlay_0">
                    <img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1689263253/pending_wa3jkz.png" height='40px' style={{opacity:'0.7'}}/>
                </div>
                {/* <button style={{background:'white',color:'blue',width:'fit-content'}} onClick={()=>{window.location.href='/review'}}>Click to review</button> */}
                <br></br>
            </div>
            
            </div>     
            
                
       </div>
       <NewButton/>
</>
    );
}
