import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import AdminForm from "./AdminForm";

const MentorDisplay = () => {
  const [mentor, setMentor] = useState([]);
  const [up, setUp] = useState(false);
  const [singleVal, setSingleVal] = useState([]);

  //get employees

  useEffect(() => {
    axios.get("http://localhost:5000/api/mentors").then((res) => {
      console.log(res.data);
      setMentor(res.data);
    });
  }, []);

  //delete employee

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/remove/${id}`)
      .then((response) => {
        alert(response.data.message);
        setMentor((prevMentor) =>
          prevMentor.filter((mentor) => mentor._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  // update employee

  const updateVal = (item) => {
    console.log(item);
    setUp(true);
    setSingleVal(item);
  };

  let FinalJSX = (
    <div>
      <br></br>
      <Typography
        variant="h4"
        style={{
          //  marginLeft: '25%',
          textAlign: "center",
          color: "darkblue",
          fontFamily: "Times New Roman",
          textDecoration: "underline",
        }}
      >
        MENTOR INFO
      </Typography>
      <br></br>
      <TableContainer component={Paper} style={{ alignContent: "center" }}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          style={{
            width: "1000px",
            marginLeft: "280px",
            border: "1px solid blue",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Name
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Email
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Phone Number
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Password
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}>
                Project Topic
              </TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}></TableCell>
              <TableCell style={{ backgroundColor: "lightblue" }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mentor.map((item, index) => (
              <TableRow
                style={{
                  backgroundColor: index % 2 === 0 ? "#f0f0f0" : "inherit",
                }}
                key={index}
              >
                <TableCell>{item.Name}</TableCell>
                <TableCell>{item.Email}</TableCell>
                <TableCell>{item.PhoneNumber}</TableCell>
                <TableCell>{item.Password}</TableCell>
                <TableCell>{item.ProjectTopic}</TableCell>
                <TableCell>
                  <Button
                    style={{ backgroundColor: "lightblue", color: "black" }}
                    onClick={() => updateVal(item)}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    style={{ backgroundColor: "pink", color: "black" }}
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  if (up) FinalJSX = <AdminForm method="put" data={singleVal} />
  return (
    FinalJSX
  );
};

export default MentorDisplay;
