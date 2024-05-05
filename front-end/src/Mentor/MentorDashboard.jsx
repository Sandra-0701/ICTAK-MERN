import React, { useState, useEffect } from 'react';
import MentorNavbar from '../components/MentorNavbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Button } from '@mui/material';
import { Link } from "react-router-dom";

const MentorDashboard = () => {
    const [mentor, setMentor] = useState(null);
    const { mentorId } = useParams();

    useEffect(() => {
        // Fetch mentor data including allocated projects
        axios.get(`http://localhost:5000/api/mentors/${mentorId}`)
            .then(response => {
                setMentor(response.data);
            })
            .catch(error => {
                console.error('Error fetching mentor data:', error);
            });
    }, [mentorId]);

    return (
        <>
            <MentorNavbar />
            <div style={{ marginTop: '30px' }}>
                <h1>Allotted Projects</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {mentor && mentor.ProjectTopics.map((project, index) => (
                        <Card key={index} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <CardContent style={{ flex: '1 0 auto' }}>
                                <h2>{project}</h2>
                            </CardContent>
                            <div style={{ alignSelf: 'flex-end', marginBottom: '10px' }}>
                                <Button variant="contained" >
                                <Link to={'/submissions'}>VIEW</Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MentorDashboard;
