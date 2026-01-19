import React from 'react'
import doc14 from '../assets/doc14.png'

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-600'>
                <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
            </div>

            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20 text-sm'>
                <img className='w-full md:max-w-90 ' src={doc14} alt="" />

                <div className='flex flex-col justify-center gap-6 md;w-2/4 text-sm '>
                    <p className='font-semibold text-gray-600 text-lg'>OUR OFFICE</p>
                    <p className='text-gray-500'>65th Street <br /> KingDrive Chicago</p>
                    <p className='text-gray-500'>TEL  +254791948411 <br /> Email: briankamau467@gmal.com</p>
                    <p className='font-semibold text-lg text-gray-600'>Careeers at Prescripto</p>
                    <p className='text-gray-500'>Learn more about our career</p>
                    <button className='border rounded-2xl border-black px-6 py-2 text-sm hover:bg-amber-500 hover:text-black transition-all duration-500'>Explore Jobs</button>
                </div>
            </div>
        </div>
    )
}

export default Contact