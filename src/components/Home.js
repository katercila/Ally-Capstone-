import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';
import "../styling/Home.css"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className='hero-container'>
        <video autoPlay muted playsInline loop>
            <source src="/images/home-donating-vid.mp4" type="video/mp4" alt="Volunteers packing goods"/>
        </video>
            <h1>Together, We Can Change The World</h1>
            <p> Volunteer And Be A Part Of The Solution</p>
            <Link to="/signup"><button>Sign Up!</button></Link>
            <img src='/images/home-appreciation.svg'/>
        </section>

      <section className='motivation-container'>
      <MDBRow>
      <MDBCol className="motivation-img" md='4'>
        <img width="100%" src='/images/home-icon1.png' alt="Child's hand panted"/>
        </MDBCol>
        <MDBCol className="motivation-text" md='8'>
        <h2> More People.</h2>
          <h2> More Impact.</h2>
            <p><span> influntially. </span> is a platform that connects individuals with meaningful volunteer opportunities in their communities. We work with a wide range of nonprofit organizations, community groups, and causes to provide users with a variety of options for giving back. </p>   
        </MDBCol>
      </MDBRow>
      </section>

      <section className="topics-container animated">
          <div className="topics-header">
                <h3> Join Us In <span>Three </span>Steps!</h3>
            </div>
          <MDBContainer>
              <MDBRow >
                <MDBCol className='topics-row hover-effect' size='sm'>
                <h3><span> 1</span>  SEARCH </h3>
                <Link to="/volunteer"><img width="85%" alt="Computer mock-up of volunteer page" src="/images/home-icon2.png"></img></Link>
                </MDBCol>

                <MDBCol className='topics-row hover-effect' size='sm'>
                <h3><span> 2</span> LOG IN</h3>
                <Link to="/signup"><img width="85%" alt="Hands raised" src="/images/home-icon5.png"></img></Link>  
                </MDBCol>

                <MDBCol className='topics-row hover-effect' size='sm'>
                <h3><span> 3</span>  VOLUNTEER! </h3>
                <img width="85%" alt="Drawing of two volunteers picking up trash " src="/images/home-icon6.png"></img> 
                </MDBCol>
              </MDBRow>
            </MDBContainer>
      </section>

      <section className='motivation-container'>
        <MDBRow>
          <MDBCol className="motivation-text" md='8'>
          <h2> Create.</h2>
          <h2> Meaningful.</h2>
          <h2> Change.</h2>
            <p> Volunteering is not a choice, it's a <span>responsibility</span>. Each of us has the power to make a difference, and when we come together to give our time and energy, we can create a positive impact that can change the world.
            </p>    
          </MDBCol>
          <MDBCol className="motivation-img" md='4'>
            <img width="100%" src='/images/home-icon3.png' alt="A group of volunteers picking up trash in a field."/>
          </MDBCol>
        </MDBRow>
      </section>
    </>
  );
}