import React from 'react'
import Login from '../Pages/Login'
import { ArrowBigRight } from 'lucide-react'

const Banner = () => {
  return (
    <div className='flex justify-between mx-20 flex-wrap items-center'>
      <div>
      <h1 className='text-start text-2xl md:text-5xl text-gray-700 font-bold mb-4'>Find your next perfect <br/>place with ease</h1>
      <button className='m-4 flex gap-2 mt-4 bg-cyan-600 p-2 text-white rounded items-center'>Get started <ArrowBigRight/></button>
      </div>
      <Login/>
    </div>
  )
}

export default Banner