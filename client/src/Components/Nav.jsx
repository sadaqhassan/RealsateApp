import React, { useEffect } from 'react'
import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const [isOpen,setIsOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <nav>
      <div className='bg-gray-700 flex justify-between px-10 py-3  text-white text-sm'>
      <h1>Logo</h1>

      <div className='md:flex gap-3 items-center hidden '>
        <Link to='/'>
          Home
        </Link>
        <Link to='/about'>
          About
        </Link>
        <Link to='/'>
          Contect_me
        </Link>
      </div>

      <div className='flex gap-4'>
      <button className='bg-cyan-600 px-2 py-1 rounded' onClick={()=>navigate('/login')}>Login</button>
      <button className='md:hidden' onClick={()=>setIsOpen(!isOpen)}><MenuIcon/></button>
      </div>
    </div>

    {
      isOpen &&
      <div className='flex flex-col py-2 pl-5 text-white gap-3 md:hidden bg-gray-700'>
        <Link to='/'>
          Home
        </Link>
        <Link to='/'>
          About
        </Link>
        <Link to='/'>
          Contect_me
        </Link>
      </div>
    }
    </nav>
  )
}

export default Nav