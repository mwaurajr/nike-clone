import React from 'react'

function Homepage() {
  return (
    <div className='w-full h-screen'>
        <img className='top-0 w-full object-cover h-screen left-0' src='https://i.pinimg.com/564x/f4/12/08/f412087ab919dcc0b6c9d193c4d04245.jpg' alt='/'/>
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen ' />
            <div className='absolute top-0 w-full h-full justify-center text-white flex flex-col'>
               <div className='text-center md:left-[10%] max-w-[1100px] m-auto p-4'>
                <h1>Nike. Just Do It</h1>
               <p className='font-semibold'>Empower Your Journey with <strong className='text-blue-400 text-3xl'>Nike </strong>. Just Do It</p>
               <button className='bg-black text-white border-black hover:shadow-xl'>Shop Gifts</button>
               </div>
            </div>
      
    </div>
  )
}

export default Homepage