import React from "react";
import './choose.css';
export default function Choose(){
    return(
        <>
       <div className="template">
  <main className="temp">
    <div className="card">
        <div className="card1">
      <img
        src="https://res.cloudinary.com/dvyby9jur/image/upload/v1689153933/Depositphotos_80142590_s-2015_dw1olz.jpg"
        alt=""
      />
      <div className="card-content">
        <h2>Advisor</h2>

        <a href="/newregister" className="button">
        <h4>Click to Create a new Client Profile</h4>
          
        </a>
        </div>
      </div>
    </div>
    <div className="card">
    <div className="card2">
      <img
        src="https://res.cloudinary.com/dvyby9jur/image/upload/v1689154254/18143472be2c96e4d93adfe9be823425_nfgjbo.jpg"
        alt=""
      />
      <div className="card-content">
        <h2>Client</h2>

        <a href="/newregister" className="button">
        <h4>Click to Create a new Client Profile</h4>
          
        </a>
        </div>
      </div>
    </div>
  </main>

</div>

        </>
    );
}