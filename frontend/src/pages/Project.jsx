
import React from 'react'
import spotify from '../assets/spotify.png'
import nerd from '../assets/nerd.png'
import quote from '../assets/quote.png'
import hospital from '../assets/hospital.png'
import book from '../assets/book.png'
import twitter from '../assets/twitter.png'

const projects = [
    {
        title: "Spotify Clone",
        description:
            "A responsive music streaming web application inspired by Spotify, featuring dark mode UI, smooth navigation, and real-time audio playback built using the MERN stack.",
        tech: ["JavaScript", "React", "Node.js", "MongoDB"],
        image: spotify,
        github: "https://github.com/B-6219/spotify-fullstack",
        live: "https://spotify-fullstack-9jee.vercel.app/",
    },
    {
        title: "Mini Tech Store",
        description:
            "A modern e-commerce platform for tech products with a clean interface, dynamic product listings, and optimized performance using React, TypeScript, and Tailwind CSS.",
        tech: ["TypeScript", "Tailwind CSS", "React", "TanStack"],
        image: nerd,
        github: "https://github.com/B-6219/hey-wave-talk",
        live: "https://hey-wave-talk.vercel.app/",
    },
    {
        title: "Tech Quote Generator",
        description:
            "A lightweight web application that generates random tech-related quotes with a clean UI and fast interactions using HTML, CSS, and JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: quote,
        github: "https://github.com/B-6219/Random_Qoute_Generator",
        live: "https://random-qoute-generator-phi.vercel.app/",
    },
    {
        title: "Future Care Hospital (FCH)",
        description:
            "A fully responsive hospital website designed to showcase medical services, departments, and contact information with a clean, accessible user interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: hospital,
        github: "https://github.com/B-6219/Complete-Responsive-Hospital-Website",
        live: "https://complete-responsive-hospital-website.vercel.app/",
    },
    {
        title: "Hospital Booking System",
        description:
            "A full-stack appointment booking system that allows patients to schedule consultations, manage bookings, and interact with a modern dashboard built using the MERN stack.",
        tech: ["MongoDB", "Express", "ReactJS", "Node.js", "Tailwind CSS", "JavaScript"],
        image: book,
        github: "https://github.com/B-6219/Random_Qoute_Generator",
        live: "https://doctor-appointment-system-sand.vercel.app/",
    },
    {
        title: "Social Media App",
        description:
            "A full-stack social media application featuring user authentication, posts, likes, and real-time interactions with a scalable MERN-based architecture.",
        tech: ["MongoDB", "Express", "ReactJS", "Node.js", "Tailwind CSS", "JavaScript"],
        image: twitter,
        github: "https://github.com/B-6219/twitter-clone",
        live: "https://twitter-clone-mfju.vercel.app/",
    },

];


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
            <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="bg-dark-surface rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Project Content */}
                        <div className="p-6 flex flex-col grow">
                            <h3 className="text-xl font-bold text-neon mb-2">
                                {project.title}
                            </h3>
                            <p className="text-text-muted text-sm mb-4 grow text-white">
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
                    </div>
                ))}

                <div className="col-span-full flex justify-center mt-6">
                    <a
                        href="https://github.com/B-6219?tab=repositories"
                        className="px-8 py-3 bg-accent-amber text-black rounded-xl
                   font-semibold text-sm tracking-wide
                   hover:opacity-90 hover:scale-105
                   transition-all duration-300"
                    >
                        More Projects →
                    </a>
                </div>


            </section>
        </div>
    )
}

export default Project
