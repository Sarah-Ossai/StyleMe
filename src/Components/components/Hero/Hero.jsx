import React from 'react'

const Hero = () => {
  return (
    <div className='bg-hero-pattern md:bg-fixed tab:h-screen md:h-screen bg-cover bg-no-repeat bg-yellow-700'>
        <div className='text-center py-10 sp:py-10 tab:py-44 md:py-56 mt-32 md:mt-10 flex flex-col gap-2 md:gap-20'>
          <br className='hidden md:block'/>
     <h1 className='font-bold text-xl tab:text-4xl md:text-4xl text-gray-200'>Hot Trends of This Year</h1>
     <br className='hidden tab:block md:hidden sp:hidden lg:hidden' />
     <h1 className='font-bold text-2xl tab:text-6xl md:text-8xl text-white border-2 border-white w-5/6 mx-auto'>EXCLUSIVE <b className='text-red-600'>FASHION</b> 2023</h1>
     <div>
        <br/>
        <button className='bg-white px-5 py-1 tab:py-2 md:py-3 rounded-md  text-red-600 tab:text-2xl md:text-2xl font-bold hover:bg-gray-900 hover:text-white'>Shop Now</button>
     </div>
     </div>
    </div>
  )
}

export default Hero