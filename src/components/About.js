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
  MDBCol
} from 'mdb-react-ui-kit';
import { BsHammer } from 'react-icons/bs';


function About() {
  return (
    <main>

      <section className="info-container">
        <div className="info">
            <div className="info-img">
              <img width="85%" alt="..." src="https://charlotteunlimited.com/wp-content/uploads/2020/12/volunteer-in-charlotte.png"></img> 
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
              <video id="slider" width= "85%" autoPlay muted loop>
                  <source src="/images/about-helpingman.mp4" type="video/mp4" />
              </video>
            </div>
        </div>
      </section>

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
            <p>Volunteering in the community supports local initiatives, such as food banks, homeless shelters, schools, and community events, to improve well-being.<br/> <br/>  It provides opportunities to meet people, learn new skills, and make a positive impact on others. It plays an essential role in creating a stronger and thriving community. </p>
          </MDBCol>
          <MDBCol size='md'>
           <img width="85%" alt="..." src="/images/about-hands-icon.png"></img> 
            <h3> And More!</h3>
            <p> Discover countless ways to make a difference in your community with our diverse range of volunteering opportunities. From environmental conservation to mentoring kids, supporting local charities, and more, our website offers a wide range of opportunities to give back and make a positive impact. <br/> <br/> Browse our listings today and find the perfect volunteer opportunity for you, and more!</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
            <MDBCardTitle>Alvaro</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className='hover-shadow'>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='/images/alvaro-admin-pic.jpg'
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
        <MDBCard className='h-100'>
          <MDBCardImage
            src='/images/shaye-admin-pic.jpg'
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