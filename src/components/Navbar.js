import React from 'react'
import { Link } from "react-router-dom";
import '../styling/Navbar.css'


export default function Navbar() {
  return (
    <div className='Navbar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/maps">Maps</Link></li>

        </ul>
    </div>
  )
}
