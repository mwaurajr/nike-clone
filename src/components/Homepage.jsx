import React from 'react'

function Homepage() {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 w-full object-cover h-screen left-0' src='https://images.pexels.com/photos/10963373/pexels-photo-10963373.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen ' />
            <div className='absolute top-0 w-full h-full justify-center text-white flex flex-col'>
               <div className='text-center md:left-[10%] max-w-[1100px] m-auto p-4'>
                <h1>Nike. Just Do It</h1>
               <p className='font-semibold'>Empower Your Journey with <strong className='text-blue-400 text-3xl'>Nike </strong>. Just Do It</p>
               <button className='bg-black text-white border-black hover:shadow-xl'>Get Started</button>
               </div>
            </div>
      
    </div>
  )
}

export default Homepage