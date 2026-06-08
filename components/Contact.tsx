"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    proyek: "",
    lokasi: "",
    luas: "",
    pesan: "",
  });

  const handleWhatsApp = () => {
    const message = `
Halo Arsie Studio,

Nama: ${form.nama}

WhatsApp: ${form.whatsapp}

Nama Proyek: ${form.proyek}

Lokasi: ${form.lokasi}

Luas Lahan: ${form.luas}

Pesan:
${form.pesan}
`;

    const url = `https://wa.me/6281222016506?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Konsultasi Proyek
          </h2>

          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4" />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Ceritakan kebutuhan desain masjid Anda dan tim Arsie Studio akan
            membantu memberikan solusi terbaik.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informasi */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Mari Diskusikan Proyek Anda
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Kami melayani konsultasi desain masjid, visualisasi 3D, gambar
              kerja konstruksi, renovasi, hingga masterplan kawasan islami.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="font-semibold">📱 WhatsApp</p>

                <p className="text-gray-600">081224585472</p>
              </div>

              <div>
                <p className="font-semibold">✉️ Email</p>

                <p className="text-gray-600">arsiestudio@gmail.com</p>
              </div>

              <div>
                <p className="font-semibold">📷 Instagram</p>

                <p className="text-gray-600">@arsiestudio</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-md">
            <form>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Nama Lengkap</label>

                <input
                  type="text"
                  value={form.nama}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      nama: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Nomor WhatsApp</label>

                <input
                  type="text"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      whatsapp: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">
                  Nama Masjid / Proyek
                </label>
                <input
                  type="text"
                  value={form.proyek}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      proyek: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Lokasi Proyek</label>

                <input
                  type="text"
                  value={form.lokasi}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      lokasi: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Luas Lahan</label>

                <input
                  type="text"
                  value={form.luas}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      luas: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                  placeholder="Contoh: 1000 m²"
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 font-medium">Pesan</label>

                <textarea
                  rows={4}
                  value={form.pesan}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      pesan: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-4 py-3"
                />
              </div>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="
    w-full
    bg-amber-500
    text-white
    py-4
    rounded-xl
    font-semibold
    hover:bg-amber-600
    transition
  "
              >
                Konsultasi via WhatsApp →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
