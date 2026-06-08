import {
  Building2,
  PencilRuler,
  DraftingCompass,
  RefreshCcw,
  Landmark,
} from "lucide-react";

const services = [
  {
    title: "Desain Arsitektur Masjid",
    description:
      "Perancangan masjid yang estetis, fungsional, dan nyaman untuk jamaah.",
    icon: Building2,
  },
  {
    title: "Visualisasi 3D Rendering",
    description:
      "Visualisasi realistis untuk presentasi kepada panitia dan donatur.",
    icon: PencilRuler,
  },
  {
    title: "Gambar Kerja Konstruksi",
    description:
      "Dokumen teknis lengkap sebagai acuan pelaksanaan pembangunan.",
    icon: DraftingCompass,
  },
  {
    title: "Renovasi Masjid",
    description: "Pengembangan dan pembaruan desain masjid yang sudah ada.",
    icon: RefreshCcw,
  },
  {
    title: "Masterplan Kawasan Islami",
    description:
      "Perencanaan kawasan terpadu yang mendukung aktivitas keislaman.",
    icon: Landmark,
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Layanan Kami</h2>

          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4" />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Solusi desain arsitektur masjid yang profesional, mulai dari konsep
            hingga visualisasi dan gambar kerja.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                group
                bg-white
                p-8
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                hover:-translate-y-2
                "
              >
                <div
                  className="
                  w-16
                  h-16
                  rounded-xl
                  bg-amber-100
                  flex
                  items-center
                  justify-center
                  mb-6
                  group-hover:bg-amber-500
                  transition-all
                  duration-300
                  "
                >
                  <Icon
                    size={32}
                    className="
                    text-amber-500
                    group-hover:text-white
                    transition-all
                    duration-300
                    "
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
