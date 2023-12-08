import React, { useState } from 'react'
import { mealData } from '../data'
import { ArrowSmRightIcon } from '@heroicons/react/outline'

function Meal() {

    // state variable for meal data
    const [meals, setMeals] = useState(mealData);

    // filter items by category
    const filterCategory = (category) => {
        setMeals(
            mealData.filter((item) => {
                return item.category === category
            })
        )
    }

  return (
    <div className='max-w-[1520px] m-auto px-4 py-6'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-6'>Our Meals</h1>

        {/* buttons for filtering items by category */}
        <div className='flex flex-col lg:flex-row justify-center mb-6'>
            <div className='flex justify-center md:justify-center'>
                {/* buttons */}
                <button onClick={() => setMeals(mealData)} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
                <button onClick={() => filterCategory("pizza")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Pizza</button>
                <button onClick={() => filterCategory("chicken")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>
                <button onClick={() => filterCategory("salad")} className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button>
            </div>
        </div>

        {/* grid column items */}
        {/* gap : '자식' 요소들 간 거리를 설정하는 것임 */}
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                meals.map((item) => {
                    return (
                        <div className='border-none hover: scale-105 duration-300' key={item.id}>
                            {/* height of the image to be equal -> hardcode the height */}
                            <img className='w-full h-[200px] object-cover rounded-lg' src={item.image} alt={item.name} />
                            {/* info of the item - text */}
                            <div className='flex justify-between px-2 py-4'>
                                <p className='font-bold'>{item.name}</p>
                                <p className='bg-orange-700 h-18 w-18 rounded-full text-white -mt-10 py-4 px-2 border-8 font-bold'>{item.price}</p>
                            </div>

                            {/* button */}
                            <div className='pl-2 py-4 -mt-8'>
                                {/* p 태그는 기본적으로 block 태그이므로, 좌우정렬을 위해 display를 flex로 설정한다. */}
                                <p className='flex items-center text-indigo-600'>View More<ArrowSmRightIcon className='w-5 ml-2' /></p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Meal