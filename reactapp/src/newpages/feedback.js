import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
function FeedBack(){
        const navigate=useNavigate;
        const handlesubmit=(e)=>{
            e.preventDefault();
            navigate('/newhome');
        }
        return( 
            <>
            <div>
                <form className="bookingform" onSubmit={handlesubmit}>
                <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">EMail </label>
      <input class="form-control" type="text" placeholder="Tony Gibbs" readonly/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name </label>
      <input class="form-control" type="text" placeholder="Tony Gibbs" readonly/>
    </div>
    <div class="form-group col-md-12">
      <label for="inputPassword4">Enter Your FeedBack</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows='2' cols='20'></textarea>
    </div>
  </div>
  <button type="submit"></button>
                </form>
            </div>
            </>
        );
}
export default FeedBack;