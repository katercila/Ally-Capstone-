import React from "react";
import "../styling/About.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


function About() {
  return (
    <main>
      <div className="intro">
        <h1>About Page</h1>
      </div>

      <section className="info-container">
        <div className="info">
            <div className="info-img">
              <img width="85%" src="https://charlotteunlimited.com/wp-content/uploads/2020/12/volunteer-in-charlotte.png"></img> 
            </div>

            <div className="info-text">
            <h2>Who We Are</h2>
                <p>Welcome to our volunteering website! We are dedicated to connecting individuals with meaningful volunteer opportunities in their communities. Our platform allows users to easily search for and sign up for volunteer opportunities, track their hours, and receive recognition for their contributions.<br/><br/>
                At our core, we believe that volunteering has the power to transform individuals and communities alike. Through volunteering, people can develop new skills, meet new friends, and make a real difference in the world.<br/><br/>
                Whether you're interested in helping out at a local nonprofit, volunteering at a community event, or contributing your time and expertise to a cause you care about, our website is here to help. Join our community of volunteers today and start making a difference!
                </p>
            </div>
        </div>
      </section>
      
      <section className="mission-container">
        <div className="info">
            <div className="mission-text">
            <h2>Our Mission</h2>
                <p><br/>
                Our mission is to empower individuals to make a positive impact in their communities through volunteering. We believe that everyone has the ability to create change and make a difference, and we strive to provide a platform that makes it easy for people to find and engage in volunteer opportunities.
                </p>
            </div>
            <div className="mission-video">
              <video id="slider" width= "80%" autoPlay muted loop>
                  <source src="/images/vol-1.mp4" type="video/mp4" />
              </video>
            </div>
        </div>
      </section>

      <section class="quote-container">
        <h3> Be the change you wish to see: Volunteer today!</h3>
      </section>

      <section className="org-container">
        <div className="org-header">
            <h3> Get Involved</h3>
        </div>
        <div className="orgs">
          <div className="org-text"> 

          </div>
        </div>

      </section>

      <section className="group-members">
        <div className="members-title">
            <h3> Meet The Team</h3>
        </div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol className='hover-shadow'>
        <MDBCard>
          <MDBCardImage
            src='/images/alvaro-admin-pic.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Alvaro</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='hover-shadow'>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle> Kat </MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='hover-shadow'>
        <MDBCard>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle> Shaye </MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* <MDBCol>
        
      </MDBCol> */}
    </MDBRow>
      </section>
    </main>
  );
}

export default About;