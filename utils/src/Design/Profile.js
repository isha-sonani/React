// import React, { useEffect, useState } from "react";
// import Navbar from "../Design/Navbar";
// import { useNavigate } from "react-router-dom";

// const Profile = () => {
//   const [users, setUsers] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [editUser, setEditUser] = useState(null);
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   // 🔐 decode token safely
// useEffect(() => {
//   if (!token) {
//     navigate("/login");
//     return;
//   }

//   try {
//     const decoded = JSON.parse(atob(token.split(".")[1]));
//     setLoggedInUser(decoded);
//   } catch (err) {
//     console.log("Token decode error");
//     navigate("/login");
//   }
// }, [token, navigate]);


//   // 📥 fetch users
//   useEffect(() => {
//     if (!token) return;

//     fetch("http://localhost:5000/api/auth/users", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => res.json())
//       .then((data) => setUsers(data || []))
//       .catch(() => setUsers([]));
//   }, [token]);

//   // ❌ delete user
//  const deleteUser = async (id) => {
//   if (!window.confirm("Are you sure?")) return;

//   const res = await fetch(
//     `http://localhost:5000/api/auth/users/${id}`,
//     {
//       method: "DELETE",
//       headers: { Authorization: `Bearer ${token}` },
//     }
//   );

//   const data = await res.json();

//   if (!res.ok) {
//     alert(data.message); // e.g. cannot delete yourself
//     return;
//   }

//   setUsers(users.filter((u) => u.id !== id));
// };


//   // ✏️ open modal
//   const openEditModal = (user) => {
//     setEditUser(user);
//     setShowModal(true);
//   };

//   // ✏️ handle change
//   const handleEditChange = (e) => {
//     setEditUser({ ...editUser, [e.target.name]: e.target.value });
//   };

//   // 💾 update user
//   const updateUser = async () => {
//     await fetch(`http://localhost:5000/api/auth/users/${editUser.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(editUser),
//     });

//     setUsers(
//       users.map((u) => (u.id === editUser.id ? editUser : u))
//     );

//     setShowModal(false);
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="container mt-4">
//         <h3>All Users</h3>

//         <table className="table table-bordered table-striped">
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.length ? (
//               users.map((user, index) => (
//                 <tr key={user.id}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>
//                     <button className="btn btn-info btn-sm me-2">
//                       View
//                     </button>
//                   {loggedInUser?.role === "manager" &&
//  loggedInUser.id !== user.id && (
//   <>
//     <button
//       className="btn btn-warning btn-sm me-2"
//       onClick={() => openEditModal(user)}
//     >
//       Edit
//     </button>

//     <button
//       className="btn btn-danger btn-sm"
//       onClick={() => deleteUser(user.id)}
//     >
//       Delete
//     </button>
//   </>
// )}

//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center">
//                   No users found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//         {/* MODAL */}
//         {showModal && editUser && (
//           <div className="modal fade show d-block" style={{ background: "#00000080" }}>
//             <div className="modal-dialog">
//               <div className="modal-content p-3">

//                 <h5>Edit User</h5>

//                 <input
//                   className="form-control my-2"
//                   name="name"
//                   value={editUser.name}
//                   onChange={handleEditChange}
//                 />

//                 <input
//                   className="form-control my-2"
//                   name="email"
//                   value={editUser.email}
//                   onChange={handleEditChange}
//                 />

//                 <select
//                   className="form-control my-2"
//                   name="role"
//                   value={editUser.role}
//                   onChange={handleEditChange}
//                 >
//                   <option value="user">User</option>
//                   <option value="manager">Manager</option>
//                 </select>

//                 <div className="text-end">
//                   <button
//                     className="btn btn-secondary me-2"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Cancel
//                   </button>
//                   <button className="btn btn-success" onClick={updateUser}>
//                     Save
//                   </button>
//                 </div>

//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Profile;




import React, { useEffect, useState } from "react";
import Navbar from "../Design/Navbar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 🔐 decode token
  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      setLoggedInUser(decoded);
    } catch (err) {
      navigate("/login");
    }
  }, [token, navigate]);

  // 📥 fetch all users & managers
  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:5000/api/auth/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data || []))
      .catch(() => setUsers([]));
  }, [token]);

  // ❌ DELETE USER
  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    const res = await fetch(
      `http://localhost:5000/api/auth/users/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    setUsers(users.filter((u) => u.id !== id));
  };

  // ✏️ OPEN EDIT MODAL
  const openEditModal = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  // ✏️ HANDLE CHANGE
  const handleEditChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  // 💾 UPDATE USER
  const updateUser = async () => {
    await fetch(
      `http://localhost:5000/api/auth/users/${editUser.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editUser),
      }
    );

    setUsers(
      users.map((u) =>
        u.id === editUser.id ? editUser : u
      )
    );

    setShowModal(false);
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3>All Users & Managers</h3>

        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.length ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>

                  <td>
                    {/* SABKO VIEW */}
                    <button className="btn btn-info btn-sm me-2">
                      View
                    </button>

                    {/* JIS ROW ME MANAGER → 3 BUTTON */}
                    {user.role === "manager" && (
                      <>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() =>
                            openEditModal(user)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() =>
                            deleteUser(user.id)
                          }
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* ===== EDIT MODAL ===== */}
        {showModal && editUser && (
          <div
            className="modal fade show d-block"
            style={{ background: "#00000080" }}
          >
            <div className="modal-dialog">
              <div className="modal-content p-3">
                <h5>Edit User</h5>

                <input
                  className="form-control my-2"
                  name="name"
                  value={editUser.name}
                  onChange={handleEditChange}
                />

                <input
                  className="form-control my-2"
                  name="email"
                  value={editUser.email}
                  onChange={handleEditChange}
                />

                <select
                  className="form-control my-2"
                  name="role"
                  value={editUser.role}
                  onChange={handleEditChange}
                >
                  <option value="user">User</option>
                  <option value="manager">
                    Manager
                  </option>
                </select>

                <div className="text-end">
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() =>
                      setShowModal(false)
                    }
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-success"
                    onClick={updateUser}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;



