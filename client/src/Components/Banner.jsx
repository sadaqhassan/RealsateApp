import React from 'react'
import Login from '../Pages/Login'

const Banner = () => {
  return (
    <div className='flex justify-between mx-20 flex-wrap items-center'>
      <h1 className='text-start text-2xl md:text-5xl text-gray-700 font-bold'>Find your next perfect <br/>place with ease</h1>
      <Login/>
    </div>
  )
}

export default Banner