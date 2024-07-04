import React from 'react'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-baseline px-4 py-2 justify-between'>
     
     <h1 className='text-2xl'>Tail-web</h1>
     <nav className='space-x-4'>
      <a className='s-link' href="">About</a>
      <a className='s-link'  href="">Contact</a>
     </nav>



    </header>
  )
}

export default Header