import React from "react";
import './home.css';

export default function OldProfile(){

    return(
        <>
        <section className="section about-section gray-bg" id="about">
  <div className="container">
    <div className="row align-items-center flex-row-reverse">
      <div className="col-lg-6">
        <div className="about-text go-to">
          <h3 className="dark-color">About Me</h3>
          <h6 className="theme-color lead">
            A Lead UX &amp; UI designer based in One Piece
          </h6>
          <p>
            I design and develop services for customers of all
            sizes, specializing in creating stylish, modern websites, web
            services and online stores. My passion is to design digital user
            experiences through the bold interface and meaningful interactions.
          </p>

                {/* <label >Birthday</label>
                <p>4th april 1998</p>


                <label>Age</label>
                <p>22 Yr</p>


                <label>Residence</label>
                <p>Canada</p>


                <label>Address</label>
                <p>California, USA</p>



                <label>E-mail</label>
                <p>info@domain.com</p>


                <label>Phone</label>
                <p>820-885-3321</p>


                <label>Skype</label>
                <p>skype.0404</p>


                <label>Freelance</label>
                <p>Available</p> */}


        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-avatar">
          <img
            src="https://i.pinimg.com/736x/ea/b6/20/eab6203681c0493206436b91bd376752.jpg"
            title=""
            alt="profilepc"
            style={{height:'400px'}}
          />
        </div>
      </div>
    </div>
<div>
    <p style={{color:'black', fontSize:'20px',fontFamily:'serif'}}><br/><br/><br/><br/>Age:<br/><br/>
       Experience:<br/><br/>
       Email:<br/><br/>
       FreeLance:<br/><br/>
       Achievements:<br/><br/>
       Language:<br/><br/>
       Location:<br/><br/>
       Availability:<br/><br/>
       Offerings:<br/><br/>
       Pricing:<br/>
    </p>
</div>
      <div className="row">
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" data-to={500} data-speed={500}>
              500
            </h6>
            <p className="m-0px font-w-600">Happy Clients</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" data-to={150} data-speed={150}>
              150
            </h6>
            <p className="m-0px font-w-600">Sessions Attended</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" data-to={850} data-speed={850}>
              850
            </h6>
            <p className="m-0px font-w-600">Project Consults</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" data-to={190} data-speed={190}>
              190
            </h6>
            <p className="m-0px font-w-600">Telephonic Talk</p>

        </div>
      </div>
    </div>
  </div>
</section>

    </>
    );
}