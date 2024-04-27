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
<<<<<<< HEAD
import ReferenceMaterial from './Mentor/ReferenceMaterial'
=======
import AdminProfile from './Admin/AdminProfile'
>>>>>>> eb9c1db52088d849fea4227d8e2f44ddb5e06e09



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
        <Route path='/projects' element={<Projects/>} />
        <Route path='/profile' element={<AdminProfile/>} />
        
        


        {/* Mentor */}
        <Route path='/mentor' element={<MentorDashboard/>} />
        <Route path='/reference-material' element={<ReferenceMaterial/>} />

      </Routes>


    </div>
  )
}

export default App