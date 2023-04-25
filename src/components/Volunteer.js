import React from 'react';
import "../styling/Volunteer.css";


const Volunteer = () => {
    const volunteerList = [
      {
        id: 1,
        title: 'Tutoring',
        description: 'Help students with homework and study for tests.',
        imageUrl: '/images/tutoring.jpg',
      },
      {
        id: 2,
        title: 'Event Planning',
        description: 'Assist with organizing and coordinating events.',
        imageUrl: '/images/event-planning.jpg',
      },
      {
        id: 3,
        title: 'Fundraising',
        description: 'Help with raising funds for our organization.',
        imageUrl: '/images/fundraising.jpg',
      },
    ];
  
    return (
      <div>
        <h1>Volunteer Page</h1>
        <p>Thank you for your interest in volunteering! Please see our current volunteer opportunities below:</p>
        <ul>
          {volunteerList.map(volunteer => (
            <li key={volunteer.id}>
              <div className="volunteer-item">
                <img src={volunteer.imageUrl} alt={volunteer.title} />
                <div className="volunteer-details">
                  <h2>{volunteer.title}</h2>
                  <p>{volunteer.description}</p>
                  <button>Sign Up</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Volunteer;