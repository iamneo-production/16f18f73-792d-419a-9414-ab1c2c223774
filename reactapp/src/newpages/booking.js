import React,{ useState }  from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import DateTimePick from "./datetime";
import TimePick from "./timepick";
import NavBar from "./navbar";
import { useNavigate } from "react-router-dom";
export default function Booking(){
  const navigate = useNavigate();

    return(
        <>
        <NavBar/>
        <div className="bgbody" style={{alignContent:'center', marginTop:'-250px'}}>
        <form className="bookingform">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Client </label>
      <input class="form-control" type="text" placeholder="Tony Gibbs" readonly/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Advisor</label>
      <input class="form-control" type="text" placeholder="Tony Shank" readonly/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Location</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="loc"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Language</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="language"/>
  </div>
  <div class="form-row">

    <div class="form-group col-md-4">
      <label for="inputState">Session Mode</label>
      <select id="inputState" class="form-control">
        <option selected>...</option>
        <option >Video Call</option>
        <option >GMeet</option>
        <option >Skype</option>
        <option >Line</option>
        <option >Message</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Queries if any</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows='2' cols='20'></textarea>
    </div>
  </div>
  <div class="form-group">
  <div class="mb-3">
  <label for="formFileMultiple" class="form-label">Select one or more files on the topics in which you would like to consult</label>
  <input class="form-control" type="file" id="formFileMultiple" multiple/>
</div>
    <label for="dateTime">Select the Date</label>
  <DateTimePick/>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">I agree that all the information are done with my consent and here by accept the rules and regulations.<br></br>
    </label>
  </div>
  {/* <label for="dateTime">Select the Time of Session</label> */}
  {/* <TimePick/> */}
  </div>
  Proceed to Payment<br></br>
  <button type="submit" class="btn btn-primary" onClick={()=> {  navigate('../payment') }}>Book!</button>
  {/* <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} /> */}
</form>
        </div>
        </>
    );
}
//datepicker in reactjs?