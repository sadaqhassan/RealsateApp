import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div >
      <Nav/>

      <div className='px-10 mt-5'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App