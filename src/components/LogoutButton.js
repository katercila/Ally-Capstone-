// import React from "react";
// import { useNavigate } from "react-router-dom";

// function LogoutButton() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Perform log out logic here, for example clearing local storage or making an API request
//     // After successful log out, navigate to the login page or any other appropriate page
//     navigate("/signup");
//   };

//   return (
//     <main>
//       <div className="intro">
//         <button onClick={handleLogout}>Log out</button>
//       </div>
//     </main>
//   );
// }

// export default LogoutButton;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform log out logic here, for example clearing local storage or making an API request
    // After successful log out, navigate to the login page or any other appropriate page
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
