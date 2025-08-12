// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-800 text-white rounded"
        >
            {darkMode ? '☀️' : '🌙'}
        </button>
    );
}
