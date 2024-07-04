import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-baseline px-4 py-2 justify-between'>
     
     <h1 className='text-2xl'>Tail-web</h1>
     
     <nav className='space-x-4'>
      <NavLink to='/about-page' className='s-link' href="">About</NavLink>

      <NavLink to='/contact-page' className='s-link'  href="">Contact</NavLink>
     </nav>



    </header>
  )
}

export default Header