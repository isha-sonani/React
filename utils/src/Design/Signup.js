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

  const handleCancel = () => {
  setFormData({ firstName: "", lastName: "", email: "", password: "", role: "" });
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
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <input className="form-control mb-2"  name="lastName"  placeholder="Last name"  value={formData.lastName}  onChange={handleChange}/>
            </div>
          </div>

          <input className="form-control mb-2"  type="email"  name="email"  placeholder="Email"  value={formData.email}  onChange={handleChange}/>

          <input className="form-control mb-2"  type="password"  name="password"  placeholder="Password"  value={formData.password}  onChange={handleChange}/>

          <select className="form-select mb-3"  name="role"  value={formData.role}  onChange={handleChange}>
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="manager">Manager</option>
          </select>

          <button className="btn btn-primary w-100">Signup</button><br /><br />
          <button type="button" className="btn btn-success w-100"onClick={handleCancel}>Cancel </button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
