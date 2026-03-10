import { LocateIcon, LocationEditIcon } from 'lucide-react'
import React from 'react'

const SellCard = ({home}) => {
  return (
    <div className='hover:scale-102 transition hover:translate-x-1 flex flex-col gap-4 bg-white p-5 rounded-2xl shadow-2xl w-60 '>
        <img className='h-full rounded-xl w-screen object-cover' src={home.image} />
        <div className='flex flex-col space-y-1 justify-start  items-start gap-2 text-sm'>
            <div className='flex gap-2 '>
                Name:
                <p className='text-black font-bold'>{home.name}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className=''>Location:</p>
                <LocationEditIcon size={20}/>
                <p className='text-black font-bold'>{home.location}</p>
            </div>

            <div className='flex gap-2'>
            <p className=''>Price:</p>

            <p className='text-black font-bold'>{home.price}</p>
            </div>

            <div className='flex space-x-3 text-xs font-bold'>
                <p>{home.features.bedRoom} bedrooms</p>
                <p>{home.features.pathRoom} paths</p>
            </div>
        </div>
    </div>
  )
}

export default SellCard