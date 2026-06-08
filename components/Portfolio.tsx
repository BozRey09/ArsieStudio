import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    slug: "masjid-modern-tropis",
    title: "Masjid Modern Tropis",
    location: "Bandung",
    image: "/portfolio/1.png",
  },
  {
    slug: "masjid-kontemporer",
    title: "Masjid Kontemporer",
    location: "Jakarta",
    image: "/portfolio/2.png",
  },
  {
    slug: "islamic-center-modern",
    title: "Islamic Center Modern",
    location: "Bogor",
    image: "/portfolio/3.png",
  },
  {
    slug: "islamic-center-modern",
    title: "Masjid Kampus",
    location: "Yogyakarta",
    image: "/portfolio/4.png",
  },
  {
    slug: "islamic-center-modern",
    title: "Masjid Minimalis",
    location: "Bekasi",
    image: "/portfolio/5.png",
  },
  {
    slug: "islamic-center-modern",
    title: "Masjid Kawasan Perumahan",
    location: "Depok",
    image: "/portfolio/6.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Portofolio</h2>

          <p className="mt-4 text-gray-600">
            Beberapa konsep desain masjid yang telah kami kembangkan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="
group
bg-white
rounded-2xl
overflow-hidden
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="
    h-64
    w-full
    object-cover
    transition
    duration-500
    group-hover:scale-110
  "
              />

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-2">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
