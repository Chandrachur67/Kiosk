import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <div>
      <ul>
        <li className='sidebar_items'>
          <Link to="/profile">Profile</Link>
        </li>
        <li className='sidebar_items'>
          <Link to="/diagnosis">Diagnosis</Link>
        </li>
        <li className='sidebar_items'>
          <Link to="/profile">Consult a Doctor</Link>
        </li>
        <li className='sidebar_items'>
          <Link to="/profile">Download e-prescription</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar