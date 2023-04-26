import React from "react";
import "../styling/About.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBCol
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";


function About() {
  return (
    <main>
      <MDBRow className="info-container">
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
      
    <MDBRow className="mission-container">
      <MDBCol className="mission-text" md='8'>
      <h2>Our Mission</h2>
                <p>
                Our mission is to empower individuals to make a positive impact in their communities through volunteering. We believe that everyone has the ability to create change and make a difference, and we strive to provide a platform that makes it easy for people to find and engage in volunteer opportunities.
                </p>
      </MDBCol>
      <MDBCol className="mission-video" md='4'>
      <video id="slider" width= "85%" autoPlay muted loop>
                  <source src="/images/about-helpingman.mp4" type="video/mp4" />
              </video>
      </MDBCol>
    </MDBRow>

      <section class="quote-container">
        <h3> Be the change you wish to see: Volunteer today!</h3>
      </section>

      <section>
        <div className="vol-header">
            <h3> Get Involved</h3>
        </div>
      <MDBContainer className="vol-container">
        <MDBRow>
          <MDBCol size='md'>
          <img width="85%" alt="..." src="/images/about-read-icon.png"></img> 
            <h3> Help the Youth</h3>
            <p> Volunteering with kids includes mentoring, tutoring, leading activities, and assisting with homework to support their development and well-being. </p>
          </MDBCol>
          <MDBCol size='md'>
            <img width="85%" alt="..." src="/images/about-dig-icon.png"></img> 
            <h3> Environmental volunteering</h3>
            <p> Environmental volunteering supports and protects the natural environment through activities like planting trees, cleaning up litter, restoring wildlife habitats, and educating others about sustainability.  </p>
          </MDBCol>
          <MDBCol size='md'>
           <img width="85%" alt="..." src="/images/about-can-icon.png"></img> 
            <h3> Community Outreach </h3>
            <p>Volunteering in the community supports local initiatives, such as food banks, homeless shelters, schools, and community events, to improve well-being.</p>
          </MDBCol>
          <MDBCol size='md'>
           <img width="85%" alt="..." src="/images/about-hands-icon.png"></img> 
            <h3> And More!</h3>
            <p> Discover countless ways to make a difference in your community with our diverse range of volunteering opportunities. From environmental conservation to mentoring kids, supporting local charities, and more, our website offers a wide range of opportunities to give back and make a positive impact.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="vol-closer">
        <h4>Browse our listings today and find the perfect volunteer opportunity for you! </h4>
        <Link to="/" target="_blank"><button>Check Out Events!</button></Link>
      </div>
      </section>

      <section className="group-members">
        <div className="members-title">
            <h3> Meet The Team</h3>
        </div>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol className='hover-shadow'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='/images/alvaro-admin-pic.jpg'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className="member-name">Alvaro</MDBCardTitle>
            <MDBCardText className="member-bio">
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/arodriguez-salas/' target="_blank" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='hover-shadow'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='/images/kat-admin-pic.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle className="member-name">Kat </MDBCardTitle>
          <MDBCardText className="member-bio">
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/katerinercila/' target="_blank" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='hover-shadow'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='/images/shaye-admin-pic.png'
            alt='...'
            position='top'
          />
          <MDBCardBody>
          <MDBCardTitle className="member-name">Shaye </MDBCardTitle>
            <MDBCardText className="member-bio">
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <MDBBtn outline color="secondary" floating className='linkedin-icon' href='https://www.linkedin.com/in/shayeellerbe/' target="_blank" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
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