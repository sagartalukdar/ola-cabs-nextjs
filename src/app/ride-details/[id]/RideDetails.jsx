import { Call, Key, Star, StarBorder, West } from '@mui/icons-material'
import { Avatar, Button, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation'
import React from 'react'

const RideDetails = () => {
    const router=useRouter();
    const goBack=()=>{
      router.back();
    }
  return (
    <div>
      <div className="flex items-center px-2 lg:px-5 py-2">
        <West className='cursor-pointer' onClick={goBack} />
        <p className="text-center w-full uppercase">a46ubhgh6</p>
      </div>
      <div className="px-2 lg:px-5 py-5">
        <div className="border rounded-md">
            <div className="flex items-center border-b p-3">
                <span className='pr-5 opacity-70 text-xs font-semibold'>
                 PICKUP :{" "}
                </span>
                <span>Lorem ipsum dolor sit.</span>
            </div>
            <div className="flex items-center border-b p-3">
               <span className='pr-5 opacity-70 text-xs font-semibold'>
                 DROP :{" "}
                </span>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
        </div>
      </div>
      <p className="p-2 bg-green-500 text-white text-center">Pickup Arriving in 5min</p>
      <div className="flex items-center justify-center w-full h-[53vh]">
        <p className="text-center ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500558.0553505742!2d89.2021513620202!3d26.372006223864876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2f1c6e5a9fa7f%3A0xbe03e8b5abde2060!2sBalarampur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1734624005302!5m2!1sen!2sin" width="100%" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </p>
      </div>

      <div className='px-2 lg:px-5 mt-2'>
        <div className="border rounded-md">
          <div className="flex justify-between w-full border-b p-3">
            <div className="flex items-center">
              <Avatar src=''/>
              <div className="pl-4">
                <p>Toyoto fortuner</p>
                <p className='text-xs font-semibold opacity-60'>Mini Cab</p>
              </div>
            </div>
            <div>
              <p>GJO1-28438</p>
              <p className="font-semibold opacity-70 flex items-center">ujduien</p>
            </div>
          </div>
          <div className="flex justify-between w-full border-b p-3">
            <div className="flex items-center">
              <Avatar src='https://olawebcdn.com/images/v1/bg_city.jpg'/>
              <div className="pl-4">
                <p>Driver name</p>
                <p className="text-xs flex items-center">4.7 <Star className='text-yellow-500 text-sm'/></p>
                </div>
            </div>
            <div>
              <IconButton color='success ' aria-level="call driver">
                <Call/>
              </IconButton>
            </div>
          </div>

          {false?
            <Button variant='contained' color='secondary' sx={{width:'100%',padding:'.5rem 0rem'}}>
             pay now
            </Button>
            :
            <div className="flex justify-between items-center bg-yellow-600 text-white py-2 px-5">
              <div className="flex items-center">
                <Key/>
                <p className="ml-4">OTP</p>
              </div>
              <p>425</p>
            </div>
          }
         
        </div>
      </div>

    </div>
  )
}

export default RideDetails
