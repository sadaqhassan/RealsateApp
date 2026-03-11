import React from 'react'

const BuyingCenter = () => {
  return (
    <div className='mt-10'>
        <div className='flex flex-col'>
            <h1 className='text-2xl md:text-3xl font-medium'>Available Houses</h1>
            <div className='bg-green-500 w-20 h-1'></div>
        </div>

        <div className='mt-10 mb-4 flex justify-center mx-10 items-center'>
            <img src="" alt="" />
            <div className=''>
                <h1 className='text-2xl md:text-3xl font-medium'>Houses_Name</h1>
                <p className='font-bold text-xs my-4'>$28k</p>
                <p  className='font-light text-sm'>Lorem, ipsum dolor.lorem1o sddsomething balabaknjsnjn</p>
                <div className='flex-wrap gap-2 items-center'>
                    <div className=''>
                        <button>-</button>
                        <p>2</p>
                        <button>+</button>
                    </div>
                <button className='bg-cyan-600 p-2 rounded text-white'>Buy now</button>
                </div>
            </div>

            {/* //wayMethodTobuy */}
            <div>
                <h1>Methods</h1>
                <div className='flex spacex-x-4'>
                    <div className='flex flex-col gap-3 items-start'>
                        <p className='text-sm font-bold'>EVC</p>
                        <input type="number" placeholder='613170796....'/>
                    </div>
                    <div className='flex flex-col gap-3 items-start'>
                        <p className='text-sm font-bold'>EVC</p>
                        <input type="number" placeholder='613170796....'/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BuyingCenter