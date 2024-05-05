import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const SubmissionList = () => {
  const [sub, setSubmission] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/student/submissions").then((res) => {
      setSubmission(res.data);
    }).catch((error) => {
      console.error('Error fetching submissions:', error);
    });
  }, []);



  return (
    <div>
      <br></br>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          color: "darkblue",
          fontFamily: "Times New Roman",
          textDecoration: "underline",
        }}
      >
        SUBMISSION LIST
      </Typography>
      <br></br>
      <TableContainer component={Paper} style={{ alignContent: "center" }}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          style={{
            width: "800px",
            marginLeft: "350px",
            border: "1px solid blue",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "lightblue" }}>Serial Number</TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>Name</TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>Batch</TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>Email</TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>Evaluation Status</TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sub.map((item, index) => (
              <TableRow
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0f0f0" : "inherit",
                }}
                key={index}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.Name}</TableCell>
                <TableCell>{item.Batch}</TableCell>
                <TableCell>{item.Email}</TableCell>
                <TableCell>{item.EvaluationStatus}</TableCell>
                <TableCell>
                  <Button
                    style={{ backgroundColor: "lightblue", color: "black" }}
                    // onClick={() => viewSubmission(item.SubmissionLink)}
                  >
                    <Link to={'/viewsubmissions'}>VIEW</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default SubmissionList;
