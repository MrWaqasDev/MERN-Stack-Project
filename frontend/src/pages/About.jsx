import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 borer-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="About US" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque facere, libero veniam atque quo at a repellendus fugit saepe. Recusandae facilis eos necessitatibus inventore placeat culpa dicta ipsa quos!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sapiente commodi sint natus assumenda doloremque iste ex, distinctio consectetur impedit ipsam quia adipisci! Eaque expedita veritatis incidunt a sequi! Iste?</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our Mission dolor sit amet consectetur adipisicing elit. Illum id praesentium est iusto repellendus aperiam numquam autem dolores culpa veritatis, dolorum omnis? Dolore quasi unde nam. Expedita corrupti nam perspiciatis.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus assumenda sapiente suscipit beatae nobis? Repudiandae.</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus assumenda sapiente suscipit beatae nobis? Repudiandae.</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus assumenda sapiente suscipit beatae nobis? Repudiandae.</p>
        </div>
      </div>

      <NewsLetterBox />
      </div>
  )
}

export default About