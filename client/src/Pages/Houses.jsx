import React from 'react'
import { demoResentOffersData } from '../helper.js'
import SellCard from '../Components/SellCard.jsx'

const Houses = () => {
  return (
    <div className='mt-10'>
        <div className='flex flex-col'>
            <h1 className='text-2xl md:text-3xl font-medium'>Available Houses</h1>
            <div className='bg-green-500 w-20 h-1'></div>
        </div>

        <div className='md:grid flex grid-cols-2 mt-10 mb-5  flex-wrap md:grid-cols-4 md:space-x-0 space-y-4  space-x-5'>
        {
          demoResentOffersData.map((home,index)=>(
            <SellCard home={home} key={index}/>
          ))
        } 
      </div>
    </div>
  )
}

export default Houses