import React from 'react'
import "../Assets/NavLogo.css"
import Logo from "../Assets/images/mainLogo.jpeg";

function Header() {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
        <ul className='pageOptions'>
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/movies">Movies</a>
            </li>
            <li>
                 <a href="/blog">Blog</a>
            </li>
      </ul>
      
    </div>
  )
}

export default Header
