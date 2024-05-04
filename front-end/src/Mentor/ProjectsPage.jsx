// import React, { useState, useEffect } from 'react';
// import MentorNavbar from '../components/MentorNavbar';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const ProjectsPage = () => {
//     const [mentor, setMentor] = useState(null);
//     const { mentorId } = useParams();

//     useEffect(() => {
//         // Fetch mentor data including allocated projects
//         axios.get(`http://localhost:5000/api/mentors/${mentorId}`)
//             .then(response => {
//                 setMentor(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching mentor data:', error);
//             });
//     }, [mentorId]);

//     return (
//         <div>
//             <MentorNavbar/>
//             <div>
//                 <h1>Projects</h1>
//                 {mentor && (
//                     <div>
//                         <h2>{mentor.Name}</h2>
//                         <p>Email: {mentor.Email}</p>
//                         <p>Phone Number: {mentor.PhoneNumber}</p>
//                         <h3>Allocated Projects:</h3>
//                         <ul>
//                             {mentor.ProjectTopics.map((project, index) => (
//                                 <li key={index}>{project}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProjectsPage;
