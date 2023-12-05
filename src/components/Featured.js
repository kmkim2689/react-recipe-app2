import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDot, RxDotFilled } from 'react-icons/rx';

function Featured() {

    // declare an array of object
    // within that, imagesUrls we wanna display
    const sliders = [    
      {
        url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
      },
      {
        url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
      },
      {
        url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
      },
    ]

    // state variables
    // index is the current image we are displaying
    // initial index should be 0(from the first image)
    const [currentIndex, setcurrentIndex] = useState(0);

    const toPrevSlide = () => {
        // if currentIndex is 0, then we wanna go to the last image
        // else, we wanna go to the previous image
        currentIndex === 0 ? setcurrentIndex(sliders.length - 1) : setcurrentIndex(currentIndex - 1);
    }

    const toNextSlide = () => {
        // if currentIndex is the last image, then we wanna go to the first image
        // else, we wanna go to the next image
        currentIndex === sliders.length - 1 ? setcurrentIndex(0) : setcurrentIndex(currentIndex + 1);
    }

    // for bullets to move any index
    const moveToSlide = (index) => {
        setcurrentIndex(index);
    }

  return (
    // why it is relative? => to make the image absolute
    <div className='max-w-[1520px] h-[400px] w-full py-4 px-4 relative group'>
        {/* for the image */}
        <div 
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
            style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>
        </div>
        {/* for the arrows */}
        <div className='cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white' onClick={toPrevSlide}>
            <BsChevronCompactLeft />
        </div>
        <div className='cursor-pointer absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white' onClick={toNextSlide}>
            <BsChevronCompactRight />
        </div>

        {/* for the bullets */}
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((sliderItems, slideIndex) => {
                    return(
                        <div
                            key={slideIndex}
                            className='text-2xl cursor-pointer'
                            onClick={() => moveToSlide(slideIndex)}>
                                {slideIndex === currentIndex ? <RxDotFilled /> : <RxDot />}
                        </div>

                    );
                })
            }
        </div>
    </div>
  )
  
    
}



export default Featured