// src/sections/Experience.jsx
import React from "react";

export default function Experience({ lang }) {
    const experiences = [
        {
            position: lang === "ID" ? "Full Stack Developer" : "Full Stack Developer",
            company: "Tech Company",
            year: "2022 - Sekarang",
            description:
                lang === "ID"
                    ? "Mengembangkan aplikasi web dengan teknologi modern seperti React, Laravel, dan Node.js."
                    : "Developing web applications with modern technologies like React, Laravel, and Node.js.",
        },
        {
            position: lang === "ID" ? "Frontend Developer" : "Frontend Developer",
            company: "Creative Agency",
            year: "2020 - 2022",
            description:
                lang === "ID"
                    ? "Membangun antarmuka pengguna yang responsif dan menarik menggunakan Tailwind CSS dan Bootstrap."
                    : "Built responsive and engaging user interfaces using Tailwind CSS and Bootstrap.",
        },
        {
            position: lang === "ID" ? "Intern Web Developer" : "Intern Web Developer",
            company: "Startup XYZ",
            year: "2019 - 2020",
            description:
                lang === "ID"
                    ? "Membantu tim dalam membuat fitur dan memperbaiki bug pada aplikasi internal."
                    : "Assisted the team in building features and fixing bugs for internal applications.",
        },
    ];

    return (
        <section className="flex flex-col justify-center px-8 md:px-48 py-10 text-gray-300 font-mono">
            {/* JUDUL */}
            <h2 className="text-3xl md:text-4xl font-light text-bright-blue mb-2">
                {lang === "ID" ? "Pengalaman Kerja" : "Work Experience"}
            </h2>
            {/* GARIS */}
            <div className="w-20 h-1 bg-bright-blue mb-6"></div>

            {/* ISI */}
            <div className="space-y-6">
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="bg-gray-800 p-5 rounded-lg shadow-md hover:scale-[1.02] transition-transform"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                            <h3 className="text-xl font-semibold">{exp.position}</h3>
                            <span className="text-sm text-gray-400">{exp.year}</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-1">{exp.company}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
