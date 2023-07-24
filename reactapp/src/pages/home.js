import React from "react";
import './home.css';
import { Link } from "react-router-dom";
function Home(){
    return(
        <div >
          <>
          <header>
  <figure className="brand">AdvHub</figure>
  <nav className="menu">
    <input type="checkbox" id="menuToggle" />
    <label htmlFor="menuToggle" className="menu-icon">
      <i className="fa fa-bars" />
    </label>
    <ul>
      <a href="http://stackoverflow.com/questions/9191803/why-does-z-index-not-work">
        <li>Home</li>
      </a>
      <a href="#">
        <li>About</li>
      </a>
      <a href="#">
        <li>Booking</li>
      </a>
      <a href="#">
        <li>Profile</li>
      </a>
      <a href="#">
        <li>LogOut</li>
      </a>

    </ul>
  </nav>
  {/* <div className="imagetag">
<img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1689136589/bg3_1_i2l1md.png"/>
  </div> */}

</header>

</>

        <div className="template">
            {/* <div className="container"> */}
            <div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/men/62.jpg"
      alt="user"
    />
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary ghost">Following</button>
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

<div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/women/79.jpg"
      alt="user"
    />
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary ghost">Following</button>
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
<div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/men/60.jpg"
      alt="user"
    />
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary ghost">Following</button>
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


  {/* </div> */}
</div>
<div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/women/79.jpg"
      alt="user"
    />
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary ghost">Following</button>
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
<div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/women/79.jpg"
      alt="user"
    />
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary ghost">Following</button>
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
<div className ="con">
  <div className="card-container">
    <span className="pro">Verified</span>
    <img
      className="round"
      src="https://randomuser.me/api/portraits/women/79.jpg"
      alt="user"
    />
    <h3>Ricky Park</h3>
    <h6>New York</h6>
    <p>
      User interface designer and <br /> front-end developer
    </p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="primary ghost">Following</button>
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
        </div>
    );
}
export default Home;