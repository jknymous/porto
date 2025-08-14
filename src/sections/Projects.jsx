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
            title: "The Ledger of Group",
            status: "Completed",
            sale: "Sale",
            image: "/Hutang/loginn.png",
            images: [
                "/Hutang/loginn.png",
                "/Hutang/db.png",
                "/Hutang/dbdk.png",
                "/Hutang/index.png",
                "/Hutang/indexd.png",
            ],
            skills: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
            description:
                "This application was created to solve financial tracking issues commonly found in WhatsApp groups. Often, when hanging out or dining with friends, one person pays for everyone, and the rest owe their share. Traditionally, these debts are recorded manually, but since most guys and Gen Z rarely carry physical notebooks anymore, this system was built as a web-based solution for easier and more modern access. The app features two main tabs: Debt and Payment, both seamlessly integrated with a two- way netting system.This means that if the same person appears in both records, the system will automatically offset the debt in real - time. The platform includes separate interfaces for admin and public users, and supports both dark mode and light mode for a more comfortable user experience.",
            github: "https://github.com/jknymous",
            link: "https://lynk.id/jknymous/yx9d5vyo0y0w",
        },
        {
            title: "Prakerin System",
            status: "Completed",
            sale: "Not Sale",
            image: "/Prakerin/login.png",
            images: [
                "/Prakerin/login.png",
                "/Prakerin/db_admin.png",
                "/Prakerin/abs_admin.png",
                "/Prakerin/lpr_admin.png",
                "/Prakerin/gr_admin.png",
                "/Prakerin/sw_admin.png",
                "/Prakerin/mtr_admin.png",
                "/Prakerin/db_guru.png",
                "/Prakerin/abs_guru.png",
                "/Prakerin/lpr_guru.png",
                "/Prakerin/sw_guru.png",
                "/Prakerin/mtr_guru.png",
                "/Prakerin/db_siswa.png",
                "/Prakerin/abs_siswa.png",
                "/Prakerin/lpr_siswa.png",
            ],
            skills: ["TailwindCSS", "Laravel", "Maps API", "MySQL"],
            description:
                "This project was developed during my internship as a digital solution to support the reporting and supervision process of Industrial Work Practice (Prakerin) at the school. The system is web-based, enabling users to access it anytime and anywhere. It features three user roles with tailored access. 1)Admin can manages teacher and student accounts, industry partners, attendance schedules, and report evaluations. 2)Teacher can supervises assigned students, creates and manages attendance schedules, and evaluates student reports. 3)Student can submits real- time attendance(with active location tracking), uploads internship reports, and views their status and scores. I built this system using Laravel for the backend framework, Tailwind CSS for a modern and responsive UI, and integrated the Google Maps API for real - time location functionality in the attendance system. The goal of this project is to help schools digitize and streamline the internship program process, making it more efficient, transparent, and well - organized through technology.",
            github: "https://github.com/jknymous/prakerin_system",
            link: "#",
        },
        {
            title: "JKStore - Simple",
            status: "Completed",
            sale: "Sale",
            image: "/Gudang/login-page.png",
            images: [
                "/Gudang/login-page.png",
                "/Gudang/db-admin.png",
                "/Gudang/toko.png",
                "/Gudang/user.png",
                "/Gudang/db-user.png",
                "/Gudang/barang.png",
                "/Gudang/purchase.png",
                "/Gudang/stok-keluar.png",
                "/Gudang/profile.png",
            ],
            skills: ["TailwindCSS", "Laravel", "MySQL"],
            description:
                "Simple Warehouse System is a web-based application designed to streamline the management of incoming and outgoing inventory. Built with Laravel and TailwindCSS, it supports two main roles: Admin and Warehouse Staff. Admins have full access, including user and store management, while Warehouse Staff focus on managing items, purchases, and stock outflows. This system is ideal for small to medium-sized retail operations, offering a clean, modern interface and efficient workflow.",
            github: "https://github.com/jknymous",
            link: "https://lynk.id/jknymous/kz0j4egk6xn1",
        },
        {
            title: "AnambasInfo",
            status: "Completed",
            sale: "Not Sale",
            image: "/Anambas/login.png",
            images: [
                "/Anambas/login.png",
                "/Anambas/admin-dashboard.png",
                "/Anambas/admin-berita.png",
                "/Anambas/admin-iklan.png",
                "/Anambas/admin-transportasi.png",
                "/Anambas/admin-jadwal.png",
                "/Anambas/admin-emergency.png",
                "/Anambas/admin-donasi.png",
                "/Anambas/user-dashboard.png",
                "/Anambas/user-jadwal.png",
                "/Anambas/user-emergency.png",
                "/Anambas/user-donasi.png",
            ],
            skills: ["TailwindCSS", "React.js", "node.js", "Express.js", "MySQL"],
            description:
                "AnambasInfo is a web-based information system designed to make it easier for the community to access important updates about the Anambas Islands. The website provides clear and up-to-date information on both sea and air transportation, as well as the latest local news. Built with modern technologies such as React.js, Tailwind CSS, Node.js, Express.js, and MySQL, AnambasInfo serves as a fast, responsive, and easily accessible digital information hub for everyone in the region.",
            github: "https://github.com/jknymous",
            link: "#",
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
        <section className="flex flex-col justify-center px-8 sm:px-12 md:px-28 lg:px-48 py-5 md:py-10 text-gray-300 font-mono">
            {/* TITLE */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-bright-blue mb-2">
                {lang === "ID" ? "Proyek" : "Projects"}
            </h2>
            <div className="w-20 lg:w-32 h-1 bg-bright-blue mb-6"></div>

            {/* GRID */}
            <div className="grid grid-cols-1 sd:grid-cols-2 xl:grid-cols-3 gap-6">
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
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-6 sm:px-8">
                    <div className="bg-gray-900 rounded-lg max-w-3xl w-full relative p-4 max-h-[90vh] flex flex-col">
                        {/* CLOSE */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white z-50"
                        >
                            <X size={24} />
                        </button>

                        {/* CAROUSEL */}
                        <div className="relative flex-shrink-0">
                            <img
                                src={selectedProject.images[currentImage]}
                                alt="project"
                                className="object-cover rounded"
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
                        <div className="mt-4 overflow-y-auto pr-2 flex-1">
                            <h3 className="text-lg sd:text-xl font-semibold mb-2">{selectedProject.title}</h3>
                            <p className="text-sm sd:text-base mb-4">{selectedProject.description}</p>
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
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 text-sm sd:text-base"
                                >
                                    <Github size={18} /> Github
                                </a>
                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-bright-blue rounded hover:bg-blue-500 text-sm sd:text-base"
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
