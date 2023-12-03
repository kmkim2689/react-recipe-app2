import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';

function TopNav() {
  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
        {/* display to flex, align-items to center */}
        <div className='flex items-center'>
            {/* when hovering the cursor becomes clickable shape(pointer) */}
            <div className='cursor-pointer'> 
                {/* icon needed */}
                <AiOutlineMenu size={25} />
            </div>
            {/* specifying the form style */}
            {/* font-size: 1.5rem (24px) line-height: 2rem (32px) */}
            {/* for smaller screen, font size will be 3xl. for larger screen, font size will be 4xl */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Yum<span>Eats</span>
            </h1>
            {/* for badges */}
            {/* for smaller screens that will be hidden, for larger screen display will be flex, align-items to center, background color is  rgb(229 231 235 / var(--tw-bg-opacity), almost circle rounded, padding for all aspects is 0.25rem, fontsize is 14px*/}
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                {/* bg-colorName-thickness */}
                <p className='bg-orange-700 text-white rounded-full p-2 text-bold'>
                    Free
                </p>
                <p className='p-2 text-bold'>
                    Delivery
                </p>
            </div>
        </div>
    </div>
  )
}

export default TopNav