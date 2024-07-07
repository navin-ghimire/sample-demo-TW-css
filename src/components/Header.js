import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-end px-4 py-2 justify-between'>
     
     <h1 className='text-3xl'>Tail-web</h1>
     
     <nav>
      <NavLink to='/about-page' className={(e) => {
        return e.isActive ? 'hover:bg-white hover:text-black px-2 py-2 text-pink-900' : 'hover:bg-white hover:text-black px-2 py-2';
        }} href="">About</NavLink>

      <NavLink to='/contact-page' className={(a) => {
        return a.isActive ? 'hover:bg-yellow-300 hover:text-red-800 px-2 py-2 text-pink-900' : 'hover:bg-white hover:text-black px-2 py-2';
        }}  href="">Contact</NavLink>
     </nav>



    </header>
  )
}

export default Header