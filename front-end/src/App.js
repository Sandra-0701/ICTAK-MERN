import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Testimonial from './Pages/Testimonial'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import AdminDashboard from './Admin/AdminDashboard'

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

      </Routes>


    </div>
  )
}

export default App