import React from "react"
import { NavLink } from "react-router-dom"
//import { GitBranch, Link, Mail } from "lucide"
//import { Github, Linkedin, Mail } from 'lucide'

import Github from "lucide-react/dist/esm/icons/github"
import Linkedin from "lucide-react/dist/esm/icons/linkedin"
import Mail from "lucide-react/dist/esm/icons/mail"


const Footer = () => {
    return (
        <section className="bg-dark-surface border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Top section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold text-text-primary">
                            Brian <span className="text-accent-amber">Kamau</span>
                        </h2>
                        <p className="text-text-muted text-sm mt-1">
                            Full-Stack • Mobile • Cybersecurity
                        </p>
                    </div>

                    {/* Navigation */}
                    <ul className="flex gap-6 text-sm text-text-muted">
                        <li><NavLink className="hover:text-accent-amber" to="/">Home</NavLink></li>
                        <li><NavLink className="hover:text-accent-amber" to="/about">About</NavLink></li>
                        <li><NavLink className="hover:text-accent-amber" to="/project">Projects</NavLink></li>
                        <li><NavLink className="hover:text-accent-amber" to="/contact">Contact</NavLink></li>
                    </ul>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="p-2 rounded-full border border-white/10 text-text-muted hover:text-accent-amber hover:border-accent-amber transition"
                        >
                            <Github size={18} />
                        </a>

                        <a
                            href="#"
                            className="p-2 rounded-full border border-white/10 text-text-muted hover:text-accent-amber hover:border-accent-amber transition"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-full border border-white/10 text-text-muted hover:text-accent-amber hover:border-accent-amber transition"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                </div>

                {/* Bottom section */}
                <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-text-muted">
                    © {new Date().getFullYear()} Brian Kamau. All rights reserved.
                </div>

            </div>
        </section>
    )
}

export default Footer
