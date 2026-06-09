export default function Testimonial() {
  const testimonials = [
    {
      name: "DKM Masjid Al-Hikmah",
      city: "Bandung",
      text: "Arsie Studio membantu kami dari konsep hingga visualisasi 3D. Hasil desain sangat memuaskan dan sesuai kebutuhan jamaah.",
    },
    {
      name: "Yayasan Pendidikan Islam",
      city: "Bogor",
      text: "Komunikasi sangat baik dan desain yang diberikan memiliki identitas islami yang kuat namun tetap modern.",
    },
    {
      name: "Panitia Pembangunan Masjid",
      city: "Yogyakarta",
      text: "Gambar kerja sangat detail sehingga memudahkan proses pembangunan di lapangan.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Apa Kata Klien Kami
          </h2>

          <p className="text-gray-600 mt-4">
            Kepercayaan klien adalah prioritas utama kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
              bg-slate-50
              rounded-3xl
              p-8
              shadow-sm
              hover:shadow-lg
              transition
              "
            >
              <div className="text-amber-500 text-3xl mb-4">★★★★★</div>

              <p className="text-gray-700 leading-7">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-slate-900">{item.name}</h3>

                <p className="text-gray-500 text-sm">{item.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
