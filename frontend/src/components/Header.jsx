import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className="bg-dark-surface">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16 text-sm">

                    {/* Logo */}
                    <div className="cursor-pointer" onClick={() => navigate('/')}>
                        <h1 className="text-amber-400 text-3xl">Brian <span className="text-green-500">Kamau</span></h1>
                    </div>

                    {/* Nav links */}
                    <ul className="hidden md:flex gap-6 font-medium">
                        <NavLink className="text-accent-amber hover:text-neon" to="/">HOME</NavLink>
                        <NavLink className="text-accent-amber hover:text-neon" to="/about">ABOUT ME</NavLink>
                        <NavLink className="text-accent-amber hover:text-neon" to="/project">PROJECTS</NavLink>
                        <NavLink className="text-accent-amber hover:text-neon" to="/contact">CONTACTS</NavLink>
                    </ul>

                    {/* CTA */}
                    <button className="text-black bg-accent-amber hover:bg-neon px-5 py-2 border rounded-lg"> Hire Me</button>

                </div>
            </div>
        </header>
    )
}

export default Header
