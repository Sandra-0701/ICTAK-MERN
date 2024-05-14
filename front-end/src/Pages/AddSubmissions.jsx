import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import {
  Container,
  Grid,
  Typography,
  Breadcrumbs,
  Link,
  Button,
  Box,
  MenuItem,
} from "@mui/material";
import Navbar from "../components/Navbar";

const AddSubmissions = () => {
  const navigate = useNavigate();

  const [submission, setSubmission] = useState({
    Name: "",
    Batch: "",
    Email: "",
    SubmissionLink: "",
  });

  const [alertMessages, setAlertMessages] = useState({
    Name: "",
    Batch: "",
    Email: "",
    SubmissionLink: "",
  });

  const validateInput = (name, value) => {
    let error = "";

    switch (name) {
      case "Name":
        if (!value) {
          error = "Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Name should only contain letters and spaces";
        }
        break;
      case "Batch":
        if (!value) {
          error = "Batch is required";
        }
        break;
      case "Email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "SubmissionLink":
        if (!value) {
          error = "Submission Link is required";
        } else if (
          !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
            value
          )
        ) {
          error = "Invalid URL";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);

    setSubmission({ ...submission, [name]: value });
    setAlertMessages({ ...alertMessages, [name]: error });
  };

  const addPost = () => {
    // Check if any field is empty
    const isAnyFieldEmpty = Object.values(submission).some((value) => !value);

    if (isAnyFieldEmpty) {
      // If any field is empty, display an alert message
      alert("Please fill all the required fields");
      return;
    }

    axios
      .post("http://localhost:5000/api/student/newsubmission", {
        Name: submission.Name,
        Batch: submission.Batch,
        Email: submission.Email,
        SubmissionLink: submission.SubmissionLink,
      })
      .then((res) => {
        alert(res.data.message);
        // navigate('/submissions');
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div
        style={{
          margin: "0 auto",
          width: "50%",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Add Student Submission
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                style={{ width: "100%" }}
                name="Name"
                value={submission.Name}
                onChange={inputHandler}
                error={!!alertMessages.Name}
                helperText={alertMessages.Name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="Batch"
                variant="outlined"
                style={{ width: "100%" }}
                name="Batch"
                value={submission.Batch}
                onChange={inputHandler}
                error={!!alertMessages.Batch}
                helperText={alertMessages.Batch}
              >
                <MenuItem value="">Select Batch</MenuItem>
                <MenuItem value="KKEM March CSA">KKEM March CSA</MenuItem>
                <MenuItem value="KKEM March DSA">KKEM March DSA</MenuItem>
                <MenuItem value="KKEM March MLAI">KKEM March MLAI</MenuItem>
                <MenuItem value="KKEM March FSD">KKEM March FSD</MenuItem>
                <MenuItem value="KKEM March ST">KKEM March ST</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                style={{ width: "100%" }}
                name="Email"
                value={submission.Email}
                onChange={inputHandler}
                error={!!alertMessages.Email}
                helperText={alertMessages.Email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Submission Link"
                variant="outlined"
                style={{ width: "100%" }}
                name="SubmissionLink"
                value={submission.SubmissionLink}
                onChange={inputHandler}
                error={!!alertMessages.SubmissionLink}
                helperText={alertMessages.SubmissionLink}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
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