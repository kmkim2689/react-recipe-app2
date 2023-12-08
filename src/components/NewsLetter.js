import React from 'react'

function NewsLetter() {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-6 bg-[#24262b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='text-white'>Need advice on how to improve your flow?</h1>
                <p className='text-white'>Sign Up to join our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='email' />

                    <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 border-none py-3'>
                        Notify Me
                    </button>
                </div>

                <p>We are concerned about the security of your data, Read{" "}<span className='text-[#00df9a]'>Privacy Policy</span>
                </p>
            </div>
            <hr className='my-8 bg-gray-700 border-1 '/>
        </div>
    </div>
  )
}

export default NewsLetter