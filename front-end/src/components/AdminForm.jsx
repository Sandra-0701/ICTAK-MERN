import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

const AdminForm = (props) => {
  const navigate = useNavigate();

  const [mentor, setMentor] = useState({
    Name: '',
    Email: '',
    PhoneNumber: '',
    Password: '',
    ProjectTopics: []
  });

  const [alertMessages, setAlertMessages] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    ProjectTopics: "",
  });

  useEffect(() => {
    if (props.method === "put" && props.data) {
      // If updating, set the mentor data to the form fields
      setMentor(props.data);
    }
  }, [props.data, props.method]);

  const inputHandler = (e) => {
    setMentor({ ...mentor, [e.target.name]: e.target.value });
    setAlertMessages({ ...alertMessages, [e.target.name]: "" });
  };
  const addPost = () => {
    const newAlertMessages = {};
  
    if (!mentor.Name.trim()) {
      newAlertMessages.Name = 'Name is required';
    }
  
    if (!mentor.Email.trim()) {
      newAlertMessages.Email = 'Email is required';
    }
  
    if (!mentor.PhoneNumber || !/^[0-9]{10}$/.test(mentor.PhoneNumber)) {
      newAlertMessages.PhoneNumber = 'Phone Number is required and should be a valid phone number';
    }
  
    if (!mentor.Password.trim()) {
      newAlertMessages.Password = 'Password is required';
    } else if (mentor.Password.trim().length < 8) {
      newAlertMessages.Password = 'Password should be at least 8 characters long';
    }
  
    if (!mentor.ProjectTopics || mentor.ProjectTopics.length === 0) {
      newAlertMessages.ProjectTopics = 'At least one Project Topic is required';
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
    } if (props.method === "put") {
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
    <div style={{ margin: "0 auto", width: "34%" ,marginLeft:"30%", backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '32px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',}}>
    <Typography variant="h4" gutterBottom style={{  color: 'black', height: '50px', borderRadius: '5px', paddingTop: '5px', textAlign:"center" }} >
      {props.method === "post" ? "ADD MENTOR" : "UPDATE MENTOR"}
    </Typography>

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
            <FormControl style={{ width: '500px' }} >
              <InputLabel id="demo-simple-select-label">Project Topics</InputLabel>
              <Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  multiple
  value={mentor.ProjectTopics}
  onChange={inputHandler}
  name="ProjectTopics"
  error={!!alertMessages.ProjectTopics}
  helperText={alertMessages.ProjectTopics}
  renderValue={(selected) => selected.join(', ')}
>
  {props.topics && props.topics.map((topic) => (
    <MenuItem 
      key={topic._id} 
      value={topic.topic}
      // Check if the mentor has this project topic selected
      selected={mentor.ProjectTopics.includes(topic.topic)}
    >
      {topic.topic}
    </MenuItem>
  ))}
</Select>
            </FormControl>
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
  );
};

export default AdminForm;























// import React, { useState } from "react";
// import { Button, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';

// const AdminForm = (props) => {
//   const navigate = useNavigate();

//   const [mentor, setMentor] = useState({
//     Name: '',
//     Email: '',
//     PhoneNumber: '',
//     Password: '',
//     ProjectTopics: [] // Change to array
// });

//   const [alertMessages, setAlertMessages] = useState({
//     Name: "",
//     Email: "",
//     PhoneNumber: "",
//     Password: "",
//     ProjectTopics: "",
//   });

//   const inputHandler = (e) => {
//     setMentor({ ...mentor, [e.target.name]: e.target.value });
//     setAlertMessages({ ...alertMessages, [e.target.name]: "" });
//   };

//   const addPost = () => {
//     const newAlertMessages = {};
  
//     if (!mentor.Name.trim()) {
//       newAlertMessages.Name = 'Name is required';
//     }
  
//     if (!mentor.Email.trim()) {
//       newAlertMessages.Email = 'Email is required';
//     }
  
//     if (!mentor.PhoneNumber || !/^[0-9]{10}$/.test(mentor.PhoneNumber)) {
//       newAlertMessages.PhoneNumber = 'Phone Number is required and should be a valid phone number';
//     }
  
//     if (!mentor.Password.trim()) {
//       newAlertMessages.Password = 'Password is required';
//     } else if (mentor.Password.trim().length < 5) {
//       newAlertMessages.Password = 'Password should be at least 5 characters long';
//     }
  
//     if (!mentor.ProjectTopics || mentor.ProjectTopics.length === 0) {
//       newAlertMessages.ProjectTopics = 'At least one Project Topic is required';
//     }
  
//     setAlertMessages(newAlertMessages);
  
//     if (Object.keys(newAlertMessages).length > 0) {
//       return;
//     }
  
//     if (props.method === "post") {
//       axios
//         .post('http://localhost:5000/api/addmentor', mentor)
//         .then((res) => {
//           alert(res.data.message);
//           navigate('/mentors');
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else if (props.method === "put") {
//       axios
//         .put("http://localhost:5000/api/mentors/" + mentor._id, mentor)
//         .then((res) => {
//           alert(res.data.message);
//           navigate('/mentors');
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };
  
//   return (
//     <div style={{ margin: "0 auto", width: "50%" ,marginLeft:"35%"}}>
//       <Typography variant="h4" gutterBottom>
//         {props.method === "post" ? "Add Mentor" : "Update Mentor"}
//       </Typography>
//       <form>
//       <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               label="Name"
//               variant="outlined"
//               style={{ width: '500px' }}
//               name="Name"
//               value={mentor.Name}
//               onChange={inputHandler}
//               error={!!alertMessages.Name}
//               helperText={alertMessages.Name}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Email"
//               variant="outlined"
//               style={{ width: '500px' }}
//               name="Email"
//               value={mentor.Email}
//               onChange={inputHandler}
//               error={!!alertMessages.Email}
//               helperText={alertMessages.Email}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Phone Number"
//               variant="outlined"
//               style={{ width: '500px' }}
//               name="PhoneNumber"
//               value={mentor.PhoneNumber}
//               onChange={inputHandler}
//               error={!!alertMessages.PhoneNumber}
//               helperText={alertMessages.PhoneNumber}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               label="Password"
//               variant="outlined"
//               style={{ width: '500px' }}
//               name="Password"
//               value={mentor.Password}
//               onChange={inputHandler}
//               error={!!alertMessages.Password}
//               helperText={alertMessages.Password}
//             />
//           </Grid>
//           <Grid item xs={12}>
//     <FormControl style={{ width: '500px' }} >
//         <InputLabel id="demo-simple-select-label">Project Topics</InputLabel>
//         <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             multiple
//             value={mentor.ProjectTopics || []}
//             onChange={inputHandler}
//             name="ProjectTopics"
//             error={!!alertMessages.ProjectTopics}
//             helperText={alertMessages.ProjectTopics}
//             renderValue={(selected) => selected.join(', ')}
//         >
//             {props.topics && props.topics.map((topic) => (
//                 <MenuItem key={topic._id} value={topic.topic}>
//                     {topic.topic}
//                 </MenuItem>
//             ))}
//         </Select>
//     </FormControl>
// </Grid>
//           <Grid item xs={12}>
//             <Button
//               type="button"
//               variant="contained"
//               color="primary"
//               style={{ width: '500px' }}
//               onClick={addPost}
//             >
//               SUBMIT
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// };

// export default AdminForm;