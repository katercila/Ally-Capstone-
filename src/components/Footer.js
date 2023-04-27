import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' style={{backgroundColor:"rgb(80,16,74)"}}>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn> */}

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn> */}

          <MDBBtn outline color="light" floating className='m-1' href='https://instagram.com/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/katercila/Ally-Capstone-.git' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className='contact'>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>

              <section className='mb-4'>
              <p>
              Join the movement of giving back: Volunteer with us today!
              </p>
              </section>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                  Red Ventures Dr,<br/>Indian Land, North Carolina, 29707
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                help@influentially.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            
            </MDBCol>
            </MDBRow>
          </form>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
        &ensp;influentially.
        </a>
      </div>
    </MDBFooter>
  );
}