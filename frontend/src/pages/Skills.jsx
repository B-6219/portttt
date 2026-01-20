import React from "react";
import css from "../assets/css.jpg";
import express from "../assets/express.jpg";
import github from "../assets/github.jpg";
import js from "../assets/js.jpg";
import html from "../assets/html.jpg";
import mongodb from "../assets/mongodb.jpg";
import react from "../assets/react.jpg";
import tailwind from "../assets/tailwind.jpg";
import python from "../assets/python.jpg";
import node from "../assets/node.jpg";

const skills = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: js },
    { name: "React", img: react },
    { name: "Node.js", img: node },
    { name: "Express", img: express },
    { name: "MongoDB", img: mongodb },
    { name: "Python", img: python },
    { name: "Tailwind", img: tailwind },
    { name: "GitHub", img: github },
];

const Skills = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 mb-24">

            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-gray-400 uppercase tracking-widest text-sm">
                    My <span className="text-accent-amber font-semibold">Skills</span>
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-off-white mt-2">
                    Technologies I Work With
                </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group bg-dark-bg border border-gray-700 rounded-xl
                                   p-6 flex flex-col items-center justify-center
                                   hover:border-accent-amber transition-all duration-300"
                    >
                        <img
                            src={skill.img}
                            alt={skill.name}
                            className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <p className="mt-4 text-sm text-gray-400 group-hover:text-accent-amber">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Skills;
