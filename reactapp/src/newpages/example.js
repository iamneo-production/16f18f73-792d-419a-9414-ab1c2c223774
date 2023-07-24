// import React,{ Component, useState }  from "react";
// import "react-datepicker/dist/react-datepicker.css";
// import DateTimePick from "./datetime";
// import NavBar from "./navbar";
// import { Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";
// class Booking extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             client:'',
//             adv:'',
//             loc:'',
//             lan:'',
//             queries:'',
//             datetime:'',
//         };
//     }
//     handleclientchange=(event)=>{
//             this.setState({client:event.target.value});
//     };
//     handleadvchange=(event)=>{
//         this.setState({adv:event.target.value});
// };
// handlelocchange=(event)=>{
//     this.setState({loc:event.target.value});
// };
// handlelanchange=(event)=>{
//     this.setState({lan:event.target.value});
// };
// handlequerieschange=(event)=>{
//     this.setState({queries:event.target.value});
// };
// handledatetimechange=(event)=>{
//     this.setState({datetime:event.target.value});
// };
// //   const navigate = useNavigate();
// handlesubmit=(event)=>{
//     event.preventDefault();
//     const data={
//         client:this.state.client,
//         adv:this.state.adv,
//         loc:this.state.loc,
//         lan:this.state.lan,
//         queries:this.state.queries,
//         datetime:this.state.datetime,
//     };
//     axios.post('http://localhost:8080/bookingr',data)
//     // useNavigate();
// };
// // navigate=()=> useNavigate();
//     render(){

//         return(
//             <>
//         <NavBar/>
//         <div className="bgbody" style={{alignContent:'center', marginTop:'-250px'}}>
//         <form className="bookingform" onSubmit={this.handlesubmit}>
//   <div class="form-row">
//     <div class="form-group col-md-6">
//       <label for="inputEmail4">Client </label>
//       <input class="form-control" type="text" placeholder="Tony Gibbs" value={this.state.client} onChange={this.handleclientchange}/>
//     </div>
//     <div class="form-group col-md-6">
//       <label for="inputPassword4">Advisor</label>
//       <input class="form-control" type="text" placeholder="Tony Shank" value={this.state.adv} onChange={this.handleadvchange}/>
//     </div>
//   </div>
//   <div class="form-group">
//     <label for="inputAddress">Location</label>
//     <input type="text" class="form-control" id="inputAddress" placeholder="loc" value={this.state.loc} onChange={this.handlelocchange}/>
//   </div>
//   <div class="form-group">
//     <label for="inputAddress2">Language</label>
//     <input type="text" class="form-control" id="inputAddress2" placeholder="language" value={this.state.lan} onChange={this.handlelanchange}/>
//   </div>
//   <div class="form-row">

//     <div class="form-group col-md-4">
//       <label for="inputState">Session Mode</label>
//       <select id="inputState" class="form-control">
//         <option selected>...</option>
//         <option >Video Call</option>
//         <option >GMeet</option>
//         <option >Skype</option>
//         <option >Line</option>
//         <option >Message</option>
//       </select>
//     </div>
//     <div class="form-group col-md-2">
//       <label for="inputZip">Queries if any</label>
//       <textarea class="form-control" id="exampleFormControlTextarea1" rows='2' cols='20' value={this.state.queries} onChange={this.handlequerieschange}></textarea>
//     </div>
//   </div>
//   <div class="form-group">
//   <div class="mb-3">
//   <label for="formFileMultiple" class="form-label">Select one or more files on the topics in which you would like to consult</label>
//   <input class="form-control" type="file" id="formFileMultiple" multiple/>
// </div>
//     <label for="dateTime">Select the Date</label>
//   <DateTimePick value={this.state.datetime} onChange={this.handledatetimechange}/>
//   <div class="form-group form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">I agree that all the information are done with my consent and here by accept the rules and regulations.<br></br>
//     </label>
//   </div>
//   </div>
//   Proceed to Payment<br></br>
//   <button type="submit" class="btn btn-primary" >Book!</button>
 
// </form>
//         </div>
//         </>
//     );
// }
// }
// export default Booking;


import React, { Component } from "react";
import './advp.css';
import NavBar from "./navbar";
import axios from "axios";


class Advp extends Component{
  state={
    data:[]
  }
  componentDidMount(){
    axios.get('https://127.0.0.1:8181/getwatchlist').then(response=>{
      this.setState({data:response.data});
    })
    .catch(error=>{
      console.log(error);
    });
  }
render(){
    return(
        <>
        <NavBar/>
        <div className="bg" style={{background:'white'}}>
  {this.state.data.map(user=>(
  <div className="container bootstrap snippets bootdey">
    <div className="row">
      <div className="profile-nav col-md-3">
        <div className="panel">
          <div className="user-heading round">
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png"
                alt=""
              />
            </a>
            <h1>Tony</h1>
            <p></p>
          </div>
          <ul className="nav nav-pills nav-stacked">
            <li className="active">
              <a href="/advp">
                {" "}
                <i className="fa fa-user" /> Profile
              </a>
            </li>
            <br></br>
            <li>
              <a href="/newregister">
                {" "}
                <i className="fa fa-edit" /> Edit profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-info col-md-9" style={{background:'white'}}>
        <div className="panel">

        </div>
        <div className="panel">
          <div className="bio-graph-heading">
            <p >@User</p>
          </div>
          <div className="panel-body bio-graph-info" style={{background:'white'}}>

            <div className="row">
              <div className="bio-row">
                <p>
                  <span>First Name </span>: Tony
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Last Name </span>: Gibbs
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Country </span>: Knowhere
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Birthday</span>: 13 July 1900
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Occupation </span>: UI Designer
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Email </span>: thisisanemail@gmail.com
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Mobile </span>: (04) 00 00 122321
                </p>
              </div>
              <div className="bio-row">
                <p>
                  <span>Phone </span>: 04 (00) 00 122321
                </p>
              </div>
            </div>
<div>
  <p></p>
</div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
  ))}
</div>
        </>
    );
  }
}
export default Advp;