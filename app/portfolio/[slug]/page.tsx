import Image from "next/image";
import { projects } from "@/data/projects";
import Link from "next/link";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <div className="py-32 text-center">Proyek tidak ditemukan.</div>;
  }

  return (
    <main className="min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="
  inline-block
  mb-8
  text-amber-500
  font-semibold
  hover:text-amber-600
  "
        >
          ← Kembali ke Portofolio
        </Link>
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>

        <p className="text-gray-500 mb-10">{project.location}</p>

        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            <div className="bg-slate-50 p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Lokasi</p>

              <p className="font-semibold">{project.location}</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Tipe</p>

              <p className="font-semibold">{project.type}</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Status</p>

              <p className="font-semibold">{project.status}</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl">
              <p className="text-gray-500 text-sm">Luas</p>

              <p className="font-semibold">{project.area}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Deskripsi Proyek</h2>

          <p className="text-gray-700 leading-relaxed">{project.description}</p>
          <a
            href="https://wa.me/6281222016506"
            target="_blank"
            className="
  inline-block
  mt-8
  bg-amber-500
  text-white
  px-8
  py-4
  rounded-xl
  font-semibold
  hover:bg-amber-600
  transition
  "
          >
            Konsultasikan Proyek Serupa
          </a>
        </div>
      </section>
    </main>
  );
}
