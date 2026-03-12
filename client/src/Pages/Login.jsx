import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [state,setState] = useState("login")

  //getUserData
  const [inputData , setInputData] = useState("");

  const  handleChange = async (e) => {
    setInputData((prev)=>({
      ...prev,
      [e.target.name] : e.target.value
    }))
  }

  //submit
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(inputData)

    if(state === "login"){
      const res = await fetch("http://localhost:2000/api/user/login",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(inputData)
    })
    const data = await res.json();
    if(!data.success){
      return toast.error(data.message)
    }
    if(data.success){
      toast.success(data.message);
      navigate('/houses')
    }
    }else{
      const res = await fetch("http://localhost:2000/api/user/register",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(inputData)
    })
    const data = await res.json();
    if(!data.success){
      return toast.error(data.message)
    }
    if(data.success){
      toast.success(data.message);
      setState("login")
    }
    }
  }

  return (
    <div  className='flex flex-col justify-center items-center my-10'>
    <div className='bg-white p-10 rounded shadow-2xl '>
      <h1 className='text-center font-bold py-4 text-xl md:text-2xl'>
        {
          state === "login" ? "Login" : "Register"
        }
        </h1>
        <form onSubmit={handleSubmit} action="" className='flex flex-col space-y-4'>
        {state === "register" && <input o className='bg-gray-100 px-2 py-2 rounded' onChange={handleChange} type="text" name='Username' placeholder='Username'/>}
          <input  className='bg-gray-100 px-2 py-2 rounded' onChange={handleChange} type="email" name='Email' placeholder='Email'/>
          <input  className='bg-gray-100 px-2 py-2 rounded' onChange={handleChange} type="password" name='Password' placeholder='Password'/>
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