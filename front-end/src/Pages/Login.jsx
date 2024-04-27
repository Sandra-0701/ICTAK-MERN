import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      const { success, role, adminId, mentorId, message } = response.data;
      if (success) {
        if (role === 'Admin') {
          navigate('/admin');
        } else if (role === 'Mentor') {
          navigate(`/mentor/${mentorId}`);
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
      <Spinner />
      <Navbar />
      {/* Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">Login</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a className="text-white" href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Login
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Login Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-6 col-md-8">
              <form onSubmit={handleLogin}>
                <div className="form-floating mb-4">
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-3" disabled={loading}>{loading ? 'Logging in...' : 'Log in'}</button>
                {error && <p className="text-danger mt-2">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Login End */}

      <Footer/>
    </>
  );
};

export default Login;
