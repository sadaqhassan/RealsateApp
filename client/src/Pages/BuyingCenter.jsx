import React, { useState } from 'react'

const BuyingCenter = () => {
    const [state,setState] = useState('evc')
  return (
    <div className='mt-10'>
        <div className='flex flex-col'>
            <h1 className='text-2xl md:text-3xl font-medium'>Buying center</h1>
            <div className='bg-green-500 w-20 h-1'></div>
        </div>

        <div className='mt-10 mb-4 flex flex-wrap justify-center mx-10 items-center gap-18'>
            <img className='w-96 h-96 rounded-2xl object-cover' src="data:image/jpeg;base64,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" alt="" />
        <div className='flex flex-wrap gap-4'>
            <div className='gap-4'>
                <h1 className='text-2xl border-b mb-4'>Houses_Name</h1>
                <p className='font-bold text-xs my-4'>$28k</p>
                <div className='flex-wrap gap-2 items-center'>
                    <div className='text-xs w-30 gap-4 border p-2 bg-cyan-200/20'>
                        <p>2 paths</p>
                        <p>2 pedrooms</p>
                        <p>2 kechen</p>
                    </div>
                </div>
                </div>
                <div>
                <h1 className='text-2xl border-b mb-4'>Methods</h1>
                <div className='flex gap-4 mt-5'>
                    <button className='bg-cyan-600/60 px-2 border-black border text-white rounded' onClick={()=>setState('evc')}>evc</button>
                    <button className='bg-cyan-600/60 px-2 border-black border text-white rounded' onClick={()=>setState('edahap')}>edahap</button>
                </div>
                {/* //wayMethodTobuy */}
            
                <div className='flex space-x-4'>
                    {
                        state === 'evc' ?
                        <div className='flex flex-col mt-4 items-start'>
                        <p className='text-xs font-bold'>evc</p>
                        <input className='bg-gray-200 py-2  px-2 rounded' type="number" placeholder='613170796....'/>
                    </div>
                    :
                    <div className='flex flex-col mt-4 items-start'>
                        <p className='text-xs font-bold'>Edahap</p>
                        <input type="number" className='bg-gray-200 px-2 py-2 rounded' placeholder='623170796....'/>
                    </div>
                    }
                </div>
                <button className='bg-cyan-600 p-2 rounded mt-4 text-white'>Buy now</button>

        
                </div>
            </div>
        </div>

    </div>
  )
}

export default BuyingCenter