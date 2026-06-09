export default function Stats() {
  const stats = [
    {
      number: "50+",
      title: "Proyek",
    },
    {
      number: "12+",
      title: "Kota",
    },
    {
      number: "100%",
      title: "Custom Design",
    },
    {
      number: "7+",
      title: "Tahun Pengalaman",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.title}
              className="
              bg-white
              rounded-3xl
              p-8
              text-center
              shadow-sm
              "
            >
              <h3 className="text-4xl font-bold text-amber-500">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
