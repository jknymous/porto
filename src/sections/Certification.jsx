// src/sections/Certification.jsx
import React from "react";
import { Award } from "lucide-react"; // icon sertifikat

export default function Certification({ lang }) {
    const certificates = [
        {
            title: lang === "ID" ? "Certificate Project Management Associate (Logical Operation) — 2021" : "Certificate Project Management Associate (Logical Operation) — 2021",
        },
        {
            title: lang === "ID" ? "BC400 - ABAP Workbench (Edugate) — 2021" : "BC400 - ABAP Workbench (Edugate) — 2021",
        },
        {
            title: lang === "ID" ? "Agile Scrum Fundamentals (Quint Wellington Redwood) — 2022" : "Agile Scrum Fundamentals (Quint Wellington Redwood) — 2022",
        },
        {
            title: lang === "ID" ? "Adobe Certified Professional (ACP) — 2023" : "Adobe Certified Professional (ACP) — 2023",
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
                        className="flex flex-col bg-gray-800 rounded-xl p-5 hover:scale-[1.02] transition-transform"
                    >
                        {/* JUDUL */}
                        <div className="flex items-center gap-3">
                            <Award className="text-bright-blue w-6 h-6" />
                            <h3 className="text-base lg:text-lg font-semibold text-white">{cert.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
