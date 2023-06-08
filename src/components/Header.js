import React from 'react'
import {Link} from "react-router-dom"
import "../Assets/NavLogo.css"
import Logo from "../Assets/images/mainLogo.jpeg";

function Header() {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
        <ul className='pageOptions'>
          <Link className='li' to="/">Home</Link>
          <Link className='li' to="/movies">Movies</Link>
          <Link className='li' to="/blog">Blog</Link>
      </ul>
      
    </div>
  )
}

export default Header
