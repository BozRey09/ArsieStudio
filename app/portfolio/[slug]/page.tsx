"use client";

import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";
import { projects } from "@/data/projects";
import Lightbox from "@/components/Lightbox";

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const project = projects.find((item) => item.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return <div className="py-32 text-center">Proyek tidak ditemukan.</div>;
  }

  const gallery = project.gallery || [];

  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="
        inline-flex
        items-center
        gap-2
        mb-10
        text-amber-500
        font-semibold
        hover:text-amber-600
        "
        >
          ← Kembali ke Portofolio
        </Link>

        {/* Hero Image */}
        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-10 left-10 text-white">
            <p className="uppercase tracking-[4px] text-sm text-amber-400">
              Arsie Studio Project
            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-3">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-white/90">{project.location}</p>
          </div>
        </div>

        {/* Info Card */}
        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">Lokasi</p>
            <p className="font-bold mt-2">{project.location}</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">Tipe</p>
            <p className="font-bold mt-2">{project.type}</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">Status</p>
            <p className="font-bold mt-2">{project.status}</p>
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">Luas</p>
            <p className="font-bold mt-2">{project.area}</p>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mt-16">
          <h2 className="text-3xl font-bold mb-6">Deskripsi Proyek</h2>

          <p className="text-gray-700 leading-8 text-lg">
            {project.description}
          </p>

          <a
            href={`https://wa.me/6281222016506?text=Halo%20Arsie%20Studio,%20saya%20tertarik%20dengan%20proyek%20${project.title}`}
            target="_blank"
            className="
          inline-block
          mt-10
          bg-amber-500
          text-white
          px-8
          py-4
          rounded-2xl
          font-semibold
          hover:bg-amber-600
          transition
          "
          >
            Konsultasikan Proyek Serupa
          </a>
        </div>

        {/* Gallery */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Galeri Proyek</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(index);
                }}
                className="
        relative
        h-[350px]
        rounded-3xl
        overflow-hidden
        shadow-lg
        group
        cursor-pointer
        "
              >
                <Image
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  fill
                  className="
          object-cover
          transition
          duration-500
          group-hover:scale-110
          "
                />
                <div
                  className="
  absolute
  inset-0
  bg-black/0
  group-hover:bg-black/20
  transition
  duration-500
  "
                />
              </div>
            ))}
          </div>
        </div>
        {selectedImage && (
          <Lightbox
            image={selectedImage}
            current={currentIndex}
            total={gallery.length}
            onClose={() => setSelectedImage(null)}
            onPrev={() => {
              const prev =
                currentIndex === 0
                  ? (project.gallery?.length || 0) - 1
                  : currentIndex - 1;

              setCurrentIndex(prev);
              setSelectedImage(gallery[prev] || null);
            }}
            onNext={() => {
              const next =
                currentIndex === (project.gallery?.length || 0) - 1
                  ? 0
                  : currentIndex + 1;

              setCurrentIndex(next);
              setSelectedImage(gallery[next] || null);
            }}
          />
        )}
      </section>
    </main>
  );
}
