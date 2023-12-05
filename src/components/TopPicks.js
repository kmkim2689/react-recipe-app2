import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { categories, topPicks } from '../data';

function TopPicks() {
  return (
    <>
    <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
    {/* slide should be hidden for small devices */}
    <div className='hidden lg:flex max-w-[1520px] m-auto py-2 px-2'>
      {/* use the splide */}
      {
        topPicks.map((item) => {
          return (
            <div key={item.id} className='rounded-3xl relative'>
              <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                {/* title */}
                <p className='px-2'>{item.title}</p>
              </div>
              <img src={item.img}></img>
            </div>
          );
        })
      }
    </div>
    </>
  )
}

export default TopPicks