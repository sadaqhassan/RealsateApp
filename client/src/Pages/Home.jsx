import React from 'react'
import Banner from '../Components/Banner'
import Resents from '../Components/Resents'
import SlideImages from '../Components/SlideImages'

const Home = () => {
  return (
    <div className='mt-20'>
      <Banner/>
      <hr className='mt-4 mb-4 text-cyan-700' />
      <SlideImages/>
      <hr className='mt-4 mb-4 text-cyan-700' />
      <Resents/>
    </div>
  )
}

export default Home