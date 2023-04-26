import React from "react";
import LogoutButton from "./LogoutButton";
// import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  return (
    <main>
      <div className="intro">
        <h1>Welcome user!</h1>
        <LogoutButton /> 
      </div>
    </main>
  );
}

export default AdminDashboard;