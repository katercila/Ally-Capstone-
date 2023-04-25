import React, { useState } from 'react';
import axios from 'axios';
import "../styling/SignUp.css"
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { dblClick } from '@testing-library/user-event/dist/click';


function SignUp() {

  const [user, setUser] = useState({ name: '', username: '', password: '', email: '' });
  const [userLogin, setUserLogin] = useState("");
  const [justifyActive, setJustifyActive] = useState('tab2' && 'tab1');;

  function handleLogin(e) {
    e.preventDefault();
    console.log("User login:", userLogin);
  }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleSubmit = async (event, db) => {
    event.preventDefault();
    
    try {
      const existingUser = await db.query('SELECT * FROM users WHERE email = ?', [user.email]);
    
      if (existingUser.length > 0) {
        console.log('Email already exists');
  
        return;
      } else {
        const result = await db.query('INSERT INTO users (username, email, password) VALUES (?,?,?)', [user.username, user.email, user.password]);
      
      }
    
      const registerResponse = await axios.post('http://localhost:3000/register', user);
      console.log(registerResponse.data);
    } catch (error) {
      console.log(error);
      // handle the error
    }
  };



  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          {/* <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/> */}

          {/* <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div> */}

          <form onSubmit={handleSubmit}>
             <MDBInput
              label='Username'
              type='text'
              value={userLogin.username}
              onChange={(event) => setUserLogin({ ...userLogin, username: event.target.value })}
   />
           <br></br>

             <MDBInput
              label='Password'
              type='password'
              value={userLogin.password}
              onChange={(event) => setUserLogin({ ...userLogin, password: event.target.value })}
  />
           <br></br>

            <MDBBtn type='submit'>Sign in</MDBBtn>
                 </form>

           <br></br>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            {/* <a href="!#">Forgot password?</a> */}
          </div>



          {/* <p className="text-center">Not a member? <a href="#!">Register</a></p> */}

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          {/* <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/> */}

<form onSubmit={handleSubmit}>
            <MDBInput
            label='Name'
            type='Name'
            value={userLogin.Name}
            onChange={(event) => setUserLogin({ ...userLogin, Name: event.target.value })}
/>
            <br></br>

            <MDBInput
             label='Email'
             type='email'
             value={userLogin.email}
             onChange={(event) => setUserLogin({ ...userLogin, email: event.target.value })}
/>
            <br></br>

             <MDBInput
              label='Username'
              type='text'
              value={userLogin.username}
              onChange={(event) => setUserLogin({ ...userLogin, username: event.target.value })}
   />
            <br></br>

             <MDBInput
              label='Password'
              type='password'
              value={userLogin.password}
              onChange={(event) => setUserLogin({ ...userLogin, password: event.target.value })}
  />
             <br></br>

             <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

            <MDBBtn type='submit'>Sign up</MDBBtn>
                 </form>



        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default SignUp;


