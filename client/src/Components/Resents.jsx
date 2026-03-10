import React from 'react'
import SellCard from './SellCard'

const Resents = () => {
  return (
    <div className='mt-10 mb-5'>
      {/* //offers */}
      <div className='mt-10'>
        <h1 className='text-start my-5 text-2xl md:text-3xl font-medium'>
          Recent offers
        </h1>
        <SellCard/>
      </div>


    </div>
  )
}

export default Resents