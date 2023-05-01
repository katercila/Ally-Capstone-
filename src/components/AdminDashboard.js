import React, { useState, useEffect } from 'react';
import '../styling/AdminDashboard.css';
import LogoutButton from "./LogoutButton";

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the data from your SQL database using an API call
    fetch('http://localhost:3000/api/capstone')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th className="user-table__header">Email</th>
          <th className="user-table__header">First Name</th>
          <th className="user-table__header">Last Name</th>
          <th className="user-table__header">City</th>
          <th className="user-table__header">State</th>
          <th className="user-table__header">Password</th>
          <th className="user-table__header">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.slice(4).map(user => (
          <tr key={user.id}>
            <td className="user-table__data">{user.email}</td>
            <td className="user-table__data">{user.first_name}</td>
            <td className="user-table__data">{user.last_name}</td>
            <td className="user-table__data">{user.city}</td>
            <td className="user-table__data">{user.state}</td>
            <td className="user-table__data">{user.password}</td>
            <td className="user-table__data">{user.role}</td>
          </tr>
        ))}
      </tbody>
      <div className="logout-button">
        <LogoutButton />
      </div>
    </table>
    
  );
  
}

export default AdminDashboard;











