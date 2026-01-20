


import React from "react";
import about from "../assets/about.jpeg";

const About = () => {
    return (
        <section className="max-w-6xl mx-auto px-6">

            {/* Header */}
            <div className="text-center mb-14 pt-16">
                <p className="text-gray-400 uppercase tracking-widest text-sm">
                    About <span className="text-accent-amber font-semibold">Me</span>
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-off-white mt-3">
                    Turning Ideas Into Scalable Digital Solutions
                </h2>
            </div>

            {/* About Content */}
            <div className="flex flex-col md:flex-row gap-18 items-center">

                {/* Image */}
                <div className="relative">
                    <img
                        className="w-72 h-80 object-cover rounded-2xl border-4 border-neon shadow"
                        src={about}
                        alt="About Brian"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-4 ring-accent-amber/20 animate-pulse" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-5 text-gray-400 text-[15px] leading-relaxed max-w-xl">
                    <p>
                        I’m <span className="text-accent-amber font-medium">Brian Kamau</span>,
                        a passionate Full-Stack Developer and Cybersecurity Engineer with a strong
                        focus on building secure, scalable, and user-friendly applications.
                    </p>

                    <p>
                        I specialize in modern web and mobile technologies, combining clean UI
                        design with robust backend systems. My approach blends performance,
                        security, and maintainability to deliver real-world solutions that scale.
                    </p>

                    <p>
                        Beyond development, I enjoy solving complex problems, learning emerging
                        technologies, and working on impactful projects in AI, fintech, and security.
                    </p>
                </div>
            </div>

            {/* Why Choose Me */}
            <div className="mt-20 mb-6 text-center">
                <p className="text-xl text-off-white">
                    WHY <span className="font-semibold text-accent-amber">CHOOSE ME</span>
                </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">

                <div className="border border-gray-700 rounded-2xl px-8 py-10 flex flex-col gap-4
                                text-gray-400 hover:bg-primary hover:text-accent-amber
                                transition-all duration-300 cursor-pointer">
                    <h3 className="text-lg font-semibold">Clean & Scalable Code</h3>
                    <p className="text-sm">
                        I write maintainable, scalable code using best practices that make future updates easy.
                    </p>
                </div>

                <div className="border border-gray-700 rounded-2xl px-8 py-10 flex flex-col gap-4
                                text-gray-400 hover:bg-primary hover:text-accent-amber
                                transition-all duration-300 cursor-pointer">
                    <h3 className="text-lg font-semibold">Security-First Mindset</h3>
                    <p className="text-sm">
                        Every application is built with security in mind — from authentication to data protection.
                    </p>
                </div>

                <div className="border border-gray-700 rounded-2xl px-8 py-10 flex flex-col gap-4
                                text-gray-400 hover:bg-primary hover:text-accent-amber
                                transition-all duration-300 cursor-pointer">
                    <h3 className="text-lg font-semibold">Reliable & Communicative</h3>
                    <p className="text-sm">
                        I value clear communication, timely delivery, and long-term collaboration.
                    </p>
                </div>

            </div>

        </section>
    );
};

export default About;
