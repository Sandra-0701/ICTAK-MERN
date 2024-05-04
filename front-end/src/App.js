import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Testimonial from './Pages/Testimonial'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import AdminDashboard from './Admin/AdminDashboard'
import MentorDashboard from './Mentor/MentorDashboard'
import AddMentor from './Admin/AddMentor'
import MentorsList from './Admin/MentorsList'
import Projects from './Admin/Projects'
import ReferenceMaterial from './Mentor/ReferenceMaterial'
import AdminProfile from './Admin/AdminProfile'
import ProjectsPage from './Mentor/ProjectsPage'



const App = () => {
  return (
    <div>
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/testimonial' element={<Testimonial/>} />
        <Route path='/login' element={<Login/>} />
        
        {/* Admin */}
        <Route path='/admin' element={<AdminDashboard/>} />
        <Route path='/addmentor' element={<AddMentor/>} />
        <Route path='/mentors' element={<MentorsList/>} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/profile' element={<AdminProfile/>} />
        
        


        {/* Mentor */}
        
        <Route path='/reference-material' element={<ReferenceMaterial/>} />
        <Route path="/mentor/:mentorId" element={<MentorDashboard />} />
        <Route path='/projects/:mentorId' element={<ProjectsPage />} />


      </Routes>


    </div>
  )
}

export default App