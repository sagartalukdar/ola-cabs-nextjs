import { MenuOutlined } from '@mui/icons-material'
import React from 'react'

const HomeNavbar = () => {
  return (
    <nav className='bg-black py-4'>
      <div className="container max-auto px-4">
        <div className="flex w-[100vw] justify-between items-center ">
            <div className="flex items-center">
                <div className="flex items-center mx-5">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg" alt="" />
                </div>
                <div className='hidden md:block'>
                    <ul className='flex items-center '>
                     <li className="mr-6">
                        <a href="#" className='text-white hover:text-blue-200'>
                        Ola Electric
                        </a>
                     </li>
                     <li className="mr-6">
                        <a href="#" className='text-white hover:text-blue-200'>Krutrim</a>
                     </li>
                     <li className="mr-6">
                        <a href="#" className='text-white hover:text-blue-200'>Outstation</a>
                     </li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-3 pr-10'>
              <div className="hidden md:block">
                <button className='bg-gray-700 text-white hover:bg-gray-900 text-sm font-semibold px-4 py-3'>Book an ola cab</button>
                <button className='bg-white text-black hover:bg-gray-300 ml-3 text-sm font-semibold px-4 py-3'>Free s1 test ride</button>
              </div>
              <MenuOutlined className='ml-3 text-white text-3xl' />
            </div>
        </div>
      </div>
    </nav>
  )
}

export default HomeNavbar
