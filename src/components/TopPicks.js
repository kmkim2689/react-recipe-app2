import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { categories, topPicks } from '../data';

function TopPicks() {
  return (
    <>
    <h1 className='hidden lg:block text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
    {/* slide should be hidden for small devices */}
    <div className='hidden lg:flex max-w-[1520px] m-auto py-2 px-2'>
      {/* use the splide */}
      <Splide options={{perPage: 4, gap: "0.5rem", drag: 'free', arrows: false}}>
      {
        // item : represents each item in the topPicks array
        topPicks.map((item) => {
          return (
            <SplideSlide key={item.id}>
              {/* position relative to allow absolute positioning of the title */}
            <div className='rounded-3xl relative'>
              {/* parent div position is relative -> inner div position to be absolute : to place on the top of the parent div */}
              <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                {/* title :  */}
                <p className='px-2 text-2xl py-2 font-bold'>{item.title}</p>
                <p className='px-2'>{item.price}</p>
                <button className='border-dotted border-white text-white mx-2 absolute bottom-4'>Add To Cart</button>
              </div>
              <img className='h-[200px] w-full object-cover rounded-3xl hover:scale-105 ease-out duration-300' src={item.img} alt={item.title}></img>
            </div>
            </SplideSlide>
            
          );
        })
      }
      </Splide>
      
    </div>
    </>
  )
}

export default TopPicks