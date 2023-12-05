import React, { useState } from 'react'

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


  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative'>

        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>
        </div>

    </div>
  )
}

export default Featured