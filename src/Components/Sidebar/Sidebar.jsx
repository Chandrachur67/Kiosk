import React from 'react'
import { Link } from 'react-router-dom'


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
              Consult a Doctor
            </li>
            <li className='sidebar_items'>
              Download e-prescription
            </li>
        </ul>
    </div>
  )
}

export default Sidebar