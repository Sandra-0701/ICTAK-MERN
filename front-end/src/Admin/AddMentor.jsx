import React from 'react'
import AdminForm from '../components/AdminForm'
import AdminNavbar from '../components/AdminNavbar'

const AddMentor = () => {
  return (
    <div>
        <AdminNavbar/>
        <br></br>
        <AdminForm  method="post" data={{Name:" ", Email:" ", PhoneNumber:" ", Password:" ", ProjectTopic:" "}}   />
    </div>
  )
}

export default AddMentor