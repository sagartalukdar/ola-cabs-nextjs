import { Instagram, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-10'>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 pl-10 space-y-5 md:flex justify-around">

          <div className="footer_link">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/OLA.svg" alt="" />
            <div className="flex items-center mt-5">
              <Instagram style={{fontSize:30}}/>
              <YouTube className='ml-3' style={{fontSize:30}}/>
              <Twitter className='ml-3' style={{fontSize:30}}/>
            </div>
          </div>

          <div className="footer_link">
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="mt-4">
              <li>
                <a href="#" className='text-gray-400 hover:text-white'>Home</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-white'>Book a ride</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-white'>About us</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-white'>Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer_link">
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="mt-4">
              <li>
                <a href="#" className='text-gray-400 hover:text-white'>Home</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-white'>Book a ride</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-white'>About us</a>
              </li>
              <li>
                <a href="#" className='text-gray-400 hover:text-white'>Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer_link">
            <h3 className="text-lg font-semibold">Explore</h3>
               <ul className="mt-4">
                <li>
                  <a href="#" className='text-gray-400 hover:text-white'>Home</a>
                </li>
                <li>
                  <a href="#" className='text-gray-400 hover:text-white'>Book a ride</a>
                </li>
                <li>
                  <a href="#" className='text-gray-400 hover:text-white'>About us</a>
                </li>
                <li>
                  <a href="#" className='text-gray-400 hover:text-white'>Careers</a>
                </li>
              </ul>
          </div>

        </div>
      </div>
      
      <div className="bg-gray-800 py-4">
        <div className="container">
          <p className="text-center text-gray-400 hover:text-white text-sm">
            &copy; {new Date().getFullYear()} Ola cabs. All Right Reserved
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
