import React from 'react';
import LogoutButton from './LogoutButton'; // assuming LogoutButton.js file is in the same directory

import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Event</th>
          <th scope='col'>Location</th>
          <th scope='col'>Date</th>
          <th scope='col'>Time</th>
          {/* <th scope='col'>Hours</th> */}
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              {/* <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              /> */}
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Charlotte, NC</p>
            {/* <p className='text-muted mb-0'>IT department</p> */}
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>10:00 AM </td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Add
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              {/* <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              /> */}
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Charlotte, NC</p>
            {/* <p className='text-muted mb-0'>Finance</p> */}
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>12:00 PM</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Add
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              {/* <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              /> */}
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Charlotte, NC</p>
            {/* <p className='text-muted mb-0'>UI/UX</p> */}
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>11:00 AM</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Add
            </MDBBtn>
          </td>
        </tr>
        <LogoutButton /> 
      </MDBTableBody>
    </MDBTable>
   
  );
}
