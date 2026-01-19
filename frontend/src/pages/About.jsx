import React from 'react'
import doc14 from '../assets/doc14.png'

const About = () => {
    return (
        <div>

            <div className='text-center text-2xl pt-10 text-gray-600'>
                <p>ABOUT <span className='text-purple-muted font-medium'>ME</span></p>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-90 rounded' src={doc14} alt="" />
                <div className='flex flex-col justify-center gap-6 md;w-2/4 text-sm text-gray-600'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet suscipit animi error sunt, maiores minima dolorum veniam exercitationem quibusdam? Atque consequuntur a, dolor quis sapiente deserunt odit sunt nobis?
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae veritatis nihil labore cum molestias nisi blanditiis tenetur quos sit sint eius deserunt numquam sed est, asperiores minima ipsum earum.</p>
                </div>
            </div>

            <div className='text-xl my-4'>
                <p>WHY <span className='font-semibold text-gray-700'>CHOOSE US</span></p>
            </div>


            <div className='flex flex-col mb-20 md:flex-row gap-3'>
                <div className='border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-amber-400 transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Efficiency</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
                </div>
                <div className='border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-amber-400 transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Efficiency</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
                </div>
                <div className='border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-amber-400 transition-all duration-300 text-gray-600 cursor-pointer'>
                    <b>Efficiency</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
                </div>

            </div>
        </div>
    )
}

export default About