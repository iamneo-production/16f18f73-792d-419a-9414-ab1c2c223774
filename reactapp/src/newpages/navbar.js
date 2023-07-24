import React from "react";
export default function NavBar(){
    return(
        <>
        <header>
  <img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1689240926/Capture-removebg-preview_r5mzte.png" style={{height:'60px',marginLeft:'-180px'}} />
  <nav className="menu">
    <input type="checkbox" id="menuToggle" />
    <label htmlFor="menuToggle" className="menu-icon">
      <i className="fa fa-bars" />
    </label>
    <ul>
      <a href="/newhome">
        <li>Home</li>
      </a>
      <a href="/newsletter">
        <li>NewsLetter</li>
      </a>
      <a href="/sessionhist">
        <li>Session</li>
      </a>
      <a href="/notifications">
        <li>Notifications</li>
      </a>
      <a href="/advp">
        <li>Profile</li>
      </a>
      {/* <a href="/feedback">
        <li>Feedback</li>
      </a> */}
      <a href="/">
        <li>LogOut</li>
      </a>

    </ul>
  </nav>
  {/* <div className="imagetag">
<img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1689136589/bg3_1_i2l1md.png"/>
  </div> */}

</header></>
    );
}