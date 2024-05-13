import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress } from '@mui/material';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import jwt_decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { Email: email, Password: password });
      setLoading(false);
      const { success, role, adminId, userId, message } = response.data;
      console.log(response.data)
      if (success) {
        if (role === 'Admin') {
          navigate('/admin');
        } else if (role === 'Mentor') {
          navigate(`/mentor/${userId}`);
        } else {
          setError('Invalid role');
        }
      } else {
        setError(message);
      }
    } catch (error) {
      setLoading(false);
      setError('Error logging in');
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 64px)', paddingBottom: '40px' }}>
        <Container maxWidth="xl" py={5}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Typography variant="h3" align="center" gutterBottom>Login</Typography>
              <form onSubmit={handleLogin}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                  sx={{ mt: 2 }}
                >
                  {loading ? <CircularProgress size={24} /> : 'Log in'}
                </Button>
                {error && <Typography variant="body1" color="error" align="center" mt={2}>{error}</Typography>}
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Login;
