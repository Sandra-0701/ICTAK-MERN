import React, { useState, useEffect } from "react";
import MentorNavbar from "../components/MentorNavbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MentorDashboard = () => {
  const [mentor, setMentor] = useState(null);
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    // Fetch all details of the mentor
    axios
      .get(`http://localhost:5000/api/mentors/${id}`)
      .then((response) => {
        setMentor(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching mentor data:", error);
      });
  }, [id]);

  return (
    <>
      <MentorNavbar />
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "30px",
          gridTemplateColumns: "1fr 2fr",
        }}
      >
        <div
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        >
          <TableContainer
            component={Paper}
            style={{
              padding: "10px",
              border: "1px solid #e3e3cf",
              borderRadius: "5px",
              backgroundColor: "#e3e3cf",
              marginBottom: "20px",
            }}
          >
            <Table style={{ width: "100%" }}>
              <TableRow>
                <TableCell style={{ fontSize: "50px" }}>
                  Welcome, {mentor?.Name} !!!
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
    
          <TableContainer
            component={Paper}
            style={{
              padding: "10px",
              border: "1px solid #e3e3cf",
              borderRadius: "5px",
              backgroundColor: "#e3e3cf",
              marginBottom: "20px",
            }}
          >
            <Table style={{ width: "100%" }}>
              <TableRow>
                <TableCell style={{ fontSize: "40px" }}>Profile</TableCell>
              </TableRow>
              <TableContainer
                component={Paper}
                style={{
                  padding: "10px",
                  border: "1px solid #06bccc",
                  borderRadius: "5px",
                  backgroundColor: "#06bccc",
                  marginBottom: "20px",
                }}
              >
                <Table style={{ width: "100%" }}>
                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>Name:</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                      {mentor?.Name}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>Email:</TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                      {mentor?.Email}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>
                      Phone Number:
                    </TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                      {mentor?.PhoneNumber}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ fontSize: "20px" }}>
                      Alloted Projects:
                    </TableCell>
                    <TableCell style={{ fontSize: "20px" }}>
                    <Button
                    style={{ backgroundColor: "white", color: "black" }}
                   
                  >
                    <Link to={'#'}>CLICK HERE</Link>
                  </Button>
                    </TableCell>
                  </TableRow>

                </Table>
              </TableContainer>
            </Table>
          </TableContainer>
        </div>
        <div>
          <h2>Allotted Projects</h2>
          <br></br>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {mentor &&
              mentor.ProjectTopics.map((project, index) => (
                <Card
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    backgroundColor:"#f5f5f5"
                  }}
                >
                  <CardContent style={{ flex: "1 0 auto" }}>
                    <h2>{project}</h2>
                  </CardContent>
                  <div style={{ alignSelf: "flex-end", marginBottom: "10px" }}>
                    <Button variant="contained">
                      <Link to={"/submissions"}>VIEW</Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorDashboard;