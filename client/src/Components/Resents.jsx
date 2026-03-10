import React from 'react'
import SellCard from './SellCard'
import { demoResentOffersData } from '../helper'

const Resents = () => {
  return (
    <div className='mt-10 mb-5'>
      {/* //offers */}
      <div className='mt-10'>
        <h1 className='text-start my-1 text-lg font-bold text-green-600'>
          Recent offers
        </h1>
        <div className='bg-green-600 rounded-4xl w-20 h-1'></div>

      <div className='md:grid flex grid-cols-2  flex-wrap md:grid-cols-4 md:space-x-0 space-y-4  space-x-5'>
        {
          demoResentOffersData.map((home,index)=>(
            <SellCard home={home} key={index}/>
          ))
        } 
      </div>
      </div>


          {/* //offers for sale */}
      <div className='my-20'>
        <h1 className='text-start my-1 text-lg font-bold text-green-600'>
          Recent offers for Sale
        </h1>
        <div className='bg-green-600 rounded-4xl w-20 h-1'></div>

      <div className='md:grid flex grid-cols-2  flex-wrap md:grid-cols-4 md:space-x-0 space-y-4  space-x-5'>
        {
          demoResentOffersData.map((home,index)=>(
            <SellCard home={home} key={index}/>
          ))
        } 
      </div>
      </div>

         {/* //offers for rent */}
      <div className='my-20'>
        <h1 className='text-start my-1 text-lg font-bold text-green-600'>
          Recent offers for Rent
        </h1>
        
        <div className='bg-green-600 rounded-4xl w-20 h-1'></div>
      <div className='md:grid flex grid-cols-2  flex-wrap md:grid-cols-4 md:space-x-0 space-y-4  space-x-5'>
        {
          demoResentOffersData.map((home,index)=>(
            <SellCard home={home} key={index}/>
          ))
        } 
      </div>
      </div>


    </div>
  )
}

export default Resents