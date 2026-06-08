import Image from "next/image";
import { Phone, Mail, MapPin, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Arsie Studio"
                width={70}
                height={70}
              />

              <div>
                <h3 className="text-2xl font-bold">Arsie Studio</h3>

                <p className="text-slate-400">Desain Arsitektur Masjid</p>
              </div>
            </div>

            <p className="mt-6 text-slate-400 leading-relaxed max-w-xl">
              Arsie Studio adalah studio desain arsitektur yang berfokus pada
              perancangan masjid, menghadirkan ruang ibadah yang nyaman,
              fungsional, modern, dan memiliki nilai estetika serta spiritual
              yang kuat.
            </p>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>

            <ul className="space-y-4 text-slate-400">
              <li>Desain Arsitektur Masjid</li>

              <li>Visualisasi 3D Rendering</li>

              <li>Gambar Kerja Konstruksi</li>

              <li>Renovasi Masjid</li>

              <li>Masterplan Kawasan Islami</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hubungi Kami</h4>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-amber-500 mt-1" />

                <div>
                  <p className="text-slate-400">WhatsApp</p>

                  <a
                    href="https://wa.me/6281222016506"
                    target="_blank"
                    className="hover:text-amber-400 transition"
                  >
                    0812 2458 5472
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-amber-500 mt-1" />

                <div>
                  <p className="text-slate-400">Email</p>

                  <a
                    href="mailto:arsiestudio@gmail.com"
                    className="hover:text-amber-400 transition"
                  >
                    arsiestudio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Camera size={18} className="text-amber-500 mt-1" />

                <div>
                  <p className="text-slate-400">Instagram</p>

                  <a
                    href="https://instagram.com/arsiestudio"
                    target="_blank"
                    className="hover:text-amber-400 transition"
                  >
                    @arsiestudio
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 mt-1" />

                <div>
                  <p className="text-slate-400">Fokus Layanan</p>

                  <p>Seluruh Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 Arsie Studio. All Rights Reserved.
            </p>

            <p className="text-slate-500 text-sm">
              Spesialis Desain Arsitektur Masjid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
