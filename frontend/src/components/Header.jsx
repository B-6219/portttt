

import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // Hamburger icons

const Header = () => {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "ABOUT ME", path: "/about" },
        { name: "SKILLS", path: "/skills" },
        { name: "PROJECTS", path: "/project" },
        { name: "CONTACTS", path: "/contact" },
    ]

    return (
        <header className="bg-dark-surface sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div
                        className="cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => navigate('/')}
                    >
                        <h1 className="text-amber-400 text-3xl font-bold">
                            Brian <span className="text-green-500">Kamau</span>
                        </h1>
                    </div>

                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex gap-8 font-medium text-accent-amber">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className="hover:text-neon transition-colors duration-300"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </ul>

                    {/* CTA Button for desktop */}
                    <button className="hidden md:block text-black bg-accent-amber hover:bg-neon px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                        <a href="https://github.com/B-6219">Github</a>
                    </button>

                    {/* Mobile menu icon */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-accent-amber">
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-dark-surface px-6 pb-4">
                    <ul className="flex flex-col gap-4 font-medium text-accent-amber">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setMenuOpen(false)} // close menu on click
                                className="hover:text-neon transition-colors duration-300"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header
