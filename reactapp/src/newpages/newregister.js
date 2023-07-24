import React, { useState } from "react";
import './nr.css';
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import { signup } from "../Redux/Userslice";
import { useDispatch } from "react-redux";

function NRegister(){

    return(
        <>
        
        <div className="container rounded bg-white mt-5 mb-5">
  <div className="row" style={{opacity:'.7'}}>
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          width="150px"
          src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
        />
        <span className="font-weight-bold">User</span>
        <span className="text-black-50">user@gmail.com.my</span>
        <span> </span>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="text-right">Profile Settings</h4>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue=""
              id="fname"
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Last Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue=""
              placeholder="last name"
              id="lname"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter phone number"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Organization Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Organization Name"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Experience</label>
            <input
              type="number"
              className="form-control"
              placeholder="Experience"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Language</label>
            <input
              type="text"
              className="form-control"
              placeholder="Language"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Area of Interest</label>
            <input
              type="text"
              className="form-control"
              placeholder="Area of Interest"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Email ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter email id"
              defaultValue=""
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Qualification</label>
            <input
              type="text"
              className="form-control"
              placeholder="qualification"
              defaultValue=""
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="labels">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="country"
              defaultValue=""
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Bio</label>
            <input
              type="text"
              className="form-control"
              defaultValue=""
              placeholder="About"
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button" onClick={()=> {alert("Saved Successfully"); window.location.href='/newhome'}}>Save Profile
          </button>
        </div>
      </div>
    </div>

  </div>
</div>
</>
    );
}
export default NRegister;