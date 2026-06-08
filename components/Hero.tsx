export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      text-center
      overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        className="
        absolute
        inset-0
        bg-cover
        bg-center
        "
        style={{
          backgroundImage: "url('/images/hero-masjid.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        className="
        relative
        z-10
        max-w-5xl
        mx-auto
        px-6
        text-white
        "
      >
        {/* Badge */}
        <div
          className="
          inline-flex
          items-center
          px-4
          py-2
          rounded-full
          bg-white/10
          border
          border-white/20
          backdrop-blur-sm
          mb-8
          "
        >
          <span className="text-sm tracking-wider uppercase">
            Arsie Studio • Spesialis Desain Masjid
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
          text-5xl
          md:text-7xl
          font-bold
          leading-tight
          "
        >
          Desain Masjid
          <br />
          Yang Menginspirasi
        </h1>

        {/* Description */}
        <p
          className="
          mt-8
          text-lg
          md:text-xl
          text-gray-200
          max-w-3xl
          mx-auto
          "
        >
          Menghadirkan ruang ibadah yang nyaman, fungsional, dan memiliki nilai
          estetika serta spiritual yang kuat melalui desain arsitektur masjid
          modern.
        </p>

        {/* Buttons */}
        <div
          className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          gap-4
          "
        >
          <a
            href="#portfolio"
            className="
            bg-amber-500
            hover:bg-amber-600
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            transition
            "
          >
            Lihat Portofolio
          </a>

          <a
            href="https://wa.me/6281222016506"
            target="_blank"
            className="
            border
            border-white
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:bg-white
            hover:text-black
            transition
            "
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* Statistik */}
        <div
          className="
          mt-20
          grid
          grid-cols-3
          gap-8
          max-w-2xl
          mx-auto
          "
        >
          <div>
            <h3 className="text-4xl font-bold text-amber-400">25+</h3>

            <p className="text-gray-300 mt-2">Konsep Masjid</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-amber-400">100%</h3>

            <p className="text-gray-300 mt-2">Fokus Masjid</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-amber-400">3D</h3>

            <p className="text-gray-300 mt-2">Visualisasi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
