// src/sections/Projects.jsx
import React, { useState } from "react";
import { X, Github, Link, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects({ lang }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);

    // Warna untuk status & sale
    const statusColors = {
        Completed: "bg-green-600",
        "On Progress": "bg-yellow-600",
    };

    const saleColors = {
        Sale: "bg-blue-600",
        "Not Sale": "bg-red-600",
    };

    const projects = [
        {
            title: "Portfolio Website",
            status: "Completed",
            sale: "Not Sale",
            image: "/projects/portfolio1.jpg",
            images: [
                "/projects/portfolio1.jpg",
                "/projects/portfolio2.jpg",
                "/projects/portfolio3.jpg",
            ],
            skills: ["React", "Tailwind CSS", "Lucide React"],
            description:
                "Website portfolio pribadi yang menampilkan informasi, skill, project, dan kontak.",
            github: "https://github.com/username/portfolio",
            link: "#",
        },
        {
            title: "E-Commerce App",
            status: "On Progress",
            sale: "Sale",
            image: "/jerry.png",
            images: ["/jerry.png", "/projects/ecom2.jpg", "/projects/ecom3.jpg"],
            skills: ["Laravel", "MySQL", "Bootstrap"],
            description:
                "Aplikasi e-commerce lengkap dengan fitur keranjang, pembayaran, dan manajemen produk.",
            github: "https://github.com/username/ecommerce",
            link: "https://myecommerce.com",
        },
        {
            title: "Blog Platform",
            status: "Completed",
            sale: "Sale",
            image: "/projects/blog1.jpg",
            images: ["/projects/blog1.jpg", "/projects/blog2.jpg"],
            skills: ["Node.js", "Express", "MongoDB"],
            description:
                "Platform blog dengan fitur posting, komentar, dan kategori.",
            github: "https://github.com/username/blog",
            link: "https://myblog.com",
        },
    ];

    const openProject = (project) => {
        setSelectedProject(project);
        setCurrentImage(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentImage((prev) =>
            prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className="flex flex-col justify-center px-8 md:px-48 py-10 text-gray-300 font-mono">
            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-light text-bright-blue mb-2">
                {lang === "ID" ? "Proyek" : "Projects"}
            </h2>
            <div className="w-20 h-1 bg-bright-blue mb-6"></div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => openProject(project)}
                        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-[1.02] transition-transform cursor-pointer relative"
                    >
                        {/* STATUS BADGE */}
                        <div className="absolute flex gap-2 p-2 z-20">
                            <span
                                className={`px-2 py-1 text-xs rounded ${statusColors[project.status]}`}
                            >
                                {project.status}
                            </span>
                            <span
                                className={`px-2 py-1 text-xs rounded ${saleColors[project.sale]}`}
                            >
                                {project.sale}
                            </span>
                        </div>

                        {/* IMAGE */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* CONTENT */}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 text-xs bg-gray-700 rounded"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-gray-900 rounded-lg max-w-3xl w-full relative p-6">
                        {/* CLOSE */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white z-50"
                        >
                            <X size={24} />
                        </button>

                        {/* CAROUSEL */}
                        <div className="relative">
                            <img
                                src={selectedProject.images[currentImage]}
                                alt="project"
                                className="w-full h-64 object-cover rounded"
                            />
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full z-30"
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full z-30"
                            >
                                <ChevronRight />
                            </button>
                        </div>

                        {/* DESC */}
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
                            <p className="mb-4">{selectedProject.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {selectedProject.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 text-xs bg-gray-700 rounded"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* BUTTONS */}
                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
                                >
                                    <Github size={18} /> Github
                                </a>
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-bright-blue rounded hover:bg-blue-500"
                                >
                                    <Link size={18} /> {lang === "ID" ? "Lihat" : "View"}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
