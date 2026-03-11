import React, { useEffect, useState } from 'react'
import { DummyImges } from '../helper'
import { MoveLeft, MoveRight } from 'lucide-react'

const SlideImages = () => {
    const [indexImage,setIndexImage] = useState(0) 

    useEffect(()=>{
        if(indexImage >= DummyImges.length || indexImage < 0){
            setIndexImage(0)
        };
        
    },[indexImage])
return (
    <div>
        
        <div className=''>
            {
            
                    <div className='flex flex-wrap gap-10 justify-center items-center'>
                        <button  onClick={()=>{setIndexImage((prev)=>prev-1)}}><MoveLeft size={50}/></button>
                        <img className='max-w-8xl rounded-4xl h-96 object-cover' src={DummyImges[indexImage]?.image} alt="" />
                        <button  onClick={()=>{setIndexImage((prev)=>prev+1)}}><MoveRight size={50}/></button>
                    </div>
                
            }
        </div>
    </div>
  )
}

export default SlideImages