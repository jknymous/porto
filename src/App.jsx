import React, { useState } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Certification from './sections/Certification';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Experience from './sections/Experience';

export default function App() {
  const [lang, setLang] = useState('ID');

  return (
    <div className="bg-[#0d1117] min-h-screen text-gray-300">
      <Hero lang={lang} setLang={setLang} />
      <About lang={lang} />
      <Education lang={lang} />
      <Experience lang={lang} />
      <Certification lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
