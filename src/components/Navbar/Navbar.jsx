import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import profile_img from '../../assets/profile_img.png'
import bell_icon from '../../assets/bell_icon.svg'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () =>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    })
  }, [])
  
  return (
    <div ref={navRef} className='navbar'> 
      <div className="navbar-left">
        <img src={logo}></img>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} className='icons'></img>
        <p>Children</p>
        <img src={bell_icon} className='icons'></img>
        <div className="navbar-profile">
          <img src={profile_img} className='profile'></img>
          <img src={caret_icon}></img>
          <div className='dropdown'>
            <p onClick={() => {logout()}}>Sign Out of Netmirror</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
