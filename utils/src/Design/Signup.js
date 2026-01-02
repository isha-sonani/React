// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     role: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Signup successful");
//         navigate("/login");
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       alert("Server error");
//     }
//   };

//   return (
//     <div style={{ width: "300px", margin: "100px auto" }}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input  type="text"  name="firstName"  placeholder="First Name"  value={formData.firstName}  onChange={handleChange}/>
//         <br /><br />
//         <input  type="text"  name="lastName"  placeholder="Last Name"  value={formData.lastName}  onChange={handleChange}/>
//         <br /><br />
//         <input  type="email"  name="email"  placeholder="Email"  value={formData.email}  onChange={handleChange}/>
//         <br /><br />
//         <input  type="password"  name="password" placeholder="Password"  value={formData.password}  onChange={handleChange}/>
//         <br /><br />
//         <select name="role" value={formData.role} onChange={handleChange}>
//           <option value="">Select Role</option>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//         <br /><br />
//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;





import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "420px" }}>
        <h3 className="text-center mb-3">Create Account</h3>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input className="form-control mb-2"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input className="form-control mb-2"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
              />
            </div>
          </div>

          <input className="form-control mb-2"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input className="form-control mb-2"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <select className="form-select mb-3"
            name="role"
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Manager</option>
          </select>

          <button className="btn btn-primary w-100">Signup</button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
