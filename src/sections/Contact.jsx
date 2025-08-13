// src/sections/Contact.jsx
import React from "react";
import { Github, Instagram, Mail } from "lucide-react";

export default function Contact({ lang }) {
    const contacts = [
        {
            name: "Instagram",
            icon: <Instagram size={24} />,
            link: "https://instagram.com/username", // Ganti username IG lo
        },
        {
            name: "GitHub",
            icon: <Github size={24} />,
            link: "https://github.com/username", // Ganti username GitHub lo
        },
        {
            name: "Email",
            icon: <Mail size={24} />,
            link: "mailto:email@example.com", // Ganti email lo
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center px-8 md:px-48 py-10 text-gray-300 font-mono text-center">
            {/* TITLE + GARIS */}
            <div className="flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-light text-bright-blue mb-2">
                    {lang === "ID" ? "Kontak Saya" : "Contact Me"}
                </h2>
                {/* Garis hanya sepanjang teks judul */}
                <div className="h-1 bg-bright-blue w-20 self-start"></div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col sm:flex-row gap-6 items-center mt-6">
                {contacts.map((contact, i) => (
                    <a
                        key={i}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition"
                    >
                        {contact.icon}
                        <span>{contact.name}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
