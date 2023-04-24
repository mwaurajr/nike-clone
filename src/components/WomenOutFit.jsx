import React from 'react'

function WomenOutFit() {
  return (
    <div>
      <div className='max-w-[1400px] h-[680px] bg-blue-100 mx-auto my-10 lg:mb-[20%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
          <h3 className='text-2xl font-bold animate-pulse'>Fantastic Women Outfit</h3>
          <p className='pt-4 animate-fade-in-up'>
            Superb Nike outfits for women combine stylish design and comfortable functionality, featuring innovative fabrics and athletic cuts that enhance performance and confidence.
          </p>
        </div>
        <div className='relative grid grid-cols-2 cols-span-2 gap-2 overflow-hidden'>
          <img className='object-cover w-full h-full transform hover:scale-110 transition duration-300 ease-out' src='https://images.unsplash.com/photo-1603724805096-e3e7bc7741f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fE5pa2UlMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='/' />
          <img className='row-span-2 object-cover w-full h-full transform hover:scale-110 transition duration-300 ease-out' src='https://images.unsplash.com/photo-1615461469775-9d244476325f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TmlrZSUyMGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/' />
          <img className='object-cover w-full h-full transform hover:scale-110 transition duration-300 ease-out' src='https://images.unsplash.com/photo-1625178483412-1c1ae52f8069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fE5pa2UlMjB3b21lbiUyMGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='/' />
        </div>
      </div>
    </div>
  )
}

export default WomenOutFit
