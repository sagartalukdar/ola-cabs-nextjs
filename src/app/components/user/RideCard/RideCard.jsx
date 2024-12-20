"use client"

import { Verified } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useRouter } from 'next/navigation'
import React from 'react'

const RideCard = () => {
    const router=useRouter();
  return (
    <div onClick={()=>router.push(`/ride-details/${5}`)} className='flex justify-between items-center rounded-s-sm p-3 cursor-pointer'>
      <div className="flex items-center">
        <img className='w-20 h-20' src="https://olawebcdn.com/images/v1/bg_city.jpg" alt="" />
        <div className="ml-5 space-y-1">
            <p className='text-sm font-semibold'>Today 10:00 pm</p>
            <p className='text-sm font-semibold opacity-60'>cab KSLW35583</p>
            <p className='opacity-60 text-xs'>pickup area</p>
            <p className='opacity-60 text-xs'>destination area</p>
        </div>
      </div>
      {!true?(
        <div className="flex flex-col justify-between pl-5">
            <p className="text-green-500 mb-5">Schedule ..</p>
            <Avatar src='https://olawebcdn.com/images/v1/bg_city.jpg'/>
        </div>
      ):
       <div>
        <Verified className='text-green-500 text-4xl ' fontSize='3rem' />
       </div>
      }
    </div>
  )
}

export default RideCard
