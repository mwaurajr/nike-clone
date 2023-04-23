import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Shoesdisplay() {
    const shoes = [
        {
            url : 'https://images.pexels.com/photos/6692038/pexels-photo-6692038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title : 'Customised AF1',
        },
        {
            url : 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
            title : 'Work Out',
        },
        {
            url : 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=600',
            title : 'Athletic',
        },
        {
            url : 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600',
            title : 'Semi customized AF1',
        },
        {
            url : 'https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=600',
            title : 'Horse',
        },
        {
            url : 'https://images.pexels.com/photos/12891493/pexels-photo-12891493.jpeg?auto=compress&cs=tinysrgb&w=600',
            title : 'J4',
        },
        {
            url : 'https://images.pexels.com/photos/10726876/pexels-photo-10726876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title : 'Plain AF1',
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? shoes.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === shoes.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (shoesIndex) => {
      setCurrentIndex(shoesIndex);
    };
  
    return (
      <div className='max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group'>
        <div
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          style={{ backgroundImage: `url(${shoes[currentIndex].url})` }}
        ></div>
        {/* Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
  
        <div className='flex top-4 justify-center py-2'>
          {shoes.map((shoe, shoesIndex) => (
            <div
              className='text-2xl cursor-pointer'
              key={shoesIndex}
              onClick={() => goToSlide(shoesIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    )
}

export default Shoesdisplay