import React from 'react'
import Banner from '../Components/Banner'
import Resents from '../Components/Resents'

const Home = () => {
  return (
    <div className='mt-20'>
      <Banner/>
      <hr className='mt-4 mb-4 text-cyan-700' />
      <Resents/>
    </div>
  )
}

export default Home