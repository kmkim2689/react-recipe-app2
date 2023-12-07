import React from 'react'
import { mealData } from '../data'

function Meal() {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>
        {/* grid column items */}
        {/* gap : '자식' 요소들 간 거리를 설정하는 것임 */}
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6'>
            {
                mealData.map((item) => {
                    return (
                        <div className='border-none hover: scale-105 duration-300'>
                            {/* height of the image to be equal -> hardcode the height */}
                            <img className='w-full h-[200px] object-cover rounded-lg' src={item.image} alt={item.name} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Meal