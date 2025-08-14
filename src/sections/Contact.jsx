// src/sections/Contact.jsx
import React from "react";
import { Github, Instagram, Mail } from "lucide-react";

export default function Contact({ lang }) {
    const contacts = [
        {
            name: "Instagram",
            icon: <Instagram size={24} />,
            link: "https://instagram.com/jknymous",
        },
        {
            name: "GitHub",
            icon: <Github size={24} />,
            link: "https://github.com/jknymous",
        },
        {
            name: "Email",
            icon: <Mail size={24} />,
            link: "mailto:khujerry02@gmail.com",
        },
    ];

    return (
        <section className="flex flex-col justify-center px-8 sm:px-12 md:px-28 lg:px-48 py-5 md:py-10 text-gray-300 font-mono">
            {/* TITLE + GARIS */}
            <div className="flex flex-col items-start sd:items-center text-left sd:text-center">
                <div className="inline-flex flex-col items-start">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-bright-blue mb-2">
                        {lang === "ID" ? "Kontak" : "Contact"}
                    </h2>
                    <div className="w-20 lg:w-32 h-1 bg-bright-blue mb-6"></div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-wrap justify-center gap-6 mt-2">
                {contacts.map((contact, i) => (
                    <a
                        key={i}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm sd:text-base bg-gray-800 rounded hover:bg-gray-700 transition"
                    >
                        {contact.icon}
                        <span>{contact.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
