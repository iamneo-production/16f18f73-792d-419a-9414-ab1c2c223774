import React, { Component } from "react";
import './nh.css';
import { Link } from "react-router-dom";
import NavBar from "./navbar";
import PgFooter from "./pgfooter";
import axios from "axios";
class NHome extends Component{
  state={
    data:[]
  };
  componentDidMount(){
    this.getDetails();
  }
  getDetails=async()=>{
    let token = localStorage.getItem('token');
    alert(token);
    try {
      const res = await axios.get(`http://localhost:8181/newh`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });
      this.setState({ data: res.data });
    } catch (error) {
      console.log(error);
    //   console.log(clientuser);
    }
  }
  render(){
  return( 
  <>

      <NavBar/>
      {/* <div className="newclass">
      Be an Advisor,<br></br> Not an example
      </div> */}
        <div className="templater" style={{overflow:'hidden'}}>
        {this.state.data.map((usera) => (
        <div className="templater" style={{overflow:'hidden'}}>
            {/* <div className="container"> */}
            <div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src={usera.pic}
      alt="user"
    />
    <h3>{usera.name}</h3>
    <h6>{usera.country}</h6>
    <p style={{color:'white'}}>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary"><Link to='/request'>Message</Link></button>
      <button className="primary ghost"><Link to='/newprofile'>View</Link></button>
    </div>
    <div className="skills">
      <h6>Skills</h6>
      <ul>
        <li>UI / UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
  </div>

</div>
</div>
 

        ))}
        </div>
        <PgFooter/>
        </>
    );
  }
}
export default NHome;