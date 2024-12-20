import React from 'react'

const AvailableCab = () => {
  return (
    <div className='flex items-center border rounded-md py-2 px-5 cursor-pointer -z-10'>
      <div>
        <img className='w-10' src="https://cdn.pixabay.com/photo/2017/04/06/22/11/car-2209439_1280.png" alt="" />
        <p className="font font-semibold text-xs">1 min</p>
      </div>
      <div className="pl-5 text-sm">
        <p className='font-semibold'>Prime SUV</p>
        <p className='text-xs -z-10'>SUVS with free wifi and top Drivers</p>
      </div>
    </div>
  )
}

export default AvailableCab
