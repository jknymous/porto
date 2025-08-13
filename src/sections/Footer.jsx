// src/components/Footer.jsx
import React from "react";

export default function Footer({ lang }) {
    return (
        <footer className="bg-gray-900 text-gray-400 text-sm py-4 mt-10">
            <div className="container mx-auto text-center">
                &copy; {new Date().getFullYear()} Jerry Khu.{" "}
                {lang === "ID"
                    ? "Semua hak dilindungi."
                    : "All rights reserved."}
            </div>
        </footer>
    );
}
