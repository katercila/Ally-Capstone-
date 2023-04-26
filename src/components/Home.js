import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBContainer,
  MDBRow
} from 'mdb-react-ui-kit';
import "../styling/Home.css"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
{/* <section className='hero' style={{ height: '100vh' }}>
  <div className="hero-image">
    <div className="hero-text">
      <h1>I am John Doe</h1>
      <p>And I'm a Photographer</p>
      <button>Hire me</button>
    </div>
  </div>
</section> */}


<div className='hero-container'>
<video autoPlay muted loop>
                  <source src="/images/home-donating-vid.mp4" type="video/mp4" />
              </video>
      <h1>Together, We Can Change The World</h1>
      <p> Volunteer and be a part of the solution</p>
      <Link to="/signup"><button>Sign Up!</button></Link>
    </div>










   
{/* <MDBRow className="info-container">
      <MDBCol className="info-img" md='4'>
      <img width="85%" alt="..." src="https://charlotteunlimited.com/wp-content/uploads/2020/12/volunteer-in-charlotte.png"></img> 
      </MDBCol>
      <MDBCol className="info-text" md='8'>
      <h2>Who We Are</h2>
                <p>Welcome to our volunteering website! We are dedicated to connecting individuals with meaningful volunteer opportunities in their communities. Our platform allows users to easily search for and sign up for volunteer opportunities, track their hours, and receive recognition for their contributions.</p>

                <p>At our core, we believe that volunteering has the power to transform individuals and communities alike. Through volunteering, people can develop new skills, meet new friends, and make a real difference in the world.</p>

                <p>Whether you're interested in helping out at a local nonprofit, volunteering at a community event, or contributing your time and expertise to a cause you care about, our website is here to help. Join our community of volunteers today and start making a difference!
                </p>
      </MDBCol>
    </MDBRow>
       */}


    {/* <MDBRow className="mission-container">
      <MDBCol className="mission-text" md='8'>
      <h2>Our Vision</h2>
      <p> Join us in making a positive impact on the world by volunteering with our diverse range of community-based projects. </p>
               
      </MDBCol>
      <MDBCol className="mission-video" md='4'>
      <video id="slider" width= "85%" autoPlay muted loop>
                  <source src="/images/about-helpingman.mp4" type="video/mp4" />
              </video>
      </MDBCol>
    </MDBRow> */}

<div className="topics-container">
    <MDBContainer>
        <MDBRow >
          <MDBCol className='topics-row' size='md'>
          <h3> Help the Youth</h3>
          <img width="85%" alt="..." src="/images/about-read-icon.png"></img> 
            <p> </p>
          </MDBCol>

          <MDBCol className='topics-row' size='md'>
          <h3> Environmental volunteering</h3>
            <img width="85%" alt="..." src="/images/about-dig-icon.png"></img> 
            <p> </p>
          </MDBCol>

          <MDBCol className='topics-row' size='md'>
          <h3> Community Outreach </h3>
           <img width="85%" alt="..." src="/images/about-can-icon.png"></img> 
            <p> </p>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
      </div>
{/* 
    <MDBContainer className="color-tabs-container">
      <MDBRow>
        <MDBCol className='yellow-container' size='md'>
          One of three columns
        </MDBCol>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
        <MDBCol size='md'>
          One of three columns
        </MDBCol>
      </MDBRow>
    </MDBContainer> */}
    </>
  );
}