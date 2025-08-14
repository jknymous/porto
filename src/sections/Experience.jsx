// src/sections/Experience.jsx
import React from "react";

export default function Experience({ lang }) {
    const experiences = [
        {
            position: lang === "ID" ? "Full Stack Web Developer" : "Full Stack Web Developer",
            company: "Freelancer",
            year: "2021 - Sekarang",
            description:
                lang === "ID"
                    ? "Mengembangkan sistem website sesuai dengan yang klien mau"
                    : "Developing website systems according to the client’s requirements.",
        },
    ];

    return (
        <section className="flex flex-col justify-center px-8 sm:px-12 md:px-28 lg:px-48 py-5 md:py-10 text-gray-300 font-mono">
            {/* JUDUL */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-bright-blue mb-2">
                {lang === "ID" ? "Pengalaman Kerja" : "Work Experience"}
            </h2>
            {/* GARIS */}
            <div className="w-20 lg:w-32 h-1 bg-bright-blue mb-6"></div>

            {/* ISI */}
            <div className="space-y-6">
                {experiences.map((exp, i) => (
                    <div
                        key={i}
                        className="bg-gray-800 p-5 rounded-lg shadow-md hover:scale-[1.02] transition-transform"
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                            <h3 className="text-lg lg:text-xl font-semibold">{exp.position}</h3>
                            <span className="text-xs lg:text-sm text-gray-400">{exp.year}</span>
                        </div>
                        <p className="text-xs lg:text-sm text-gray-400 mb-1">{exp.company}</p>
                        <p className="text-sm lg:text-base">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
