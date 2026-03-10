import React, { useEffect, useState } from 'react'
import { DummyImges } from '../helper'
import { MoveLeft, MoveRight } from 'lucide-react'

const SlideImages = () => {
    let [indexImage,setIndex] = useState(0) 

    useEffect(()=>{
        if(indexImage >= indexImage.length){
            setIndex(0)
        }
    },[])
return (
    <div>
        
        <div className=''>
            {
            
                    <div className='flex'>
                        <button><MoveLeft/></button>
                        <img src={DummyImges[indexImage]?.image} alt="" />
                        <button onClick={()=>{setIndex(indexImage+1)}}><MoveRight/></button>
                    </div>
                
            }
        </div>
    </div>
  )
}

export default SlideImages