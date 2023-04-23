import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
    if (!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }

  return (
    <div className='flex justify-between absolute p-4 items-center w-full '>
      <h1 className='text-white z-20 font-bold text-2xl'>Nike</h1>

      {/* Show the FaBars icon on medium and small devices */}
      <FaBars
        size={25}
        className='z-20 cursor-pointer text-white md:hidden'
        onClick={handleNav}
      />

      {/* Show the full navbar on large devices */}
      <div className='hidden md:block'>
        <ul className='flex text-white items-center justify-center'>
          <li className='text-1xl font-bold px-4'>New & Featured</li>
          <li className='text-1xl font-bold px-4'>Men</li>
          <li className='text-1xl font-bold px-4'>Women</li>
          <li className='text-1xl font-bold px-4'>Kids</li>
          <li className='text-1xl font-bold px-4'>Accessories</li>
          <li className='text-1xl font-bold px-4'>Sales</li>
        </ul>
      </div>

      {/* Show the mobile navbar on medium and small devices */}
      <div
        className={
          nav
            ? 'ease-in duration-300 text-white fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-4 flex-col z-10'
            : 'hidden md:hidden'
        }
      >
        <ul className='flex flex-col fixed text-white w-full h-full items-center justify-center'>
          <li className='text-2xl font-semibold p-4'>New & Featured</li>
          <li className='text-2xl font-semibold p-4'>Men</li>
          <li className='text-2xl font-semibold p-4'>Women</li>
          <li className='text-2xl font-semibold p-4'>Kids</li>
          <li className='text-2xl font-semibold p-4'>Accessories</li>
          <li className='text-2xl font-semibold p-4'>Sales</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
