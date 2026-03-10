import React, { useState } from 'react'

const Login = () => {
  const [state,setState] = useState("login")
  return (
    <div  className='flex flex-col justify-center items-center my-10'>
    <div className='bg-white p-10 rounded shadow-2xl '>
      <h1 className='text-center font-bold py-4 text-xl md:text-2xl'>
        {
          state === "login" ? "Login" : "Register"
        }
        </h1>
        <form action="" className='flex flex-col space-y-4'>
        {state === "register" && <input className='bg-gray-100 px-2 py-2 rounded' type="text" name='Username' placeholder='Username'/>}
          <input className='bg-gray-100 px-2 py-2 rounded' type="email" name='Email' placeholder='Email'/>
          <input className='bg-gray-100 px-2 py-2 rounded' type="password" name='Password' placeholder='Password'/>
          <button className='w-full bg-cyan-600 text-white px-2 py-2 rounded'>Login</button>
        </form>

        <div className='text-sm flex gap-2 mt-5'>
          <span>
            {
              state === "login" ? "Don't have an account ? " : "have an account ? "
            }
          </span>
          <button className='text-cyan-600 underline' onClick={()=>
            {
              state === "login" ? setState("register") : setState("login")
            }
          }>
            {
              state === "login" ? "Register " : "Login"
            }
          </button>
        </div>
      
    </div>
    </div>
  )
}

export default Login