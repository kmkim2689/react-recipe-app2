import React from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsPerson } from 'react-icons/bs';
import { TbTruckReturn } from 'react-icons/tb';
import { FaUserFriends, FaGoogleWallet } from 'react-icons/fa';
import { MdHelp, MdOutlineFavorite } from 'react-icons/md';



function TopNav() {

    const [sideNav, setSideNav] = React.useState(false);


  return (
    <div className='max-w-[1520px] mx-auto flex justify-between items-center p-4'>
        {/* display to flex, align-items to center */}
        <div className='flex items-center'>
            {/* when hovering the cursor becomes clickable shape(pointer) */}
            <div className='cursor-pointer' onClick={() => setSideNav(!sideNav)}> 
                {/* icon needed */}
                <AiOutlineMenu size={25} />
            </div>
            {/* specifying the form style */}
            {/* font-size: 1.5rem (24px) line-height: 2rem (32px) */}
            {/* for smaller screen, font size will be 3xl. for larger screen, font size will be 4xl */}
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Yum<span className='font-bold'>Eats</span>
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

        {/* for the search bar(center) */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            {/* https://webdir.tistory.com/342 */}
            <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search Meals' />
        </div>

        {/* for the Cart button(right) */}
        <button className='bg-orange-700 text-white sm:hidden md: flex lg:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20}/> Cart
        </button>

        {/* to set the background color of menu whether the menu is open or not */}
        {sideNav ? <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0' onClick={() => setSideNav(!sideNav)}>
        </div> : ("")}
        
        {/* for the menu layout => open or not */}
        <div className={sideNav 
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }>

             {/* for the menu content => open or not */}
             {/* for the close button */}
             <AiOutlineClose className='cursor-pointer absolute right-4 top-4' size={25} onClick={() => {setSideNav(!sideNav)}} />

             {/* menu items */}
             <h2 className='text-2xl p-4'>Yum <span className='text-orange-700 font-bold'>Eats</span></h2>

             <nav>
                <ul className='flex flex-col p-4 text-gray-900'>
                    <li className='text-xl py-4 flex'>
                        <BsPerson size={25} className='mr-4 text-white bg-black rounded-full' />
                        My Account
                    </li>
                    <li className='text-xl py-4 flex'>
                        <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full' />
                        Delivery
                    </li>
                    <li className='text-xl py-4 flex'>
                        <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full' />
                        My Favorite
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full' />
                        My Wallet
                    </li>
                    <li className='text-xl py-4 flex'>
                        <FaUserFriends size={25} className='mr-4 text-white bg-black rounded-full' />
                        Help
                    </li>
                </ul>
             </nav>
        </div>

       


    </div>
  )
}

export default TopNav