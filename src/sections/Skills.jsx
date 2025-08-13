// src/sections/Skills.jsx
import React from "react";
import {
    Globe,
    Palette,
    Code,
    Database,
    Box,
    Layout,
    Layers,
    Cpu,
    GitBranch,
    Cloud,
    Brush,
} from "lucide-react";

export default function Skills({ lang }) {
    const skills = [
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Palette },
        { name: "JavaScript", icon: Code },
        { name: "Python", icon: Cpu },
        { name: "PHP", icon: Layers },
        { name: "Bootstrap", icon: Box },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Laravel", icon: Layout },
        { name: "React", icon: Code },
        { name: "Node.js", icon: Cloud },
        { name: "Express.js", icon: GitBranch },
        { name: "MySQL", icon: Database },
        { name: "Figma", icon: Brush },
    ];

    return (
        <section className="flex flex-col justify-center px-8 sm:px-12 md:px-28 lg:px-48 py-5 md:py-10 text-gray-300 font-mono">
            {/* JUDUL */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-bright-blue mb-2">
                {lang === "ID" ? "Keahlian Pemrograman" : "Programming Skills"}
            </h2>

            {/* GARIS */}
            <div className="w-20 lg:w-32 h-1 bg-bright-blue mb-6"></div>

            {/* FLEX LIST */}
            <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg hover:border-bright-blue transition-colors duration-300"
                        >
                            <Icon className="w-5 h-5 text-bright-blue" />
                            <span className="text-sm lg:text-base">{skill.name}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
