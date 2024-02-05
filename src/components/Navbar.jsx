import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1 className='font-bold text-4xl text-orange-700 font-sans'>MovieMania🎥</h1>
      <ul>
          <Link to= '/'>Home</Link>
          <Link to= '/about'>About</Link>
          <Link to= '/contact'>Contact</Link>
          <Link to= '/services'>Services</Link>
      </ul>

    </nav>
  )
}

export default Navbar