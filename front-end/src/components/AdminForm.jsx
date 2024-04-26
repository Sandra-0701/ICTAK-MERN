import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminForm = (props) => {
  const navigate = useNavigate();

  const [mentor, setMentor] = useState(props.data);
  console.log("props.data", props.data);
  console.log("props.method", props.method);

  const [alertMessages, setAlertMessages] = useState({
    Name: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    ProjectTopic: '',
  });

  const inputHandler = (e) => {
    setMentor({ ...mentor, [e.target.name]: e.target.value });
    setAlertMessages({ ...alertMessages, [e.target.name]: '' });
  };

  const addPost = () => {
    const newAlertMessages = {};

    if (!mentor.Name.trim()) {
      newAlertMessages.Name = 'Name is required';
    }

    if (!mentor.Email.trim()) {
      newAlertMessages.Email = 'Email is required';
    }

    if (!mentor.PhoneNumber || !/^\+?\d{0,13}$/.test(mentor.PhoneNumber)) {
      newAlertMessages.PhoneNumber = 'Phone Number is required and should be a valid phone number';
    }

    if (!mentor.Password.trim()) {
      newAlertMessages.Password = 'Password is required';
    } else if (mentor.Password.trim().length < 5) {
      newAlertMessages.Password = 'Password should be at least 5 characters long';
    }

    if (!mentor.ProjectTopic.trim()) {
      newAlertMessages.ProjectTopic = 'Project Topic is required';
    }

    setAlertMessages(newAlertMessages);

    if (Object.keys(newAlertMessages).length > 0) {
      return;
    }

    if (props.method === "post") {
      axios
        .post('http://localhost:5000/api/addmentor', mentor)
        .then((res) => {
          alert(res.data.message);
          navigate('/mentors');
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (props.method === "put") {
      axios
        .put("http://localhost:5000/api/mentors/" + mentor._id, mentor)
        .then((res) => {
          alert(res.data.message);
          navigate('/mentors');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div style={{ marginLeft: '35%' }}>
      <Typography variant="h4" gutterBottom>
        {props.method === 'post' ? 'Add Mentor' : 'Update Mentor'}
      </Typography>
      <br />
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              style={{ width: '500px' }}
              name="Name"
              value={mentor.Name}
              onChange={inputHandler}
              error={!!alertMessages.Name}
              helperText={alertMessages.Name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              style={{ width: '500px' }}
              name="Email"
              value={mentor.Email}
              onChange={inputHandler}
              error={!!alertMessages.Email}
              helperText={alertMessages.Email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              variant="outlined"
              style={{ width: '500px' }}
              name="PhoneNumber"
              value={mentor.PhoneNumber}
              onChange={inputHandler}
              error={!!alertMessages.PhoneNumber}
              helperText={alertMessages.PhoneNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              style={{ width: '500px' }}
              name="Password"
              value={mentor.Password}
              onChange={inputHandler}
              error={!!alertMessages.Password}
              helperText={alertMessages.Password}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Project Topic"
              variant="outlined"
              style={{ width: '500px' }}
              multiline
              rows={3}
              name="ProjectTopic"
              value={mentor.ProjectTopic}
              onChange={inputHandler}
              error={!!alertMessages.ProjectTopic}
              helperText={alertMessages.ProjectTopic}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              style={{ width: '500px', height: '45px' }}
              onClick={addPost}
            >
              {/* {method === 'post' ? 'Add' : 'Update'} */}
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AdminForm;
