import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MentorDashboard from './Mentor/MentorDashboard';
import AddMentor from './Admin/AddMentor';
import MentorsList from './Admin/MentorsList';
import ReferenceMaterial from './Mentor/ReferenceMaterial';
import AdminProfile from './Admin/AdminProfile';
import AddSubmissions from './Pages/AddSubmissions';
import SubmissionList from './Mentor/SubmissionList';
import SubmissionView from './Mentor/SubmissionView';
import Projects from './Admin/Projects';

const App = () => {
  return (
    
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add' element={<AddSubmissions />} />

        {/* Protected Routes */}
        <Route path='/admin' element={<AdminProfile />} />
        <Route path='/addmentor' element={<AddMentor />} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/mentors' element={<MentorsList />} />
        <Route path='/reference-material' element={<ReferenceMaterial />} />
        <Route path='/mentor/:id' element={<MentorDashboard />} />
        <Route path='/submissions' element={<SubmissionList />} />
        <Route path='/viewsubmissions/:studentId' element={<SubmissionView />} />
      </Routes>
    
  );
}

export default App;
