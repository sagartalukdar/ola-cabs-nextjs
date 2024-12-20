"use client"

import React from 'react'
import RideCard from '../components/user/RideCard/RideCard'
import { useRouter } from 'next/navigation';
import { West } from '@mui/icons-material';


const Rides = () => {
    const router=useRouter();
    const goBack=()=>{
        router.back();
    }
  return (
    <div className='h-screen'>
      <div className="flex items-center px-2 lg:px-5 py-2">
        <West className='cursor-pointer' onClick={()=> router.back()} />
        <p className="text-center w-full uppercase">your rides</p>
      </div>
      <div className="space-y-5 px-2 lg:px-5 h-[90vh] overflow-y-scroll">
        {[1,1,1,1,,1].map((item,index)=><RideCard key={index}/>)}
      </div>
    </div>
  )
}

export default Rides
