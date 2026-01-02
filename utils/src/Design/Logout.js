import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Call backend logout API (optional)
    await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    localStorage.removeItem("token"); // remove token
    navigate("/login"); // redirect to login page
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
