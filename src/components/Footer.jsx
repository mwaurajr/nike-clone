import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import { TiSocialPinterest } from 'react-icons/ti'

function Footer() {
    return (
        <div className='w-full mt-24 bg-gray-900 text-gray-300 px-2 py-2'>
            <div className='max-w-[1400px] grid grid-cols-2 m-auto md:grid-cols-5 border-b-2 px-4 py-8 border-gray-500'>
                <div>
                    <h5 className='pt-2 uppercase font-bold text-white'>Gift Cards</h5>
                    <ul>
                        <li className='py-1'>PROMOTIONS</li>
                        <li className='py-1'>FIND A STORE</li>
                        <li className='py-1'>SIGN UP FOR EMAIL</li>
                        <li className='py-1'>BECOME A MEMBER</li>
                        <li className='py-1'>NIKE JOURNAL</li>
                        <li className='py-1'>SEND US FEEDBACK</li>
                    </ul>
                </div>
                <div>
                    <h5 className='pt-2 uppercase font-bold text-white'>Get Help</h5>
                    <ul>
                        <li className='py-1'>Order Status</li>
                        <li className='py-1'>Shipping and Delivery</li>
                        <li className='py-1'>Returns</li>
                        <li className='py-1'>Order Cancellation</li>
                        <li className='py-1'>Payment Options</li>
                        <li className='py-1'>Gift Card Balance</li>
                        <li className='py-1'>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h5 className='pt-2 uppercase font-bold text-white'>About Nike</h5>
                    <ul>
                        <li className='py-1'>News</li>
                        <li className='py-1'>Carrers</li>
                        <li className='py-1'>Investors</li>
                        <li className='py-1'>PurposeL</li>
                        <li className='py-1'>Sustainability</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col   max-w-[1400px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500'>
            <div className="location">
        <GoLocation
              size={20}
              style={{ color: "#ffffff", marginRight: "2rem" }}
            />
                  <h4>United States</h4>
          </div>
                <p className='py-4'>© 2023 Nike, Inc. All Rights Reserved </p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <TiSocialPinterest size={30} />
                </div>
            </div>
        </div>
    )
}

export default Footer