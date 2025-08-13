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
        <section className="flex flex-col justify-center px-8 sm:px-12 md:px-28 lg:px-48 py-5 md:py-10 text-gray-300 font-mono">
            {/* JUDUL */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-bright-blue mb-2">
                {lang === 'ID' ? 'Pendidikan' : 'Education'}
            </h2>

            {/* GARIS */}
            <div className="w-20 lg:w-32 h-1 bg-bright-blue mb-6"></div>

            {/* TIMELINE */}
            <div className="relative border-l border-bright-blue">
                {timeline.map((item, index) => (
                    <div key={index} className="mb-10 ml-6">
                        {/* BULLET */}
                        <div className="absolute w-4 h-4 bg-bright-blue rounded-full -left-2.5"></div>

                        {/* ISI */}
                        <h3 className="text-base lg:text-lg font-semibold">{item.year}</h3>
                        <h4 className="text-sm lg:text-base font-medium text-white">{item.title}</h4>
                        <p className="text-xs lg:text-sm text-gray-400">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
