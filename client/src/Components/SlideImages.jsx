import React from 'react'
import { DummyImges } from '../helper'
import { MoveLeft } from 'lucide-react'

const SlideImages = () => {
  return (
    <div>
        
        <div className=''>
            {
                DummyImges.map((image,index)=>(
                    <div className='flex'>
                        <button><MoveLeft/></button>
                        <img src="" alt="" />
                        <button><MoveRi/></button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SlideImages