// import React from 'react'
// import about from '../assets/about.jpeg'

// const Contact = () => {
//     return (
//         <div>

//             <div className="text-center mb-12 pt-10">
//                 <p className="text-gray-400 uppercase tracking-widest text-sm">
//                     Contact <span className="text-accent-amber font-semibold">Me</span>
//                 </p>
//             </div>

//             <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20 text-sm'>
//                 <img className='w-full md:max-w-90 ' src={about} alt="" />

//                 <div className='flex flex-col justify-center gap-6 md;w-2/4 text-sm '>
//                     <p className='font-semibold text-gray-600 text-lg'>OUR OFFICE</p>
//                     <p className='text-gray-500'>65th Street <br /> KingDrive Chicago</p>
//                     <p className='text-gray-500'>TEL  +254791948411 <br /> Email: briankamau467@gmal.com</p>
//                     <p className='font-semibold text-lg text-gray-600'>Careeers at Prescripto</p>
//                     <p className='text-gray-500'>Learn more about our career</p>
//                     <button className='border rounded-2xl border-black px-6 py-2 text-sm hover:bg-amber-500 hover:text-black transition-all duration-500'>Explore Jobs</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact




import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import about from "../assets/about.jpeg";

const Contact = () => {
    return (
        <section className="max-w-6xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-14 pt-16">
                <p className="text-gray-400 uppercase tracking-widest text-sm">
                    Contact <span className="text-accent-amber font-semibold">Me</span>
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-off-white mt-3">
                    Let’s Build Something Great Together
                </h2>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-28">

                {/* Image */}
                <div className="relative">
                    <img
                        src={about}
                        alt="Contact Brian"
                        className="w-full h-125 object-cover rounded-2xl border-4 border-accent-amber shadow"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-4 ring-accent-amber/20 animate-pulse" />
                </div>

                {/* Contact Info + Form */}
                <div className="flex flex-col gap-8">

                    {/* Info */}
                    <div className="space-y-5 text-gray-400 text-sm">

                        <div className="flex items-start gap-4">
                            <MapPin className="text-accent-amber" size={20} />
                            <p>
                                Nairobi, Kenya <br />
                                Available for remote & onsite work
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Phone className="text-accent-amber" size={20} />
                            <p>+254 791 948 411</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail className="text-accent-amber" size={20} />
                            <p>briankamau467@gmail.com</p>
                        </div>

                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-4 mt-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-transparent border border-gray-600 rounded-lg px-4 py-3
                                       text-off-white focus:outline-none focus:border-accent-amber"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-transparent border border-gray-600 rounded-lg px-4 py-3
                                       text-off-white focus:outline-none focus:border-accent-amber"
                        />
                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="bg-transparent border border-gray-600 rounded-lg px-4 py-3
                                       text-off-white focus:outline-none focus:border-accent-amber resize-none"
                        />

                        <button
                            type="submit"
                            className="mt-2 bg-accent-amber text-black py-3 rounded-lg
                                       font-medium hover:opacity-90 transition"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>

        </section>
    );
};

export default Contact;
