
import React from 'react'

import me from '../assets/me.jpg'
import Stats from '../components/Stats'

const Home = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-dark-bg">
            <div className="max-w-5xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Text */}
                <div className="text-center md:text-left">
                    <p className="text-purple-muted uppercase tracking-widest text-sm">
                        Hello, I’m
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-neon mt-2">
                        Brian <span className="text-accent-amber">Kamau</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-off-white mt-1">
                        I am a{" "}
                        <span className="relative inline-block h-7 overflow-hidden text-accent-amber font-medium">
                            <span className="block animate-roles leading-7">
                                Full-Stack Developer<br />
                                Mobile App Developer<br />
                                Cybersecurity Engineer
                            </span>
                        </span>
                    </h2>

                    <div className="mt-6 flex gap-4 justify-center md:justify-start">
                        <button className="bg-accent-amber text-black px-6 py-3 rounded-lg font-medium hover:opacity-90">
                            <a href="https://github.com/B-6219">Github</a>
                        </button>
                        <button className="border border-accent-amber text-accent-amber px-6 py-3 rounded-lg hover:bg-neon hover:text-black transition">
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="relative">
                    <img
                        src={me}
                        alt="Brian Kamau"
                        className="h-52 w-52 md:h-64 md:w-64 rounded-full object-cover border-4 border-accent-amber shadow-lg"
                    />
                    <span className="absolute inset-0 rounded-full ring-4 ring-accent-amber/20 animate-pulse" />
                </div>

            </div>

            <Stats />
        </section>
    )
}

export default Home
