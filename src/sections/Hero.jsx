import React from 'react';
import { ReactTyped } from 'react-typed';
import profile from '../assets/jerry.png';

export default function Hero({ lang, setLang }) {
    const professions = lang === 'ID'
        ? ['Full Stack Web Developer', 'UI/UX Designer', 'Agile Scrum Practitioner']
        : ['Full Stack Web Developer', 'UI/UX Designer', 'Agile Scrum Practitioner'];

    return (
        <section className="flex flex-col md:flex-row items-start justify-center px-6 md:px-12 py-10 font-mono">
            {/* FOTO */}
            <img
                src={profile}
                alt="Profile"
                className="w-48 h-48 rounded-xl border-2 border-bright-blue shadow-[0_0_50px_rgba(59,130,246,0.6)]
                mb-6 md:mb-0 md:mr-8 transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_0_50px_rgba(59,130,246,0.9)] cursor-pointer"
            />

            {/* TEKS */}
            <div className="flex flex-col justify-center items-start gap-2 h-48">
                {/* TOGGLE BAHASA */}
                <div className="flex gap-2">
                    <button
                        className={`px-3 py-1 rounded ${lang === 'ID' ? 'bg-bright-blue text-white' : 'bg-gray-800'}`}
                        onClick={() => setLang('ID')}
                    >
                        ID
                    </button>
                    <button
                        className={`px-3 py-1 rounded ${lang === 'EN' ? 'bg-bright-blue text-white' : 'bg-gray-800'}`}
                        onClick={() => setLang('EN')}
                    >
                        EN
                    </button>
                </div>

                {/* NAMA */}
                <h1 className="text-3xl md:text-5xl font-mono text-bright-blue font-medium">
                    JKNymous (Jerry)
                </h1>

                {/* PROFESI TYPING */}
                <ReactTyped
                    strings={professions}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                    className="text-xl md:text-2xl text-gray-text"
                />
            </div>
        </section>
    );
}
