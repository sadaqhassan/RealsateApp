import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
import Login from './Pages/Login'
import Houses from './Pages/Houses'

const App = () => {
  return (
    <div >
      <Nav/>

      <div className='px-10 mt-5'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/houses' element={<Houses/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App