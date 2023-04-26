import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styling/NavBar.css'
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdb-react-ui-kit';

function NavBar() {
  const [showNavRight, setShowNavRight] = useState(false);
  return (
 <>
<MDBNavbar expand='lg' light bgColor='white'>
        <Link  to="/" exact>
          <img style={{width:"40%", paddingLeft:10}} src="/images/influentially.-logo.png" alt="influentially-logo" />
        </Link>
      <MDBContainer fluid>
      <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon className='nav-bars' icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem style={{padding:15, fontSize:18}}> 
            <Link className="nav-items" to="/">Home</Link>
           
            </MDBNavbarItem>

            <MDBNavbarItem   style={{padding:15, fontSize:18}}> 
             <Link className="nav-items" to="/Volunteer">Volunteer</Link>
            </MDBNavbarItem>

            <MDBNavbarItem   style={{padding:15, fontSize:18}}> 
             <Link className="nav-items" to="/about">About</Link>
            </MDBNavbarItem>

            <MDBNavbarItem style={{padding:15, fontSize:18}}> 
            <Link className="nav-items" to="/signup">Sign Up</Link>
            </MDBNavbarItem>
            <MDBNavbarItem>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}

export default NavBar;