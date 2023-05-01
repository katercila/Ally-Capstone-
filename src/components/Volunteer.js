import React from 'react';
import "../styling/Volunteer.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

function Volunteer () {
  return ( 
    <div>
    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1913&q=80" alt="My Image"  style={{ width: '100vw', height: '55vh', marginBottom: '2rem' }}/>
    <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem', color: '#830C4F' }} >Volunteer Events</h1>
    <div className="card-grid">
    <MDBCard className='card'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F451095119%2F534560974413%2F1%2Foriginal.20210426-002411?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=1356f0a519eaffa1b4790e503581adc8' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='card-body'>
        <MDBCardTitle className='card-title'>Volunteer Registration - May Feeding Charlotte</MDBCardTitle>
        <MDBCardText className='card-text'>
        Please join The Independence Fund and our partners as we provide food and cleaning supplies and personal hygiene items to veterans.
        </MDBCardText>
        <MDBBtn className='signup-btn' href='/SignUp' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Sign Up</MDBBtn> 
      </MDBCardBody>
      </MDBCard>

      <MDBCard className='card'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F454058069%2F155620235262%2F1%2Foriginal.20230224-175204?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=06064a4afbddb3764232c0c1fe87f6ee' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='card-body'>
        <MDBCardTitle className='card-title'>PFLAG Charlotte Volunteer Orientation hosted by Duke Energy</MDBCardTitle>
        <MDBCardText className='card-text'>
        Are you interested in learning more about PFLAG Charlotte and our volunteer opportunities?
        </MDBCardText>
        <MDBBtn className='signup-btn' href='/SignUp'style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sign Up</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard className='card'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F419150289%2F292238487266%2F1%2Foriginal.20230106-012542?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C45%2C1920%2C960&s=abd79332f6a0b891c80c03d5ec856bb7' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='card-body'>
        <MDBCardTitle className='card-title'> South End Rail Trail Clean Up </MDBCardTitle>
        <MDBCardText className='card-text'>
        RSVP now for the May South End Rail Trail Clean Up on Saturday, May 20th from 10am-1pm! ALL clean up supplies will be provided by Keep Charlotte Beautiful.
        </MDBCardText>
        <MDBBtn className='signup-btn' href='/SignUp' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sign Up</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard className='card'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F481604649%2F1434933127933%2F1%2Foriginal.20230330-170358?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=ee39702f62bf83886a6234b5032282eb' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='card-body'>
        <MDBCardTitle className='card-title'> Grounds Cleanup at Lakeview Resource Center </MDBCardTitle>
        <MDBCardText className='card-text'>
        Volunteers will join Lakeview residents to clean out undergrowth, old benches, and other areas around the Lakeview Neighborhood E-Hub
        </MDBCardText>
        <MDBBtn className='signup-btn' href='/SignUp' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sign Up</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard className='card'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F480830839%2F247540159968%2F1%2Foriginal.20230329-200059?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=2b7cbfaa8bc0467bf0f8f19ecf4a8c11' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='card-body'>
        <MDBCardTitle className='card-title'> Beautification at Hidden Valley Elementary </MDBCardTitle>
        <MDBCardText className='card-text'>
        Volunteers will create and spruce up gathering spaces around the campus of this neighborhood school
        </MDBCardText>
        <MDBBtn className='signup-btn' href='/SignUp' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sign Up</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard className='card'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F480824819%2F247540159968%2F1%2Foriginal.20230329-195028?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=55ac4cf590bc308a1aa3430b13afcf2f' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='card-body'>
        <MDBCardTitle className='card-title'> Spring Clean at Grier Heights Community Center </MDBCardTitle>
        <MDBCardText className='card-text'>
        Volunteers will span out throughout the Grier Heights neighborhood to assist with beautification projects.
        </MDBCardText>
        <MDBBtn className='signup-btn' href='/SignUp' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sign Up</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard className='card'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F434900809%2F532795437565%2F1%2Foriginal.20230130-134946?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C72%2C1124%2C562&s=84d7c5c077349b17e9a6e712181bdae3' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='card-body'>
        <MDBCardTitle className='card-title'> Give Blessing Bags in Charlotte, NC </MDBCardTitle>
        <MDBCardText className='card-text'>
        Come Join Us! We Are Serving Our Community by Giving Blessing Bags to the Charlotte community! 
        </MDBCardText>
        <MDBBtn className='signup-btn' href='/SignUp' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sign Up</MDBBtn>
      </MDBCardBody>
      </MDBCard>

      <MDBCard className='card'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F480834789%2F247540159968%2F1%2Foriginal.20230329-200504?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=75e5bba101bfe6bc01a94d1f7e23232e' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody className='card-body'>
        <MDBCardTitle className='card-title'> Green Thumbs for Camp Greene </MDBCardTitle>
        <MDBCardText className='card-text'>
        Work with Camp Greene neighbors in their community garden and assist with a neighborhood cleanup.
        </MDBCardText>
        <MDBBtn className='signup-btn' href='/SignUp' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >Sign Up</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
  </div>
  );
}

export default Volunteer;