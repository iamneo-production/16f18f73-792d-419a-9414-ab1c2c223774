import React, { Component } from "react";
import './advp.css';
import NavBar from "./navbar";
import axios from "axios";

class Advp extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getDetails();
  }

  getDetails = async () => {
    let token = localStorage.getItem('token');
    alert(token);
    try {
      const res = await axios.get(`http://localhost:8181/newhom`, {
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

  render() {
    return (
      <>
        <NavBar />
        <div className="bg" style={{ background: 'white' }}>
          {this.state.data.map((userp) => (
            <div className="container bootstrap snippets bootdey" key={userp.id}>
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
                      <h1>{userp.uname}</h1>
                      <p>{userp.email}</p>
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
                <div className="profile-info col-md-9" style={{ background: 'white' }}>
                  <div className="panel"></div>
                  <div className="panel">
                    <div className="bio-graph-heading">
                      <p>{userp.uname}</p>
                    </div>
                    <div className="panel-body bio-graph-info" style={{ background: 'white' }}>
                      <div className="row">
                        <div className="bio-row">
                          <p>
                            <span>First Name </span>: {userp.fname}
                          </p>
                        </div>
                        <div className="bio-row">
                          <p>
                            <span>Last Name </span>: {userp.lname}
                          </p>
                        </div>
                        <div className="bio-row">
                          <p>
                            <span>Country </span>: {userp.country}
                          </p>
                        </div>
                        <div className="bio-row">
                          <p>
                            <span>Birthday</span>: {userp.dob}
                          </p>
                        </div>
                        <div className="bio-row">
                          <p>
                            <span>Occupation </span>: {userp.occ}
                          </p>
                        </div>
                        <div className="bio-row">
                          <p>
                            <span>Email </span>: {userp.email}
                          </p>
                        </div>
                        <div className="bio-row">
                          <p>
                            <span>Mobile </span>: {userp.mob}
                          </p>
                        </div>
                        <div className="bio-row">
                          <p>
                            <span>Phone </span>: {userp.phn}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div></div>
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


