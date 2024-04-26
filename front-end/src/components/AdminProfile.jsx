import React, { useState } from 'react';
import { Typography } from '@mui/material';

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Admin Name');
  const [email, setEmail] = useState('admin@gmail.com');
  const [role, setRole] = useState('Admin');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can add logic here to save the edited values to the server
  };

  return (
    <div className="admin-profile" style={{ display: "flex", gap: "15px", marginLeft: "8%" }}>
      <div className="profile-photo" style={{  width: "400px", height: "550px", padding: "20px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.4)" }}>
        <Typography variant='h4'>Profile</Typography>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7IvjHHgaPI3Q5HgC0_8y9vq8SBOEYmacsA&usqp=CAU" alt="Profile" style={{ height: "150px", width: "auto", margin: "20px auto" }} />
        <h2>Admin </h2>
        <p>Email: admin@gmail.com</p>
        <p>Role: Admin</p>
      </div>

      <div className="profile-details" style={{  width: "900px", height: "550px", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.4)" }}>
        <Typography variant='h4'>Profile Details</Typography><br></br>
        <div style={{ marginBottom: '10px' }}>
          <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 'bold' }}>Name:</Typography>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <Typography sx={{ fontSize: '16px' }}>{name}</Typography>
          )}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 'bold' }}>Email:</Typography>
          {isEditing ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          ) : (
            <Typography sx={{ fontSize: '16px' }}>{email}</Typography>
          )}
        </div>
        <div style={{ marginBottom: '10px' }}>
          <Typography variant='h6' sx={{ fontSize: '18px', fontWeight: 'bold' }}>Role:</Typography>
          {isEditing ? (
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          ) : (
            <Typography sx={{ fontSize: '16px' }}>{role}</Typography>
          )}
        </div>
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
