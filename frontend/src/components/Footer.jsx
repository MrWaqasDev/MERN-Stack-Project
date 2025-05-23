import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt="Logo"  className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel harum quaerat quam ea exercitationem. Nisi laboriosam debitis magnam explicabo quam eum tempora beatae, suscipit iusto aperiam, sint minima earum vero.
            </p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
               <Link to='/'> <li>Home</li> </Link>
                <Link to='/about'><li>About us</li></Link>
                <Link to='/cart'><li>Delivery</li></Link>
               <Link to='/privacy'> <li>Privacy Policy</li> </Link>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+92 344 35038212</li>
                <li>contact@foreverxyz@gmail.com</li>
            </ul>
        </div>
        
    </div>
    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @forever.com - All Right Reserved.</p>  
    </div>
    </>
  )
}

export default Footer