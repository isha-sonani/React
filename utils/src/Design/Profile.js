// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const logout = async () => {
//     await fetch("http://localhost:5000/api/auth/logout", {
//       method: "POST",
//     });

//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <>
//       <div style={{ padding: "10px", background: "#eee" }}>
//         <h2>My App</h2>

//         {/* SHOW ONLY IF LOGGED IN */}
//         {token && <button onClick={logout}>Logout</button>}
//       </div>

//       <h3>Welcome to Profile Page</h3>
//     </>
//   );
// };

// export default Profile;



import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">Auth App</span>

        {token && (
          <button className="btn btn-outline-light" onClick={logout}>
            Logout
          </button>
        )}
      </nav>

      <div className="container mt-5">
        <div className="card shadow p-4 text-center">
          <h3>Welcome 🎉</h3>
          <p>You are logged in successfully.</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
