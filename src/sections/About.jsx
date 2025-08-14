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
                        ? 'Saya mengerjakan solusi digital dari awal hingga akhir. Mulai dari backend yang kokoh hingga frontend yang responsif, semuanya dengan desain yang berfokus kepada pengguna. Sebagai seorang Full Stack Developer sekaligus UI/UX Designer, saya menjadi penghubung antara aspek teknis dan pengalaman pengguna. Saya juga mengintegrasikan machine learning untuk membuat fitur lebih cerdas, mengotomatisasi proses, dan mempersonalisasi interaksi. Bagi saya, clean code, pengalaman pengguna yang mulus, dan keputusan berbasis data bukan sekadar tujuan tetapi sudah menjadi standar kerja.'
                        : 'I build end-to-end digital solutions—scaling from robust backend architectures to responsive frontend interfaces, with user-centric design at the core. As a Full Stack Developer and UI/UX Designer, I bridge the gap between engineering and experience. I also integrate machine learning models to drive smarter features, automate decisions, and personalize interactions. For me, clean code, seamless UX, and data-driven intelligence arent just goals—theyre the baseline.'}
                </p>
                <p>
                    {lang === 'ID'
                        ? 'Saat ini, saya memperluas wawasan dengan mengeksplorasi teknologi Web3 dan blockchain sebagai bagian dari perjalanan pembelajaran berkelanjutan. Dengan kombinasi keterampilan teknis, desain, dan analitis, saya berkomitmen untuk menciptakan solusi digital yang inovatif dan efektif.'
                        : 'Currently, I am expanding my knowledge by exploring Web3 and blockchain technologies as part of my continuous learning journey. With a combination of technical, design, and analytical skills, I am committed to creating innovative, effective, and impactful digital solutions.'}
                </p>
            </div>
        </section>
    );
}
//test
