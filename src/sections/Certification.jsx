// src/sections/Certification.jsx
import React from "react";
import { Award } from "lucide-react"; // icon sertifikat

export default function Certification({ lang }) {
    const certificates = [
        {
            title: lang === "ID" ? "Sertifikat Web Development" : "Web Development Certificate",
            desc: lang === "ID"
                ? "Diberikan oleh Dicoding Indonesia, mencakup HTML, CSS, dan JavaScript."
                : "Issued by Dicoding Indonesia, covering HTML, CSS, and JavaScript."
        },
        {
            title: lang === "ID" ? "Sertifikat React.js" : "React.js Certificate",
            desc: lang === "ID"
                ? "Diberikan oleh Udemy setelah menyelesaikan kursus React tingkat lanjut."
                : "Issued by Udemy after completing an advanced React course."
        },
        {
            title: lang === "ID" ? "Sertifikat Back-End Development" : "Back-End Development Certificate",
            desc: lang === "ID"
                ? "Diterbitkan oleh FreeCodeCamp, mencakup Node.js dan API."
                : "Issued by FreeCodeCamp, covering Node.js and API."
        },
        {
            title: lang === "ID" ? "Sertifikat UI/UX Design" : "UI/UX Design Certificate",
            desc: lang === "ID"
                ? "Diterbitkan oleh Coursera, fokus pada prinsip desain dan prototyping."
                : "Issued by Coursera, focusing on design principles and prototyping."
        }
    ];

    return (
        <section className="flex flex-col justify-center px-8 sm:px-12 md:px-28 lg:px-48 py-5 md:py-10 text-gray-300 font-mono">
            {/* JUDUL */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-bright-blue mb-2">
                {lang === "ID" ? "Sertifikasi" : "Certifications"}
            </h2>

            {/* GARIS */}
            <div className="w-20 lg:w-32 h-1 bg-bright-blue mb-6"></div>

            {/* LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-bright-blue transition duration-300"
                    >
                        {/* JUDUL */}
                        <div className="flex items-center gap-3 mb-2">
                            <Award className="text-bright-blue w-6 h-6" />
                            <h3 className="text-base lg:text-lg font-semibold text-white">{cert.title}</h3>
                        </div>
                        {/* DESKRIPSI */}
                        <p className="text-xs lg:text-sm text-gray-400">{cert.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
