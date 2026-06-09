"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-white/90
      backdrop-blur-md
      border-b
      border-slate-200
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Arsie Studio" width={55} height={55} />

            <div>
              <h2 className="font-bold text-lg text-slate-900">Arsie Studio</h2>

              <p className="hidden sm:block text-xs text-slate-500">
                Desain Arsitektur Masjid
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#tentang"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-amber-500 transition"
            >
              Tentang
            </a>

            <a
              href="#portfolio"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-amber-500 transition"
            >
              Portofolio
            </a>

            <a
              href="#layanan"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-amber-500 transition"
            >
              Layanan
            </a>

            <a
              href="#kontak"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-amber-500 transition"
            >
              Kontak
            </a>

            <a
              href="https://wa.me/6281222016506"
              target="_blank"
              onClick={() => setMenuOpen(false)}
              className="
  bg-amber-500
  text-white
  text-center
  py-3
  rounded-xl
  font-semibold
  "
            >
              Konsultasi Gratis
            </a>
          </nav>

          {/* Mobile Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
    md:hidden
    overflow-hidden
    transition-all
    duration-300
    ${menuOpen ? "max-h-96 pb-6" : "max-h-0"}
  `}
        >
          <div className="md:hidden pb-6">
            <div
              className="
  flex
  flex-col
  gap-5
  bg-white
  rounded-2xl
  p-5
  shadow-lg
  mt-2
  "
            >
              <a
                href="#tentang"
                onClick={() => setMenuOpen(false)}
                className="text-slate-700"
              >
                Tentang
              </a>

              <a
                href="#portfolio"
                onClick={() => setMenuOpen(false)}
                className="text-slate-700"
              >
                Portofolio
              </a>

              <a
                href="#layanan"
                onClick={() => setMenuOpen(false)}
                className="text-slate-700"
              >
                Layanan
              </a>

              <a
                href="#kontak"
                onClick={() => setMenuOpen(false)}
                className="text-slate-700"
              >
                Kontak
              </a>

              <a
                href="https://wa.me/6281222016506"
                target="_blank"
                className="
                bg-amber-500
                text-white
                text-center
                py-3
                rounded-xl
                font-semibold
                "
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
