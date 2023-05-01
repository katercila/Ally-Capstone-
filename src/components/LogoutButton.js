import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signup');
  };

  return (
    <main>
      <div className="intro">
        <MDBBtn onClick={handleLogout}>Log out</MDBBtn>
      </div>
    </main>
  );
}

export default LogoutButton;
