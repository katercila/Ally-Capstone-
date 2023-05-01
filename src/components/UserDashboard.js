import React, { useState } from 'react';
import "../styling/UserDashboard.css";
import LogoutButton from "./LogoutButton";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function AdminDashboard() {
  const [assignedEvents, setAssignedEvents] = useState([]);

  function addEvent(event, date) {
    setAssignedEvents([...assignedEvents, event]);
  }

  function deleteEvent(index) {
    const newAssignedEvents = [...assignedEvents];
    newAssignedEvents.splice(index, 1);
    setAssignedEvents(newAssignedEvents);
  }

  return (
    <div>
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
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Feeding Charlotte</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Charlotte, NC</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                05/20/2023
              </MDBBadge>
            </td>
            <td>10:00 AM </td>
            <td>
              <MDBBtn color='link' rounded size='sm' onClick={() => addEvent('Feeding Charlotte')}>
                Add
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>PFLAG</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Charlotte, NC</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                05/20/2023
              </MDBBadge>
            </td>
            <td>11:00 AM </td>
            <td>
              <MDBBtn color='link' rounded size='sm' onClick={() => addEvent('PFLAG')}>
                Add
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Rail Trail</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Charlotte, NC</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                06/21/2023
              </MDBBadge>
            </td>
            <td>12:00 PM </td>
            <td>
              <MDBBtn color='link' rounded size='sm' onClick={() => addEvent('Rail Trail')}>
                Add
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>United Way</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Charlotte, NC</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                06/25/2023
              </MDBBadge>
            </td>
            <td>1:00 PM </td>
            <td>
              <MDBBtn color='link' rounded size='sm' onClick={() => addEvent('United Way')}>
                Add
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Spring Clean</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Charlotte, NC</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                07/01/2023
              </MDBBadge>
            </td>
            <td>10:30 AM </td>
            <td>
              <MDBBtn color='link' rounded size='sm' onClick={() => addEvent('Spring Clean')}>
                Add
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Give Blessing</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Charlotte, NC</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                08/12/2023
              </MDBBadge>
            </td>
            <td>5:00 PM </td>
            <td>
              <MDBBtn color='link' rounded size='sm' onClick={() => addEvent('Give Blessing')}>
                Add
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Green Thumb</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Charlotte, NC</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                09/15/2023
              </MDBBadge>
            </td>
            <td>8:00 AM </td>
            <td>
              <MDBBtn color='link' rounded size='sm' onClick={() => addEvent('Green Thumb')}>
                Add
              </MDBBtn>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Grounds Cleanup</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Charlotte, NC</p>
            </td>
            <td>
              <MDBBadge color='success' pill>
                10/12/2023
              </MDBBadge>
            </td>
            <td>09:00 AM </td>
            <td>
              <MDBBtn color='link' rounded size='sm' onClick={() => addEvent('Grounds Cleanup')}>
                Add
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <h3>Assigned Events:</h3>
      <div className="AssignedEvents">
      <ul>
        {assignedEvents.map((event, index) => (
          <li key={index}>
            {event}{' '}
            <MDBBtn color='link' size='sm' onClick={() => deleteEvent(index)}>
              Delete
            </MDBBtn>
          </li>
        ))}
      </ul>
      </div>
      <div className="LogOutButton">
      <LogoutButton /> 
      </div>
    </div>
  );
}

export default AdminDashboard;





