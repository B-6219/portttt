// import React from 'react'
// import spotify from '../assets/spotify.png'

// const Project = () => {
//     return (
//         <div>
//             <div className='text-center text-2xl pt-10 text-gray-600'>
//                 <p>MY <span className='text-gray-700 font-semibold'> PROJECTS</span></p>
//             </div>

//             <section>

//                 <div>
//                     <img className='w-100 ' src={spotify} alt="" />
//                     <div>
//                         <span>Spotify Clone</span>
//                         <p>A high-performance, responsive music streaming application inspired by Spotify's design and core user experience. This project replicates the hallmark 'dark theme' and fluid navigation of the original platform while integrating real-time audio playback using MERN Stack. </p><br />
//                         <div>

//                             <div className='flex gap-2'>
//                                 <div className='w-5 h-5 rounded-full bg-yellow-400'></div>
//                                 <p>Javascript</p>
//                             </div>

//                             <div>
//                                 <button>Github</button>
//                                 <button>Live Demo..</button>
//                             </div>

//                         </div>

//                     </div>
//                 </div>

//                 <div>
//                     <img className='w-100 ' src={spotify} alt="" />
//                     <div>
//                         <span>Spotify Clone</span>
//                         <p>A high-performance, responsive music streaming application inspired by Spotify's design and core user experience. This project replicates the hallmark 'dark theme' and fluid navigation of the original platform while integrating real-time audio playback using MERN Stack. </p><br />
//                         <div>

//                             <div className='flex gap-2'>
//                                 <div className='w-5 h-5 rounded-full bg-yellow-400'></div>
//                                 <p>Javascript</p>
//                             </div>

//                             <div>
//                                 <button>Github</button>
//                                 <button>Live Demo..</button>
//                             </div>

//                         </div>

//                     </div>
//                 </div>

//                 <div>
//                     <img className='w-100 ' src={spotify} alt="" />
//                     <div>
//                         <span>Spotify Clone</span>
//                         <p>A high-performance, responsive music streaming application inspired by Spotify's design and core user experience. This project replicates the hallmark 'dark theme' and fluid navigation of the original platform while integrating real-time audio playback using MERN Stack. </p><br />
//                         <div>

//                             <div className='flex gap-2'>
//                                 <div className='w-5 h-5 rounded-full bg-yellow-400'></div>
//                                 <p>Javascript</p>
//                             </div>

//                             <div>
//                                 <button>Github</button>
//                                 <button>Live Demo..</button>
//                             </div>

//                         </div>

//                     </div>
//                 </div>

//             </section>
//         </div>
//     )
// }

// export default Project



// import React from 'react'
// import spotify from '../assets/spotify.png'

// const projects = [
//     {
//         title: "Spotify Clone",
//         description:
//             "A high-performance, responsive music streaming application inspired by Spotify's design and core user experience. This project replicates the hallmark 'dark theme' and fluid navigation of the original platform while integrating real-time audio playback using MERN Stack.",
//         tech: ["JavaScript", "React", "Node.js", "MongoDB"],
//         image: spotify,
//         github: "#",
//         live: "#",
//     },
//     {
//         title: "Spotify Clone",
//         description:
//             "A high-performance, responsive music streaming application inspired by Spotify's design and core user experience. This project replicates the hallmark 'dark theme' and fluid navigation of the original platform while integrating real-time audio playback using MERN Stack.",
//         tech: ["JavaScript", "React"],
//         image: spotify,
//         github: "#",
//         live: "#",
//     },
//     {
//         title: "Spotify Clone",
//         description:
//             "A high-performance, responsive music streaming application inspired by Spotify's design and core user experience. This project replicates the hallmark 'dark theme' and fluid navigation of the original platform while integrating real-time audio playback using MERN Stack.",
//         tech: ["JavaScript"],
//         image: spotify,
//         github: "#",
//         live: "#",
//     },
// ]

// const Project = () => {
//     return (
//         <div className="bg-dark-bg text-text-primary py-16 px-6">
//             {/* Section Title */}
//             <div className="text-center mb-12">
//                 <p className="text-gray-400 uppercase tracking-widest text-sm">
//                     My <span className="text-accent-amber font-semibold">Projects</span>
//                 </p>
//             </div>

//             {/* Projects Grid */}
//             <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//                 {projects.map((project, idx) => (
//                     <div
//                         key={idx}
//                         className="bg-dark-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
//                     >
//                         {/* Project Image */}
//                         <img
//                             src={project.image}
//                             alt={project.title}
//                             className="w-full h-48 object-cover"
//                         />

//                         {/* Project Content */}
//                         <div className="p-6 flex flex-col flex-grow">
//                             <h3 className="text-xl font-bold text-accent-amber mb-2">
//                                 {project.title}
//                             </h3>
//                             <p className="text-text-muted text-sm mb-4 flex-grow">
//                                 {project.description}
//                             </p>

//                             {/* Tech Stack */}
//                             <div className="flex flex-wrap gap-2 mb-4">
//                                 {project.tech.map((t, i) => (
//                                     <span
//                                         key={i}
//                                         className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full"
//                                     >
//                                         {t}
//                                     </span>
//                                 ))}
//                             </div>

//                             {/* Buttons */}
//                             <div className="flex gap-3 mt-auto">
//                                 <a
//                                     href={project.github}
//                                     className="px-4 py-2 bg-accent-amber text-black rounded-lg text-sm font-medium hover:opacity-90 transition"
//                                 >
//                                     GitHub
//                                 </a>
//                                 <a
//                                     href={project.live}
//                                     className="px-4 py-2 border border-amber-500 text-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500 hover:text-black transition"
//                                 >
//                                     Live Demo
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </section>
//         </div>
//     )
// }

// export default Project


import React from "react"
import { motion } from "framer-motion"
import spotify from "../assets/spotify.png"

const projects = [
    {
        title: "Spotify Clone",
        description:
            "A high-performance, responsive music streaming application inspired by Spotify's design and core user experience. This project replicates the hallmark 'dark theme' and fluid navigation of the original platform while integrating real-time audio playback using MERN Stack.",
        tech: ["JavaScript", "React", "Node.js", "MongoDB"],
        image: spotify,
        github: "#",
        live: "#",
    },
    {
        title: "Spotify Clone",
        description:
            "A high-performance, responsive music streaming application inspired by Spotify's design and core user experience. This project replicates the hallmark 'dark theme' and fluid navigation of the original platform while integrating real-time audio playback using MERN Stack.",
        tech: ["JavaScript", "React"],
        image: spotify,
        github: "#",
        live: "#",
    },
    {
        title: "Spotify Clone",
        description:
            "A high-performance, responsive music streaming application inspired by Spotify's design and core user experience. This project replicates the hallmark 'dark theme' and fluid navigation of the original platform while integrating real-time audio playback using MERN Stack.",
        tech: ["JavaScript"],
        image: spotify,
        github: "#",
        live: "#",
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Project = () => {
    return (
        <div className="bg-dark-bg text-text-primary py-16 px-6">
            {/* Section Title */}
            <div className="text-center mb-12">
                <p className="text-gray-400 uppercase tracking-widest text-sm">
                    My <span className="text-accent-amber font-semibold">Projects</span>
                </p>
            </div>

            {/* Projects Grid */}
            <motion.section
                className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-dark-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl flex flex-col"
                        variants={cardVariants}
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Project Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold text-accent-amber mb-2">
                                {project.title}
                            </h3>
                            <p className="text-text-muted text-sm mb-4 flex-grow">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 mt-auto">
                                <a
                                    href={project.github}
                                    className="px-4 py-2 bg-accent-amber text-black rounded-lg text-sm font-medium hover:opacity-90 transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.live}
                                    className="px-4 py-2 border border-amber-500 text-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500 hover:text-black transition"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.section>
        </div>
    )
}

export default Project
