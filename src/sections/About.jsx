import React from 'react';

export default function About({ lang }) {
    return (
        <section className="flex flex-col justify-center px-8 sm:px-12 md:px-28 lg:px-48 py-5 md:py-10 text-gray-300 font-mono">
            {/* JUDUL */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-bright-blue mb-2">
                {lang === 'ID' ? 'Tentang Saya' : 'About Me'}
            </h2>

            {/* GARIS */}
            <div className="w-20 lg:w-32 h-1 bg-bright-blue mb-6"></div>

            {/* ISI */}
            <div className="text-xs sm:text-sm lg:text-base w-full space-y-4">
                <p>
                    {lang === 'ID'
                        ? 'Saya adalah seorang pengembang web yang bersemangat membangun aplikasi interaktif dan ramah pengguna. Dengan latar belakang yang kuat di teknologi front-end dan back-end, saya berusaha menciptakan solusi yang efisien, dapat diskalakan, dan menarik secara visual.'
                        : 'I am a passionate web developer who loves building interactive and user-friendly applications. With a strong background in both front-end and back-end technologies, I strive to create solutions that are efficient, scalable, and visually appealing.'}
                </p>
                <p>
                    {lang === 'ID'
                        ? 'Di luar dunia pemrograman, saya senang menjelajahi tren desain baru, mempelajari alat-alat terbaru, dan berkolaborasi dengan orang-orang kreatif. Tujuan saya adalah terus mengembangkan keterampilan dan berkontribusi pada proyek-proyek yang memberi dampak positif.'
                        : 'Outside of coding, I enjoy exploring new design trends, learning cutting-edge tools, and collaborating with creative minds. My goal is to continually improve my skills and contribute to projects that make a positive impact.'}
                </p>
            </div>
        </section>
    );
}
//test
