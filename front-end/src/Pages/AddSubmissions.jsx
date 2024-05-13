import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Container, Grid, Typography, Breadcrumbs, Link, Button, Box } from '@mui/material';
import Navbar from "../components/Navbar";


const AddSubmissions = () => {
  const navigate = useNavigate();

  const [submission, setSubmission] = useState({
    Name: "",
    Batch: "",
    Email: "",
    SubmissionLink: ""
  });

  const [alertMessages, setAlertMessages] = useState({
    Name: "",
    Batch: "",
    Email: "",
    SubmissionLink: ""
  });

  const inputHandler = (e) => {
    console.log("Current submission state:", submission);
    console.log("Current alertMessages state:", alertMessages);
  
    setSubmission({ ...submission, [e.target.name]: e.target.value });
    setAlertMessages({ ...alertMessages, [e.target.name]: "" });
  
    console.log("Updated submission state:", submission);
    console.log("Updated alertMessages state:", alertMessages);
  };
  
  const addPost = () => {
    axios
      .post('http://localhost:5000/api/student/newsubmission', {
        Name: submission.Name,
        Batch: submission.Batch,
        Email: submission.Email,
        SubmissionLink: submission.SubmissionLink
      })
      .then((res) => {
        alert(res.data.message);
        // navigate('/submissions');
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };
  
    


  return (
<>
<Navbar/>

<br></br><br></br>
    <div style={{ margin: "0 auto", width: "50%", marginLeft: "35%" }}>
       
      <Typography variant="h4" gutterBottom>
        Add Student Submission
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              style={{ width: '500px' }}
              name="Name"
              // value={submission.name}
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Batch"
              variant="outlined"
              style={{ width: '500px' }}
              name="Batch"
              // value={submission.batch}
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              style={{ width: '500px' }}
              name="Email"
              // value={submission.projectTopic}
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Submission Link"
              variant="outlined"
              style={{ width: '500px' }}
              name="SubmissionLink"
              // value={submission.submissionLink}
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="button"
              variant="contained"
              color="primary"
              style={{ width: '500px' }}
              onClick={addPost}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
    </>
  );
};

export default AddSubmissions;
