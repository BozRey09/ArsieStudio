import Image from "next/image";

export default function Navbar() {
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
          <a href="#" className="flex items-center gap-4">
            <Image src="/logo.png" alt="Arsie Studio" width={55} height={55} />

            <div>
              <h2 className="font-bold text-xl text-slate-900">Arsie Studio</h2>

              <p className="text-sm text-slate-500">Desain Arsitektur Masjid</p>
            </div>
          </a>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#tentang"
              className="text-slate-700 hover:text-amber-500 transition"
            >
              Tentang
            </a>

            <a
              href="#portfolio"
              className="text-slate-700 hover:text-amber-500 transition"
            >
              Portofolio
            </a>

            <a
              href="#layanan"
              className="text-slate-700 hover:text-amber-500 transition"
            >
              Layanan
            </a>

            <a
              href="#kontak"
              className="text-slate-700 hover:text-amber-500 transition"
            >
              Kontak
            </a>

            <a
              href="https://wa.me/6281222016506"
              target="_blank"
              className="
              bg-amber-500
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-amber-600
              transition
              "
            >
              Konsultasi Gratis
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
