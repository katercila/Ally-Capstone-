import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  // MDBCheckbox
}

from 'mdb-react-ui-kit';
function SignUp() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({ username: '', password: '' });
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [setError] = useState(null); // Add error state

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = userLogin;
    axios.post('http://localhost:3000/login', { email: username, password })
.then((response) => {
  console.log(response.data);
  // Redirect to new page after successful login
  if (response.status === 200) {
    if (response.data.role === 'user') {
      navigate('/userdashboard'); // Redirect to UserDashboard for user role
    } else if (response.data.role === 'admin') {
      navigate('/admindashboard'); // Redirect to AdminDashboard for admin role
    }
  }
})

.catch((error) => {
  console.log(error);
  setError('Wrong username or password'); // Set error message
});
};
  return (
    
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
      <div className='login-button'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        </div>
        <MDBTabsItem>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266F1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266F1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266F1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266F1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
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
           <div className='submit-button'>
            <MDBBtn type='submit'>Sign in</MDBBtn></div>
                 </form>
                 <br></br>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
export default SignUp;

