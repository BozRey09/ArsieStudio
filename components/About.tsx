export default function About() {
  return (
    <section id="tentang" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Tentang Arsie Studio</h2>

          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Arsie Studio adalah studio desain arsitektur yang berfokus pada
              perancangan masjid, menghadirkan ruang ibadah yang nyaman,
              fungsional, dan memiliki nilai estetika serta spiritual yang kuat.
            </p>

            <p className="mt-6 text-gray-600">
              Kami membantu pengurus masjid, yayasan, dan komunitas dalam
              mewujudkan desain masjid yang modern, berkarakter, dan sesuai
              kebutuhan jamaah.
            </p>
          </div>

          <div className="space-y-6">
            <div
              className="
p-6
rounded-xl
shadow-md
border-l-4
border-amber-500
bg-white
hover:shadow-xl
transition-all
duration-300
"
            >
              <h3 className="font-semibold text-xl">Fokus Desain Masjid</h3>

              <p className="text-gray-600 mt-2">
                Spesialisasi pada perancangan masjid modern dan fungsional.
              </p>
            </div>

            <div
              className="
p-6
rounded-xl
shadow-md
border-l-4
border-amber-500
bg-white
hover:shadow-xl
transition-all
duration-300
"
            >
              <h3 className="font-semibold text-xl">
                Visualisasi 3D Profesional
              </h3>

              <p className="text-gray-600 mt-2">
                Membantu presentasi kepada panitia dan donatur.
              </p>
            </div>

            <div
              className="
p-6
rounded-xl
shadow-md
border-l-4
border-amber-500
bg-white
hover:shadow-xl
transition-all
duration-300
"
            >
              <h3 className="font-semibold text-xl">Pendampingan Desain</h3>

              <p className="text-gray-600 mt-2">
                Dari konsep awal hingga finalisasi desain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
