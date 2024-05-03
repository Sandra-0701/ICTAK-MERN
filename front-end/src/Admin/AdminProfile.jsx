import React from 'react'
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../admincomponents/Sidebar';
import Content from '../admincomponents/Content';
import MyProfile from '../admincomponents/MyProfile';


const AdminProfile = () => {
  return (
   <div>
   <AdminNavbar/>
    <div className='dashboard'>
      <Sidebar/>
     <div className='dashboard--content'>
      <Content/>
      <MyProfile/>
     </div>
    </div>
    </div>
  )
}

export default AdminProfile