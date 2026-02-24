'use client';

import React from "react";
import { useTranslation } from '@/lib/useTranslation';

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects'); // pulls array from JSON

  return (
    <section className="pt-20 px-6 md:px-16 max-w-6xl mx-auto bg-white">
      {projects.map((project, idx) => (
        <div key={idx} className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black/90 mb-4">
            {project.title}
          </h2>
          <p className="text-black/80 mb-6">{project.description}</p>

          {/* Images Grid */}
          <div
            className={`grid gap-4 ${
              project.images.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2"
            }`}
          >
            {project.images.map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} image ${i + 1}`}
                  className="w-full h-125 object-cover transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}