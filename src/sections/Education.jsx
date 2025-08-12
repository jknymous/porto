// src/sections/Education.jsx
import React from "react";

export default function Education({ lang }) {
    const timeline = [
        {
            year: "2019 - 2022",
            title: lang === "ID" ? "SMA Negeri 03" : "Senior High School 03",
            desc: lang === "ID"
                ? "Fokus pada bidang sains dan komputer, serta aktif dalam organisasi sekolah."
                : "Focused on science and computer studies, actively involved in school organizations."
        },
        {
            year: "2022 - Sekarang",
            title: lang === "ID" ? "Universitas Teknologi" : "University of Technology",
            desc: lang === "ID"
                ? "Sedang menempuh pendidikan tinggi di bidang Teknik Informatika."
                : "Currently pursuing higher education in Computer Science."
        }
    ];

    return (
        <section className="flex flex-col justify-center px-8 md:px-48 py-10 text-gray-300 font-mono">
            {/* JUDUL */}
            <h2 className="text-3xl md:text-4xl font-light text-bright-blue mb-2">
                {lang === 'ID' ? 'Pendidikan' : 'Education'}
            </h2>

            {/* GARIS */}
            <div className="w-20 h-1 bg-bright-blue mb-10"></div>

            {/* TIMELINE */}
            <div className="relative border-l border-bright-blue">
                {timeline.map((item, index) => (
                    <div key={index} className="mb-10 ml-6">
                        {/* BULLET */}
                        <div className="absolute w-4 h-4 bg-bright-blue rounded-full -left-2.5"></div>

                        {/* ISI */}
                        <h3 className="text-lg font-semibold">{item.year}</h3>
                        <h4 className="text-base font-medium text-white">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
